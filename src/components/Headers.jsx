
import { motion, useScroll, useTransform } from "framer-motion";

export function Header() {
  const { scrollY } = useScroll(); // Progrès du défilement en pixels
  const yPosition = useTransform(scrollY, [0, 300], [100, 500]);
  const opacity = useTransform(scrollY, [300, 500], [1, 0.1]);

  return (
    <header className="h-screen bg-univer flex items-center justify-center nuages bg-no-repeat bg-auto relative">
      {/* Lune animée */}
      <motion.img
        src="/images/w/lune.png"
        alt="Lune"
        className="absolute top-12 right-5 w-16 h-16 md:w-20 md:h-20"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 100, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        style={{ y: yPosition, opacity: opacity }}
      />

      {/* Texte d'anniversaire */}
      <p className="font-sans text-lg md:text-3xl lg:text-5xl font-bold absolute left-4 top-5 text-blue-200">
        Joyeux anniversaire
      </p>

      {/* Image animée */}
      <motion.img
        src="/images/w/ch.png"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute top-32 w-48 md:top-28 md:w-64"
      />

      {/* Nuage et message */}
      <div className="absolute bottom-4 left-4 w-72 md:w-96 p-4 rounded-lg bg-inherit  text-pretty">
        <img
          src="/images/w/nuageRose.png"
          alt="Nuage Rose"
          className="w-32 md:w-48"
        />
        <p className="text-sm md:text-base text-white">
          Joyeux anniversaire Choukria ! Qu &apos;Allah te bénisse en ce jour spécial
          et remplisse ta vie de bonheur et de prospérité. Que chaque moment de
          ton existence soit illuminé par sa lumière divine et que tes pas soient
          toujours guidés par sa sagesse infinie. Nous prions pour que tu
          grandisses en force, en sagesse, et en foi, et que ton cœur reste
          toujours pur et généreux.
        </p>
      </div>
    </header>
  );
}


