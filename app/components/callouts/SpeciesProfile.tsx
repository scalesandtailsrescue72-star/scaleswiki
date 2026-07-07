interface SpeciesProfileProps {
  commonName: string;
  scientificName: string;
  family: string;
  nativeRange: string;
  lifespan: string;
  averageLength: string;
  iucn: string;
}

export default function SpeciesProfile({
  commonName,
  scientificName,
  family,
  nativeRange,
  lifespan,
  averageLength,
  iucn,
}: SpeciesProfileProps) {
  return (
    <section className="mt-12 rounded-2xl border border-[#2ECC71]/30 bg-[#10351E] p-8">

      <h2 className="text-2xl font-bold text-[#2ECC71]">
        Species Profile
      </h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        <div>
          <h3 className="font-semibold">Common Name</h3>
          <p className="text-gray-300">{commonName}</p>
        </div>

        <div>
          <h3 className="font-semibold">Scientific Name</h3>
          <p className="italic text-gray-300">{scientificName}</p>
        </div>

        <div>
          <h3 className="font-semibold">Family</h3>
          <p className="text-gray-300">{family}</p>
        </div>

        <div>
          <h3 className="font-semibold">Native Range</h3>
          <p className="text-gray-300">{nativeRange}</p>
        </div>

        <div>
          <h3 className="font-semibold">Average Length</h3>
          <p className="text-gray-300">{averageLength}</p>
        </div>

        <div>
          <h3 className="font-semibold">Typical Lifespan</h3>
          <p className="text-gray-300">{lifespan}</p>
        </div>

        <div>
          <h3 className="font-semibold">IUCN Status</h3>
          <p className="text-gray-300">{iucn}</p>
        </div>

      </div>

    </section>
  );
}