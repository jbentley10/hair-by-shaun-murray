import Header from "../../header";
import TwoColumnBlock from "../../two-column-block";
import Footer from "../../footer";

export default function Page() {
    return (
        <div>
            <Header />
            <TwoColumnBlock
                heading="Book an appointment"
                bodyText="Easily book appointments online using our interactive agent. Prefer booking over the phone? Reach us at 
(760) 333-3333."
            />
            <TwoColumnBlock
                heading="Online Booking"
                bodyText="iFrame goes here"            
                reverse={false}
            />            
            <Footer />
        </div>
    );
}
