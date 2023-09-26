import { useEffect, useState } from "react";

export interface Sponsor {
  name: string;
  imagelink: string;
}

interface IJSONResponse {
  data: {
    sponsorsCollection: {
      items: Sponsor[];
    };
  };
}

const useSponsors = () => {
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  
  const query = `
    query {
      sponsorsCollection {
        items {
          name
          logo {
            url
          }
        }
      }
    }
  `;
  
  useEffect(() => {
    const fetchSponsors = async () => {
      try {
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
        
        const data: IJSONResponse = await res.json();
        setSponsors(data.data.sponsorsCollection.items);
      } catch (error) {
        console.error("Error fetching sponsors:", error);
      }
    };
    
    fetchSponsors();
  }, []);
  
  return sponsors;
};

export default useSponsors;

