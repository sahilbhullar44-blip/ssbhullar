"use client"

import React from "react"
import { cn } from "@/lib/utils"

const products = [
  {
    category: "Shell & Tube",
    title: "Heat Exchanger",
    productName: "Shell & Tube HX",
    price: "Get Quote",
    image: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=80&q=60",
    featured: false,
  },
  {
    category: "Cooling Systems",
    title: "Oil Cooler",
    productName: "Industrial Oil Cooler",
    price: "Get Quote",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&q=60",
    featured: false,
  },
  {
    category: "Compression",
    title: "Aftercooler",
    productName: "Industrial Aftercooler",
    price: "Get Quote",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=80&q=60",
    featured: false,
  },
  {
    category: "Heat Transfer",
    title: "Finned Tubes",
    productName: "Finned Tube Coils",
    price: "Get Quote",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80",
    thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=80&q=60",
    featured: false,
  },
]

interface ProductCardProps {
  category: string
  title: string
  productName: string
  price: string
  image: string
  thumbnail: string
  featured?: boolean
}

function ProductCard({ category, title, productName, price, image, thumbnail, featured }: ProductCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl overflow-hidden flex-shrink-0 w-[260px] sm:w-[280px] lg:flex-1 h-[320px] sm:h-[360px] group cursor-pointer",
        featured ? "ring-2 ring-gray-800 ring-offset-2" : ""
      )}
    >
      {/* Background Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark gradient overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Top content */}
      <div className="absolute top-0 left-0 right-0 p-5">
        {/* Empty top - category is shown in the middle section */}
      </div>

      {/* Middle-bottom content */}
      <div className="absolute bottom-[72px] left-0 right-0 px-5 pb-3">
        <p className="text-white/70 text-xs font-medium tracking-wider uppercase mb-1">
          {category}
        </p>
        <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight">
          {title}
        </h3>
      </div>

      {/* Bottom bar */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 flex items-center gap-3 px-4 py-3",
          featured ? "bg-gray-900" : "bg-white/10 backdrop-blur-md"
        )}
      >
        {/* Thumbnail */}
        <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 bg-white/20">
          <img
            src={thumbnail}
            alt={productName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name & Price */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-xs font-medium truncate">{productName}</p>
          <p className="text-white/70 text-xs">{price}</p>
        </div>

        {/* Shop Button */}
        <button
          className="flex-shrink-0 px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 bg-gray-900 text-white hover:bg-white hover:text-gray-900"
        >
          Enquire
        </button>
      </div>
    </div>
  )
}

export default function ProductShowcase() {
  return (
    <section className="w-full bg-white py-10 px-4 sm:px-6 lg:px-12">
      {/* Section Header */}
      <div className="max-w-[1400px] mx-auto mb-8 flex items-end justify-between">
        <div>
          <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-2">Our Products</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Product Range</h2>
        </div>
        <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors border-b border-gray-900 hover:border-gray-500 pb-0.5">
          View All →
        </a>
      </div>

      {/* Cards Row */}
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-4 lg:overflow-visible lg:pb-0 scrollbar-hide">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  )
}
