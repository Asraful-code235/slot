import Image from "next/image"

type Props = {}

const FooterPage = (props: Props) => {
  return (
    <footer className="body-font bg-[#e2b96d] fixed bottom-0 left-0 right-0 z-50 py-4">
      <div className="flex text-sm items-center justify-center gap-4 max-w-7xl mx-auto text-white">
        <h1 className="">Casino online |</h1>
        <p>
          <Image
            src={"/images/img.webp"}
            alt="Icons"
            width={200}
            height={68}
            className="w-full h-8 "
          />
        </p>

        <p className="sm:block hidden">
          Il gioco e vietato ai minori e puo causare dipendenza patologica -
          probabilita di vincita |
        </p>
        <p>Slot online</p>
      </div>
    </footer>
  )
}

export default FooterPage
