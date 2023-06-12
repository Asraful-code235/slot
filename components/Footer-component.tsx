type Props = {}

const FooterPage = (props: Props) => {
  return (
    <footer className="body-font bg-gray-900 ">
      <div className="container py-12 mx-auto flex flex-col flex-wrap px-5  md:flex-row md:flex-nowrap md:items-center lg:items-start">
        <div className="mx-auto w-64 shrink-0 text-center md:mx-0 md:text-left">
          <a className="title-font flex items-center justify-center font-medium text-white md:justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="h-10 w-10 rounded-full bg-red-500 p-2 text-white"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl text-white">Cobra</span>
          </a>
        </div>
        <div className="-mb-10 mt-10 flex grow flex-wrap text-center md:mt-0 md:pl-20 md:text-left">
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
              Who we are
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-white">Contact</a>
              </li>
              <li>
                <a className="text-white">Privacy Policy</a>
              </li>
              <li>
                <a className="text-white">Ethical code</a>
              </li>
              <li>
                <a className="text-white">Affiliation</a>
              </li>
              <li>
                <a className="text-white">Assistance</a>
              </li>
              <li>
                <a className="text-white">Sports terms</a>
              </li>
              <li>
                <a className="text-white">terms and conditions</a>
              </li>
              <li>
                <a className="text-white">Responsible gaming</a>
              </li>
              <li>
                <a className="text-white">Cookie settings</a>
              </li>
              <li>
                <a className="text-white">site map</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
              Casino,Slots and Online Games
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-white">Casino Online</a>
              </li>
              <li>
                <a className="text-white">Slot Machine</a>
              </li>
              <li>
                <a className="text-white">Online games</a>
              </li>
              <li>
                <a className="text-white">Online Card Games</a>
              </li>
              <li>
                <a className="text-white">Casino live online</a>
              </li>
              <li>
                <a className="text-white">Roulette Online Live</a>
              </li>
              <li>
                <a className="text-white">Blackjack Online Live</a>
              </li>
              <li>
                <a className="text-white">Poker Online</a>
              </li>
              <li>
                <a className="text-white">Bingo Online</a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/4">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-white">
              Not to be missed
            </h2>
            <nav className="mb-10 list-none">
              <li>
                <a className="text-white">Casino Bonus</a>
              </li>
              <li>
                <a className="text-white">Download Client Poker</a>
              </li>
              <li>
                <a className="text-white">Exclusive Games</a>
              </li>
              <li>
                <a className="text-white">Slot con jackpot</a>
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
