"use client";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import { ImageProps, schools } from "../../public/data/data";

function Modal(
  props: ImageProps & { open: boolean; setOpen: (open: boolean) => void }
) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog
        onClose={() => props.setOpen(false)}
        initialFocus={cancelButtonRef}
      >
        <section className="fixed z-10 inset-0  overflow-y-auto ">
          <section className="flex flex-wrap items-center justify-center min-h-screen mx-16 my-16">
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
              <section className="flex items-center justify-center relative z-50 p-6 my-8 text-left align-middle transition-all transform rounded-lg shadow-xl sm:my-0 sm:align-top sm:p-8 violet-modal">
                <section className="px-2 py-5 sm:p-6  ">
                  <section className="flex flex-wrap justify-center items-center">
                    <section className="mt-2 text-center ">
                      <Dialog.Title
                        as="h3"
                        className="text-5xl sm:text-xl md:text-3xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase"
                      >
                        {props.name} Faculty Coordinators
                      </Dialog.Title>
                      <section
                        className={`flex flex-wrap justify-center items-center mt-8 gap-8 `}
                      >
                        {props.faculty.map((faculty) => (
                          <section
                            key={faculty.name}
                            className="mb-4 text-center"
                          >
                            <section className="flex items-center justify-center">
                              <Image
                                className="h-32 w-32 rounded-full"
                                src={faculty.link}
                                alt="Faculty Image"
                                width={108}
                                height={108}
                              />
                            </section>
                            <p className="text-xl font-extrabold text-white mt-4">
                              {faculty.name}
                            </p>
                            <p className="text-md font-semibold text-gray-200">
                              {faculty.designation}
                            </p>
                            <p className="text-sm text-gray-300 mb-2">
                              {faculty.email}
                            </p>
                          </section>
                        ))}
                      </section>
                    </section>
                  </section>
                </section>
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
              </section>
            </Transition.Child>
          </section>
        </section>
      </Dialog>
    </Transition.Root>
  );
}

const ImageComponent = (props: ImageProps): React.ReactNode => {
  const [open, setOpen] = useState(false);

  const handleImageClick = () => {
    if (!open) {
      setOpen(true);
    }
  };

  return (
    <>
      <Image
        onClick={handleImageClick}
        className={`sm:max-w-[8em] sm:max-h-[8em] md:max-h-[8em] md:max-w-[8em]  hover:scale-125 transition-all duration-300 cursor-pointer ${props.className}`}
        src={props.image}
        alt="Logo"
        width={200}
        height={200}
      />
      <Modal {...props} open={open} setOpen={setOpen} />
    </>
  );
};

const Schools = (): JSX.Element => {
  return (
    <section className="py-32 sm:py-40" id="#events">
      <section className="md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white ">
        School Fests
      </section>
      <section className="grid md:grid-cols-4 md:px-6 sm:grid-cols-1 lg:grid-cols-4 lg:px-32 items-center place-items-center place-content-center gap-4">
        <section className=" absolute shadow-purple-700 opacity-30 md:opacity:10 sm:opacity:5 w-1/3 h-400 shadow-[0_0_20em_20em]" />
        {schools.map((school) => (
          <ImageComponent key={school.image} {...school} />
        ))}
      </section>
    </section>
  );
};

export default Schools;
