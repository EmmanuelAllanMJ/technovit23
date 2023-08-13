type CardProps = {
  id: number;
}

function Card({ id }: CardProps) {
  return (
    <>
      <div className="CoordinatorCard border-purple-500/25 border-2 rounded-xl h-2/5 w-[400px] !min-w-[400px] flex flex-col ">
        <img src="https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Avatar" className="object-contain w-[300]"/>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-white text-center text-3xl">{id}</h1>
        </div>
      </div>
    </>
  );
}
  export default Card;