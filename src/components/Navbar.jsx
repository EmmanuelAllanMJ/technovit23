"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
	const [nav, setNav] = useState("true");
	const ToggleNav = () => {
		setNav(!nav);
	};
	return (
		<div className="backdrop-blur-sm ">
			<div className="flex justify-between mx-8 py-2 items-center ">
				{/* left */}
				<div className="">
					<img src="\assets\vit_text_light.png" alt="logo" className="h-10"/>
				</div>
				{/* right */}
				<div className=" backdrop-blur-md rounded-md">
					<div className="">
						<div className="hidden md:flex gap-x-3 text-sm text-neutral-300">
							<Link className="hover:text-neutral-100" href={"/"}>
								Home
							</Link>
							<Link className="hover:text-neutral-100" href={"/"}>
								About
							</Link>
							<Link className="hover:text-neutral-100" href={"/"}>
								Venue
							</Link>
							<Link className="hover:text-neutral-100" href={"/"}>
								School Fest
							</Link>
							<Link className="hover:text-neutral-100" href={"/"}>
								Gallery
							</Link>
							<Link className="hover:text-neutral-100" href={"/"}>
								Sponsors
							</Link>
						</div>
						{/* Menu button */}
						<div className="text-white md:hidden">
							<button onClick={ToggleNav}>
								{nav && <BiMenuAltRight size={30} />}
								{!nav && <AiOutlineClose size={30} />}
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* menu */}
			{!nav && (
				<div>
					<div className=" h-screen backdrop-blur-md bg-black/50">
						{/* Links */}
						<div className="text-white flex flex-col h-full justify-center items-center ">
							<Link
								href={"/"}
								onClick={ToggleNav}
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Home
							</Link>
							<Link
								href={"/"}
								onClick={ToggleNav}
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Residencies
							</Link>
							<Link
								href={"/"}
								onClick={ToggleNav}
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Our Values
							</Link>
							<Link
								href={"/"}
								onClick={ToggleNav}
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Contact Us
							</Link>
							<Link
								href={"/"}
								onClick={ToggleNav}
								className="cursor-pointer hover:scale-105 duration-200 border-b-2 py-6 border-neutral-400 w-3/4 flex justify-center"
							>
								Get Started
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
