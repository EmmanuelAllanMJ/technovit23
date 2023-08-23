import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = (): JSX.Element => {
  return (
    <>
      <div id="contact" className="flex md:flex-col sm:flex-col flex-row justify-between px-10 md:px-8 sm:px-4 font-monty md:pt-60 sm:pt-96 pt-20 pb-10">
        <div className="flex w-full flex-col gap-4 md:py-8 sm:py-8">
          <div className="w-full flex items-start justify-center flex-col font-regular text-6xl md:text-5xl sm:text-4xl uppercase bg-clip-text text-transparent bg-gradient-to-tr hover:bg-gradient-to-bl from-stone-600 to-white">
            Contact Us
            <a
              href="mailto:technovit-help@vit.ac.in"
              className="font-regular text-3xl pt-8 mb-5 hover:underline md:text-xl sm:text-sm text-slate-100"
            >
              technovit-help@vit.ac.in
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-end md:items-start sm:items-start uppercase font-monty text-white gap-12 sm:gap-4 md:gap-8 text-2xl md:text-xl sm:text-sm md:py-8 sm:py-8 sm:border-white sm:border-t-white">
          <div><a href="/">Home</a></div>
          <div><a href="/about">About</a></div>
          <div><a href="events">Events</a></div>
          <div><a href="/#contact">Contact Us</a></div>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/your-facebook-handle" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={24} color="white" />
          </a>
          <a href="https://www.twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} color="white" />
          </a>
          <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} color="white" />
          </a>
        </div>
      </div>
      <div className="bg-primary text-white font-monty uppercase h-10 text-xl flex items-center justify-center py-2 sm:text-sm md:text-lg w-full">
        Made with ❤️ by Team TechnoVIT © {new Date().getFullYear()}
      </div>
    </>
  );
};

export default Footer;
