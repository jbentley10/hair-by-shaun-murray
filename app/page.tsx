import Header from "../header"
import TwoColumnBlock from "../two-column-block"
import Testimonials from "../testimonials"
import Gallery from "../gallery"
import Footer from "../footer"

export default function Page() {
  return (
    <div>
      <Header />
      <TwoColumnBlock
        heading="Expert Styling for Your Signature Look"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care."
        buttonLink="/book"
        buttonText="Book Your Appointment"
        image="/placeholder.svg?height=600&width=500"
        imageAlt="Professional hair styling example showing a woman with beautifully styled brown hair with highlights"
      />
      <Testimonials />
      <TwoColumnBlock
        heading="Expert Color Artistry"
        bodyText="Master colorists specializing in balayage, foiling, and dimensional techniques that enhance your natural beauty. We blend art and science for stunning, long-lasting results."
        buttonLink="/services"
        buttonText="Explore Services"
        image="/placeholder.svg?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={true}
      />
      <Gallery />
      <Footer />
    </div>
  )
}
