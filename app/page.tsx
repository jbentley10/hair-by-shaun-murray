import Header from "../components/header"
import TwoColumnBlock from "../components/two-column-block"
import Testimonials from "../testimonials"
import Gallery from "../components/gallery"
import Footer from "../components/footer"

export default function Page() {
  return (
    <div>
      <Header />
      <TwoColumnBlock
        heading="EXPERT STYLING FOR YOUR SIGNATURE LOOK"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care."
        buttonLink="/book"
        buttonText="BOOK YOUR APPOINTMENT"
        image="/hair-1.webp?height=600&width=500"
        imageAlt="Professional hair styling example showing a woman with beautifully styled brown hair with highlights"
      />
      <Testimonials />
      <TwoColumnBlock
        heading="EXPERT COLOR ARTISTRY"
        bodyText="Master colorists specializing in balayage, foiling, and dimensional techniques that enhance your natural beauty. We blend art and science for stunning, long-lasting results."
        buttonLink="/services"
        buttonText="EXPLORE SERVICES"
        image="/hair-2.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={true}
      />
      <Gallery />
      <Footer />
    </div>
  )
}
