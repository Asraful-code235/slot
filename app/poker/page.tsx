"use client"

import Image from "next/image"
import { Helmet } from "react-helmet"

type Props = {}

const PokerPage = (props: Props) => {
  return (
    <div>
      <Helmet>
        <title>Poker</title>
        <meta name="description" content="Get to know poker" />
      </Helmet>
      <section className="mx-auto max-w-7xl">
        <Image
          src={"/images/poker.png"}
          alt="poker"
          width={1000}
          height={600}
          className="aspect-video w-full object-cover object-center"
        />

        <h1 className="my-4 text-2xl font-extrabold text-red-500 md:text-3xl">
          Padronanza dell&apos;Arte del Poker: Strategie, Consigli e Altro
        </h1>
        <p className="text-base text-gray-600">
          Benvenuti alla nostra guida completa su tutto ciò che riguarda il
          poker! Che tu sia un professionista navigato o stia appena iniziando
          il tuo viaggio nel mondo del poker, questa pagina è la tua risorsa di
          riferimento per affinare le tue abilità, imparare nuove strategie e
          rimanere aggiornato sulle ultime tendenze del gioco.
        </p>
        <article className="my-4 space-y-2">
          <h2 className="text-xl font-bold text-red-500">
            Introduzione al Poker
          </h2>
          <p>
            In questa sezione, ti introdurremo al gioco del poker e ti forniremo
            una breve panoramica sulla sua storia e le sue varianti. Dal
            classico Texas Hold&apos;em a Omaha e Stud, esploreremo le regole
            fondamentali e le meccaniche che costituiscono la base di questo
            amato gioco di carte.
          </p>
        </article>
        <article className="mb-4 space-y-2">
          <h2 className="text-xl font-bold text-red-500">
            Strategie Essenziali del Poker
          </h2>
          <p>
            Diventare un giocatore di poker di successo richiede più che
            fortuna; richiede strategia, analisi e la capacità di prendere
            decisioni calcolate. In questa sezione, approfondiremo le strategie
            essenziali del poker che ti aiuteranno a migliorare il tuo gioco e
            aumentare le tue possibilità di vincere. Dall&apos;interpretazione
            delle combinazioni di carte alla posizione al tavolo, fino al
            maestoso arte del bluff, ti forniremo preziosi consigli e
            suggerimenti da parte di professionisti esperti.
          </p>
        </article>
        {/* <article className="mb-4 space-y-2">
          <h2 className="text-xl font-bold text-red-500">
            Tecniche e Tattiche Avanzate
          </h2>
          <p>
            Una volta padroneggiato il base, e tempo di portare le tue abilità
            nel poker al livello successivo. In questa sezione, esploreremo
            tecniche e tattiche avanzate utilizzate dai giocatori esperti.
            Scopri concetti matematici avanzati come le probabilità di vincita e
            il valore atteso, studia gli aspetti psicologici come
            l'interpretazione dei segnali degli avversari e scopri strategie per
            il gioco dei tornei e il poker online.
          </p>
        </article> */}
      </section>
    </div>
  )
}

export default PokerPage
