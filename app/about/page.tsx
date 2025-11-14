import Header from "../../components/header"
import TwoColumnBlock from "../../components/two-column-block"
import Footer from "../../components/footer"

export default function Page() {
  return (
    <div data-theme="light">
      <Header theme="light" />
      <TwoColumnBlock
        heading="About Us"
        bodyText="With over 20 years of experience in the hair industry, I'm here to make you look your best."
      />
      <TwoColumnBlock
        heading="Nice to meet you"
        bodyText="My goal is to provide a personal and relaxing experience.  I'm dedicated to helping you achieve a look that not only suits your lifestyle but also makes you feel empowered and refreshed. Ready to transform your look? Feel free to explore my services and book your appointment today!"
        image="/shaun.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={false}
      />
      <Footer theme="light" />
    </div>
  )
}
