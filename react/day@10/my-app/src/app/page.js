import Image from "next/image";
import bannerImg from "../../public/images/desktop_553449a6-38dd-4ec8-8198-82391cc49e82_2160x.jpg"
import Link from "next/link";

export default function Home() {
  return (
   <>
      <div className=" w-full h-[500px]  ">
      <Link href={"/about"} >about page </Link>

          <Image src={bannerImg} />
      </div>
   </>
  );
}
