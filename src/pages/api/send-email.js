import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Create transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yogarudhajina@gmail.com',
        pass: 'bmxtfugobukcohlz' // App password
      }
    });

    // Email options
    const mailOptions = {
      from: 'yogarudhajina@gmail.com',
      to: 'yogarudhajina@gmail.com', // Send to your Gmail
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #667eea; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #667eea; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="background-color: #f1f3f4; padding: 15px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Reply to:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a>
            </p>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 12px;">
              Sent from your portfolio contact form
            </p>
          </div>
        </div>
      `,
      replyTo: email // Allow easy reply to the sender
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      message: 'Email sent successfully!',
      success: true 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      message: 'Failed to send email. Please try again.',
      success: false,
      error: error.message 
    });
  }
}
