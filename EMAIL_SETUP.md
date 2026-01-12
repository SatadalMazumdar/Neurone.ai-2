# Email Setup Instructions

The contact form is configured to send emails to `neurone.institute.dev@gmail.com`.

## ✅ RECOMMENDED: Web3Forms (Simplest Setup - 5 minutes)

This is the **easiest and fastest** way to get your contact form working!

### Setup Steps:

1. **Get Your Access Key** (2 minutes)
   - Go to [https://web3forms.com/](https://web3forms.com/)
   - Enter your email: `neurone.institute.dev@gmail.com`
   - Click "Get Access Key"
   - Copy the access key you receive (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

2. **Verify Your Email** (1 minute)
   - Check the inbox of `neurone.institute.dev@gmail.com`
   - Click the verification link in the email from Web3Forms

3. **Update the Code** (2 minutes)
   - Open `pages/Home.tsx`
   - Find line ~52 where it says: `const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';`
   - Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key
   - Example: `const WEB3FORMS_ACCESS_KEY = 'abc123-def456-ghi789';`

4. **Test It!**
   - Save the file
   - Fill out your contact form
   - Check `neurone.institute.dev@gmail.com` for the email

### Features:
- ✅ **FREE** - 250 submissions/month
- ✅ **No Account Required** - Just verify email
- ✅ **Instant Setup** - Works immediately
- ✅ **Spam Protection** - Built-in
- ✅ **Reliable** - 99.9% uptime

---

## Alternative: EmailJS (More Customizable)

If you need more customization or email templates:

### Setup Steps:

1. **Create EmailJS Account**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account (200 emails/month)

2. **Create Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Select "Gmail"
   - Connect `neurone.institute.dev@gmail.com`
   - Note the **Service ID** (e.g., `service_neurone`)

3. **Create Email Template**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template:

```
Subject: New Inquiry from {{from_name}}

Name: {{from_name}}
Phone: {{phone}}
Course: {{course}}

Message:
{{message}}

---
This inquiry was submitted through the Neurone.in website.
```

4. **Get Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Update the Code**
   - Open `pages/Home.tsx`
   - Find the commented out "OPTION 2: Using EmailJS" section (around line ~75)
   - Uncomment that section and comment out the Web3Forms section
   - Replace these values:
     - `YOUR_SERVICE_ID` → your Service ID
     - `YOUR_TEMPLATE_ID` → your Template ID
     - `YOUR_PUBLIC_KEY` → your Public Key

---

## 🚀 Quick Start (Web3Forms - Recommended)

```bash
# 1. Get your access key from https://web3forms.com
# 2. Replace in pages/Home.tsx line 52:
const WEB3FORMS_ACCESS_KEY = 'your-actual-access-key-here';

# 3. That's it! Test your form
```

---

## 🧪 Testing

1. Run your development server: `bun run dev`
2. Navigate to the contact section
3. Fill out the form with test data
4. Click "Send Inquiry"
5. You should see a success message
6. Check `neurone.institute.dev@gmail.com` inbox

---

## 🐛 Troubleshooting

### Web3Forms Issues:

- **"Oops! Something went wrong"**
  - Check if you replaced `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
  - Verify your email is confirmed on Web3Forms
  - Check browser console for error messages

- **Email not received**
  - Check spam/junk folder
  - Verify the email address in Web3Forms dashboard
  - Make sure you verified your email

- **Form stuck on "Sending..."**
  - Check your internet connection
  - Open browser console (F12) to see error details
  - Verify Web3Forms service is online: [https://web3forms.com/status](https://web3forms.com/status)

### EmailJS Issues:

- **401 Error**: Public Key is incorrect
- **404 Error**: Service ID or Template ID is wrong
- **Email not received**: Check spam folder, verify Gmail connection in EmailJS dashboard

---

## 📧 Email Format

When someone submits the form, you'll receive an email like this:

```
Subject: New Inquiry from John Doe

Name: John Doe
Phone: +91 98765 43210
Course: NEET (UG) Preparation

Message:
I want to know more about the NEET coaching program and fees.

---
This inquiry was submitted through the Neurone.in website contact form.
```

---

## 🔒 Security Note

The access key is safe to include in client-side code because:
- Web3Forms validates the domain/origin
- The key is tied to your verified email
- It can only send emails to your verified email address

For additional security, you can:
1. Set up domain restrictions in Web3Forms dashboard
2. Enable CAPTCHA protection
3. Set rate limiting
