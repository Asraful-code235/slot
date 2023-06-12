import Image from "next/image"

type Props = {}

const Poster = (props: Props) => {
  return (
    <section className="w-screen bg-black py-16 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-around gap-8 px-4 lg:flex-row ">
        <div className="relative after:absolute after:bg-red-400 after:w-full after:h-full after:top-0 after:opacity-10 after:z-10 after:rounded-full">
          <Image
            src={"/images/cowboyInhat.png"}
            alt="Cowboy__image"
            width={340}
            height={340}
            className="aspect-square flex-1 object-cover object-center z-50"
          />
        </div>
        <div className="max-w-3xl space-y-4 text-center text-white lg:text-start ">
          <h1 className="text-2xl text-red-500 md:text-3xl ">
            Slot della settimana
          </h1>
          <p className="text-base font-normal -tracking-tighter">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium,totam rem aperiam,eaque ipsa quae
            ab illo inventore!
          </p>
          <button className="text-white bg-red-500 mt-4 px-4 py-2 rounded-full">
            PROVA ORA
          </button>
        </div>
      </div>
    </section>
  )
}

export default Poster
