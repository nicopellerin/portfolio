const sgMail = require("@sendgrid/mail")
const { SEND_GRID_API_KEY } = process.env

exports.handler = async (event) => {
  const payload = JSON.parse(event.body)
  const { name, email, subject, message } = payload

  sgMail.setApiKey(SEND_GRID_API_KEY)

  const html = `
    <h2>${name}</h2>
    <h4>${email}</h4>
    <h4>${subject}</h4>
    <p>${message}</p>
  `

  const msg = {
    to: process.env.SEND_GRID_EMAIL,
    from: process.env.SEND_GRID_EMAIL,
    subject: `Contact form - Nico Pellerin: ${subject}`,
    html: html,
  }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Email sent!",
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
