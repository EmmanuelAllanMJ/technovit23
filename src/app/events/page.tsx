import Events from "@/components/Events";
import React from "react";

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

const EventsPage = async () => {

  const query = `
    query {
      eventContentCollection {
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
  const res = await fetch(
    "https://graphql.contentful.com/content/v1/spaces/fh8dptt5f1p3/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer PfIiyQLVPV1qip8E8fz_fjEQKt1VClDImjAg2eCwo64`,
      },
      body: JSON.stringify({ query }),
    },
  );
  const data = await res.json();
  const events = data.data.eventContentCollection.items;
  console.log(events);
  
  return (
    <div className="bg-[#170f26] about-grid overflow-hidden">
      <div className="pt-20">
      <Events seemore={true} events={events} />
      </div>
    </div>
  );
};

export default EventsPage;
