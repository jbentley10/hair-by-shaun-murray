import Header from "../../components/header"
import TwoColumnBlock from "../../components/two-column-block"
import Footer from "../../components/footer"

export default function Page() {
  return (
    <div data-theme="light">
      <Header />
      <TwoColumnBlock
        heading="Book an appointment"
        bodyText="Easily book appointments online using our interactive agent. Prefer booking over the phone? Reach us at 
(760) 333-3333."
      />
      <TwoColumnBlock heading="Online Booking" bodyText="iFrame goes here" reverse={false} />
      <iframe src="https://ronsmith.salonmonster.com/client/index.php?layout=2" width='100%' min-width='630px' style={{minHeight: 600}}></iframe>
      <Footer />
    </div>
  )
}
