import Link from "next/link"

interface TwoColumnBlockProps {
  heading: string
  bodyText: string
  buttonLink?: string
  buttonText?: string
  image?: string
  imageAlt?: string
  reverse?: boolean
}

export default function TwoColumnBlock({
  heading,
  bodyText,
  buttonLink,
  buttonText,
  image,
  imageAlt = "",
  reverse = false,
}: TwoColumnBlockProps) {
  const hasButton = buttonLink && buttonText
  const hasImage = image

  return (
    <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#16213e] py-16 px-6 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className={`${hasImage ? "grid lg:grid-cols-2 gap-12 items-center" : "flex justify-center"} ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Content */}
          <div className={`space-y-8 ${reverse ? "lg:col-start-2" : ""} ${!hasImage ? "text-center max-w-4xl" : ""}`}>
            <h1 className="text-[#00ffff] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-wide">
              {heading}
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-lg font-light">{bodyText}</p>

            {hasButton && (
              <Link
                href={buttonLink}
                className="inline-block bg-transparent text-[#00ffff] px-8 py-4 text-lg font-bold border-2 border-[#00ffff] hover:bg-[#00ffff] hover:text-black transition-all duration-300 neon-border transform hover:scale-105"
              >
                {buttonText}
              </Link>
            )}
          </div>

          {/* Image */}
          {hasImage && (
            <div className={`relative ${reverse ? "lg:col-start-1" : ""}`}>
              <div className="relative">
                {/* Geometric accent shapes */}
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-[#00ffff] transform rotate-45"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-2 border-[#00ffff] transform rotate-45"></div>

                <div className="relative overflow-hidden">
                  <img
                    src={image || "/placeholder.svg"}
                    alt={imageAlt}
                    className="w-full h-auto object-cover border-2 border-[#00ffff] neon-border"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00ffff]/20 to-transparent"></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
