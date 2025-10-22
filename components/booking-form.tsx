"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { submitBookingForm } from "@/app/actions/booking"

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const formRef = useRef<HTMLFormElement>(null)

  const services = [
    "Looking for a new stylist",
    "Haircutting services",
    "Haircolor services",
    "Curly cut",
    "Color correction",
    "Extensions",
  ]

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)
    formData.append("services", selectedServices.join(", "))

    try {
      const result = await submitBookingForm(formData)
      if (result.success) {
        setSubmitStatus("success")
        formRef.current?.reset()
        setSelectedServices([])
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
        {/* Name Fields */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-base">
              First Name <span className="text-red-500">*</span>
            </Label>
            <Input id="firstName" name="firstName" required className="h-12" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-base">
              Last Name <span className="text-red-500">*</span>
            </Label>
            <Input id="lastName" name="lastName" required className="h-12" />
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-base">
            Phone Number
          </Label>
          <Input id="phone" name="phone" type="tel" className="h-12" />
        </div>

        {/* Services - Multiple Select */}
        <div className="space-y-3">
          <Label className="text-base">
            What brings you to our salon? <span className="text-red-500">*</span>
          </Label>
          <div className="space-y-3">
            {services.map((service) => (
              <div key={service} className="flex items-center space-x-3">
                <Checkbox
                  id={service}
                  checked={selectedServices.includes(service)}
                  onCheckedChange={() => handleServiceToggle(service)}
                />
                <Label htmlFor={service} className="font-normal cursor-pointer">
                  {service}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Hair Length */}
        <div className="space-y-3">
          <Label className="text-base">What is your hair length?</Label>
          <RadioGroup name="hairLength" className="space-y-2">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="short" id="short" />
              <Label htmlFor="short" className="font-normal cursor-pointer">
                Short
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="medium" id="medium" />
              <Label htmlFor="medium" className="font-normal cursor-pointer">
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="long" id="long" />
              <Label htmlFor="long" className="font-normal cursor-pointer">
                Long
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Hair Density */}
        <div className="space-y-3">
          <Label className="text-base">What is your hair density?</Label>
          <RadioGroup name="hairDensity" className="space-y-2">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="fine" id="fine" />
              <Label htmlFor="fine" className="font-normal cursor-pointer">
                Fine
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="medium-density" id="medium-density" />
              <Label htmlFor="medium-density" className="font-normal cursor-pointer">
                Medium
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="thick" id="thick" />
              <Label htmlFor="thick" className="font-normal cursor-pointer">
                Thick
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Hair Texture */}
        <div className="space-y-3">
          <Label className="text-base">What is your hair texture?</Label>
          <RadioGroup name="hairTexture" className="space-y-2">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="straight" id="straight" />
              <Label htmlFor="straight" className="font-normal cursor-pointer">
                Straight
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="wavy" id="wavy" />
              <Label htmlFor="wavy" className="font-normal cursor-pointer">
                Wavy
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="medium-curl" id="medium-curl" />
              <Label htmlFor="medium-curl" className="font-normal cursor-pointer">
                Medium Curl
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="tight-coils" id="tight-coils" />
              <Label htmlFor="tight-coils" className="font-normal cursor-pointer">
                Tight Coils
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Last Appointment */}
        <div className="space-y-3">
          <Label className="text-base">When was your last appointment?</Label>
          <RadioGroup name="lastAppointment" className="space-y-2">
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="6-weeks-or-less" id="6-weeks" />
              <Label htmlFor="6-weeks" className="font-normal cursor-pointer">
                6 weeks or less
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="2-3-months" id="2-3-months" />
              <Label htmlFor="2-3-months" className="font-normal cursor-pointer">
                2-3 months
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="4-6-months" id="4-6-months" />
              <Label htmlFor="4-6-months" className="font-normal cursor-pointer">
                4-6 months
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <RadioGroupItem value="1-year-plus" id="1-year-plus" />
              <Label htmlFor="1-year-plus" className="font-normal cursor-pointer">
                1 year+
              </Label>
            </div>
          </RadioGroup>
        </div>

        {/* Additional Notes */}
        <div className="space-y-2">
          <Label htmlFor="notes" className="text-base">
            Anything else you'd like to share?
          </Label>
          <Textarea id="notes" name="notes" rows={5} className="resize-none" />
        </div>

        {/* Photo Upload */}
        <div className="space-y-2">
          <Label htmlFor="photos" className="text-base">
            Please upload a current picture of your hair, along with any inspiration
          </Label>
          <Input id="photos" name="photos" type="file" accept="image/*" multiple className="h-12 cursor-pointer" />
          <p className="text-sm text-muted-foreground">You can upload up to 3 images</p>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting || selectedServices.length === 0}
          className="w-full h-12 text-base"
        >
          {isSubmitting ? "Submitting..." : "Submit Booking Request"}
        </Button>

        {/* Status Messages */}
        {submitStatus === "success" && (
          <div className="rounded-lg bg-green-50 p-4 text-green-800">
            Thank you! Your booking request has been submitted successfully. We'll be in touch soon!
          </div>
        )}
        {submitStatus === "error" && (
          <div className="rounded-lg bg-red-50 p-4 text-red-800">
            Sorry, there was an error submitting your request. Please try again or call us directly.
          </div>
        )}
      </form>
    </div>
  )
}
