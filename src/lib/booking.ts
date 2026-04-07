import { runtimeConfig } from "@/lib/runtime";

type BookingPrefill = {
  name: string;
  email: string;
};

export const buildCalcomBookingUrl = ({ name, email }: BookingPrefill) => {
  const bookingUrl = new URL(runtimeConfig.calcomBookingUrl);
  bookingUrl.searchParams.set("name", name);
  bookingUrl.searchParams.set("email", email);
  return bookingUrl.toString();
};
