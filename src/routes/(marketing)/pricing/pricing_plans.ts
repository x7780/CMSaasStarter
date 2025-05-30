export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$4.9",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RNy0WQx2rfGRBK0bcfvXPky",
    stripe_product_id: "prod_SIZ8W068RkcHYM",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to test the upgrade experience. Try buying this with the test credit card 4242424242424242.",
    price: "$99",
    priceIntervalName: "per month",
    stripe_price_id: "price_1RNy5LQx2rfGRBK080uQOSUm",
    stripe_product_id: "prod_SIZ8W068RkcHYM",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
