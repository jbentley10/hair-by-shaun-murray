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
import imageCompression from "browser-image-compression"

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [selectedFiles, setSelectedFiles] = useState<File[]>([])
  const [totalFileSize, setTotalFileSize] = useState(0)
  const [isCompressing, setIsCompressing] = useState(false)
  const [sizeWarning, setSizeWarning] = useState("")
  const formRef = useRef<HTMLFormElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const MAX_TOTAL_SIZE = 1024 * 1024 // 1MB in bytes

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

  const calculateTotalSize = (files: File[]) => {
    return files.reduce((total, file) => total + file.size, 0)
  }

  const compressImage = async (file: File): Promise<File> => {
    const options = {
      maxSizeMB: 0.5, // Target 500KB per image
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }

    try {
      const compressedBlob = await imageCompression(file, options)

      // Create a new File object with the original filename and type to preserve them
      const compressedFile = new File([compressedBlob], file.name, {
        type: file.type,
        lastModified: Date.now(),
      })

      return compressedFile
    } catch (error) {
      console.error("Error compressing image:", error)
      return file // Return original if compression fails
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsCompressing(true)
    setSizeWarning("")

    // Only accept JPEG and PNG images for better compatibility
    const imageFiles = Array.from(files).filter((file) =>
      file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/jpg"
    )

    // Show warning if any files were rejected
    if (imageFiles.length < files.length) {
      setSizeWarning("Only PNG and JPEG/JPG images are supported. Other file types have been excluded.")
    }

    // Compress images
    const compressedFiles: File[] = []
    for (const file of imageFiles) {
      const compressed = await compressImage(file)
      compressedFiles.push(compressed)
    }

    // Check total size with new files
    const potentialFiles = [...selectedFiles, ...compressedFiles]
    const potentialTotalSize = calculateTotalSize(potentialFiles)

    if (potentialTotalSize > MAX_TOTAL_SIZE) {
      setSizeWarning(
        `Total file size would exceed 1MB limit (${(potentialTotalSize / 1024 / 1024).toFixed(2)}MB). Please remove some files or select smaller images.`
      )
      setIsCompressing(false)
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
      return
    }

    setSelectedFiles(potentialFiles)
    setTotalFileSize(potentialTotalSize)

    // Check if approaching limit (80% threshold)
    if (potentialTotalSize > MAX_TOTAL_SIZE * 0.8) {
      setSizeWarning(
        `You're approaching the 1MB limit (${(potentialTotalSize / 1024 / 1024).toFixed(2)}MB used). Consider removing files if you need to add more.`
      )
    }

    setIsCompressing(false)

    // Reset input so the same file can be selected again if needed
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleRemoveFile = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index)
    setSelectedFiles(newFiles)
    const newTotalSize = calculateTotalSize(newFiles)
    setTotalFileSize(newTotalSize)

    // Clear warning if we're back under the limit
    if (newTotalSize <= MAX_TOTAL_SIZE * 0.8) {
      setSizeWarning("")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    setSizeWarning("")

    const formData = new FormData(e.currentTarget)
    formData.append("services", selectedServices.join(", "))

    // Add all selected files to the form data
    selectedFiles.forEach((file) => {
      formData.append("photos", file)
    })

    try {
      const result = await submitBookingForm(formData)
      if (result.success) {
        setSubmitStatus("success")
        formRef.current?.reset()
        setSelectedServices([])
        setSelectedFiles([])
        setTotalFileSize(0)
      } else {
        setSubmitStatus("error")
        // Show server error as warning if it's about file size
        if (result.error && result.error.includes("file size")) {
          setSizeWarning(result.error)
        }
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
        <div className="space-y-3">
          <Label htmlFor="photos" className="text-base">
            Please upload a current picture of your hair, along with any inspiration
          </Label>
          <div>
            <Input
              ref={fileInputRef}
              id="photos"
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              multiple
              onChange={handleFileChange}
              disabled={isCompressing}
              className="h-12 cursor-pointer"
            />
            <div className="mt-2 space-y-1">
              <p className="text-sm text-muted-foreground">
                You can select multiple images at once. Images will be automatically compressed.
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">Note:</span> Only PNG and JPEG/JPG formats are accepted. Total file size must be under 1MB for email delivery.
              </p>
            </div>
          </div>

          {/* Compression Status */}
          {isCompressing && (
            <div className="flex items-center gap-2 p-3 bg-blue-50 text-blue-800 rounded-md">
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              <span className="text-sm">Compressing images...</span>
            </div>
          )}

          {/* Size Warning */}
          {sizeWarning && (
            <div className="p-3 bg-yellow-50 text-yellow-800 rounded-md">
              <p className="text-sm">{sizeWarning}</p>
            </div>
          )}

          {/* File List */}
          {selectedFiles.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Selected files ({selectedFiles.length}):</p>
                <p className="text-sm text-muted-foreground">
                  Total: {(totalFileSize / 1024).toFixed(0)} KB / 1024 KB
                </p>
              </div>
              <div className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between p-3 bg-muted rounded-md"
                  >
                    <div className="flex items-center gap-2 flex-1 min-w-0">
                      <svg
                        className="w-5 h-5 text-muted-foreground flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="text-sm truncate">{file.name}</span>
                      <span className="text-xs text-muted-foreground flex-shrink-0">
                        ({Math.round(file.size / 1024)} KB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(index)}
                      className="ml-2 p-1 hover:bg-background rounded transition-colors flex-shrink-0"
                      aria-label={`Remove ${file.name}`}
                    >
                      <svg className="w-5 h-5 text-muted-foreground hover:text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
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
