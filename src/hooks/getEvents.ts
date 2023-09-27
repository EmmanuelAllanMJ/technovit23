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

const convertDateTo20230927T100000000Plus0530 = (date: Date) => {
  // Convert the date to ISO 8601 format. Remove "Z" and add the offset.
  const isoDateString = date.toISOString().replace('Z', '');

  // Add the offset to the date string.
  const offsetString = '+05:30';

  // Return the date string in the desired format.
  return isoDateString + offsetString;
};


const useEvents = (setLoading: Function) => {
  const [events, setEvents] = useState<Event[]>([]);
  // convert date to 2023-09-27T10:00:00.000+05:30 format
  const todayDate =  convertDateTo20230927T100000000Plus0530(new Date());
  console.log(todayDate);
  const query = `
  query {
    eventContentCollection(order: [eventName_ASC], where :{ datetime_gt: "${todayDate}" } ) {
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
