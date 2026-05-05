import { supabase } from "@/integrations/supabase/client";
import { buildCalcomBookingUrl } from "@/lib/booking";
import { hasWebhookUrl, runtimeConfig } from "@/lib/runtime";

type DiagnosticLeadPayload = {
  token: string;
  leadData: {
    name: string;
    email: string;
    company: string;
    teamSize: string;
    biggestChallenge: string;
    source?: string;
  };
};

type DiagnosticOrderPayload = {
  currency: string;
  leadData: {
    name: string;
    email: string;
    source: string;
  };
  token: string;
};

type DiagnosticVerificationPayload = {
  payment: {
    razorpay_payment_id: string;
    razorpay_order_id: string;
    razorpay_signature: string;
  };
  leadData: {
    name: string;
    email: string;
    source: string;
  };
};

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
  source: string;
};

type ScoreAnswerPayload = {
  dimension: string;
  score: number;
};

type ScoreDimensionPayload = {
  dimension: string;
  score: number;
  maxScore: number;
  percent: number;
};

type OperationsScorePayload = {
  name: string;
  email: string;
  company: string;
  score: number;
  band: string;
  interpretation: string;
  answers: ScoreAnswerPayload[];
  dimensions: ScoreDimensionPayload[];
  submittedAt: string;
  source: string;
};

type OrderResponse = {
  orderId: string;
  keyId: string;
  amount: number;
  currency: string;
};

type VerificationResponse = {
  bookingUrl: string;
  verified: boolean;
};

const requestJson = async <T>(url: string, payload: unknown): Promise<T> => {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await response.json().catch(() => null);
  if (!response.ok) {
    const message =
      body?.error ||
      body?.message ||
      `Request failed with status ${response.status}`;
    throw new Error(message);
  }

  if (body?.error) {
    throw new Error(body.error);
  }

  return body as T;
};

export const submitContactInquiry = async (payload: ContactPayload) => {
  const response = await requestJson<{ status?: string; success?: boolean }>(
    runtimeConfig.contactWebhookUrl,
    payload
  );

  if (
    response.success === true ||
    response.status === "accepted" ||
    response.status === "ok"
  ) {
    return response;
  }

  throw new Error("Contact webhook did not accept the submission.");
};

export const submitOperationsScore = async (payload: OperationsScorePayload) => {
  const response = await requestJson<{ status?: string; success?: boolean }>(
    runtimeConfig.scoreWebhookUrl,
    payload
  );

  if (
    response.success === true ||
    response.status === "accepted" ||
    response.status === "ok"
  ) {
    return response;
  }

  throw new Error("Score webhook did not accept the submission.");
};

export const submitDiagnosticLead = async (payload: DiagnosticLeadPayload) => {
  if (hasWebhookUrl(runtimeConfig.diagnosticLeadWebhookUrl)) {
    return requestJson<{ status?: string; success?: boolean }>(
      runtimeConfig.diagnosticLeadWebhookUrl,
      payload
    );
  }

  const { data, error: invokeError } = await supabase.functions.invoke(
    "submit-lead",
    { body: payload }
  );

  if (invokeError) {
    let errorMessage = "Secure proxy insertion failed";
    if (invokeError.context) {
      try {
        const errData = await invokeError.context.json();
        if (errData.error) errorMessage = errData.error;
      } catch {
        // ignore non-json response
      }
    }
    throw new Error(errorMessage);
  }

  if (data?.error) {
    throw new Error(data.error);
  }

  return data;
};

export const createDiagnosticOrder = async (
  payload: DiagnosticOrderPayload
): Promise<OrderResponse> => {
  if (hasWebhookUrl(runtimeConfig.razorpayOrderWebhookUrl)) {
    const data = await requestJson<{
      orderId?: string;
      keyId?: string;
      amount?: number;
      currency?: string;
      data?: OrderResponse;
    }>(runtimeConfig.razorpayOrderWebhookUrl, payload);

    const result = data.data ?? (data as OrderResponse);
    if (!result.orderId || !result.keyId || !result.amount) {
      throw new Error("Payment order response is missing required fields.");
    }
    return result;
  }

  const { data, error } = await supabase.functions.invoke("create-razorpay-order", {
    body: { currency: payload.currency },
  });

  if (error) throw error;
  if (data?.error) throw new Error(data.error);

  return {
    orderId: data.orderId,
    keyId: data.keyId,
    amount: data.amount,
    currency: data.currency,
  };
};

export const verifyDiagnosticPayment = async (
  payload: DiagnosticVerificationPayload
): Promise<VerificationResponse> => {
  if (hasWebhookUrl(runtimeConfig.razorpayVerifyWebhookUrl)) {
    const data = await requestJson<{
      bookingUrl?: string;
      verified?: boolean;
    }>(runtimeConfig.razorpayVerifyWebhookUrl, payload);

    return {
      bookingUrl:
        data.bookingUrl ||
        buildCalcomBookingUrl({
          name: payload.leadData.name,
          email: payload.leadData.email,
        }),
      verified: data.verified !== false,
    };
  }

  return {
    bookingUrl: buildCalcomBookingUrl({
      name: payload.leadData.name,
      email: payload.leadData.email,
    }),
    verified: false,
  };
};
