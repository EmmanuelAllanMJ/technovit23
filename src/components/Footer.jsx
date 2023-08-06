import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-evenly items-center  ">
      <div className="flex felx-row items-center pt-10  mb-5">
        <div className="flex flex-column mr-20">
          <Link
            href={"https://www.instagram.com/Technovit22/"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src="\assets\insta.png" alt="insta" />
          </Link>

          <Link
            href={"https://www.youtube.com/channel/UChTqHUsS72cFAujVRUqRs9g"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src="\assets\yt.png" alt="yt" />
          </Link>

          <Link
            href={"mailto:technovit22@gmail.com"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src="\assets\mail.png" alt="mail" />
          </Link>

          <Link
            href={"https://twitter.com/technovit22"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src="\assets\twitter.png" alt="twitter" />
          </Link>
          <Link
            href={"https://www.snapchat.com/add/technovit22"}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src="\assets\snap.png" alt="snap" />
          </Link>
        </div>
        <p className="text-2xl ml-20">Visitors</p>
      </div>
      <div className="w-2/6 border-t-2 border-t-gray-700 m-0  "></div>
      <p className="text-xl py-7">
        {" "}
        Copyright © 2022-23 technoVIT. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
