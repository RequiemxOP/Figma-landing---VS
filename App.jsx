import "./App.css"

function App() {
  // Source URL for the Figma design image
  const figmaImageUrl =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/50_2B_Landing_page_designs__Community_-40xToSaIMa5UUUUn0dqRFA67m3Iv9N.png"

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              {/* Rainbow Logo */}
              <div className="w-32 h-16">
                <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50 A 50 50 0 0 1 110 50" stroke="#000000" strokeWidth="2" fill="none" />
                  <path d="M20 50 A 40 40 0 0 1 100 50" stroke="#000000" strokeWidth="2" fill="none" />
                  <path d="M30 50 A 30 30 0 0 1 90 50" stroke="#000000" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Heading and Text */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333333] leading-tight">
                  Bringing your community together
                </h1>
                <p className="text-lg text-[#333333] max-w-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu
                  eget. Et integer facilisi eget.
                </p>
              </div>

              {/* CTA Button */}
              <div>
                <a
                  href="#"
                  className="inline-block px-8 py-4 bg-[#202020] text-white font-medium rounded-full hover:bg-[#333333] transition-colors"
                >
                  Get started
                </a>
              </div>

              {/* Quote Block */}
              <div className="relative mt-8 max-w-lg">
                <div className="absolute -inset-1 bg-[#333333] transform rotate-1"></div>
                <div className="relative bg-[#202020] p-6 text-white">
                  <p className="text-sm italic">
                    "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
                    Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in
                    their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-12">
              <a href="#" aria-label="Facebook" className="text-[#333333] hover:text-[#252525]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[#333333] hover:text-[#252525]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-[#333333] hover:text-[#252525]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-[#333333] hover:text-[#252525]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-3 grid-rows-3 gap-1 h-full">
            {/* Row 1 */}
            <div className="relative bg-[#d7a94f] flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg viewBox="0 0 100 100" width="60" height="60" className="mx-auto">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" />
                    <path d="M50 30 L50 70 M30 50 L70 50" fill="none" stroke="white" strokeWidth="2" />
                    <path
                      d="M50 25 C60 35, 70 35, 75 25 C80 15, 70 5, 60 15 C50 25, 40 25, 25 15 C10 5, 0 15, 5 25 C10 35, 20 35, 30 25"
                      fill="white"
                    />
                  </svg>
                  <div className="text-xs mt-1">Loveislove</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-full blonde-person-image"></div>
            </div>
            <div className="relative bg-[#efbdd9] flex items-center justify-center">
              <div className="absolute top-2 right-2 bg-white text-[#333333] px-3 py-1 rounded-full text-xs font-medium">
                Inclusive
              </div>
              <svg viewBox="0 0 100 100" width="60" height="60" className="text-white">
                <path
                  d="M50 10 C60 30, 90 40, 70 60 C50 80, 30 50, 10 60 C-10 70, 20 90, 40 70 C60 50, 90 30, 70 10 C50 -10, 40 -10, 50 10"
                  fill="white"
                />
              </svg>
            </div>

            {/* Row 2 */}
            <div className="relative col-span-2">
              <div className="w-full h-full creative-person-image"></div>
              <div className="absolute top-2 right-2 bg-white text-[#333333] px-3 py-1 rounded-full text-xs font-medium">
                Creative
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-full bw-person-image"></div>
            </div>

            {/* Row 3 */}
            <div className="relative">
              <div className="w-full h-full curly-hair-person-image"></div>
            </div>
            <div className="relative">
              <div className="w-full h-full diverse-person-image"></div>
              <div className="absolute top-2 right-2 bg-white text-[#333333] px-3 py-1 rounded-full text-xs font-medium">
                Diverse
              </div>
            </div>
            <div className="grid grid-rows-2 gap-1">
              <div className="relative bg-[#79bbe3] flex items-center justify-center">
                <div className="absolute top-2 right-2 bg-white text-[#333333] px-3 py-1 rounded-full text-xs font-medium">
                  Caring
                </div>
                <svg viewBox="0 0 100 100" width="60" height="60" className="text-white">
                  <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="12" />
                  <path d="M30 30 L70 70 M30 70 L70 30" stroke="white" strokeWidth="12" />
                </svg>
              </div>
              <div className="relative bg-[#685fd4] flex items-center justify-center">
                <svg viewBox="0 0 100 100" width="60" height="60" className="text-white">
                  <path
                    d="M50 10 C70 30, 90 10, 70 50 C90 90, 50 70, 50 90 C50 70, 10 90, 30 50 C10 10, 30 30, 50 10"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

