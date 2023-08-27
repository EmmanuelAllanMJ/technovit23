"use client";
import { Dialog, Transition } from "@headlessui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import React, { Fragment, useRef, useState } from "react";
import { Tilt } from "react-tilt";

interface EventCardProps {
	index: number;
	eventName: string;
	eventImage: string;
	eventDescription: string;
	eventSchool: string;
	eventPrice: number;
	Link: string;
	DateTime: string;
}

function Modal(
	props: EventCardProps & { open: boolean; setOpen: (open: boolean) => void }
) {
	const cancelButtonRef = useRef(null);

	return (
		<>
			<Transition.Root show={props.open} as={Fragment}>
				<Dialog
					onClose={() => props.setOpen(false)}
					initialFocus={cancelButtonRef}
				>
					<div className="fixed z-10 inset-0  overflow-y-auto ">
						<div className="flex flex-wrap items-center justify-center min-h-screen mx-16 -m-20">
							<Transition.Child
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Dialog.Overlay className="fixed inset-0 " />
							</Transition.Child>
							<Transition.Child
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<div className="flex items-center justify-center relative  z-50  p-6 my-8 text-left align-middle transition-all transform rounded-lg shadow-xl sm:my-0 sm:align-top sm:p-8 violet-modal">
									<div className="px-2 py-5 sm:p-6  ">
										<div className="flex flex-wrap justify-center items-center">
											<div className="mt-2 text-center ">
												<Dialog.Title
													as="h3"
													className="text-5xl sm:text-xl md:text-3xl font-opensans bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase"
												>
													{props.eventName}
												</Dialog.Title>
												<div
													className={`flex flex-wrap justify-center items-center mt-8 gap-8 `}
												>
													<img src={props.eventImage} alt="Event Image" />
												</div>
											</div>
										</div>
									</div>
									<button
										onClick={() => props.setOpen(false)}
										className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 focus:outline-none"
									>
										<svg
											className="w-6 h-6"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M6 18L18 6M6 6l12 12"
											/>
										</svg>
									</button>
								</div>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}

const EventCard: React.FC<EventCardProps> = (props) => {
	const [open, setOpen] = useState(false);

	const handleImageClick = () => {
		if (!open) {
			setOpen(true);
		}
	};
	const {
		index,
		eventName,
		eventImage,
		eventDescription,
		eventSchool,
		eventPrice,
		Link,
		DateTime,
	} = props;
	var isoDate = DateTime;
	var date = new Date(isoDate);
	var normalDate = date.toLocaleString();
	return (
		<>
			<motion.div
				variants={{
					hidden: { opacity: 0, y: 50 },
					visible: {
						opacity: 1,
						y: 0,
						transition: {
							delay: index * 0.5,
							duration: 0.75,
						},
					},
				}}
				initial="hidden"
				animate="visible"
				onClick={handleImageClick}
			>
				<Tilt
					options={{
						max: 25,
						scale: 1,
						speed: 450,
					}}
					className="bg-[#110C2A] p-5 rounded-2xl sm:w-[360px] w-full"
				>
					<div className="relative w-full h-[200px]">
						<img
							src={eventImage}
							alt="project_image"
							className="w-full h-full rounded-2xl object-cover"
						/>
					</div>

					<div className="mt-5">
						<h3 className="text-white font-bold text-[32px]">{eventName}</h3>
						<p className="mt-2 text-[#aaa6c3] text-[16px]">{eventSchool}</p>
						<p className="mt-2 text-[#aaa6c3] text-[16px]">{normalDate}</p>
						<p className="mt-2 text-[#aaa6c3] text-[16px]">
							{eventDescription}
						</p>
						<p className="mt-2 text-[#aaa6c3] text-[16px]">₹ {eventPrice}</p>
					</div>
					<button
						type="submit"
						className="mt-6 mb-4 ml-2 rounded-[90px] border-2 border-purple-600 w-44
              h-10 sm:w-44 sm:h-10 md:w-40 md:h-10 lg:w-52 lg:h-12 flex justify-center 
              items-center text-[#C8B8EC] text-base font-medium cursor-pointer 
              bg-opacity-80 hover:bg-purple-500/10 hover:text-purple-200 transition-all duration-300"
					>
						<a className="flex flex-row text-sm" href={Link}>
							Register Now
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 30 30"
								fill="none"
								className="ml-5 sm:ml-2 w-5 h-5"
							>
								<path
									d="M21.1743 22.8881L29.0625 14.9999L21.1743 7.11182L19.8485 8.43768L25.4734 14.0625L0.982265 14.0625V15.9375L25.4732 15.9375L19.8485 21.5622L21.1743 22.8881Z"
									fill="#C8B8EC"
								/>
							</svg>
						</a>
					</button>
				</Tilt>
			</motion.div>
			<Modal {...props} open={open} setOpen={setOpen} />
		</>
	);
};

export default EventCard;
