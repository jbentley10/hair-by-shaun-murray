import Header from "../../components/header"
import TwoColumnBlock from "../../components/two-column-block"
import Footer from "../../components/footer"

export default function Page() {
  return (
    <div data-theme="dark">
      <Header theme="dark"/>
      <TwoColumnBlock
        heading="Hair artistry for X years"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care."
      />
      <TwoColumnBlock
        heading="Nice to meet you"
        bodyText="Hi, I'm Shaun! I've been styling hair professionally for over X years. Having honed my craft back east, I'm happy to be serving clients on the west coast. "
        image="/shaun.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={false}
      />
      <Footer theme="dark"/>
    </div>
  )
}
