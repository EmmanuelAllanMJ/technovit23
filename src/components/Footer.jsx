import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-evenly items-center  ">
      <div className="flex felx-col items-center pt-10  mb-5 ">
        <div className="flex flex-row mr-20">
          <Link
            href={"https://www.instagram.com/Technovit22/"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image width={65} height={65} src="/assets/insta.png" alt="insta" />
          </Link>

          <Link
            href={"https://www.youtube.com/channel/UChTqHUsS72cFAujVRUqRs9g"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image width={65} height={65} src="/assets/yt.png" alt="yt" />
          </Link>

          <Link
            href={"mailto:technovit22@gmail.com"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image width={65} height={65} src="/assets/mail.png" alt="mail" />
          </Link>

          <Link
            href={"https://twitter.com/technovit22"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image
              width={65}
              height={65}
              src="/assets/twitter.png"
              alt="twitter"
            />
          </Link>
          <Link
            href={"https://www.snapchat.com/add/technovit22"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <Image width={65} height={65} src="/assets/snap.png" alt="snap" />
          </Link>
        </div>
        <p className="text-xl mr-20 sm:text-2xl sm:ml-20 ">Visitors</p>
      </div>
      <div className="max-w-xl w-4/6 border-t-2 border-t-gray-700 m-0  "></div>
      <p className="text-base py-7 sm:text-xl">
        {" "}
        Copyright © 2022-23 technoVIT. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
