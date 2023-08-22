"use client";

import Merch from "@/components/Merch";

interface ICompProps {
  className?: string;
}

const MerchPage = (props: ICompProps) => {
  return (
    <div className="w-full bg-[#131115] from-transparent to-[#131115] bg-[url('/assets/delegates-bg.png')] ">
      <Merch seemore={true} />
    </div>
  );
};

export default MerchPage;
