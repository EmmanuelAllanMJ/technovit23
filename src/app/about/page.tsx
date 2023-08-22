"use client"

import DelegatesMessage from "@/components/DelegatesMessage";
const AboutPage = () => {
  return (
    <div className="w-full bg-[#131115] from-transparent to-[#131115] bg-[url('/assets/delegates-bg.png')] bg-contain  h-full bg-no-repeat">
      {/* <FacultyComponent /> */}
      <DelegatesMessage />
    </div>
  );
};

export default AboutPage;
