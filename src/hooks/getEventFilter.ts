
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

export async function getEventFilter({school}: { school: string }) {
    const query = `
    query {
        eventContentCollection(order: eventName_ASC, where: { school: "${school}" }) {
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


    const fetchEvents = await fetch(
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
    const data = await fetchEvents.json();

    return data;
}