import Image from "next/image";
import Link from "next/link";
import Tasks from "./Tasks";

interface CardProps {
  domaine: string;
  title: string;
  tasks: string[];
  img: string;
  year: number;
}

const Card = ({ domaine, title, tasks, img, year }: CardProps) => {
  return (
    <Link href="#">
      <div className="relative rounded-lg aspect-square bg-yellow-100 text-white p-spaceMd md:p-spaceLg xl:p-space2xl overflow-hidden">
        <Image
          src={img}
          alt="arrière plan"
          fill
          style={{
            position: "absolute",
            top: 0,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div className="relative w-full h-full bg-white opacity-60">
          <div className="">video</div>
        </div>
      </div>
      <div className="flex flex-col space-y-2  xl:flex-row items-center pt-space3Xs  ">
        <div className="flex flex-col items-start w-full  ">
          <h3 className="text-[#a29e9a] font-mono text-tBase font-medium">
            {domaine}
          </h3>
          <h1 className="text-[#d1d1c7] font-semibold text-tHeading leading-none text-nowrap">
            {title}
          </h1>
        </div>
        <Tasks tasks={tasks} year={year} />
      </div>
    </Link>
  );
};

export default Card;
