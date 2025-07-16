import Header from "../../components/header"
import TwoColumnBlock from "../../components/two-column-block"
import Gallery from "../../components/gallery"
import Footer from "../../components/footer"

export default function Page() {
  return (
    <div data-theme="dark">
      <Header theme="dark"/>
      <TwoColumnBlock
        heading="Gallery"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care."
      />
      <Gallery hasButton={false} />
      <Footer />
    </div>
  )
}
