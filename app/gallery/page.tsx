import Header from "../../header"
import TwoColumnBlock from "../../two-column-block"
import Gallery from "../../gallery"
import Footer from "../../footer"

export default function Page() {
  return (
    <div>
      <Header />
      <TwoColumnBlock
        heading="Gallery"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care."
      />
      <Gallery />
      <Footer />
    </div>
  )
}
