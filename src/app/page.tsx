import About from "@/components/About";
import CoordinatorComponent from "@/components/Coordinator";
import Events from "@/components/Events";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Star from "@/components/Stars";
import Schools from "@/components/Schools";
import dynamic from "next/dynamic";

const Countdown = dynamic(() => import("../components/Countdown"), {
  ssr: false,
});

// export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export default async function Home() {

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
          featuredEvents
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
  return (
    <main >
      <Star />
      <Hero />
      <section className="about-grid bg-[#030014]">
          <Countdown />
        <section className="min-h-screen flex flex-col justify-center items-center">
          <About />
        </section>
      </section>
      <section className="bg-[#030014]"><Gallery /></section>
      <section className="about-grid bg-[#08031b]">
        <Schools />
        <Events events={events} featured={true}/>
        <Events events={events} featured={false}/>
        <CoordinatorComponent/>    
        <Footer />
      </section>
    </main>
  );
}
