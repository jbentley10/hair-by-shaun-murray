import Header from "../../components/header"
import TwoColumnBlock from "../../components/two-column-block"
import Gallery from "../../components/gallery"
import Footer from "../../components/footer"

export default function Page() {
  return (
    <div data-theme="light">
      <Header theme="light" />
      <TwoColumnBlock
        heading="Gallery"
        bodyText="View examples of some of my recent work below."
      />
      <Gallery hasButton={false} isGrid={true} />
      <Footer theme="light" />
    </div>
  )
}
