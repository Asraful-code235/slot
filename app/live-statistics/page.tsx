"use client"

import Image from "next/image"
import { StarIcon } from "@heroicons/react/24/solid"
import { Helmet } from "react-helmet"

type Props = {}

const LiveStatisticsPage = (props: Props) => {
  const data = [
    {
      count: 1,
      p: "It does not come our of 0 spin",
      number1: "37.75% in the last 1M",
      number2: "675 Total extractions",
      probability: "20/54 (37.03%) Basic probability",
      color: "bg-yellow-100",
    },
    {
      count: 2,
      p: "It does not come our of 1 spin",
      number1: "23.6% in the last 1M",
      number2: "422 Total extractions",
      probability: "13/54 (24.07%) Basic probability",
      color: "bg-yellow-500",
    },
    {
      count: 5,
      p: "It does not come our of 13 spin",
      number1: "13.2 % In the last 1M",
      number2: "236 Total extractions",
      probability: "7/54 ( 12.96% ) Basic probability",
      color: "bg-blue-400",
    },
    {
      count: 8,
      p: "It does not come our of 10 spin",
      number1: "7:16 % In the last 1M",
      number2: "128 Total extractions",
      probability: "4/54 ( 7.41% ) Basic probability",
      color: "bg-purple-400",
    },
    {
      count: 10,
      p: "It does not come our of 50 spin",
      number1: "7:21 % In the last 1M",
      number2: "129 Total extractions",
      probability: "4/54 ( 7.41% ) Basic probability",
      color: "bg-orange-600",
    },
    {
      count: 15,
      p: "It does not come our of 19 spin",
      number1: "4:36 % In the last 1M",
      number2: "78 Total extractions",
      probability: "2/54 (3.70%) Basic probability",
      color: "bg-orange-400",
    },
    {
      count: 20,
      p: "It does not come our of 44 spin",
      number1: "3.24% in the last 1M",
      number2: "58 Total extractions",
      probability: "2/54 (3.70%) Basic probability",
      color: "bg-teal-400",
    },
    {
      count: 30,
      p: "It does not come our of 59 spin",
      number1: "2.24% in the last 1M",
      number2: "40 Total extractions",
      probability: "1/54 (1.58%) Basic probability",
      color: "bg-blue-600",
    },
    {
      count: 40,
      p: "It does not come our of 244 spin",
      number1: "1.23% in the last 1M",
      number2: "22 Total extractions",
      probability: "1/54 (1.85%) Basic probability",
      color: "bg-pink-300",
    },
  ]

  const itemData = [
    {
      src: "https://dzyz6pzqu8wfo.cloudfront.net/wincasino-circular-image_8674c9c663.jpeg",
      flag: "/images/image.svg",
      title: "WinCasino",
      rating: 5,
      senza_deposito: "1000€ alla Convalida del Conto",
      coin_deposito: " 100% Fino a 1.000€ + Cashback Fino a 1.000€",
      href: "https://www.wincasinopromo.it/?=registration&mp=cd6cb4e9-42cc-4d51-bc95-46bbb80844a2",
    },
    {
      src: "https://dzyz6pzqu8wfo.cloudfront.net/starcasino-logo_3f590e21e0.png",
      flag: "/images/image.svg",
      rating: 5,
      title: "StarCasinò",
      senza_deposito: "50 Free Spins ",
      coin_deposito: " Fino a 2000€ Cashback",
      href: "https://www.wincasinopromo.it/?=registration&mp=cd6cb4e9-42cc-4d51-bc95-46bbb80844a2",
    },
    {
      src: "https://dzyz6pzqu8wfo.cloudfront.net/leovegas-logo_a215812093.png",
      flag: "/images/image.svg",
      rating: 5,
      title: "LeoVegas",
      senza_deposito: "50 Free Spins gratis",
      coin_deposito: " 250 Giri Gratis e Fino a 1500€ di Bonus",
      href: "https://spikeslot.com/go?to=https://ntrfr.leovegas.com/redirect.aspx?pid=3704489&lpid=1757&bid=19140",
    },
  ]
  return (
    <>
      <Helmet>
        <title>Live Statistics</title>
        <meta
          name="description"
          content="Here you can find all the live statistics for you slot games"
        />
      </Helmet>
      <section className="mx-auto max-w-7xl px-4 py-8 md:py-16">
        <article className="line-height-4 space-y-4 tracking-tight">
          <h1 className="text-2xl font-extrabold text-red-500 md:text-3xl">
            Statistiche delle Estrazioni in Tempo Reale Mega Wheel
          </h1>
          <p className="text-lg font-medium text-gray-600  md:text-xl ">
            Questa pagina e dedicata alle informazioni principali relative alle
            estrazioni in tempo reale del gioco Live di Pragmatic Play: Mega
            Wheel. cobra sito è il primo sito al mondo in cui poter verificare
            le statistiche live di Mega Wheel. Prima di considerare nello
            specifico tali dati, è fondamentale sottolineare che il gioco da
            casinò in generale porta a perdere a lungo andare, e che pertanto
            bisogna giocare sempre responsabilmente e con moderazione. Anche
            Mega Wheel non fa eccezione avendo un RTP del 96,51%. In aggiunta,
            il gioco da casinò è vietato ai minori di diciotto anni. Attraverso
            questa guida, avrai la possibilità di comprendere al meglio il
            funzionamento del gioco, e di verificare la frequenza
            dell&apos;estrazione dei singoli numeri di Mega Wheel. In questo
            modo, avrai anche la possibilità di definire una strategia
            consapevole e prudente.
          </p>
        </article>
        <section>
          <h2 className="mb-4 mt-8  text-2xl font-extrabold text-gray-600 md:text-3xl">
            Mega Wheel Stats
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.map((card, key) => (
              <div
                key={key}
                className="w-full space-y-4 rounded-md border border-gray-200 p-4 text-gray-600 shadow-sm"
              >
                <div className="flex flex-col items-center justify-center gap-4 border-b border-gray-200">
                  <div
                    className={`${card.color} relative flex h-14 w-14 items-center justify-center rounded-full font-bold text-gray-700`}
                  >
                    <p className="">{card.count}</p>
                  </div>
                  <p className="mb-2 text-center text-lg font-medium">
                    {card.p}
                  </p>
                </div>

                <article className="space-y-2 text-center font-medium text-gray-600">
                  <p>{card.number1}</p>
                  <p>{card.number2}</p>
                  <p>{card.probability}</p>
                </article>
              </div>
            ))}
          </div>
          <section className="my-24">
            <h2 className="text-center text-xl font-semibold text-red-500 ">
              Puoi giocare alla Sweet Bonanza Candyland QUI
            </h2>
            <div className="my-8 hidden md:flex">
              <table className="min-w-full  ">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="sr-only py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                    >
                      Name with icon
                    </th>
                    <th
                      scope="col"
                      className="sr-only px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      senza deposito
                    </th>
                    <th
                      scope="col"
                      className="sr-only px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      coin deposito
                    </th>
                    <th
                      scope="col"
                      className="sr-only px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white ">
                  {itemData?.map((profile, key) => (
                    <tr key={key} className="cursor-pointer">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2 font-medium text-gray-900">
                            <Image
                              src={profile.src}
                              alt={"live-image"}
                              width={55}
                              height={55}
                              className="rounded-full"
                            />
                            <div>
                              <h2>{profile.title}</h2>
                              <div className="flex items-center gap-2">
                                {Array.from({ length: profile.rating }).map(
                                  (_, index) => (
                                    <StarIcon
                                      key={index}
                                      className="h-5 w-5 text-yellow-500"
                                    />
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="mt-2 flex items-center gap-2 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <Image
                          src={profile.flag}
                          alt="country__picture"
                          width={55}
                          height={55}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="">Senza Deposito</h3>
                          <p>{profile.senza_deposito}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <h1 className="font-semibold text-gray-500">
                          Coin Deposito
                        </h1>
                        <p className="line-clamp-2 max-w-[200px]">
                          {profile.coin_deposito}
                        </p>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-xs uppercase text-gray-500">
                        <button className="shrink-0 bg-red-500 px-4 py-2 text-white">
                          <a href={profile.href}>VISITA IL SITO</a>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden md:grid-cols-3 lg:grid-cols-4">
              {itemData.map((profile, key) => (
                <div
                  key={key}
                  className="divide-y  divide-gray-300 rounded-lg border border-gray-300 bg-white shadow-sm"
                >
                  <div className="flex w-full justify-between space-x-6 p-4">
                    <div className="flex-1 truncate">
                      <div className="flex flex-col items-start space-y-2">
                        <h3 className="truncate text-sm font-medium text-gray-900">
                          <div className="flex items-center">
                            <div className="flex items-center gap-2 font-medium text-gray-900">
                              <Image
                                src={profile.src}
                                alt={"live-image"}
                                width={55}
                                height={55}
                                className="rounded-full"
                              />
                              <div>
                                <h2>{profile.title}</h2>
                                <div className="flex items-center gap-2">
                                  {Array.from({ length: profile.rating }).map(
                                    (_, index) => (
                                      <StarIcon
                                        key={index}
                                        className="h-5 w-5 text-yellow-500"
                                      />
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </h3>
                        <div className="ml-2.5 flex flex-col items-start gap-3 ">
                          <div className="flex items-center gap-2 truncate text-sm text-gray-500">
                            <Image
                              src={profile.flag}
                              alt="country__picture"
                              width={55}
                              height={55}
                              className="h-8 w-8 rounded-full object-cover"
                            />
                            <div>
                              <h3 className="">Senza Deposito</h3>
                              <p>{profile.senza_deposito}</p>
                            </div>
                          </div>

                          <div className="  flex flex-col gap-2 text-start text-xs font-normal leading-5">
                            <h1 className="text-base font-semibold text-gray-500">
                              Coin Deposito
                            </h1>
                            <p className=" line-clamp-2 whitespace-pre-wrap text-sm">
                              {profile.coin_deposito}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="-mt-px flex divide-x divide-gray-100 py-2">
                      <div className="-ml-px flex flex-1 justify-center py-1">
                        <a
                          className="rounded-md bg-red-500 px-4 py-2 text-white"
                          href={profile.href}
                        >
                          VISITA IL SITO
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <article className="mb-6">
            <h2 className="mb-4 text-2xl font-extrabold text-red-500">
              Controlla gli ultimi numeri estratti al gioco Live Mega Wheel
            </h2>
            <p className="text-base font-medium text-gray-600">
              Mega Wheel è un gioco Live che viene condotto in diretta dagli
              studi di Pragmatic Play, per garantire agli appassionati
              un&apos;esperienza di gioco dinamica, interattiva e sempre
              moderata.
            </p>
            <p className="text-base font-medium text-gray-600">
              Gli utenti si ritrovano infatti all&apos;interno di un vero e
              proprio show, caratterizzato dalla presenza di una ruota colorata
              composta da cinquantaquattro segmenti, a ciascuno dei quali viene
              associato un premio differente. La ruota è girata direttamente dal
              croupier presente all&apos;interno dello studio, e il compito
              principale dei giocatori è quello di riuscire ad indovinare il
              numero esatto su cui si fermerà la ruota di Mega Wheel.
            </p>
            <p className="text-base font-medium text-gray-600">
              Tuttavia, durante il gioco si alternano anche svariate funzioni
              speciali, come ad esempio Mega Lucky Number, che rappresenta un
              numero casuale selezionato prima di ogni giro e che può
              contribuire ad incrementare l&apos;eventuale vincita potenziale.
            </p>
            <p className="text-base font-medium text-gray-600">
              Avere quindi la possibilità di consultare gli ultimi numeri
              estratti, può rappresentare forse una comodità per gli
              appassionati che intendono effettuare una sessione di gioco a Mega
              Wheel, in quanto si può definire una propria strategia e nel
              contempo si ha un&apos;idea più consapevole e approfondita sui
              valori che vengono estratti in maniera più frequente.
            </p>
          </article>
          <article>
            <h2 className="mb-4 text-2xl font-extrabold text-red-500">
              Quali sono i vantaggi o gli svantaggi che derivano dalla
              possibilità di consultare le statistiche di Mega Wheel in tempo
              reale?
            </h2>
            <p className="text-base font-medium text-gray-600">
              I giocatori hanno la possibilità di paragonare le probabilità
              teoriche di uscita dei vari segmenti della ruota con la realtà,
              avendo quindi una conoscenza più approfondita del gioco Live
              considerato. Generalmente infatti, i provider di giochi digitali
              dichiarano un valore approssimativo dell&apos;uscita di un
              determinato numero, e per questo è già chiaro che nel corso della
              partita i valori dei numeri ruoteranno attorno a determinate
              probabilità.
            </p>
            <p className="text-base font-medium text-gray-600">
              Tuttavia, possono esserci sempre dei colpi di scena durante una
              sessione di gioco, poiché la fortuna gioca un ruolo fondamentale.
              Per questa ragione, le statistiche fornite in questa pagina web di
              spikeslot.com, possono essere molto utili per definire una
              strategia valida e prudente.
            </p>
            <p className="text-base font-medium text-gray-600">
              Per esempio, nel caso in cui un segmento non venga estratto per un
              notevole numero di giri, si potrebbe pensare di puntare proprio su
              quel determinato valore, tenendo in considerazione però che non ci
              sono garanzie che venga recuperato il Budget investito
              inizialmente dai singoli utenti.
            </p>
            <p className="text-base font-medium text-gray-600">
              Per questo, bisogna riconoscere ancora una volta quanto sia
              importante giocare con prudenza, al fine di vivere al meglio la
              sessione di gioco e di non essere protagonisti di situazioni
              spiacevoli, come quella della dipendenza patologica.
            </p>
          </article>
        </section>
      </section>
    </>
  )
}

export default LiveStatisticsPage
