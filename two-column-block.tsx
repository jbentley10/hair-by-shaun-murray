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
    <section className="bg-[#f5f5f5] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`${hasImage ? "grid lg:grid-cols-2 gap-12 items-center" : "flex justify-center"} ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Content */}
          <div className={`space-y-8 ${reverse ? "lg:col-start-2" : ""} ${!hasImage ? "text-center max-w-4xl" : ""}`}>
            <h1 className="text-[#2d2d2d] text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">{heading}</h1>

            <p className="text-[#666666] text-lg md:text-xl leading-relaxed max-w-lg font-medium">{bodyText}</p>

            {hasButton && (
              <Link
                href={buttonLink}
                className="inline-block bg-[#0a2463] text-white px-10 py-4 text-lg font-bold hover:bg-[#071a45] transition-colors duration-200 border-4 border-[#0a2463] hover:border-[#071a45]"
              >
                {buttonText}
              </Link>
            )}
          </div>

          {/* Image */}
          {hasImage && (
            <div className={`relative ${reverse ? "lg:col-start-1" : ""}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#0a2463] transform translate-x-8 translate-y-8"></div>
                <img
                  src={image || "/placeholder.svg"}
                  alt={imageAlt}
                  className="relative w-full h-auto object-cover border-4 border-[#2d2d2d]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
