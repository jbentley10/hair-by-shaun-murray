import Header from "../../components/header"
import TwoColumnBlock from "../../components/two-column-block"
import Footer from "../../components/footer"

export default function Page() {
  return (
    <div data-theme="light">
      <Header theme="light" />
      <TwoColumnBlock
        heading="Book an appointment"
        bodyText="Book your appointment over the phone at 
(760) 333-3333."
      />
      {/* <TwoColumnBlock heading="Online Booking" reverse={false} /> */}
      {/* <iframe
        src="https://hairbyshaunmurray.salonmonster.com/client/index.php?layout=2"
        width="100%"
        style={{ minHeight: 600, maxWidth: 800, margin: "0 auto", marginBottom: "4rem" }}
      ></iframe> */}
      <Footer theme="light" />
    </div>
  )
}
