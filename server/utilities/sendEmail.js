import nodemailer from "nodemailer"
export const sendEmail = async(subject, message, sender, recipient, reply_to) => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		service: 'gmail',
		port: 587,
		secure: true,
		auth: {
			user: process.env.USER_EMAIL,
			pass: process.env.EMAIL_PASSWORD,
		},
		tls: {
			rejectUnauthorized: false
		}
	})
	const options = {
		from: sender,
		to: recipient,
		replyTo: reply_to,
		subject: subject,
		html: message
	}
	transporter.sendMail(options, function(error, data) {
		if (error) {
			console.log(error)
		} else {
			console.log(data)
		}
	})
}