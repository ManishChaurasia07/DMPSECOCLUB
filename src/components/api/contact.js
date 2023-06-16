import sgMail from '@sendgrid/mail';

export default async (req, res) => {
  try {
    const { name, email, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: 'your-email@example.com', // Replace with your email
      from: email,
      subject: `New message from ${name}`,
      text: message,
    };

    await sgMail.send(msg);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to send email.' });
  }
};
