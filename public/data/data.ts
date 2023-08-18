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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  {
    name: "Dr. Sekar Viswanathan",
    link: "/images/faculty/img3.jpg",
    designation: "Vice President",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  {
    name: "Dr. Rambabu Kodali",
    link:"/images/faculty/img4.jpg",
    designation: "Vice Chancellor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  {
    name: "Dr. Kanchana Bhaaskaran V. S",
    link: "/images/faculty/img5.jpg",
    designation: "Pro Vice Chancellor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  {

    name: "Dr. Rajasekaran V",
    link: "/images/faculty/Rajasekaran.jpg",
    designation: "Director, Students Welfare",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  {
    name: "Dr. Karmel A",
    link: "/images/faculty/Karmel.png",
    designation: "Coordinator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
  },
  {
    name: "Dr. Vijayakumar P",
    link: "/images/faculty/Vijayakumar.jpg",
    designation: "Coordinator",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
  }
]
