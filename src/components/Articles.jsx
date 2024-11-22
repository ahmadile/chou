

import { motion, useScroll, useTransform } from "framer-motion";

export default function Article() {
  const { scrollYProgress } = useScroll(); // Progrès du défilement
  const scale = useTransform(scrollYProgress, [0.3, 0.6], [1, 1.5]); // Échelle de transition
  const opacity = useTransform(scrollYProgress, [0.3, 0.6], [3, 0]); // Lune disparaît
  const opacitySun = useTransform(scrollYProgress, [0.6, 1], [0, 5]); // Soleil apparaît

  return (
    <>
      <section className="h-screen bg-blue-200 flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8">
        {/* Nuages */}
        <div className="absolute top-0 w-full flex justify-center">
          <img
            src="/images/w/enver.png"
            alt="Nuages"
            className=" object-contain"
          />
        </div>

        {/* Lune */}
        <motion.img
          src="/images/w/soleil.png"
          alt="Lune"
          className="absolute w-16 sm:w-20 lg:w-28 h-auto right-5 top-10 sm:top-28"
          style={{ scale, opacity }}
        />

        {/* Texte principal */}
        <div className="bg-blue-200 shadow-lg shadow-blue-500/50 w-full max-w-lg p-5 rounded-lg mt-20 sm:mt-10">
          <img
            src="/images/w/choukp.png"
            alt="Choukp"
            className="float-right w-16 sm:w-24 lg:w-32 h-auto ml-4 mb-2"
          />
          <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed">
            En ce jour merveilleux, que chaque rayon du soleil levant éclaire
            ton chemin et que la lumière divine d &apos;Allah guide chacun de tes pas.
            Tout comme le soleil apporte chaleur et vie à notre monde, que ta
            présence illumine nos vies de bonheur et de bonté. Nous prions pour
            que chaque jour qui se lève t &apos;apporte de nouvelles bénédictions, de
            la sagesse et une foi toujours plus forte. Qu &apos;Allah te protège et
            veille sur toi aujourd &apos;hui et pour toujours.
            <strong> Amine.</strong>
          </p>
        </div>

        {/* Soleil */}
        <motion.img
          src="/images/w/R.png"
          alt="Soleil"
          className="absolute w-16 sm:w-20 lg:w-28 h-auto right-5 bottom-30 sm:bottom-10"
          style={{ scale, opacity: opacitySun }}
        />

        {/* Carousel */}
        <div className="carousel carousel-center bg-blue-200 w-full max-w-3xl space-x-4 p-4 overflow-x-auto flex snap-x snap-mandatory">
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image18.jpg"
              alt="Image 1"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image19.jpg"
              alt="Image 2"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image15.jpg"
              alt="Image 3"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>

          <div className="carousel-item snap-start">
            <img
              src="/images/w/image10.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image4.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image17.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image1.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image6.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image13.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image7.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image11.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image9.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image5.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image8.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image2.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image13.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image4.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image20.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image21.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image4.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image12.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
          <div className="carousel-item snap-start">
            <img
              src="/images/w/image14.jpg"
              alt="Image 4"
              className="rounded-box w-32 sm:w-48 lg:w-64 h-auto"
            />
          </div>
        

         
        </div>
      </section>
    </>
  );
}



