"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { supabase } from "@/app/lib/database/supabase";

type CertificateProps = { courseTitle: string; courseSlug: string };
type CertificateRecord = { certificate_number: string; issued_at: string };
type ProfileRecord = { first_name: string | null; last_name: string | null };

export default function Certificate({ courseTitle, courseSlug }: CertificateProps) {
  const [loading, setLoading] = useState(true);
  const [studentName, setStudentName] = useState("Academy Student");
  const [certificate, setCertificate] = useState<CertificateRecord | null>(null);

  useEffect(() => {
    let mounted = true;

    async function loadCertificate() {
      const { data: { session } } = await supabase.auth.getSession();
      const user = session?.user;
      if (!user) { if (mounted) setLoading(false); return; }

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

      if (mounted && certificateData && !certificateError) setCertificate(certificateData);
      if (mounted) setLoading(false);
    }

    loadCertificate();
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) loadCertificate();
    });

    return () => { mounted = false; subscription.unsubscribe(); };
  }, [courseSlug]);

  if (loading) {
    return <div className="rounded-3xl border border-green-900 bg-[#101B15] p-12 text-center text-white">Loading Certificate...</div>;
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
    year: "numeric", month: "long", day: "numeric",
  });

  return (
    <>
      <div
        id="scaleswiki-certificate"
        className="relative overflow-hidden rounded-[2rem] border-[10px] border-[#17472F] bg-[#F1E9D2] shadow-2xl"
      >
        <div className="absolute inset-0 opacity-[0.045]" style={{
          backgroundImage: "radial-gradient(circle at 20% 20%, #17472F 1px, transparent 1px), radial-gradient(circle at 80% 80%, #17472F 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }} />

        <div className="relative m-3 border-2 border-[#1F5C3C] bg-[#FBF7EA] px-6 py-8 text-[#153323] sm:m-5 sm:px-12 sm:py-12">
          <div className="pointer-events-none absolute inset-2 border border-[#B59A51]/70" />
          <div className="pointer-events-none absolute inset-4 border border-[#1F5C3C]/70" />

          <div className="absolute right-8 top-0 hidden w-52 -translate-y-1 bg-[#17472F] px-5 pb-7 pt-6 text-center text-[#F5EED7] shadow-xl lg:block" style={{ clipPath: "polygon(0 0,100% 0,100% 86%,50% 100%,0 86%)" }}>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D7C27A]">Certificate ID</p>
            <p className="mt-2 break-all font-mono text-xs">{certificate.certificate_number}</p>
            <div className="mx-auto my-4 h-px w-20 bg-[#D7C27A]/70" />
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#D7C27A]">Date Issued</p>
            <p className="mt-2 font-serif text-sm">{issuedDate}</p>
          </div>

          <div className="relative mx-auto max-w-5xl text-center">
            <div className="mx-auto flex justify-center pt-2">
              <Image src="/logo/scaleswiki-logo.svg" alt="ScalesWiki" width={260} height={110} priority className="h-20 w-auto sm:h-24" />
            </div>

            <div className="mx-auto mt-6 flex max-w-3xl items-center gap-4">
              <div className="h-px flex-1 bg-[#2B6546]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#2B6546]">ScalesWiki Academy</p>
              <div className="h-px flex-1 bg-[#2B6546]" />
            </div>

            <h1 className="mt-8 font-serif text-5xl font-medium uppercase tracking-[0.12em] text-[#18452E] sm:text-6xl lg:text-7xl">
              Certificate
            </h1>
            <div className="mt-1 flex items-center justify-center gap-4 text-[#2B6546]">
              <span className="h-px w-20 bg-[#2B6546]" />
              <span className="font-serif text-xl uppercase tracking-[0.3em] sm:text-2xl">of Completion</span>
              <span className="h-px w-20 bg-[#2B6546]" />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#5D6B62]">This certifies that</p>
            <h2 className="mt-4 font-serif text-4xl italic text-[#17472F] sm:text-5xl lg:text-6xl">{studentName}</h2>
            <div className="mx-auto mt-5 h-px max-w-xl bg-[#B59A51]" />

            <p className="mt-6 font-serif text-lg text-[#46554C] sm:text-xl">has successfully completed all requirements for the course</p>
            <h3 className="mt-3 text-3xl font-bold text-[#17472F] sm:text-4xl">{courseTitle}</h3>
            <p className="mt-3 font-serif text-base text-[#46554C] sm:text-lg">and is hereby awarded this certificate of completion.</p>

            <div className="mt-12 grid items-end gap-8 lg:grid-cols-3">
              <div className="text-left lg:text-center">
                <p className="font-serif text-2xl italic text-[#17472F]">ScalesWiki Team</p>
                <div className="mt-1 h-px w-full bg-[#B59A51]" />
                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#647168]">ScalesWiki Education Team</p>
              </div>

              <div className="flex justify-center">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#B59A51] bg-[#17472F] shadow-lg sm:h-32 sm:w-32">
                  <div className="absolute inset-2 rounded-full border border-[#E6D7A4]" />
                  <div className="relative text-center text-[#F8F1D9]">
                    <div className="text-[10px] font-bold uppercase tracking-[0.22em]">ScalesWiki</div>
                    <div className="mx-auto my-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#F8F1D9] text-xl font-black text-[#17472F]">SW</div>
                    <div className="text-[9px] uppercase tracking-[0.18em]">Education</div>
                  </div>
                </div>
              </div>

              <div className="lg:text-center">
                <p className="font-serif text-xl text-[#17472F]">Evidence-Informed</p>
                <p className="font-serif text-xl text-[#17472F]">Reptile Education</p>
                <div className="mx-auto mt-3 h-px w-28 bg-[#B59A51]" />
              </div>
            </div>

            <div className="mt-10 rounded-sm bg-[#17472F] px-5 py-2 text-center text-xs font-semibold uppercase tracking-[0.35em] text-[#F8F1D9] sm:text-sm">
              Learn • Care • Grow
            </div>

            <div className="mt-5 grid gap-3 text-xs text-[#69756E] lg:hidden sm:grid-cols-2">
              <p><span className="font-semibold uppercase tracking-[0.12em]">Certificate ID:</span> {certificate.certificate_number}</p>
              <p><span className="font-semibold uppercase tracking-[0.12em]">Date Issued:</span> {issuedDate}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-4 print:hidden">
        <Link href={`/academy/${courseSlug}`} className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500">← Back to Course</Link>
        <button onClick={() => window.print()} className="rounded-xl border border-green-700 px-6 py-3 text-white hover:bg-green-900">Print Certificate</button>
      </div>

      <style jsx global>{`
        @media print {
          @page { size: landscape; margin: 0.35in; }
          body { background: white !important; }
          header, footer, nav { display: none !important; }
          #scaleswiki-certificate { box-shadow: none !important; margin: 0 !important; break-inside: avoid; }
        }
      `}</style>
    </>
  );
}
