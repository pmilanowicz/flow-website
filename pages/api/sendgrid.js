import sendgrid from "@sendgrid/mail";
import { emailAddress } from "../../types";

sendgrid.setApiKey(process.env.SENGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    const result = await sendgrid.send({
      to: emailAddress,
      from: emailAddress,
      subject: `[Formularz kontaktowy flowwroclaw.pl]: ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
        <head>
            <meta charset="utf-8">
        
            <title>Flow Wrocław</title>
            <meta name="description" content="Flow Wrocław">
            <meta name="author" content="Flow Wrocław">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
        </head>
        
        <body>
                <h3>Zapytanie od: ${req.body.email}</h3>
                <div style="font-size: 16px;">
                    <p>Treść:</p>
                    <p>${req.body.message}</p>
                    <br/ >
                </div>
        </body>
      </html>`,
    });
    console.log('successfully sent', result);
  } catch (error) {
    console.log('error when sending e-mail', error);

    return res.status(error.statusCode || 500).json({error: error.message});
  }

  return res.status(200).json({error: ""});
}

export default sendEmail;
