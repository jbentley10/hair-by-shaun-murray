"use server"

// Update this email address to where you want to receive booking notifications
const NOTIFICATION_EMAIL = "shaunmurray77@gmail.com"

export async function submitBookingForm(formData: FormData) {
  try {
    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const phone = formData.get("phone") as string
    const services = formData.get("services") as string
    const hairLength = formData.get("hairLength") as string
    const hairDensity = formData.get("hairDensity") as string
    const hairTexture = formData.get("hairTexture") as string
    const lastAppointment = formData.get("lastAppointment") as string
    const notes = formData.get("notes") as string

    // Create submission object
    const submission = {
      firstName,
      lastName,
      phone,
      services,
      hairLength,
      hairDensity,
      hairTexture,
      lastAppointment,
      notes,
      submittedAt: new Date().toISOString(),
    }

    // Send email notification
    await sendEmailNotification(submission)

    return { success: true }
  } catch (error) {
    console.error("[v0] Error submitting booking form:", error)
    return { success: false, error: "Failed to submit form" }
  }
}

async function sendEmailNotification(submission: any) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === "") {
    console.log("[v0] Skipping email notification - RESEND_API_KEY not configured")
    return
  }

  const emailBody = `
New Booking Request

Name: ${submission.firstName} ${submission.lastName}
Phone: ${submission.phone || "Not provided"}

Services Requested: ${submission.services}

Hair Details:
- Length: ${submission.hairLength || "Not specified"}
- Density: ${submission.hairDensity || "Not specified"}
- Texture: ${submission.hairTexture || "Not specified"}
- Last Appointment: ${submission.lastAppointment || "Not specified"}

Additional Notes:
${submission.notes || "None"}

Submitted: ${new Date(submission.submittedAt).toLocaleString()}
  `

  try {
    // Using Resend for email sending
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Hair by Shaun Murray <bookings@hairbyshaunmurray.com>",
        to: [NOTIFICATION_EMAIL],
        subject: `New Booking Request from ${submission.firstName} ${submission.lastName}`,
        text: emailBody,
      }),
    })

    if (!response.ok) {
      console.error("[v0] Email sending failed:", await response.text())
    }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    // Don't throw - we still want the form submission to succeed even if email fails
  }
}
