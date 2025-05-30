"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const projectImages = [
  {
    src: "https://images.unsplash.com/photo-1677129666505-b5efbde405f3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Radisson Blu Hotel Grand Lobby",
  },
  {
    src: "https://images.unsplash.com/photo-1677129667171-92abd8740fa3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Radisson Blu Hotel Exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Radisson Blu Hotel Suite",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661881436846-5a0f53025711?q=80&w=3328&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Radisson Blu Hotel Restaurant",
  },

]

export default function ProjectShowcase2() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === projectImages.length - 1 ? 0 : prev + 1))
    scrollToImage(currentImageIndex + 1)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? projectImages.length - 1 : prev - 1))
    scrollToImage(currentImageIndex - 1)
  }

  const scrollToImage = (index: number) => {
    if (scrollContainerRef.current) {
      const normalizedIndex = index < 0 ? projectImages.length - 1 : index % projectImages.length
      const scrollAmount = normalizedIndex * scrollContainerRef.current.offsetWidth
      scrollContainerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <motion.section
      className="py-16 px-6 border-t border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Project Info */}
          <div className="md:col-span-1">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">PROJECT</h3>
                <h2 className="text-2xl font-light text-[#cc0000]">RADISSON BLU HOTEL</h2>
                <p className="mt-2 text-gray-600">Complete interior fit-out and furnishing</p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">CATEGORY</h3>
                <p className="text-[#3c4a2f]">Hospitality</p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">LOCATION</h3>
                <p className="text-gray-800">Dubai, UAE</p>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-1">IMAGES</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-[#3c4a2f]">
                    {currentImageIndex + 1}/{projectImages.length}
                  </p>
                  <div className="flex space-x-1">
                    <button
                      onClick={prevImage}
                      className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-[#3c4a2f] hover:bg-gray-100 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="w-8 h-8 border border-gray-300 rounded-full flex items-center justify-center text-[#3c4a2f] hover:bg-gray-100 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Project Images */}
          <motion.div
            className="md:col-span-3 relative overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {projectImages.map((image, index) => (
                <div key={index} className="min-w-full h-[500px] md:h-[600px] snap-center relative flex-shrink-0">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 75vw"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
