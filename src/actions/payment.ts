'use server'

import { client } from "@/lib/prisma"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  typescript: true,
  apiVersion: "2024-11-20.acacia" // Using the current stable version
})

export const onGetStripeClientSecret = async () => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "usd",
      amount: 9900,
      automatic_payment_methods: {
        enabled: true,
      }
    })

    if(paymentIntent){
      return { secret: paymentIntent.client_secret }
    }

  } catch (error) {
    return { status: 404, message: "Failed to load form" }
  }
}



export const onTransferCommission = async (destination: string) => {
    try {

        const transfer = await stripe.transfers.create({
            amount: 3960,
            currency: "usd",
            destination: destination,
        })

        if (transfer) {
            return { status: 200 }
        }

    } catch (error) {
        return { status: 404 }
    }
}


export const onGetActiveSubscription = async (groupId: string) => {
try {

    const subscription  = await client.subscription.findFirst({
        where: {
            groupId: groupId,
            active: true,
        }
    })

    if(subscription) {
        return { status: 200, subscription}
    }

    return { status: 400}

} catch (error) {
    return {status: 404}
}
}
