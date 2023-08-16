import type { ICardProps } from "@/components/CoordinatorCards";

export type CardProps = {
  name: string;
  link: string;
  designation: string;
  description: string;
};

export const studentImageUrl: ICardProps[] = [
  {
    link: "/images/student/MONISH.JPG",
    name: "Monish S",
  },
  {
    link: "/images/student/Nivedhitha.jpg",
    name: "Nivedhitha Gna",
  },
  {
    link: "/images/student/Jayasree.jpg",
    name: " Jayasree M",
  },
  {
    link: "/images/student/Harshadaa.jpg",
    name: "Harshadaa Venkat",
  },
  {
    link: "/images/student/Aadil.jpg",
    name: "Mohammed Aadil",
  },
  {
    link: "/images/student/Pravarthika.jpeg",
    name: "Pravarthika V",
  },
  {
    link: "/images/student/shyam.jpg",
    name: "Shyam Sundhar",
  },
];

export const facultyImageUrl: ICardProps[] = [
  {

    name: "Dr. S. Bharathiraja",
    link: "/images/faculty/Bharathiraja.jpg",
  },
  {

    name: "Dr. Vijayakumar P",
    link: "/images/faculty/Vijayakumar.jpg",
  },
  {
    name: "Dr. Karmel A",
    link: "/images/faculty/Karmel.png",
  },
];


export const aboutFacultyImageUrl: CardProps[] = [
  {
    name: "Dr. G.VISWANATHAN",
    link: "/images/faculty/img1.jpg",
    designation: "Chancellor",
    description: "Faculty 1 Description"
  },
  {
    name: "Mr. Sankar Viswanathan",
    link: "/images/faculty/img2.jpg",
    designation: "Vice President",
    description: "Faculty 2 Description"
  },
  {
    name: "Dr. Sekar Viswanathan",
    link: "/images/faculty/img3.jpg",
    designation: "Vice President",
    description: "Faculty 3 Description"
  },
  {
    name: "Dr. Karmel A",
    link: "/images/faculty/Karmel.png",
    designation: "Coordinator",
    description: "Faculty 4 Description"
  },
  {
    name: "Dr. Rambabu Kodali",
    link:"/images/faculty/img4.jpg",
    designation: "Vice Chancellor",
    description: "Faculty 5 Description"
  },
  {
    name: "Dr. Kanchana Bhaaskaran V. S",
    link: "/images/faculty/img5.jpg",
    designation: "Pro Vice Chancellor",
    description: "Faculty 6 Description"
  }
]
