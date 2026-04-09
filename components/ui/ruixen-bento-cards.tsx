"use client"

import Image from "next/image"
import React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"

const cardContents = [
  {
    title: "Global Manufacturing & Supply",
    description:
      "We are one of the leading Manufacturers, Exporters and Suppliers of a comprehensive range of Heat Exchangers, Oil Coolers, Industrial Aftercoolers, Industrial Intercoolers, Steam Heaters, Industrial Condensers, Finned Tubes and Heat Transfer Coils.",
  },
  {
    title: "Maintenance & Reconditioning",
    description:
      "We undertake Cleaning, Repair and Reconditioning of these Products. These include cleaning, de-sealing, replacement of parts, testing, etc.",
  },
  {
    title: "Zero Production Loss Guarantee",
    description:
      "We successfully satisfy our large clientele needs for various industrial applications. We provide Standby Products to assure that absolutely no production loss takes place at your end.",
  },
  {
    title: "Expert Workforce",
    description:
      "Our extensive experience and skilled workforce enable us to manufacture a wide range of industrial equipment strictly as per international standards.",
  },
  {
    title: "Trusted Customer Approach",
    description:
      "Our quality range of products, sound strategies and transparent business dealing have helped us in mustering a huge client base across the Indian subcontinent.",
  },
]

const PlusCard: React.FC<{
  className?: string
  title: string
  description: string
}> = ({
  className = "",
  title,
  description,
}) => {
    return (
      <div
        className={cn(
          "relative border border-dashed border-zinc-400 dark:border-zinc-700 rounded-lg p-4 bg-white dark:bg-zinc-950 min-h-[140px]",
          "flex flex-col justify-between",
          className
        )}
      ><Link href="#">
          <CornerPlusIcons />
          {/* Content */}
          <div className="relative z-10 space-y-1.5">
            <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs leading-relaxed">{description}</p>
          </div></Link>
      </div>
    )
  }

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-3 -left-3" />
    <PlusIcon className="absolute -top-3 -right-3" />
    <PlusIcon className="absolute -bottom-3 -left-3" />
    <PlusIcon className="absolute -bottom-3 -right-3" />
  </>
)

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    strokeWidth="1"
    stroke="currentColor"
    className={`dark:text-white text-black size-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
)

export default function RuixenBentoCards() {
  return (
    <section className="bg-white dark:bg-black dark:bg-transparent border border-gray-200 dark:border-gray-800">
      <div className="mx-auto container border border-gray-200 dark:border-gray-800 py-8 border-t-0 px-4">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-3">
          <PlusCard {...cardContents[0]} className="lg:col-span-3 lg:row-span-2" />
          <PlusCard {...cardContents[1]} className="lg:col-span-2 lg:row-span-2" />
          <PlusCard {...cardContents[2]} className="lg:col-span-4 lg:row-span-1" />
          <PlusCard {...cardContents[3]} className="lg:col-span-2 lg:row-span-1" />
          <PlusCard {...cardContents[4]} className="lg:col-span-2 lg:row-span-1" />
        </div>

        {/* Section Footer Heading */}
        <div className="max-w-3xl ml-auto text-right px-4 mt-4 lg:-mt-16">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white mb-2">
            Backed By Valuable Expertise & Brilliance
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            AAB Heat Exchangers Pvt. Ltd., an ISO 9001:2008 certified company, has carved a niche for itself in the market with its experience of almost 30 years in manufacturing, exporting and supplying.
          </p>
        </div>
      </div>
    </section>
  )
}
