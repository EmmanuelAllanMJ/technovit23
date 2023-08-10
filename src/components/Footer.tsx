const Footer = (): JSX.Element => {
  return (
    <>
      <section className="flex flex-wrap justify-between px-32 md:px-8 sm:px-4 font-monty py-6 ">
        <section className="flex flex-col gap-4 md:py-8 sm:py-8">
          <section className="font-regular text-6xl md:text-5xl sm:text-4xl uppercase bg-clip-text text-transparent bg-gradient-to-tr hover:bg-gradient-to-bl from-stone-600 to-white">
            Contact Us
            <a
              href="mailto:technovit-help@vit.ac.in"
              className="font-regular text-3xl pt-8 mb-5 hover:underline md:text-xl sm:text-sm text-slate-100"
            >
              technovit-help@vit.ac.in
            </a>
            <a
              href="ph:+91-999222939"
              className="font-regular text-3xl md:text-xl sm:text-sm hover:underline text-slate-100"
            >
              +91-999222939
            </a>
          </section>
        </section>
        <section className="flex flex-col justify-center items-end md:items-start sm:items-start uppercase font-monty text-white gap-12 sm:gap-4 md:gap-8 text-2xl md:text-xl sm:text-sm md:py-8 sm:py-8 sm:border-white sm:border-t-white">
          <section>Home</section>
          <section>About</section>
          <section>Events</section>
          <section>Gallery</section>
          <section>Contact Us</section>
        </section>
        <section />
      </section>
      <section className=" bg-primary text-white font-monty uppercase h-10 text-xl flex items-center justify-center py-2 sm:text-sm md:text-lg w-full">
        Made with ❤️ by Team TechnoVIT © {new Date().getFullYear()}
      </section>
    </>
  );
};

export default Footer;
