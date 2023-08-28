import Merch from "@/components/Merch";

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'


const MerchPage = async () => {
  const query = `
  query 
  { 
    merch1Collection 
    {
      items 
      { 
        name 
        school 
        description 
        price 
        link 
        type 
        mainImage 
        frontImage 
        backImage 
        leftImage 
        rightImage 
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
  const merch = data.data.merch1Collection.items;
  console.log(merch);
  return (
    <div className="w-full bg-[#131115] from-transparent to-[#131115] bg-[url('/assets/delegates-bg.png')] ">
      <Merch seemore={true} data ={merch} />
    </div>
  );
};

export default MerchPage;
