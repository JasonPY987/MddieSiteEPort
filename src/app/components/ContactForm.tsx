// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mblkjbbl");

  if (state.succeeded) {
    return (
      <div className="text-center p-8 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
        <div className="text-green-600 dark:text-green-400 text-lg font-semibold mb-2">
          Message Sent Successfully!
        </div>
        <p className="text-green-700 dark:text-green-300">
          Thank you for reaching out. I'll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <form className="w-full max-w-2xl mx-auto space-y-6 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 shadow-xl" onSubmit={handleSubmit}>
      {/* Honeypot field for additional bot protection */}
      <div className="absolute left-[-9999px]">
        <input
          type="text"
          name="bot-field"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-2">
        <label
          className="block text-lg font-semibold text-white"
          htmlFor="name"
        >
          Name *
        </label>
        <input
          className="w-full h-12 appearance-none rounded-lg border-0 px-4 text-gray-900 bg-white/90 backdrop-blur-sm outline-none ring-2 ring-inset ring-white/30 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 transition-all duration-200"
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          required
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </div>

      <div className="space-y-2">
        <label
          className="block text-lg font-semibold text-white"
          htmlFor="email"
        >
          Email Address *
        </label>
        <input
          className="w-full h-12 appearance-none rounded-lg border-0 px-4 text-gray-900 bg-white/90 backdrop-blur-sm outline-none ring-2 ring-inset ring-white/30 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 transition-all duration-200"
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email address"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </div>

      <div className="space-y-2">
        <label
          className="block text-lg font-semibold text-white"
          htmlFor="phone"
        >
          Phone Number
        </label>
        <input
          className="w-full h-12 appearance-none rounded-lg border-0 px-4 text-gray-900 bg-white/90 backdrop-blur-sm outline-none ring-2 ring-inset ring-white/30 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 transition-all duration-200"
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number (optional)"
        />
        <ValidationError 
          prefix="Phone" 
          field="phone"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </div>

      <div className="space-y-2">
        <label
          className="block text-lg font-semibold text-white"
          htmlFor="message"
        >
          Message *
        </label>
        <textarea
          className="w-full min-h-32 resize-y appearance-none rounded-lg border-0 px-4 py-3 text-gray-900 bg-white/90 backdrop-blur-sm outline-none ring-2 ring-inset ring-white/30 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 transition-all duration-200"
          id="message"
          name="message"
          placeholder="Tell me about your inquiry or project..."
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
          className="text-red-400 text-sm mt-1"
        />
      </div>

      {/* reCAPTCHA v2 Checkbox - Optional */}
      {/* 
      To enable reCAPTCHA:
      1. Go to https://www.google.com/recaptcha/admin
      2. Register your site and get site key and secret key
      3. Add the site key to your Formspree form settings
      4. Uncomment the div below and add your site key
      */}
      {/*
      <div className="flex justify-center">
        <div 
          className="g-recaptcha" 
          data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
        ></div>
      </div>
      */}

      {state.errors && Object.keys(state.errors).length > 0 && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
          <p className="text-red-600 dark:text-red-400 font-medium">
            There was an error submitting your message. Please try again.
          </p>
        </div>
      )}

      <div className="flex justify-center pt-4">
        <button
          className="w-full max-w-xs cursor-pointer rounded-lg bg-blue-600 hover:bg-blue-700 px-8 py-4 text-lg font-semibold text-white transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          type="submit"
          disabled={state.submitting}
        >
          {state.submitting ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Sending...</span>
            </div>
          ) : (
            "Send Message"
          )}
        </button>
      </div>

      {/* Privacy notice */}
      <p className="text-xs text-white/70 text-center">
        This form is protected by Formspree's spam filtering and bot detection.
      </p>
    </form>
  );
}