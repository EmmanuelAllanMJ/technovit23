type CardProps = {
  id: number;
  type: 'student' | 'faculty';
}

const imageUrl: Array<{ link: string, name: string }> = [
  {
    link: "https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-x_6EWWaiHHuYwB8TatYF9b8wIUdSanekTMnXLDHg_84UmL4EWKkso1dDoKov9_n3taap0HUCF8I3gP4XRXg1R0rA69Xg=w1852-h980",
    name: "Mohish S",
  },
  {
    link: 'https://lh3.googleusercontent.com/u/0/drive-viewer/AITFw-w6O8oklAVfo1AN6tTjs-2pzivDXufByy0dcgwR8d9FJokhHKsTgeaWbrIEKi4ORevNPWNntCFdVpP9hBrjHMuaM9NPjg=w1852-h980',
    name: "Niveditha Gna",
  }, {
    link: 'https://lh3.google.com/u/0/d/16iwwRDtAL_WVsQwq9M9RJSo4lh8VR1q7=k',
    name: " Jayasree M",
  }, {
    link: "https://lh3.google.com/u/0/d/1emc6jnQVIJ3I-8Fje6VirNPo4jm6AnI2=k",
    name: "Harshadaavenkat"
  },
  {
    link: "https://lh3.google.com/u/0/d/1Uuv6MDtthsjRj0XpzOI1lDh7GaVfo67W=k",
    name: "Shyam Sundhar",
  },
  {
    link: "https://lh3.google.com/u/0/d/16dFLxJEnJsXNIan3p8FIZSavotjz9-UF=k",
    name: "Mohammed Aadil",
  },
  {
    link: "https://lh3.google.com/u/0/d/1Pt3pl5qqZmRduYgCaJ7kYIwHGeHXxcLe=k",
    name: "Pravarthika V",
  }
];

const facultyImageUrl: Array<{ link: string, name: string }> = [
  {
    name : "Pravarthika V",
    link:"https://d29xyctv32cl2b.cloudfront.net/vit/authors/prabhakar-v.webp"
  },
  {
    name : "Dr. Vijayakumar P",
    link:"https://chennai.vit.ac.in/wp-content/uploads/2020/08/Dr.Vijayakumar-P-resize-255x319.jpg"
  },
  {
    name : "Dr. Karmel A",
    link:"https://chennai.vit.ac.in/wp-content/uploads/2020/01/Dr.Karmel-A.jpg"
  },
  {
    name : "Dr. S. Bharathiraja",
    link:"https://chennai.vit.ac.in/wp-content/uploads/2020/08/50299_SCOPE-S.Bharathiraja-Bharathiraja-S-255x319.jpg"
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