import Image from "next/image";

export type ICardProps = {
  link: string;
  name: string;
  designation?: string;
  className?: string;
};

const CoordinatorCardImage = (props: ICardProps): JSX.Element => {
  return (
    <section
      className={`${props.className} flex flex-col gap-4 py-4 justify-center items-center object-contain`}
    >
      <section className="border border-borcol p-4 rounded-lg">
        <Image
          width={300}
          height={300}
          src={props.link}
          alt={props.name}
          className="rounded-lg  transition hover:scale-110"
        />
      </section>
      <h1 className="text-white text-center text-3xl md:text-xl sm:text-xl">
        {props.name}
      </h1>
      <p className="text-white text-center text-xl md:text-xl sm:text-xl">
        {props.designation}
      </p>
    </section>
  );
};
export default CoordinatorCardImage;
