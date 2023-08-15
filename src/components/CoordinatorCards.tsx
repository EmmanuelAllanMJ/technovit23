import Image from "next/image";

type ICardProps = {
  link: string;
  name: string;
  className?: string;
};

const imageUrl: ICardProps[] = [
  {
    link: "/images/student/MONISH.JPG",
    name: "Monish S",
  },
  {
    link: "/images/student/Nivedhitha.jpg",
    name: "Niveditha Gna",
  },
  {
    link: "/images/student/Jayasree.jpg",
    name: " Jayasree M",
  },
  {
    link: "/images/student/Harshadaa.jpg",
    name: "Harshadaavenkat",
  },
  {
    link: "/images/student/shyam.jpg",
    name: "Shyam Sundhar",
  },
  {
    link: "/images/student/Aadil.jpg",
    name: "Mohammed Aadil",
  },
  {
    link: "/images/student/Pravarthika.jpeg",
    name: "Pravarthika V",
  },
];

const facultyImageUrl: ICardProps[] = [
  {
    name: "Dr. Vijayakumar P",
    link: "/images/faculty/Vijayakumar.jpg",
  },
  {
    name: "Dr. Karmel A",
    link: "/images/faculty/Karmel.png",
  },
  {
    name: "Dr. S. Bharathiraja",
    link: "/images/faculty/Bharathiraja.jpg",
  },
];

function CoordinatorCardImage(props: ICardProps): JSX.Element {
  return (
    <section
      className={`${props.className} flex flex-col gap-4 py-4 justify-center items-center object-contain`}
    >
      <img
        src={props.link}
        alt={props.name}
        className="rounded-lg h-80 w-80 md:h-64 md:w-64 scale-90 border-borcol border-4"
      />
      <h1 className="text-white text-center text-3xl md:text-xl sm:text-xl">
        {props.name}
      </h1>
    </section>
  );
}
export default CoordinatorCardImage;
