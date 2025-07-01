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
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`${hasImage ? "grid lg:grid-cols-2 gap-16 items-center" : "flex justify-center"} ${reverse ? "lg:grid-flow-col-dense" : ""}`}
        >
          {/* Content */}
          <div className={`space-y-8 ${reverse ? "lg:col-start-2" : ""} ${!hasImage ? "text-center max-w-4xl" : ""}`}>
            <h1 className="text-black text-3xl md:text-4xl lg:text-5xl leading-tight font-light">{heading}</h1>

            <p className="text-gray-600 text-lg leading-relaxed max-w-lg font-light">{bodyText}</p>

            {hasButton && (
              <Link
                href={buttonLink}
                className="inline-block bg-black text-white px-8 py-3 text-sm font-medium uppercase tracking-wider hover:bg-gray-800 transition-colors duration-300"
              >
                {buttonText}
              </Link>
            )}
          </div>

          {/* Image */}
          {hasImage && (
            <div className={`relative ${reverse ? "lg:col-start-1" : ""}`}>
              <div className="relative overflow-hidden">
                <img src={image || "/placeholder.svg"} alt={imageAlt} className="w-full h-auto object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
