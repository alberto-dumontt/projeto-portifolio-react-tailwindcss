import { HERO_CONTENT } from '../constants';
import profilePic from "../assets/albertoDumontt.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({ 
    hidden: { 
        x: -100, 
        opacity: 0 
    },
    visible: { 
        x: 0,
        opacity: 1,
        transition: { 
            duration: 0.5,
            delay: delay 
        }
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <motion.h1 
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
                            Alberto Dumontt
                    </motion.h1>
                    <motion.span
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="bg-gradient-to-r from-pink-200 visa-slate-300 to-purple-300 bg-clip-text text-3xl tracking-tight text-transparent">
                            Software Developer
                    </motion.span>
                    <motion.p
                        variants={container(1)}
                        initial="hidden"
                        animate="visible"
                        className="my-2 max-w-xl py-6 font-light tracking-tight">
                            {HERO_CONTENT}
                    </motion.p>
                    <div className="mb-8">
                        <motion.a
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            href="https://docs.google.com/document/d/1Cm8YaSKRHYX-6OfM9SfDkXyc-TMcws-PGP-G0NHAphQ/edit?usp=sharing"
                            target="_blank" 
                            rel="noreferrer"
                            className="rounded-2xl border-2 border-neutral-800 p-4 mt-4 mr-4 inline-block bg-gradient-to-r from-pink-200 via-slate-300 to-purple-300 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-pink-200 hover:via-slate-300 hover:to-purple-300 hover:text-white">
                                CV (en)
                        </motion.a>
                        <motion.a
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            href="https://docs.google.com/document/d/1msTjLLRqI2u9M-mA9oRXHlHWEukm_xJaw8BIrJVUyoo/edit?usp=sharing"
                            target="_blank" 
                            rel="noreferrer"
                            className="rounded-2xl border-2 border-neutral-800 p-4 mt-4 inline-block bg-gradient-to-r from-pink-200 via-slate-300 to-purple-300 bg-clip-text text-transparent hover:bg-gradient-to-r hover:from-pink-200 hover:via-slate-300 hover:to-purple-300 hover:text-white">
                                CV (pt-br)
                        </motion.a>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        src={profilePic} width={500}
                        className="rounded-2xl"
                        height={500}
                        alt="Alberto Dumontt"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero