import Header from "../../header"
import TwoColumnBlock from "../../two-column-block"
import Footer from "../../footer"

export default function Page() {
  return (
    <div>
      <Header />
      <TwoColumnBlock
        heading="Services tailored to you"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care."
      />
      <TwoColumnBlock
        heading="Haircuts"
        bodyText="Prices"
        buttonLink="/services"
        buttonText="Book Your Appointment"
        image="/placeholder.svg?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={false}
      />
      <TwoColumnBlock
        heading="Styling"
        bodyText="Prices"
        buttonLink="/services"
        buttonText="Book Your Appointment"
        image="/placeholder.svg?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={true}
      />
      <TwoColumnBlock
        heading="Color"
        bodyText="Prices"
        buttonLink="/services"
        buttonText="Book Your Appointment"
        image="/placeholder.svg?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={false}
      />
      <Footer />
    </div>
  )
}
