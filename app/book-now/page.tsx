import Header from "../../components/header"
import Footer from "../../components/footer"
import BookingForm from "../../components/booking-form"

export default function Page() {
  return (
    <div data-theme="light">
      <Header theme="light" />

      <div className="container mx-auto py-12">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Fill out the form below to request an appointment. We'll review your information and get back to you soon to
            confirm your booking!
          </p>
        </div>

        <BookingForm />

        <div className="text-center mt-12 pt-8 border-t">
          <p className="text-lg mb-2">Prefer to book over the phone?</p>
          <p className="text-2xl font-semibold">Call us at (760) 333-3333</p>
        </div>
      </div>

      <Footer theme="light" />
    </div>
  )
}
