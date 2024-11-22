

import { motion, useScroll, useTransform } from "framer-motion";

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const opacitySun = useTransform(scrollYProgress, [0.9, 1], [1, 0]); // Soleil disparaît
  const opacityMoonOrange = useTransform(scrollYProgress, [0.9, 1], [0, 1]); // Lune orange apparaît

  return (
    <footer className="h-screen flex items-center justify-center relative bg-gradient-to-b from-blue-400 to-purple-800">
      {/* Soleil */}
      <motion.img
        src="/images/w/luneRouge.png"
        alt="Soleil"
        className="absolute w-16 sm:w-20 md:w-28 h-auto right-5 top-10 sm:top-20"
        style={{ opacity: opacitySun }}
      />

      {/* Lune orange */}
      <motion.img
        src="/images/w/croissantLune.png"
        alt="Lune orange"
        className="absolute w-16 sm:w-20 md:w-28 h-auto right-5  transform -translate-y-1/2   top-60  "
        style={{ opacity: opacityMoonOrange }}
      />

      {/* Image de fond */}
      <img
        src="/images/w/savane.png"
        alt="Savane"
        className="absolute w-full h-full object-cover  "
      />

      {/* Boîte de texte */}
      <div className="relative z-10  shadow-2xl w-11/12 sm:w-9/12 md:w-2/3 lg:w-1/2 p-5 rounded-lg mx-auto mt-10 translate-y-40 bg-inherit  ">
        <img
          src="/images/w/bazinChouk.png"
          alt="Bazin"
          className="float-right w-20 sm:w-24 md:w-32 h-auto ml-4 mb-2"
        />
        <p className="text-cyan-50  text-base  sm:text-base   lg:text-lg">
        À l &apos;image du soleil couchant qui peint le ciel de couleurs magnifiques, 
        puisse ta vie être remplie de moments précieux et de bénédictions.
         Que la sérénité et la paix qui accompagnent la fin de chaque journée
          t&apos;entourent toujours, et que la lumière d &apos;Allah brille constamment sur
           ton chemin. Nous prions pour que chaque soir soit un rappel de la 
           grâce et de la miséricorde d &apos;Allah, et que ton cœur soit toujours
            guidé par sa lumière divine.

        Qu &apos;Allah te protège et te comble de ses bienfaits.
           <strong>Amine.</strong>
        </p>
      </div>
      
    </footer>
  );
}
