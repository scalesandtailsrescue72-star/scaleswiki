"use client";

import { useEffect, useState } from "react";
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


export default function Certificate({
  courseTitle,
  courseSlug,
}: CertificateProps) {

  const [loading, setLoading] = useState(true);

  const [studentName, setStudentName] =
    useState("Academy Student");

  const [certificate, setCertificate] =
    useState<CertificateRecord | null>(null);


  useEffect(() => {

    let mounted = true;


    async function loadCertificate() {

      const {
        data: {
          session,
        },
      } = await supabase.auth.getSession();


      const user = session?.user;


      console.log(
        "SESSION:",
        session
      );


      console.log(
        "AUTH USER:",
        user
      );



      if (!user) {

        if (mounted) {

          setLoading(false);

        }

        return;

      }



      // Find profile using email
      const {
        data: profile,
        error: profileError,
      } = await supabase

        .from("profiles")

        .select(
          "first_name, last_name"
        )

        .eq(
          "email",
          user.email
        )

        .maybeSingle();



      console.log(
        "PROFILE:",
        profile
      );


      console.log(
        "PROFILE ERROR:",
        profileError
      );



      if (profile) {

        const fullName = [

          profile.first_name,

          profile.last_name,

        ]

          .filter(Boolean)

          .join(" ");



        if (fullName) {

          setStudentName(fullName);

        }

      } else {

        setStudentName(
          user.email ?? "Academy Student"
        );

      }



      // Load certificate
      const {
        data: certificateData,
        error: certificateError,
      } = await supabase

        .from("certificates")

        .select(
          "certificate_number, issued_at"
        )

        .eq(
          "user_id",
          user.id
        )

        .eq(
          "course_slug",
          courseSlug
        )

        .maybeSingle();



      console.log(
        "CERTIFICATE:",
        certificateData
      );


      console.log(
        "CERTIFICATE ERROR:",
        certificateError
      );



      if (
        mounted &&
        certificateData &&
        !certificateError
      ) {

        setCertificate(
          certificateData
        );

      }


      if (mounted) {

        setLoading(false);

      }

    }



    loadCertificate();



    const {
      data: {
        subscription,
      },
    } = supabase.auth.onAuthStateChange(
      (_event, session) => {

        console.log(
          "AUTH STATE CHANGE:",
          session?.user
        );

        if (session?.user) {

          loadCertificate();

        }

      }
    );



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

        <h2 className="text-3xl font-bold text-red-400">

          Certificate Not Found

        </h2>


        <p className="mt-4 text-gray-300">

          Complete and pass the Final Certification Exam before viewing your certificate.

        </p>


      </div>

    );

  }



  const issuedDate =
    new Date(
      certificate.issued_at
    ).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );



  return (

    <>

      <div className="rounded-3xl border-4 border-yellow-600 bg-[#101B15] p-12 shadow-2xl">

        <div className="text-center">


          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">

            ScalesWiki Academy

          </p>



          <h1 className="mt-6 text-5xl font-extrabold text-yellow-300">

            Certificate of Completion

          </h1>



          <p className="mt-12 text-xl text-gray-300">

            This certifies that

          </p>



          <h2 className="mt-4 text-4xl font-bold text-white">

            {studentName}

          </h2>



          <p className="mt-10 text-xl text-gray-300">

            has successfully completed

          </p>



          <h3 className="mt-4 text-4xl font-bold text-green-300">

            {courseTitle}

          </h3>



          <p className="mt-10 text-lg text-gray-300">

            by successfully passing the Final Certification Examination.

          </p>



          <div className="mt-16 grid gap-8 md:grid-cols-2">


            <div className="rounded-xl border border-green-900 bg-[#0c1812] p-6">

              <p className="text-sm uppercase text-gray-400">

                Date Earned

              </p>


              <p className="mt-3 text-2xl font-semibold">

                {issuedDate}

              </p>

            </div>



            <div className="rounded-xl border border-green-900 bg-[#0c1812] p-6">

              <p className="text-sm uppercase text-gray-400">

                Certificate ID

              </p>


              <p className="mt-3 text-xl font-semibold break-all">

                {certificate.certificate_number}

              </p>

            </div>


          </div>



          <div className="mt-16 flex justify-center">

            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-yellow-500 bg-yellow-950 text-6xl shadow-lg">

              🏆

            </div>

          </div>


        </div>

      </div>



      <div className="mt-10 flex flex-wrap gap-4">


        <Link
          href={`/academy/${courseSlug}`}
          className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-500"
        >

          ← Back to Course

        </Link>



        <button
          onClick={() => window.print()}
          className="rounded-xl border border-green-700 px-6 py-3 text-white hover:bg-green-900"
        >

          🖨️ Print Certificate

        </button>


      </div>

    </>

  );


}