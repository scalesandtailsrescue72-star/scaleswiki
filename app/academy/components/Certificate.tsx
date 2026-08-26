"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { supabase } from "@/app/lib/database/supabase";

type CertificateProps = {
  courseTitle: string;
  courseSlug: string;
};

type CertificateRecord = {
  certificate_number: string;
  issued_at: string;
};

type ProfileRecord = {
  first_name: string | null;
  last_name: string | null;
};

export default function Certificate({ courseTitle, courseSlug }: CertificateProps) {
  const [loading, setLoading] = useState(true);
  const [studentName, setStudentName] = useState("Academy Student");
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadCertificate() {
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;

      if (!user) {
        if (mounted) setLoading(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("first_name, last_name")
        .eq("email", user.email)
        .maybeSingle<ProfileRecord>();

      if (mounted) {
        const fullName = [profile?.first_name, profile?.last_name].filter(Boolean).join(" ");
        setStudentName(fullName || user.email || "Academy Student");
      }

      const { data: certificateData, error: certificateError } = await supabase
        .from("certificates")
        .select("certificate_number, issued_at")
        .eq("user_id", user.id)
        .eq("course_slug", courseSlug)
        .maybeSingle<CertificateRecord>();

      if (mounted && certificateData && !certificateError) {
        setCertificate(certificateData);
      }

      if (mounted) setLoading(false);
    }

    loadCertificate();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) loadCertificate();
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [courseSlug]);

  if (loading) {
    return (
      <div className="rounded-3xl border border-green-900 bg-[#101B15] p-12 text-center text-white">
        Loading Certificate...
      </div>
    );
  }

  if (!certificate) {
    return (
      <div className="rounded-3xl border border-red-900 bg-[#101B15] p-12 text-center text-white">
        <h2 className="text-3xl font-bold text-red-400">Certificate Not Found</h2>
        <p className="mt-4 text-gray-300">Complete and pass the Final Certification Exam before viewing your certificate.</p>
      </div>
    );
  }

  const issuedDate = new Date(certificate.issued_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <div id="scaleswiki-certificate" className="relative overflow-hidden rounded-[2rem] border border-[#5FAF72]/40 bg-[#F3EEDC] p-4 shadow-2xl sm:p-7">
        <div className="relative border-2 border-[#1E5A3B] bg-[#F8F4E8] px-6 py-10 text-[#13261B] sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-3 border border-[#C7B879]/70" />

          <div className="relative text-center">
            <div className="mx-auto flex justify-center">
              <Image
                src="/logo/scaleswiki-logo.svg"
                alt="ScalesWiki"
                width={250}
                height={100}
                priority
                className="h-20 w-auto sm:h-24"
              />
            </div>

            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#2D6B49] sm:text-sm">
              ScalesWiki Academy
            </p>

            <div className="mx-auto mt-5 h-px max-w-xl bg-gradient-to-r from-transparent via-[#C7B879] to-transparent" />

            <h1 className="mt-8 font-serif text-4xl font-semibold tracking-tight text-[#173D29] sm:text-6xl">
              Certificate of Completion
            </h1>

            <p className="mt-8 text-base uppercase tracking-[0.18em] text-[#5C6C62] sm:text-lg">
              This certifies that
            </p>

            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#0E2B1D] sm:text-5xl">
              {studentName}
            </h2>

            <div className="mx-auto mt-5 h-px max-w-md bg-[#C7B879]" />

            <p className="mt-8 text-base text-[#5C6C62] sm:text-lg">has successfully completed</p>

            <h3 className="mt-3 text-3xl font-bold text-[#2D6B49] sm:text-4xl">
              {courseTitle}
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#526158] sm:text-base">
              Awarded upon completion of the ScalesWiki Academy course requirements and successful passage of the final course examination.
            </p>

            <div className="mx-auto mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#C9C2A5] bg-white/45 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C786F]">Date Earned</p>
                <p className="mt-2 font-serif text-xl font-semibold text-[#173D29]">{issuedDate}</p>
              </div>

              <div className="rounded-2xl border border-[#C9C2A5] bg-white/45 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C786F]">Certificate ID</p>
                <p className="mt-2 break-all font-mono text-sm font-semibold text-[#173D29] sm:text-base">{certificate.certificate_number}</p>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-4">
              <div className="h-px w-20 bg-[#C7B879] sm:w-32" />
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#C7B879] bg-[#173D29] text-xl font-bold text-[#F3EEDC] shadow-md">
                SW
              </div>
              <div className="h-px w-20 bg-[#C7B879] sm:w-32" />
            </div>

            <p className="mt-5 text-xs font-medium uppercase tracking-[0.22em] text-[#6C786F]">
              Evidence-Informed Reptile Education
            </p>
            <p className="mt-2 text-xs text-[#7A857D]">scaleswiki.org</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 print:hidden">
        <Link href={`/academy/${courseSlug}`} className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500">
          ← Back to Course
        </Link>
        <button onClick={() => window.print()} className="rounded-xl border border-green-700 px-6 py-3 text-white hover:bg-green-900">
          Print Certificate
        </button>
      </div>

      <style jsx global>{`
        @media print {
          body { background: white !important; }
          header, footer, nav { display: none !important; }
          #scaleswiki-certificate {
            box-shadow: none !important;
            border: none !important;
            margin: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
