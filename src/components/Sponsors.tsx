"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import useSponsors from '@/hooks/getSponsors'

type Sponsor = {
  name: string;
  imagelink: string;
};

const ImageComponent = (props: Sponsor): JSX.Element => {
  return (
    <div>
      <Image
        src={props.imagelink}
        alt={props.name}
        width={200}
        height={200}
      />
    </div>
  );
};

const Sponsors = (): JSX.Element => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);

  useEffect(() => {
    async function fetchSponsors() {
      try {
        const sponsorData = await useSponsors(); 
        setSponsors(sponsorData);
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      }
    }

    fetchSponsors();
  }, []);

  return (
    <section className="py-32 sm:py-40" id="sponsors">
      <section className="md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white">
        Sponsors
      </section>
      <section className="grid md:grid-cols-4 md:px-6 sm:grid-cols-1 lg:grid-cols-4 lg:px-32 items-center place-items-center place-content-center gap-4">
        <div className="absolute shadow-purple-700 opacity-30 md:opacity-10 sm:opacity-5 w-1/3 h-400 shadow-[0_0_20em_20em]"></div>
        {sponsors.map((sponsor, index) => (
          <ImageComponent key={index} {...sponsor} />
        ))}
      </section>
    </section>
  );
};

export default Sponsors;

