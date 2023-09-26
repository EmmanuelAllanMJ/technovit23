"use client"
import { useEffect, useState } from "react";

export interface Sponsor {
  name: string;
  link: string;
}

interface ISponsorJSONResponse {
  data: {
    sponsorCollection: {
      items: Sponsor[];
    };
  };
}

const useSponsors = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const query = `
    query {
      sponsorCollection {
        items {
          name
          link
        }
      }
    }
  `;
  useEffect(() => {
    const fetchSponsors = async () => {
      const res = await fetch(
        "https://graphql.contentful.com/content/v1/spaces/YOUR_SPACE_ID/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer YOUR_ACCESS_TOKEN`,
          },
          body: JSON.stringify({ query }),
        }
      );
      const data: ISponsorJSONResponse = await res.json();
      setSponsors(data.data.sponsorCollection.items);
    };
    fetchSponsors();
  }, []);

  return sponsors;
};

export default useSponsors;

