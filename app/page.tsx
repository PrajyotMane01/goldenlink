"use client"
import { ArrowRight, MessageSquare } from "lucide-react"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import ProjectShowcase from "@/components/project-showcase"
import ProjectShowcase1 from "@/components/project-showcase copy"
import ProjectShowcase2 from "@/components/project-showcase copy 2"
import Footer from "@/components/footer"


export default function Home() {  
  return (
    <div>
<div className="flex flex-col min-h-screen  bg-cover bg-center">
{/* Main content area */}
      <main className="flex-1 pt-24">
        {/* Hero Section */}
        <motion.section
          className="relative pb-24 md:pb-32 pt-24 md:pt-32 px-6 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto">
          <motion.h1
  className=" text-5xl md:text-7xl lg:text-6xl font-light leading-tight max-w-5xl"
  initial={{ y: 50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.2 }}
>

</motion.h1 >
<div className="flex gap-[550px]">
  <div>
  <div className="block text-4xl font-bold leading-relaxed mb-12">
    <span>20+ Years 1000+ Projects.</span> <span>One Standard: Excellence</span>
  </div>

  From villas to offices, we bring your vision to life — end to end. Fit-Out, MEP & Joinery solutions trusted across the UAE.

</div>

  
  <div className=" ">
         


          <div className="space-y-4">
            <p className="text-sm text-gray-600">Tell us a little about your project and we’ll get back to you within 24 hours.
            </p>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
              <input
                type="text"
                placeholder="Email Address"
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
                <input
                type="text"
                placeholder="Phone Number"
                className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-500"
              />
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="Service"
                  className="w-full border-b border-gray-300 py-2 text-sm focus:outline-none focus:border-gray-500"
                />
                {/* <button className="ml-2 transition-transform hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </button> */}
              </div>
              <div className="ml-auto flex items-center space-x-4 ">
          <Button className="bg-red-500 text-white" variant="outline">Get Started</Button>
        </div>
            </div>
          </div>
          
        </div>
  </div>
            <div className="mt-16 md:mt-24 flex flex-col md:flex-row justify-between items-start">
              <motion.p
                className=" text-xl max-w-md mb-8 md:mb-0"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
              
               
                </motion.p>

              <motion.div
                className="flex flex-col md:flex-row gap-8"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-right">
                  {/* <p className="text-xs uppercase tracking-wider">BUILT TO SPEC</p> */}
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-wider ">Crafting interiors that last — Since 2003</p>
                  <p className="text-xs uppercase tracking-wider text-red-500">ISO Certified | UAE-Born & Operated | Trusted by Leading Developers</p>
                </div>
            
              </motion.div>
            </div>
          </div>

        </motion.section>
        

        {/* Wave Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <svg
            viewBox="0 0 1440 320"
            className="w-full"
            preserveAspectRatio="none"
            style={{ transform: 'translateY(1px)' }}
          >
            <motion.path
              fill="#EF4444"
              initial={{
                d: "M0,400L60,400C120,400,240,400,360,400C480,400,600,400,720,400C840,400,960,400,1080,400C1200,400,1320,400,1380,400L1440,400L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z",
              }}
              animate={{
                d: "M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,229.3C840,235,960,213,1080,181.3C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z",
              }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
        {/* Our Services Section */}
        <section className="pt-0 pb-16 px-6 bg-[#EF4444]">
          <div className="container mx-auto">
            <motion.h2
              className="text-white text-3xl md:text-4xl font-light mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our Services
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                className="aspect-square relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1600435335786-d74d2bb6de37?q=80&w=3260&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Exterior Design"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                  <p className="text-lg font-light">Interior Design</p>
                </div>
              </motion.div>

              <motion.div
                className="aspect-square relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1677129667171-92abd8740fa3?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Exterior Design"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                  <p className="text-lg font-light">Interior Design</p>
                </div>
              </motion.div>

              <motion.div
                className="aspect-square relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1742844552193-2fd3425cd26d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Lounge Area"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                  <p className="text-lg font-light">Lounge Area</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-8 flex justify-end">
              <motion.div
                className="max-w-xs text-sm text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p>Micromanaging reverberation of sound. Built to exacting standards, with first-rate protection.</p>
                <Button variant="outline" className="mt-4 border-white text-[#3c4a2f] hover:bg-white hover:text-[#3c4a2f] rounded-full px-6">
                  View all Services
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Showcase Section */}
        <ProjectShowcase />
        <ProjectShowcase1 />
        <ProjectShowcase2 />

        {/* Contact Section */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="container mx-auto">
            <motion.h2
              className="text-[#3c4a2f] text-3xl md:text-4xl font-light mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              CONTACT US
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Information */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-xl font-medium text-[#3c4a2f] mb-2">Our Office</h3>
                  <p className="text-gray-600">Showroom 1, 25, 61A Street, Al Garhoud</p>
                  <p className="text-gray-600">Dubai PO BOX 43262</p>
                  <p className="text-gray-600">United Arab Emirates</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#3c4a2f] mb-2">Contact Details</h3>
                  <p className="text-gray-600">Phone: +61 2 1234 5678</p>
                  <p className="text-gray-600">Email: info@goldenlink.com.au</p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[#3c4a2f] mb-2">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>

                <Button variant="default" className="bg-red-500 hover:bg-red-600 text-white">
                  Schedule a Consultation
                </Button>
              </motion.div>

              {/* Map Section */}
              <motion.div
                className="h-[400px] relative w-full rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1957205925113!2d55.334528!3d25.253200000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c6d4e6d1f1d%3A0x0!2sShowroom%201%2C%2025%2C%2061A%20Street%2C%20Al%20Garhoud%2C%20Dubai!5e0!3m2!1sen!2sae!4v1650000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </motion.div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer/>

      {/* Chat Bar */}
      <div className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-gray-700 text-sm font-medium">
              Golden Link
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="default" className="bg-red-500 hover:bg-[#2e3a23] text-white flex items-center">
              Chat online
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-square"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </span>
            </Button>
            <Button variant="outline" className="border-gray-300 text-gray-700">
              Request a quote
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
