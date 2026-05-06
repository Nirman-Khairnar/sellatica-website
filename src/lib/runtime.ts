const n8nWebhookBaseUrl = (
  import.meta.env.VITE_N8N_WEBHOOK_BASE_URL || "https://n8n.sellatica.tech"
).replace(/\/+$/, "");

export const runtimeConfig = {
  contactWebhookUrl:
    import.meta.env.VITE_CONTACT_WEBHOOK_URL ||
    `${n8nWebhookBaseUrl}/webhook/sellatica/company-contact-web-v1`,
  scoreWebhookUrl:
    import.meta.env.VITE_SCORE_WEBHOOK_URL ||
    `${n8nWebhookBaseUrl}/webhook/sellatica/company-operations-score-v1`,
  diagnosticLeadWebhookUrl:
    import.meta.env.VITE_DIAGNOSTIC_LEAD_WEBHOOK_URL ||
    `${n8nWebhookBaseUrl}/webhook/sellatica/company-diagnostic-lead-v1`,
  razorpayOrderWebhookUrl:
    import.meta.env.VITE_RAZORPAY_ORDER_WEBHOOK_URL ||
    `${n8nWebhookBaseUrl}/webhook/sellatica/razorpay-diagnostic-order-v1`,
  razorpayVerifyWebhookUrl:
    import.meta.env.VITE_RAZORPAY_VERIFY_WEBHOOK_URL ||
    `${n8nWebhookBaseUrl}/webhook/sellatica/razorpay-diagnostic-verify-v1`,
  calcomBookingUrl:
    import.meta.env.VITE_CALCOM_BOOKING_URL ||
    "https://cal.com/sellatica-official/strategy-review",
};

export const hasWebhookUrl = (value: string) => value.trim().length > 0;
