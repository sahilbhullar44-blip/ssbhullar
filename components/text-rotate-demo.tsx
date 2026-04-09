"use client"

import { useEffect, useRef } from "react"
import { useInView } from "motion/react"

import { TextRotate, TextRotateRef } from "@/components/ui/text-rotate"

const exampleImages = [
  {
    url: "/hero-1.png",
    author: "Branislav Rodman",
    link: "#",
    title: "A Black and White Photo of a Woman Brushing Her Teeth",
  },
  {
    url: "/hero-1.png",
    link: "#",
    title: "Neon Palm",
    author: "Tim Mossholder",
  },
  {
    url: "/hero-1.png",
    link: "#",
    author: "ANDRII SOLOK",
    title: "A blurry photo of a crowd of people",
  },
  {
    url: "/hero-1.png",
    link: "#",
    author: "Wesley Tingey",
    title: "Rippling Crystal Blue Water",
  },
  {
    url: "/hero-1.png",
    link: "#",
    author: "Serhii Tyaglovsky",
    title: "Mann im schwarzen Hemd unter blauem Himmel",
  },
  {
    url: "/hero-1.png",
    link: "#",
    author: "Vladimir Yelizarov",
    title: "A women with a flower crown on her head",
  },
  {
    url: "/hero-1.png",
    title: "A blurry photo of white flowers in a field",
    author: "Eugene Golovesov",
    link: "#",
  },
  {
    url: "/hero-1.png",
    author: "Mathilde Langevin",
    link: "#",
    title: "A table topped with two wine glasses and plates",
  },
]

import { GridPattern } from "@/components/ui/grid-pattern"
import { cn } from "@/lib/utils"

function Item({
  index,
  image,
  link,
  onInView,
}: {
  index: number
  image: string
  link: string
  onInView: (inView: boolean) => void
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, {
    // Tighter zone: forces the item to be properly centered before changing the text
    margin: "-42% 0px -42% 0px", 
  })

  useEffect(() => {
    onInView(isInView)
  }, [isInView, onInView])

  return (
    <section
      ref={ref}
      key={index}
      className="w-full lg:w-1/2 py-10 md:py-16 flex justify-center items-center relative z-0"
    >
      {/* Reduced width and slightly compressed aspect ratio to shorten height proportionally */}
      <div className="w-[65vw] sm:w-[45vw] md:w-[260px] lg:w-[300px] xl:w-[300px] aspect-[4/4.5] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-transform duration-500 bg-gray-100">
        <a href={link} target="_blank" rel="noreferrer" className="w-full h-full block">
          <img
            src={image}
            alt={`Example ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </section>
  )
}

function Preview() {
  const textRotateRef = useRef<TextRotateRef>(null)
  const slicedImages = exampleImages.slice(1)

  const handleInView = (index: number, inView: boolean) => {
    if (inView && textRotateRef.current) {
      textRotateRef.current.jumpTo(index)
    }
  }

  return (
    <div className="w-full relative bg-gray-50/50">
      
      {/* Unified Sticky Container for Background and Text Overlay */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        
        {/* Subtle Grid Pattern Layer */}
        <div className="absolute inset-0 z-0">
          <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
              "opacity-60"
            )}
          />
        </div>

        {/* Text Area Overlay */}
        <div className="absolute inset-0 flex items-center justify-end z-10 px-4 md:px-12 lg:px-24">
          <div className="w-full flex flex-col items-center lg:items-start justify-center lg:justify-start lg:w-[45%] xl:w-[40%] bg-white/60 backdrop-blur-md rounded-3xl p-6 md:p-12 lg:bg-transparent lg:backdrop-blur-none lg:p-0 border border-gray-100 lg:border-none shadow-sm lg:shadow-none pointer-events-auto">
            <p className="text-sm md:text-base font-bold text-gray-400 tracking-[0.2em] uppercase mb-4 md:mb-6">
              Our Members
            </p>
            <TextRotate
              ref={textRotateRef}
              texts={slicedImages.map((image) => image.author)}
              mainClassName="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold w-full text-center lg:text-left pt-2 tracking-tight"
              splitLevelClassName="overflow-hidden pb-2 lg:pb-4"
              staggerFrom={"first"}
              animatePresenceMode="wait"
              loop={false}
              auto={false}
              staggerDuration={0.006} // Made text reveal speed drastically faster
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0 }} // Accelerated overall transition
            />
          </div>
        </div>
      </div>

      {/* Main Body Scroll Elements */}
      <div className="relative w-full flex flex-col justify-start items-center lg:items-start -mt-[100vh] z-20">
        {/* Minimized starting blank space */}
        <div className="h-[5vh] w-full invisible"></div>
        {slicedImages.map((image, index) => (
          <Item
            key={index}
            index={index}
            image={image.url}
            link={image.link}
            onInView={(inView) => handleInView(index, inView)}
          />
        ))}
        {/* Bottom padding to allow the last image to comfortably pass sticky zone before the section ends */}
        <div className="h-[15vh] w-full invisible"></div>
      </div>
    </div>
  )
}

export { Preview }
