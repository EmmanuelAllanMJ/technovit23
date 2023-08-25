import type { ICardProps } from "@/components/CoordinatorCards";

export type CardProps = {
  name: string;
  link: string;
  designation: string;
  description?: string;
};

export type ImageProps = {
  image: string;
  className?: string;
  name: string;
  description: string;
  faculty: {
    name: string;
    designation: string;
    description: string;
    link: string;
    email: string;
  }[];
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
    name: "Dr. Rajasekaran V",
    link: "/images/faculty/Rajasekaran.jpg",
    designation : "Director, Students Welfare"
  },
  {
    name: "Dr. S. Bharathiraja",
    link: "/images/faculty/Bharathiraja.jpg",
    designation : "Convenor"
  },
  {
    name: "Dr. Vijayakumar P",
    link: "/images/faculty/Vijayakumar.jpg",
    designation : "Co-Convenor"
  },
  {
    name: "Dr. Karmel A",
    link: "/images/faculty/Karmel.jpg",
    designation : "Co-Convenor"
  },
  
  // {
  //   name: "Dr. Sekar Sathiya Narayanan",
  //   link: "/images/faculty/Sekar.jpg",
  //   designation : "Assistant Director - SW"
  // },
];

export const aboutFacultyImageUrl: CardProps[] = [
  {
    name: "Dr. G.VISWANATHAN",
    link: "/images/faculty/img1.jpg",
    designation: "Chancellor",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Dr. Sekar Viswanathan",
    link: "/images/faculty/img3.jpg",
    designation: "Vice President",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Dr. Rambabu Kodali",
    link: "/images/faculty/img4.jpg",
    designation: "Vice Chancellor",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Dr. Kanchana Bhaaskaran V. S",
    link: "/images/faculty/img5.jpg",
    designation: "Pro Vice Chancellor",
    // description:
    //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Dr. Rajasekaran V",
    link: "/images/faculty/Rajasekaran.jpg",
    designation: "Director, Students Welfare",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Dr. Sekar Sathiya Narayanan",
    link: "/images/faculty/Sekar.png",
    designation: "Assistant Director - SW",
    description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Dr. S. Bharathiraja",
    link: "/images/faculty/Bharathiraja.jpg",
    designation: "Convenor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Dr. Karmel A",
    link: "/images/faculty/Karmel.png",
    designation: "Co-Convenor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
  {
    name: "Dr. Vijayakumar P",
    link: "/images/faculty/Vijayakumar.jpg",
    designation: "Co-Convenor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.",
  },
];

export const schools: ImageProps[] = [
  {
    name: "qubit",
    description:
      "Qubit is the school of Computer Science and Engineering at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/qubit.webp",
    faculty: [
      {
        name: "Dr. Anusha K",
        designation: "Associate Professor",
        description:
          "Dr. Anusha K is an Associate Professor in the School of Computer Science and Engineering at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Anusha.jpg",
        email: "anusha.k@vit.ac.in",
      },
      {
        name: "Dr. M. Prasad",
        designation: "Assistant Professor",
        description:
          "Dr. M. Prasad is an Associate Professor in the School of Computer Science and Engineering at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Prasad.jpg",
        email: "prasad.m@vit.ac.in",
      },
      {
        name: "Dr. Sandosh S",
        designation: "Assistant Professor",
        description:
          "Dr. Sandosh S is an Associate Professor in the School of Computer Science and Engineering at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Sandosh.jpg",
        email: "sandosh.s@vit.ac.in",
      },
      {
        name: "Dr. Asha Jerlin M",
        designation: "Assistant Professor",
        description:
          "Dr. Asha Jerlin M is an Associate Professor in the School of Computer Science and Engineering at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Asha.jpg",
        email: "ashajerlin.m@vit.ac.in",
      },
    ],
  },
  {
    name: "bandVIT",
    description:
      "bandVIT is the school of Electrical and Electronics Engineering at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/bandvit.webp",
    faculty: [
      {
        name: "Sofana Reka S",
        designation: "Associate Professor",
        description:
          "Sofana Reka S is an Associate Professor in the School of Electrical and Electronics Engineering at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Sofana.jpg",
        email: "sofanareka.s@vit.ac.in",
      },
      {
        name: "Ravi Prakash Dwivedi",
        designation: "Assistant Professor",
        description:
          "Ravi Prakash Dwivedi is an Associate Professor in the School of Electrical and Electronics Engineering at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Ravi.jpg",
        email: "",
      },
    ],
  },
  {
    name: "Glitz",
    description:
      "Glitz is the school of Mechanical Engineering at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/glitz.webp",
    faculty: [
      {
        name: "Dr. S. G. Deepika",
        designation: "Assistant Professor",
        description:
          "Dr. S. G. Deepika is an Associate Professor in the School of Mechanical Engineering at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Deepika.jpg",
        email: "",
      },
      {
        name: "Dr. M. Bhuvaneshwari",
        designation: "Assistant Professor",
        description:
          "Dr. M. Bhuvaneshwari is an Associate Professor in the School of Mechanical Engineering at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Bhuvaneshwari.jpg",
        email: "",
      },
    ],
  },
  {
    name: "Diseno",
    description:
      "Diseno is the school of Electronics and Communication Engineering at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/diseno.webp",
    faculty: [
      {
        name: "Dr. Giridharan",
        designation: "Associate Professor",
        description:
          "Dr. Giridharan is an Associate Professor in the School of Electronics and Communication Engineering at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Giridharan.jpg",
        email: "",
      },
      {
        name: "Dr. Muralimohan",
        designation: "Assistant Professor",
        description:
          "Dr. Muralimohan is an Associate Professor in the School of Electronics and Communication Engineering at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Murali.jpg",
        email: "",
      },
    ],
  },
  {
    name: "ConnectiVITeee",
    description:
      "ConnectiVITeee is the school of Electronics and Communication Engineering at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/connectivitieee.webp",
    faculty: [
      {
        name: "Dr. Pritam Bhowmik",
        designation: "Assistant Professor",
        description:
          "Dr. Pritam Bhowmik is an Associate Professor in the School of Electronics and Communication Engineering at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Pritam.jpg",
        email: "",
      },
      {
        name: "Dr. Jyotismita Mishra",
        designation: "Assistant Professor",
        description:
          "Dr. Jyotismita Mishra is an Associate Professor in the School of Electronics and Communication Engineering at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Jyotismita.jpg",
        email: "",
      },
    ],
  },
  {
    name: "VSPLASH",
    description:
      "VSPLASH is the school of Information Technology at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/vsplash.webp",
    faculty: [
      {
        name: "Dr. Parthiban V",
        designation: "Assistant Professor",
        description:
          "Dr. Parthiban V is an Associate Professor in the School of Information Technology at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Parthiban.jpg",
        email: "parthiban.v@vit.ac.in",
      },
      {
        name: "Dr. Dhanasekar S",
        designation: "Assistant Professor",
        description:
          "Dr. Dhanasekar S is an Associate Professor in the School of Information Technology at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Dhanasekar.jpg",
        email: "dhanasekar.sundaram@vit.ac.in",
      },
    ],
  },
  {
    name: "VITness",
    description:
      "VITness is the school of Mechanical Engineering at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/vitness.webp",
    faculty: [
      {
        name: "Dr. Jishnu J",
        designation: "Associate Professor",
        description:
          "Dr. Jishnu J is an Associate Professor in the School of Mechanical Engineering at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Jishnu.jpg",
        email: "jishnu.jr@vit.ac.in",
      },
      {
        name: "Dr. Nikhil G",
        designation: "Assistant Professor",
        description:
          "Dr. Nikhil G is an Associate Professor in the School of Mechanical Engineering at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Nikhil.jpg",
        email: "",
      },
    ],
  },
  {
    name: "SRISHTI",
    description:
      "SRISHTI is the school of Science and Humanities at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/srishti.webp",
    faculty: [
      {
        name: "Dr. Anjali Gopakumar",
        designation: "Assistant Professor",
        description:
          "Dr. Anjali Gopakumar is an Associate Professor in the School of Science and Humanities at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Anjali.jpg",
        email: "",
      },
      {
        name: "K. Vasugi",
        designation: "Associate Professor",
        description:
          "K. Vasugi is an Associate Professor in the School of Science and Humanities at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Vasugi.jpg",
        email: "",
      },
    ],
  },
  {
    name: "LiLACS",
    description:
      "LiLACS is the school of Social Sciences and Languages at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/lilacs.webp",
    faculty: [
      {
        name: "Dr. Mahalakshmi Tiwari",
        designation: "Assistant Professor",
        description:
          "Dr. Mahalakshmi Tiwari is an Associate Professor in the School of Social Sciences and Languages at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Mahalakshmi.jpg",
        email: "",
      },
      {
        name: "Dr. Maya Rathnasabapathy",
        designation: "Associate Professor",
        description:
          "Dr. Maya Rathnasabapathy is an Associate Professor in the School of Social Sciences and Languages at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Maya.jpg",
        email: "maya.r@vit.ac.in",
      },
    ],
  },
  {
    name: "Taikuun",
    description:
      "Taikuun is the school of Business at VIT Chennai. It is one of the most active schools in the campus. The school has a very active student body and has been organizing various events and workshops for the stuents",
    image: "/logos/taikuun.webp",
    faculty: [
      {
        name: "Dr. Padmavathy C",
        designation: "Associate Professor",
        description:
          "Dr. Padmavathy C is an Associate Professor in the School of Business at VIT Chennai. She has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Padmavathy.jpg",
        email: "padmavathy.tv@vit.ac.in",
      },
      {
        name: "Dr. Buvanesh C",
        designation: "Assistant Professor",
        description:
          "Dr. Buvanesh C is an Associate Professor in the School of Business at VIT Chennai. He has been a part of the school since its inception and has been a great support to the students.",
        link: "/images/faculty/schools/Buvanesh.jpg",
        email: "",
      },
    ],
  },
];
