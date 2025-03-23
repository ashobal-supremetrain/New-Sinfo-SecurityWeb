interface EmailTemplateProps {
  name: string
  email: string
  company?: string
  serviceType?: string
  message: string
}

export function generateEmailHTML({ name, email, company, serviceType, message }: EmailTemplateProps): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
        }
        .container {
          padding: 20px;
          border: 1px solid #e0e0e0;
          border-radius: 5px;
        }
        .header {
          background-color: #1e40af;
          color: white;
          padding: 15px;
          border-radius: 5px 5px 0 0;
          margin: -20px -20px 20px;
        }
        .footer {
          margin-top: 30px;
          font-size: 12px;
          color: #666;
          border-top: 1px solid #e0e0e0;
          padding-top: 15px;
        }
        .field {
          margin-bottom: 15px;
        }
        .label {
          font-weight: bold;
          margin-bottom: 5px;
        }
        .message-content {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 5px;
          border-left: 4px solid #1e40af;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2 style="margin: 0;">New Contact Form Submission</h2>
        </div>
        
        <div class="field">
          <div class="label">Name:</div>
          <div>${name}</div>
        </div>
        
        <div class="field">
          <div class="label">Email:</div>
          <div>${email}</div>
        </div>
        
        ${
          company
            ? `
        <div class="field">
          <div class="label">Company:</div>
          <div>${company}</div>
        </div>
        `
            : ""
        }
        
        ${
          serviceType
            ? `
        <div class="field">
          <div class="label">Service Type:</div>
          <div>${serviceType}</div>
        </div>
        `
            : ""
        }
        
        <div class="field">
          <div class="label">Message:</div>
          <div class="message-content">${message.replace(/\n/g, "<br>")}</div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the contact form on Supreme Information Security LLC website.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

