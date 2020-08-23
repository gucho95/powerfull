const { SENDGRID_API_KEY, SENDGRID_EMAIL_RECIEVER } = process.env;
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(SENDGRID_API_KEY);

export default async (req, res) => {
  try {
    const { firstName, email, message } = req.body;
    const msg = {
      to: SENDGRID_EMAIL_RECIEVER,
      from: SENDGRID_EMAIL_RECIEVER,
      subject: "Email from powerfull.am",
      html: `
      <div>
      <p><b>FirstName : </b> ${firstName}</p>
      <p><b> Email : </b> ${email}</p>
      <p><b> Message : </b> ${message}</p>
      </div>
      `,
    };
    await sgMail.send(msg);
    return res.status(200).end();
  } catch (e) {
    console.log(e);
    return res.status(404).json({
      error: e,
    });
  }
};
