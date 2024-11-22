import { motion, useScroll, useTransform  } from "framer-motion"
// import { useInView } from "react-intersection-observer"


export  function Header() {

// const y = useTransform(scrollY, [0, 300], [0, -100]);
    const { scrollY } = useScroll(); // Progrès du défilement en pixels
    const yPosition = useTransform(scrollY, [0, 300], [100, 600]);
    const opacity = useTransform(scrollY, [300, 600], [1, 0.1]);


    return (
        <header className="h-screen bg-black flex items-center justify-center nuage relative ">
            <motion.img
                src="public\images\w\lune.png"
                alt="Lune"
                className="w-20 h-20 absolute top-12 right-5"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 100, opacity: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                style={{ y: yPosition, opacity: opacity,transition: { type: "spring", stiffness: 50 } }}
                
            />
           
            <p className="font-sans text-5xl font-bold text-left absolute left-0 text-blue-200 sm:text-base top-5">Joyeux anniversaire </p>

            <motion.img 
            src="public\images\w\ch.png "
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 1, opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute top-15 w-64 "
            >
                
            </motion.img>


        <div className="text-pretty border-none  w-80 p-5 rounded-lg  absolute left-0 bottom-0">
            <img src="public\images\w\nuageRose.png" alt="nuageRose" className="w-48"/>
        <p>
        Joyeux anniversaire Choukria ! Qu &apos;Allah te bénisse en ce jour spécial 
     et remplisse ta vie de bonheur et de prospérité. Que chaque moment
      de ton existence soit illuminé par sa lumière divine et que tes pas
     soient toujours guidés par sa sagesse infinie. Nous prions pour que 
     tu grandisses en force, en sagesse, et en foi, et que ton cœur reste
     toujours pur et généreux.
        </p>
        </div>


        </header>
    );
}

// export function Header(){
   
//         const { scrollYProgress } = useScroll(); // Valeur de progression du scroll
//         const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
//     return(
//         <>
//         <div className=" bg-cover bg-no-repeat bg-center w-full h-screen sm:h-96 md:h-screen bg-photofunky  "  >
//         <motion.div className="bg-lopo sc"
//            style={{
//             scale: scale,
//             // backgroundImage: "url('/images/w/lune.png') ",
//             width: 100,
//             height: 100,
//             borderRadius: "50%",
//             margin: "50px auto",
//           }}
//         >
     
//             {/* <img src="/images/w/lune.png" alt="lune" /> */}
//         </motion.div>           
//         </div>
//         </>
//     )
// }