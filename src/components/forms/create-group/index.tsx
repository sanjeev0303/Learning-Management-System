import { StripeElements } from "@/components/global/stripe/element";
import React from "react";
import PaymentForm from "./payment-form";

type CreateGroupProps = {
  userId: string;
  affiliate: boolean;
  stripeId: string;
};

const CreateGroup = ({ userId, affiliate, stripeId }: CreateGroupProps) => {
  return (
    <StripeElements>
      <PaymentForm userId={userId} affiliate={affiliate} stripeId={stripeId} />
    </StripeElements>
  );
};

export default CreateGroup;
