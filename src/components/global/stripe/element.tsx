"use client";

import { useStripeElements } from "@/hooks/payment";
import { Elements } from "@stripe/react-stripe-js";

type StripeElementProps = {
  children: React.ReactNode;
};

export const StripeElements = ({ children }: StripeElementProps) => {
  const { StripePromise } = useStripeElements();

  const promise = StripePromise();

  return promise && <Elements stripe={promise}>{children}</Elements>;
};
