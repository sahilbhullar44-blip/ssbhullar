"use client"

import { Map, MapControls, MapMarker, MarkerContent, MarkerTooltip } from "@/components/ui/map"
import { ThemeProvider } from "@/components/theme-provider"

// AAB Heat Exchangers location: Ludhiana, Punjab, India
const COMPANY_LNG = 75.8573
const COMPANY_LAT = 30.9010

export default function MapSection() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <section className="w-full bg-white border-t border-gray-100">
        {/* Header */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-10">
          <p className="text-xs font-bold text-gray-400 tracking-[0.2em] uppercase mb-2">
            Find Us
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Location
          </h2>
          <p className="text-gray-500 text-sm mt-2 max-w-md">
            AAB Heat Exchangers Pvt. Ltd. — Ludhiana, Punjab, India. Visit us or get in touch for your industrial heat transfer requirements.
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full h-[420px] sm:h-[500px] relative">
          <Map
            center={[COMPANY_LNG, COMPANY_LAT]}
            zoom={13}
            scrollZoom={false}
          >
            <MapControls
              position="bottom-right"
              showZoom
              showFullscreen
            />

            {/* Company Marker */}
            <MapMarker longitude={COMPANY_LNG} latitude={COMPANY_LAT}>
              <MarkerContent>
                <div className="flex flex-col items-center cursor-pointer">
                  {/* Pin */}
                  <div className="w-10 h-10 rounded-full bg-gray-900 border-4 border-white shadow-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {/* Stem */}
                  <div className="w-0.5 h-3 bg-gray-900" />
                  {/* Dot base */}
                  <div className="w-2 h-0.5 bg-gray-900/30 rounded-full" />
                </div>
              </MarkerContent>

              <MarkerTooltip>
                <div className="text-center">
                  <p className="font-bold text-xs">AAB Heat Exchangers Pvt. Ltd.</p>
                  <p className="text-[10px] opacity-80 mt-0.5">Ludhiana, Punjab, India</p>
                </div>
              </MarkerTooltip>
            </MapMarker>
          </Map>
        </div>

      </section>
    </ThemeProvider>
  )
}
