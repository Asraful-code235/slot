import Image from "next/image"
import Link from "next/link"

type Props = {}

const RedPoster = (props: Props) => {
  return (
    <section className="w-screen bg-red-500 py-16 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-around gap-8 px-4 lg:flex-row ">
        <div className="relative ">
          <Image
            src={"/images/egypt.png"}
            alt="Cowboy__image"
            width={340}
            height={340}
            className="aspect-square drop-shadow-xl flex-1 object-cover object-center z-50"
          />
        </div>
        <div className="max-w-3xl space-y-4 text-center text-white lg:text-start ">
          <h1 className="text-2xl  md:text-3xl ">Slot della settimana</h1>
          <p className="text-base font-normal -tracking-tighter">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,totam rem aperiam,eaque ipsa quae
            ab illo inventore!
          </p>
          <button className="text-gray-600 bg-white mt-4 px-4 py-2 rounded-full">
            <Link href={"/slot"}>PROVA ORA</Link>
          </button>
        </div>
      </div>
    </section>
  )
}

export default RedPoster
