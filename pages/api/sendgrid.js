import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENGRID_API_KEY);

async function sendEmail(req, res) {
    try {
        await sendgrid.send({
            to: "flow.ultimate.wroclaw@gmail.com",
            from: "flow.ultimate.wroclaw@gmail.com",
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
    } catch (error) {
        console.log(error.response.body.errors);
        return res.status(error.statusCode || 500).json({ error: error.message });
    }

    return res.status(200).json({ error: "" });
}

export default sendEmail;