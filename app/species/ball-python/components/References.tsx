import { SectionHeading } from "@/app/components/ui/SectionHeading";
import { VetReviewBadge } from "@/app/components/ui/VetReviewBadge";

export function References() {
  return (
    <section
      id="references"
      className="mx-auto max-w-5xl px-6 py-24 lg:px-8"
    >
      <SectionHeading
        eyebrow="References"
        title="Sources and Further Reading"
        description="ScalesWiki guides are developed using veterinary references, published husbandry resources, and peer-reviewed literature. This guide is intended as an educational resource and should not replace advice from a qualified reptile veterinarian."
      />

      <div className="mt-16 rounded-3xl border border-white/10 bg-[#101B15] p-10">

        <h3 className="text-2xl font-bold text-white">
          Books
        </h3>

        <ul className="mt-6 space-y-4 text-gray-300 leading-8">

          <li>
            Barker DG, Barker TM.
            <em> Ball Pythons: The History, Natural History, Care and Breeding.</em>
          </li>

          <li>
            Divers SJ, Mader DR.
            <em> Current Therapy in Reptile Medicine and Surgery.</em>
          </li>

          <li>
            Mader DR.
            <em> Reptile Medicine and Surgery.</em>
          </li>

        </ul>

        <h3 className="mt-12 text-2xl font-bold text-white">
          Veterinary Organizations
        </h3>

        <ul className="mt-6 space-y-4 text-gray-300 leading-8">

          <li>
            Association of Reptile and Amphibian Veterinarians (ARAV)
          </li>

          <li>
            British Veterinary Zoological Society (BVZS)
          </li>

          <li>
            American Veterinary Medical Association (AVMA)
          </li>

        </ul>

        <h3 className="mt-12 text-2xl font-bold text-white">
          Scientific Literature
        </h3>

        <ul className="mt-6 space-y-4 text-gray-300 leading-8">

          <li>
            Peer-reviewed publications relating to reptile medicine,
            welfare, nutrition, behavior, and captive husbandry.
          </li>

        </ul>

        <h3 className="mt-12 text-2xl font-bold text-white">
          ScalesWiki Editorial Policy
        </h3>

        <p className="mt-6 text-gray-300 leading-8">
          Every ScalesWiki guide is reviewed for factual accuracy,
          updated as husbandry recommendations evolve, and clearly
          identifies content that is awaiting veterinary review.
        </p>

      </div>

      <div className="mt-16">

        <VetReviewBadge
          status="pending"
          version="1.0"
        />

      </div>

    </section>
  );
}