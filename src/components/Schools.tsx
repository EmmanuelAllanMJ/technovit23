"use client"
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { ImageProps, schools } from "../../public/data/data";

function Modal(props: ImageProps & { open: boolean, setOpen: (open: boolean) => void }) {
  const cancelButtonRef = useRef(null);

  return (
    <>
      <Transition.Root show={props.open} as={Fragment}>
        <Dialog onClose={() => props.setOpen(false)} initialFocus={cancelButtonRef}>
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-opacity-75 transition-opacity" />
              </Transition.Child>
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white rounded-lg shadow-xl sm:my-0 sm:align-top sm:w-full sm:p-8">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                          Coordinators
                        </Dialog.Title>
                        <div className="mt-4 grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-5">
                          {props.faculty.map((faculty) => (
                            <div key={faculty.name} className="mb-4">
                              <div className="flex items-center justify-center">
                                <Image
                                  className="w-24 h-24 rounded-full grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300 cursor-pointer"
                                  src={faculty.link}
                                  alt="Faculty Image"
                                  width={96}
                                  height={96}
                                />
                              </div>
                              <p className="text-lg font-semibold text-gray-900">
                                {faculty.name}
                              </p>
                              <p className="text-sm text-gray-500">
                                {faculty.designation}
                              </p>
                              <p className="text-sm text-gray-500">
                                {faculty.description}
                              </p>
                              <p className="text-sm text-gray-500">
                                {faculty.email}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
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
        className={`sm:max-w-[8em] sm:max-h-[8em] md:max-h-[8em] md:max-w-[8em] grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300 cursor-pointer ${props.className}`}
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
      <section className="md:text-center sm:text-center mb-10 lg:px-32 sm:px-8 md:px-16 text-6xl font-monty bg-clip-text text-transparent bg-gradient-to-t from-stone-600 to-white uppercase ">
        School Fests
      </section>
      <section className="grid md:grid-cols-4 md:px-6 sm:grid-cols-1 lg:grid-cols-4 lg:px-32 items-center place-items-center place-content-center gap-4">
        {schools.map((school) => (
          <ImageComponent key={school.image} {...school} />
        ))}
      </section>
    </section>
  );
};

export default Schools;
