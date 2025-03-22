import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side Content */}
          <div className="flex flex-col justify-between space-y-20">
            {/* Rainbow Shape */}
            <div className="relative w-48 h-24">
              <div className="absolute">
                <Image src="/images/arc1.svg" alt="Rainbow arc" width={200} height={100} />
              </div>
              <div className="absolute">
                <Image src="/images/arc2.svg" alt="Rainbow arc" width={160} height={80} />
              </div>
              <div className="absolute">
                <Image src="/images/arc3.svg" alt="Rainbow arc" width={120} height={60} />
              </div>
            </div>
            
            {/* Content Section */}
            <div className="flex flex-col space-y-20">
              {/* Text Content */}
              <div className="space-y-6">
                <h1 className="font-zilla font-bold text-5xl md:text-6xl text-[#333333] tracking-wide">
                  Bringing your community together
                </h1>
                <p className="font-inter text-xl md:text-2xl text-[#252525] leading-relaxed max-w-xl">
                Here, you’re not just joining a community you’re becoming part of a movement, a place between hope and giving up, where time may move forward but we stand together as we rise by lifting others.
                </p>
                <div className="pt-6">
                  <button className="bg-[#202020] text-white font-inter text-lg font-medium py-6 px-10 rounded-full hover:bg-black transition-colors">
                    Get started
                  </button>
                </div>
              </div>
              
              {/* Quote Box */}
              <div className="relative max-w-lg">
                <div className="absolute w-full h-full bg-[#333333] transform translate-x-3 translate-y-3"></div>
                <div className="relative bg-white border-2 border-[#333333] p-6 z-10">
                  <p className="font-inter font-light text-sm md:text-base leading-relaxed">
                    "For centuries, words have connected us—timeless, powerful, and enduring. What you see here is more than text; it’s a bridge between generations. Inspired by Cicero’s wisdom and carried through time, this space is where ideas live, voices are heard, and stories find a home. Welcome to something truly lasting." ~Awkheeh
                  </p>
                </div>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link href="#" aria-label="Social Media">
                <Image src="/images/social1.svg" alt="Social Media" width={28} height={28} />
              </Link>
              <Link href="#" aria-label="Social Media">
                <Image src="/images/social2.svg" alt="Social Media" width={28} height={28} />
              </Link>
              <Link href="#" aria-label="Social Media">
                <Image src="/images/social3.svg" alt="Social Media" width={28} height={28} />
              </Link>
              <Link href="#" aria-label="Social Media">
                <Image src="/images/social4.svg" alt="Social Media" width={28} height={28} />
              </Link>
            </div>
          </div>
          
          {/* Right Side - Image Gallery */}
          <div className="rounded-lg overflow-hidden h-[600px] lg:h-[700px]">
            {/* 3x3 Grid with no gaps */}
            <div className="grid grid-cols-3 grid-rows-3 h-full relative">
              {/* Row 1 */}
              <div className="bg-[#d7a94f] flex items-center justify-center relative">
                {/* Top-left: Love is love icon with circular text */}
                <div className="relative z-10 flex items-center justify-center w-full h-full">
                  <div className="w-40 h-40 rounded-full border-4 border-white flex items-center justify-center relative">
                    <Image src="/images/heart.svg" alt="Love" width={50} height={50} className="text-white" />
                    <div className="absolute w-full h-full">
                      <svg viewBox="0 0 100 100" width="100%" height="100%">
                        <defs>
                          <path 
                            id="topCirclePath" 
                            d="M 50,20 A 30,30 0 0,1 50,80"
                            fill="none" 
                          />
                          <path 
                            id="bottomCirclePath" 
                            d="M 50,80 A 30,30 0 0,1 50,20"
                            fill="none" 
                          />
                        </defs>
                        <text className="text-xs font-medium fill-white">
                          <textPath href="#topCirclePath" startOffset="50%" textAnchor="middle">
                            love is love
                          </textPath>
                        </text>
                        <text className="text-xs font-medium fill-white">
                          <textPath href="#bottomCirclePath" startOffset="50%" textAnchor="middle">
                            love is love
                          </textPath>
                        </text>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                {/* Top-middle: New image replacing blonde model */}
                <Image src="/images/human3.jpg" alt="New portrait" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="bg-[#EFBDD9] flex items-center justify-center">
                {/* Top-right: Pink background with white flower icon */}
                <Image src="/images/vector.svg" alt="Abstract flower" width={140} height={140} className="text-white" />
              </div>
              
              {/* Row 2 */}
              <div className="relative">
                {/* Middle-left: Black and white portrait of creative man */}
                <Image src="/images/human4.jpg" alt="Creative portrait" fill className="object-cover" style={{filter: "grayscale(100%) contrast(1.2)"}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="relative">
                {/* Middle-center: Woman with short hair - now in color */}
                <Image src="/images/human8.jpg" alt="Woman with natural smile" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              
              <div className="relative">
                {/* Middle-right: Young Black girl with afro hair */}
                <Image src="/images/human5.jpg" alt="Young girl with afro" fill className="object-cover" />
                <div className="absolute inset-0 bg-[#FEDCDC] opacity-20"></div>
              </div>
              
              {/* Row 3 */}
              <div className="bg-[#79BBE3] flex items-center justify-center">
                {/* Bottom-left: Blue background with white caring symbol */}
                <Image src="/images/asterisk.svg" alt="Caring symbol" width={140} height={140} className="text-white" />
              </div>
              
              <div className="relative">
                {/* Bottom-middle: Dramatic portrait of Black woman */}
                <Image src="/images/human1.jpg" alt="Woman with sunglasses" fill className="object-cover" style={{filter: "brightness(0.8) contrast(1.2)"}} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <div className="bg-[#685FD4] flex items-center justify-center">
                {/* Bottom-right: Purple background with white abstract icon */}
                <Image src="/images/butterfly.svg" alt="Abstract shape" width={140} height={140} className="text-white" />
              </div>
              
              {/* Labels overlapping cells */}
              <div className="absolute top-0 left-[33.33%] transform -translate-x-1/2 translate-y-1 z-20">
                <div className="bg-white px-4 py-1 rounded-full text-xs font-medium text-black shadow-md border border-white/30">
                  Inclusive
                </div>
              </div>
              
              <div className="absolute top-0 left-[66.67%] transform -translate-x-1/2 translate-y-1 z-20">
                <div className="bg-white px-4 py-1 rounded-full text-xs font-medium text-black shadow-md border border-white/30">
                  Creative
                </div>
              </div>
              
              <div className="absolute top-[33.33%] left-[33.33%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-white px-4 py-1 rounded-full text-xs font-medium text-black shadow-md border border-white/30">
                  Diverse
                </div>
              </div>
              
              <div className="absolute top-[66.67%] left-[33.33%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="bg-white px-4 py-1 rounded-full text-xs font-medium text-black shadow-md border border-white/30">
                  Caring
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

