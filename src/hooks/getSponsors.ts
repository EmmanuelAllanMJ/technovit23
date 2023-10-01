
import { useEffect, useState } from "react";

export interface Sponsor {
  name: string;
  link: string;
  title: string;
}

interface ISponsorJSONResponse {
  data: {
    sponsorContentCollection: {
      items: Sponsor[];
    };
  };
}

const useSponsors = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const query = `
    query {
      sponsorContentCollection(){
        items {
          name
          link
          title
        }
      }
    }
  `;
  useEffect(() => {
    const fetchSponsors = async () => {
      const res = await fetch(
        "https://graphql.contentful.com/content/v1/spaces/fh8dptt5f1p3/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer PfIiyQLVPV1qip8E8fz_fjEQKt1VClDImjAg2eCwo64`,
          },
          body: JSON.stringify({ query }),
        }
      );
      const data: ISponsorJSONResponse = await res.json();
      setSponsors(data.data.sponsorContentCollection.items);
    };
    fetchSponsors();
  }, []);

  return sponsors;
};

export default useSponsors;

