import Header from "../../components/header"
import TwoColumnBlock from "../../components/two-column-block"
import Footer from "../../components/footer"

export default function Page() {
  const hairBodyText = `
  <div>
    <h2>Haircuts</h2>
    <ul style="list-style: disc; margin: 2rem 0 2rem 2rem;">
      <li>Short Hair: $60+</li>
      <li>Long Hair: $90+</li>
      <li>Clipper cut / Buzz cut: $50+</li>
      <li>Beard trim: $40</li>
      <li>Bang face frame: $40</li>
      <li>Note: Add beard trim on for $20</li>
    </ul>
    <h2>Color</h2>
    <ul style="list-style: disc; margin: 2rem 0 2rem 2rem;">
      <li>Single-process color (roots only): $100+</li>
      <li>Partial highlight: $120+</li>
      <li>Full highlight: $200+</li>
      <li>Full color (roots to ends): $150+</li>
      <li>Balayage: $240+</li>
      <li>Toner: $65+</li>
      <li>Mini Foil $80</li>
      <li>+ Additional Color $35</li>
      <li>+ Glaze / Toner / Base Break $50</li>
    </ul>
    <h2>Combinations</h2>
    <ul style="list-style: disc; margin: 2rem 0 2rem 2rem;">
    <li>Short color + cut: $120+</li>
    <li>Bleach + tone: $140</li>
    <li>Color correction (based on consultation): $100/hr</li>
    </ul>
  </div>`;

  const treatmentsBodyText = `
  <div>    
    <ul style="list-style: disc; margin: 2rem 0 2rem 2rem;">
      <li>Keratin complex smoothing treatment (3-5 months for results): $300+</li>
      <li>Express blowout: $150+</li>
      <li>Protein repair treatment: $50</li>
      <li>Eyebrow / lip / brow waxing (each wax): $30</li>
      <li>Chin wax: $30+</li>
      <li>Scalp treatment: $50</li>
    </ul>
  </div>
  `;

  const stylingBodyText = `
  <div>    
    <ul style="list-style: disc; margin: 2rem 0 2rem 2rem;">
      <li>Blowout (with shampoo + conditioner blow dry): $75</li>
      <li>Blowout (with shampoo + conditioner blow dry) with Iron finish: $150</li>
      <li>Formal blowout (whole head curl/pin curl) (with shampoo + conditioner blow dry) with Iron finish: $150+</li>
    </ul>
  </div>
  `;
  return (
    <div data-theme="light">
      <Header theme="light"/>
      <TwoColumnBlock
        heading="Services tailored to you"
        bodyText="Hair artistry in Palm Springs, where style meets personalized care."
      />
      <TwoColumnBlock
        heading="Haircuts"
        bodyText={hairBodyText}
        buttonLink="/services"
        buttonText="Book Your Appointment"
        image="/hair-10.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={false}
      />
      <TwoColumnBlock
        heading="Treatments / Smoothing Systems"
        bodyText={treatmentsBodyText}
        buttonLink="/services"
        buttonText="Book Your Appointment"
        image="/hair-2.webp?height=600&width=600"
        imageAlt="Hair color transformation showing before and after - blonde hair transformed to vibrant purple"
        reverse={true}
      />
      <TwoColumnBlock
        heading="Styling"
        bodyText={stylingBodyText}
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
