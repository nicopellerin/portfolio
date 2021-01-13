const sgMail = require("@sendgrid/mail")
const { SEND_GRID_API_KEY } = process.env

exports.handler = async (event, context, callback) => {
  const payload = JSON.parse(event.body)
  const { name, email, subject, message } = payload

  sgMail.setApiKey(SEND_GRID_API_KEY)

  const html = `
    name: ${name}
    email: ${email}
    subject: ${subject}
    message: ${message}
  `

  const msg = {
    to: process.env.SEND_GRID_EMAIL,
    from: email,
    subject: subject,
    html: html,
  }

  try {
    await sgMail.send(msg)

    return {
      statusCode: 200,
      body: "Email sent",
    }
  } catch (err) {
    return {
      statusCode: err.code,
      body: err.message,
    }
  }
}
