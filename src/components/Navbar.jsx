"use client";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function Navbar() {
	const [mobileNav, setMobileNav] = useState(false);

	const toggleMobileNav = () => {
		setMobileNav(!mobileNav);
	};

	return (
		<header className="my-40 absolute inset-x-0 p-6 z-40">
			<nav className="container mx-auto">
			<ul class="hidden md:text-white md:inline-flex lg:inline-flex lg:text-white gap-[40px] p-3 items-center transform rotate-90  absolute right-0 top-[500%] ">
    <li><a href="/">About</a></li>
    <li><a href="/">Events</a></li>
    <li><a href=" ">Gallery</a></li>
    <li><a href="">Contact Us</a></li>
</ul>






				<motion.button
					initial="hide"
					animate={mobileNav ? "show" : "hide"}
					onClick={toggleMobileNav}
					className="flex flex-col space-y-1 absolute right-6 top-6 z-10 md:hidden lg:hidden"
				>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: 45,
								y: 5,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								opacity: 1,
							},
							show: {
								opacity: 0,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
					<motion.span
						variants={{
							hide: {
								rotate: 0,
							},
							show: {
								rotate: -45,
								y: -5,
							},
						}}
						className="w-6 bg-white h-px block"
					></motion.span>
				</motion.button>



				<AnimatePresence>
					{mobileNav && (
						<MotionConfig
							transition={{
								type: "spring",
								bounce: 0.1,
							}}
						>
							<motion.div
								key="mobile-nav"
								variants={{
									hide: {
										x: "-100%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "afterChildren",
											staggerChildren: 0.25,
										},
									},
									show: {
										x: "0%",
										transition: {
											type: "spring",
											bounce: 0.1,
											when: "beforeChildren",
											staggerChildren: 0.25,
										},
									},
								}}
								initial="hide"
								animate="show"
								exit="hide"
								className="fixed inset-0 bg-[#110F13] p-6 flex flex-col justify-center space-y-10 lg:hidden"
							>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none space-y-6"
								>

									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											About
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Events
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Gallery
										</a>
									</li>
									<li>
										<a href="#" className="text-5xl font-semibold text-white">
											Contact Us
										</a>
									</li>
								</motion.ul>
								<motion.div
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="w-full h-px bg-white/30"
								></motion.div>
								<motion.ul
									variants={{
										hide: {
											y: "25%",
											opacity: 0,
										},
										show: {
											y: "0%",
											opacity: 1,
										},
									}}
									className="list-none flex justify-center gap-x-4"
								>

								</motion.ul>
							</motion.div>
						</MotionConfig>
					)}
				</AnimatePresence>

			</nav>
		</header>
	);
}