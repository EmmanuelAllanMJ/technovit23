type CardProps = {
  id: number;
  type: 'student' | 'faculty';
}

const imageUrl: Array<{ link: string, name: string }> = [
  {
    link: "/images/student/MONISH.JPG",
    name: "Mohish S",
  },
  {
    link: '/images/student/Nivedhitha.jpg',
    name: "Niveditha Gna",
  }, {
    link: '/images/student/Jayasree.jpg',
    name: " Jayasree M",
  }, {
    link: "/images/student/Harshadaa.jpg",
    name: "Harshadaavenkat"
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
  }
];

const facultyImageUrl: Array<{ link: string, name: string }> = [

  {
    name : "Dr. Vijayakumar P",
    link:"/images/faculty/Vijayakumar.jpg"
  },
  {
    name : "Dr. Karmel A",
    link:"/images/faculty/Karmel.png"
  },
  {
    name : "Dr. S. Bharathiraja",
    link:"/images/faculty/Bharathiraja.jpg"
  },

]


function Card({ id , type}: CardProps) {
  console.log(imageUrl[id])
  const finalLink = type === 'student' ? imageUrl[id] : facultyImageUrl[id];
      
    
  return (
    <>
      <div className="CoordinatorCard border-purple-500/25 border-2 rounded-xl h-2/5 w-[400px] !min-w-[400px] flex flex-col ">
        <img src={finalLink.link} alt="Avatar" className="object-contain w-[300]" />
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-white text-center text-3xl">{finalLink.name}</h1>
        </div>
      </div>
    </>
  );
}
export default Card;