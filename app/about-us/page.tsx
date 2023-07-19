"use client"

import React from "react"
import { Helmet } from "react-helmet"

import useMetadata from "@/components/hooks/useGetMetaData"

type Props = {}

const AboutPage = (props: Props) => {
  const homePageMetaData = useMetadata()
  const getHomeMeta = homePageMetaData?.find(
    (m: any) => m.page === "/blog-and-news"
  )

  const title = getHomeMeta?.title
  const desc = getHomeMeta?.desc
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${desc}`} />
        <link rel="canonical" href={`https://slot-ndkk.vercel.app/about-us`} />
      </Helmet>
      <div className="mx-auto max-w-7xl px-4 py-24">
        <section className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-red-500">About Us</h2>
          <p className="text-lg italic">
            At our slot game website, we strive to provide a unique and
            rewarding gaming experience. With a wide range of thrilling slot
            machines, we bring the excitement of a casino to the comfort of your
            own home.
          </p>
          <p className="text-lg italic">
            Our platform offers a seamless interface that is easy to navigate,
            ensuring that you can quickly find your favorite games and start
            playing right away. With stunning graphics, immersive sound effects,
            and exciting gameplay, every spin on our slot machines will keep you
            on the edge of your seat.
          </p>
          <p className="text-lg italic">
            What sets us apart is our dedication to player satisfaction. We
            value our community and constantly strive to enhance the gaming
            experience. Our website is designed to provide a safe and secure
            environment, ensuring fair play and protecting your personal
            information.
          </p>
          <p className="text-lg italic">
            Join us today and experience the thrill of our slot games while
            earning real rewards. It&apos;s time to spin the reels, unlock bonus
            features, and enjoy the excitement of winning. Play, have fun, and
            see what fortunes await you!
          </p>
        </section>
      </div>
    </>
  )
}

export default AboutPage
