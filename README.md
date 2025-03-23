# Supreme Information Security LLC Website

## Email Configuration

To enable the contact form email functionality, you need to set up the following environment variables:

### Required Environment Variables

- `EMAIL_SERVER`: Your SMTP server (e.g., smtp.gmail.com)
- `EMAIL_PORT`: SMTP port (typically 587 for TLS or 465 for SSL)
- `EMAIL_SECURE`: Set to "true" for port 465, "false" for other ports
- `EMAIL_USER`: Your email username/address
- `EMAIL_PASSWORD`: Your email password or app password
- `EMAIL_FROM`: The sender email address (e.g., "Supreme InfoSec <noreply@example.com>")

### Setting Up Gmail

If you're using Gmail, you'll need to:

1. Enable 2-Factor Authentication on your Google account
2. Create an "App Password" specifically for this application
3. Use that App Password instead of your regular Gmail password

### Testing Email Functionality

After setting up the environment variables, you can test the email functionality by:

1. Filling out the contact form on the website
2. Check the logs in Vercel for any error messages
3. Check both the inbox and spam folder of the recipient email

### Troubleshooting

If emails are not being sent:

1. Verify all environment variables are set correctly
2. Check if your email provider blocks automated emails
3. Look for error messages in the Vercel logs
4. Try using a different email provider if necessary

### Email Template

The contact form emails use a custom HTML template that includes:
- Sender's name, email, and company
- Selected service type
- The message content
- Proper styling for readability

You can modify the email template in `lib/email-template.tsx`.

