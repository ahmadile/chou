// import { motion, useScroll, useTransform } from "framer-motion";

// export default function Footer() {
//     const { scrollYProgress } = useScroll();
//     const opacitySun = useTransform(scrollYProgress, [0.9, 1], [1, 0]); // Soleil disparaît
//     const opacityMoonOrange = useTransform(scrollYProgress, [0.9, 1], [0, 1]); // Lune orange apparaît

//     return (
//         <footer className="h-screen cielcoucher flex items-center justify-center relative">
//             {/* Soleil */}
//             <motion.img
//                 src="/images/w/luneRouge.png"
//                 alt="Soleil"
//                 className="absolute w-20 h-20 right-5 top-20"
//                 style={{ opacity: opacitySun }}
//             />

//             {/* Lune orange */}
//             <motion.img
//                 src="\images\w\croissantLune.png"
//                 alt="Lune orange"
//                 className="absolute w-20 h-20 right-5 top-60  "
//                 style={{ opacity: opacityMoonOrange }}
//             />
//             <img src="/images/w/savane.png" alt="" className="w-fit  h-screen object-top overflow-hidden object-cover" />


//             <div className=" shadow-lg h-auto w-full   p-5 rounded-lg  ">
//          <img src="/images/w/bazinChouk.png" alt="" className="float-right w-32" />
//             <p className="text-cyan-900">
// En ce jour merveilleux, que chaque rayon du soleil levant éclaire ton chemin et que la lumière divine d &apos;Allah guide chacun de tes pas.
//  Tout comme le soleil apporte chaleur et vie à notre monde, 
//  que ta présence illumine nos vies de bonheur et de bonté.
//   Nous prions pour que chaque jour qui se lève t &apos;apporte
//    de nouvelles bénédictions, de la sagesse et une foi toujours 
//    plus forte.
// Qu&apos;Allah te protège et veille sur toi aujourd &apos;hui et pour toujours.

// Amine.</p>
//          </div>
//         </footer>
//     );
// }




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
      <div className="relative z-10 bg-white/90 shadow-lg w-11/12 sm:w-9/12 md:w-2/3 lg:w-1/2 p-5 rounded-lg mx-auto mt-10">
        <img
          src="/images/w/bazinChouk.png"
          alt="Bazin"
          className="float-right w-20 sm:w-24 md:w-32 h-auto ml-4 mb-2"
        />
        <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed">
          En ce jour merveilleux, que chaque rayon du soleil levant éclaire ton chemin et que la lumière divine d'Allah guide chacun de tes pas. 
          Tout comme le soleil apporte chaleur et vie à notre monde, que ta présence illumine nos vies de bonheur et de bonté. 
          Nous prions pour que chaque jour qui se lève t'apporte de nouvelles bénédictions, de la sagesse et une foi toujours plus forte. 
          Qu'Allah te protège et veille sur toi aujourd'hui et pour toujours. <strong>Amine.</strong>
        </p>
      </div>
    </footer>
  );
}
