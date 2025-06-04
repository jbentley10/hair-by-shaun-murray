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
  reverse = false
}: TwoColumnBlockProps) {
  const hasButton = buttonLink && buttonText
  const hasImage = image
  
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className={`${hasImage ? 'grid lg:grid-cols-2 gap-12 items-center' : 'flex justify-center'} ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Content */}
          <div className={`space-y-8 ${reverse ? 'lg:col-start-2' : ''} ${!hasImage ? 'text-center max-w-4xl' : ''}`}>
            <h1 className="text-[#1c3b5f] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heading}
            </h1>

            <p className="text-[#333333] text-lg md:text-xl leading-relaxed max-w-lg">
              {bodyText}
            </p>

            {hasButton && (
              <Link
                href={buttonLink}
                className="inline-block bg-[#e8d7a0] text-[#1c3b5f] px-8 py-4 rounded-full text-lg font-medium hover:bg-[#dcc888] transition-colors duration-200"
              >
                {buttonText}
              </Link>
            )}
          </div>

          {/* Image */}
          {hasImage && (
            <div className={`relative ${reverse ? 'lg:col-start-1' : ''}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-[#333333] rounded-lg translate-x-6 translate-y-6"></div>
                <img
                  src={image}
                  alt={imageAlt}
                  className="relative rounded-lg w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
