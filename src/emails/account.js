const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.sgAPI)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'toshjais@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}.Let me know how you get along with the app.`
    })
}

const CancelationMail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'toshjais@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}
module.exports = {
    sendWelcomeEmail,
    CancelationMail
}