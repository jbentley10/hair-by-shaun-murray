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
    <section className="bg-[#121212] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`${hasImage ? "grid lg:grid-cols-2 gap-12 items-center" : "flex justify-center"} ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Content */}
          <div className={`space-y-8 ${reverse ? "lg:col-start-2" : ""} ${!hasImage ? "text-center max-w-4xl" : ""}`}>
            <h1 className="text-[#ff3e9d] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">{heading}</h1>

            <p className="text-white text-lg md:text-xl leading-relaxed max-w-lg">{bodyText}</p>

            {hasButton && (
              <Link
                href={buttonLink}
                className="inline-block bg-[#ff3e9d] text-white px-8 py-4 rounded-none text-lg font-bold hover:bg-[#d81b7a] transition-colors duration-200 border-2 border-[#ff3e9d] hover:border-white"
              >
                {buttonText}
              </Link>
            )}
          </div>

          {/* Image */}
          {hasImage && (
            <div className={`relative ${reverse ? "lg:col-start-1" : ""}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#ff3e9d] rounded-none transform translate-x-6 translate-y-6"></div>
                <img
                  src={image || "/placeholder.svg"}
                  alt={imageAlt}
                  className="relative rounded-none w-full h-auto object-cover shadow-lg border-2 border-white"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
