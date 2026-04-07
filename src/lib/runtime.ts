export const runtimeConfig = {
  contactWebhookUrl:
    import.meta.env.VITE_CONTACT_WEBHOOK_URL ||
    "https://n8n.sellatica.in/webhook/sellatica/company-contact-web-v1",
  diagnosticLeadWebhookUrl:
    import.meta.env.VITE_DIAGNOSTIC_LEAD_WEBHOOK_URL ||
    "https://n8n.sellatica.in/webhook/sellatica/company-diagnostic-lead-v1",
  razorpayOrderWebhookUrl:
    import.meta.env.VITE_RAZORPAY_ORDER_WEBHOOK_URL ||
    "https://n8n.sellatica.in/webhook/sellatica/razorpay-diagnostic-order-v1",
  razorpayVerifyWebhookUrl:
    import.meta.env.VITE_RAZORPAY_VERIFY_WEBHOOK_URL ||
    "https://n8n.sellatica.in/webhook/sellatica/razorpay-diagnostic-verify-v1",
  calcomBookingUrl:
    import.meta.env.VITE_CALCOM_BOOKING_URL ||
    "https://cal.com/sellatica-official/introductory-call",
};

export const hasWebhookUrl = (value: string) => value.trim().length > 0;
