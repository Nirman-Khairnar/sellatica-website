import { runtimeConfig } from "@/lib/runtime";

type BookingPrefill = {
  name: string;
  email: string;
};

export const buildCalcomBookingUrl = (
  { name, email }: BookingPrefill,
  extraParams: Record<string, string> = {},
) => {
  const bookingUrl = new URL(runtimeConfig.calcomBookingUrl);
  bookingUrl.searchParams.set("name", name);
  bookingUrl.searchParams.set("email", email);
  for (const [key, value] of Object.entries(extraParams)) {
    if (value.trim()) {
      bookingUrl.searchParams.set(key, value);
    }
  }
  return bookingUrl.toString();
};
