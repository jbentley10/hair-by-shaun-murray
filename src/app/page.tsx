/**
 * @file page.tsx
 */
// Import components and utils
import { Button } from "@/components/ui/button";
import { fetchBlocksBySlug } from "../lib/contentfulData";
import Content from "./content";
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "@/components/image-carousel";
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

// Set metadata
export const metadata = {
  title: "Home | Example app",
  description: "This app uses NextJS and Contentful.",
};

export default async function Home() {
  const blocksEnglish = await fetchBlocksBySlug("home", "en-US");
  const blocksSpanish = await fetchBlocksBySlug("home", "es");

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <main className='flex flex-col items-center justify-between lg:p-24 xs:p-4'>
      {english && spanish && (
        <Content
          key={Math.random()}
          englishBlocks={english}
          spanishBlocks={spanish}
        />
      )}
      ;
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">Hair by Shaun Murray</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-white/90">
            Creating beautiful, personalized styles that express your unique personality
          </p>
          <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-white/90">
            <Link href="https://booking.hairbyshaun.com" target="_blank">
              Book an Appointment
            </Link>
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8 md:flex-row">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Shaun Murray Hair Stylist"
                width={500}
                height={500}
                className="rounded-full object-cover shadow-lg"
                priority
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">Meet Shaun</h2>
              <p className="mb-6 text-lg text-gray-600">
                With over 10 years of experience in the industry, I specialize in creating personalized styles that
                enhance your natural beauty and fit your lifestyle. My passion is making you look and feel your absolute
                best!
              </p>
              <p className="mb-6 text-lg text-gray-600">
                Whether you're looking for a complete transformation or a subtle refresh, I'm dedicated to providing
                exceptional service in a relaxed, friendly environment.
              </p>
              <Button asChild variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50">
                <Link href="/about">Learn More About Me</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Carousel Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">Featured Styles</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600">
            Browse through some of my recent work and get inspired for your next visit
          </p>

          <div className="mx-auto max-w-4xl">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">My Services</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            I offer a wide range of services to meet all your hair styling needs
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service Card 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Precision Cuts</h3>
              <p className="text-gray-600">
                Custom haircuts tailored to your face shape, hair texture, and personal style. Includes consultation,
                shampoo, and styling.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Color & Highlights</h3>
              <p className="text-gray-600">
                From subtle highlights to bold fashion colors, I create dimensional, vibrant results that enhance your
                natural beauty.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Styling & Blowouts</h3>
              <p className="text-gray-600">
                Perfect for special occasions or just because. Get a professional blowout that will make your hair look
                and feel amazing.
              </p>
            </div>

            {/* Service Card 4 */}
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Extensions</h3>
              <p className="text-gray-600">
                Add length, volume, or both with premium quality hair extensions that blend seamlessly with your natural
                hair.
              </p>
            </div>

            {/* Service Card 5 */}
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Treatments</h3>
              <p className="text-gray-600">
                Restore and maintain healthy hair with deep conditioning, keratin, and other specialized treatments for
                all hair types.
              </p>
            </div>

            {/* Service Card 6 */}
            <div className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
              <h3 className="mb-3 text-xl font-bold text-gray-800">Bridal & Event</h3>
              <p className="text-gray-600">
                Complete styling services for weddings and special events, including trials, on-site services, and group
                bookings.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="https://booking.hairbyshaun.com" target="_blank">
                Book an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-800">Client Love</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600">
            Don't just take my word for it - here's what my clients have to say
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-purple-200">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Client" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Regular Client</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Shaun is amazing! He really listens to what I want and always makes my hair look better than I could
                have imagined. I won't go to anyone else!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-purple-200">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Client" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Michael Torres</h4>
                  <p className="text-sm text-gray-500">New Client</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "First time visiting Shaun and I'm already booking my next appointment. He took the time to understand
                exactly what I wanted and delivered perfectly."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full bg-purple-200">
                  <Image src="/placeholder.svg?height=48&width=48" alt="Client" width={48} height={48} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Emily Chen</h4>
                  <p className="text-sm text-gray-500">Loyal Client</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "I've been going to Shaun for years and he never disappoints. He's incredibly talented and keeps up with
                all the latest trends and techniques."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Map and Contact */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Map */}
            <div className="h-[300px] overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00425492396897!3d40.71256097932915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2sBroadway%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1712509577046!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon Location"
              ></iframe>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5 text-purple-400" />
                    <span>123 Style Street, New York, NY 10001</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="mr-3 h-5 w-5 text-purple-400" />
                    <span>(212) 555-1234</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="mr-3 h-5 w-5 text-purple-400" />
                    <span>hello@hairbyshaun.com</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="mr-3 h-5 w-5 text-purple-400" />
                    <div>
                      <p>Tuesday - Friday: 10am - 7pm</p>
                      <p>Saturday: 9am - 5pm</p>
                      <p>Sunday & Monday: Closed</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold">Follow Me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-purple-600 p-2 transition-colors hover:bg-purple-500"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-purple-600 p-2 transition-colors hover:bg-purple-500"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="https://booking.hairbyshaun.com" target="_blank">
                    Book an Appointment
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Hair by Shaun Murray. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
