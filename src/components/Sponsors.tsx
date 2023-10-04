"use client"
import { useEffect, useState } from 'react';
import type { Sponsor } from '@/hooks/getSponsors';
import Image from 'next/image';
import useSponsors from '@/hooks/getSponsors';

const ImageComponent = (props: Sponsor): JSX.Element => {
  return (
    <div>
      <img src={props.link} alt={props.name} className="lg:w-52 md:w-52 w-32 bg-white p-1"/>
    </div>
  );
};

const Sponsors = (): JSX.Element => {
  const sponsor_hook = useSponsors();
  const [sponsorsByTitle, setSponsorsByTitle] = useState<{ [title: string]: Sponsor[] }>({});

  useEffect(() => {
    // Group sponsors by title
    const groupedSponsors: { [title: string]: Sponsor[] } = {};
    sponsor_hook.forEach((sponsor) => {
      if (!groupedSponsors[sponsor.title]) {
        groupedSponsors[sponsor.title] = [];
      }
      groupedSponsors[sponsor.title].push(sponsor);
    });

    // Sort sponsors by the number of elements in increasing order
    const sortedSponsors = Object.keys(groupedSponsors).sort((a, b) => {
      const countA = groupedSponsors[a].length;
      const countB = groupedSponsors[b].length;
      return countA - countB;
    });

    const sortedSponsorObject: { [title: string]: Sponsor[] } = {};
    sortedSponsors.forEach((title) => {
      sortedSponsorObject[title] = groupedSponsors[title];
    });

    setSponsorsByTitle(sortedSponsorObject);
  }, [sponsor_hook]);
  return (
    <section className="py-32 sm:py-40 w-full text-center" id="sponsors">

      <section className="text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white">
        Sponsors
      </section>

      <section className="w-100 ">

        <div className="bg-red-900 mx-auto w-full"></div>
        {Object.keys(sponsorsByTitle).map((title) => (

          <div className="mx-auto " key={title}>

            <h2 className="font-monty text-white text-xl mb-4 mt-8 capitalize">{title} {title==="title" ? "Sponsor":"Sponsors"}</h2>

            <div className="flex md:gap-12 lg:gap-12 gap-6 flex-row flex-wrap mx-auto justify-center w-full place-items-center">
              {sponsorsByTitle[title].map((sponsor, index) => (
                <ImageComponent key={index} {...sponsor} />
              ))}
            </div>

          </div>
        ))}
      </section>
    </section>
  );
};

export default Sponsors;

