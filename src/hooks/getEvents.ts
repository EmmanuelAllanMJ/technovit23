import { useEffect, useState } from "react";

export interface Event {
  eventName: string;
  description: string;
  school: string;
  price: number;
  datetime: string;
  imageLink: string;
  link: string;
  featuredEvents: boolean;
}

interface IJSONReponse {
  data: {
    eventContentCollection: {
      items: Event[];
    };
  };
}

const useEvents = (setLoading: Function) => {
  const [events, setEvents] = useState<Event[]>([]);
  const query = `
  query {
    eventContentCollection(order: [eventName_ASC]) {
      items {
        eventName
        school
        description
        venue
        price
        datetime
        imageLink
        link
      }
    }
  }
  
`;
  useEffect(() => {
    const fetchEvents = async () => {
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
      const data: IJSONReponse = await res.json();
      setEvents(data.data.eventContentCollection.items);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return events;
};

export default useEvents;
