import Header from "../components/header";
import TwoColumnBlock from "../components/two-column-block";
import Testimonials from "../testimonials";
import Gallery from "../components/gallery";
import Footer from "../components/footer";

export default function Page() {
  return (
    <div data-theme="light">
      <Header theme="light" />
      <TwoColumnBlock
        heading="Expert Styling for Your Signature Look"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care. Come experience luxury hair services tailored to your unique vision."
        buttonLink="/book-now"
        buttonText="Book Your Appointment"
        image="/hair-11.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        hero={true}
      />
      <TwoColumnBlock
        heading="Nice to meet you"
        bodyText="My goal is to provide a personal and relaxing experience.  I'm dedicated to helping you achieve a look that not only suits your lifestyle but also makes you feel empowered and refreshed. Ready to transform your look? Feel free to explore my services and book your appointment today!"
        image="/shaun.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={true}
      />
      <Testimonials />
      <TwoColumnBlock
        heading="Expert Color Artistry"
        bodyText="Master colorists specializing in balayage, foiling, and dimensional techniques that enhance your natural beauty. We blend art and science for stunning, long-lasting results."
        buttonLink="/services"
        buttonText="Explore Services"
        image="/blonde-highlights.webp?height=600&width=500"
        imageAlt="Beautiful blonde hair with professional highlights and lowlights showing expert color artistry and dimensional techniques"
        reverse={true}
      />
      <Gallery hasButton={true} limit={3} />
      <Footer theme="light" />
    </div>
  );
}
