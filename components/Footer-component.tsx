import Image from "next/image"

type Props = {}

const FooterPage = (props: Props) => {
  return (
    <footer className="body-font bg-gray-900 ">
      <div className="container mx-auto flex flex-col flex-wrap px-5 py-12  md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 shrink-0 text-center md:mx-0 md:text-left">
          <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
            <Image
              src={"/images/logo1.png"}
              alt="logo"
              width={200}
              height={120}
            />
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>

            {/* <span className="ml-3 text-xl text-white">Cobra</span> */}
          </a>
        </div>
        <div className="-mb-10 mt-10 flex grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
              Chi siamo
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-white">Contatto</a>
              </li>
              <li>
                <a className="text-white">Informativa sulla privacy</a>
              </li>
              <li>
                <a className="text-white">Codice etico</a>
              </li>

              <li>
                <a className="text-white">Termini e condizioni</a>
              </li>
              <li>
                <a className="text-white">Giochi responsabili</a>
              </li>

              <li>
                <a className="text-white">Mappa del sito</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
              Casino, Slot e Giochi Online
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-white">Casino Online</a>
              </li>
              <li>
                <a className="text-white">Slot Machine</a>
              </li>
              <li>
                <a className="text-white">Giochi Online</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
              Da non perdere
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-white">Bonus Casinò</a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-red-500 text-white">
        <div className="container mx-auto flex flex-col flex-wrap px-5 py-4 sm:flex-row">
          <p className="text-center text-sm sm:text-left">
            Slot Online in Italia
          </p>
          <span className="mt-2 inline-flex justify-center sm:ml-auto sm:mt-0 sm:justify-start">
            Giochi di slot machine gratuiti
          </span>
        </div>
      </div>
    </footer>
  )
}

export default FooterPage
