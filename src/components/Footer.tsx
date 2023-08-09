const Footer = (): JSX.Element => {
  return (
    <>
      <section className="flex flex-wrap justify-between px-32 text-white font-monty py-4">
        <section className="flex flex-col gap-4">
          <section className="font-semibold text-6xl">Contact Us!</section>
          <a
            href="mailto:technovit-help@vit.ac.in"
            className="font-regular text-3xl pt-8 hover:underline"
          >
            technovit-help@vit.ac.in
          </a>
          <a
            href="ph:+91-999222939"
            className="font-regular text-3xl hover:underline"
          >
            +91-999222939
          </a>
        </section>
        <section className="flex flex-col uppercase font-monty text-white gap-[40px] text-3xl">
          <section>Home</section>
          <section>About</section>
          <section>Events</section>
          <section>Gallery</section>
          <section>Contact Us</section>
        </section>
        <section />
      </section>
      <section className="w-screen bg-primary text-white font-monty uppercase h-10 text-xl flex items-center justify-center py-2">
        Made with ❤️ by Team TechnoVIT © {new Date().getFullYear()}
      </section>
    </>
  );
};

export default Footer;
