import Header from "../../components/header"
import TwoColumnBlock from "../../components/two-column-block"
import Footer from "../../components/footer"

export default function Page() {
  return (
    <div data-theme="light">
      <Header theme="light"/>
      <TwoColumnBlock
        heading="Services tailored to you"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care."
      />
      <TwoColumnBlock
        heading="Haircuts"
        bodyText="Prices"
        buttonLink="/services"
        buttonText="Book Your Appointment"
        image="/hair-1.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={false}
      />
      <TwoColumnBlock
        heading="Styling"
        bodyText="Prices"
        buttonLink="/services"
        buttonText="Book Your Appointment"
        image="/hair-2.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={true}
      />
      <TwoColumnBlock
        heading="Color"
        bodyText="Prices"
        buttonLink="/services"
        buttonText="Book Your Appointment"
        image="/hair-3.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={false}
      />
      <Footer theme="light"/>
    </div>
  )
}
