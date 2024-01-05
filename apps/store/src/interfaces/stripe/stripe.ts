interface StripePaymentIntent {
  amount: number
  amount_capturable: number
  amount_details: { tip: any }
  amount_received: number
  application: any
  application_fee_amount: any
  automatic_payment_methods: any
  canceled_at: any
  cancellation_reason: any
  capture_method: string
  client_secret: string
  confirmation_method: string
  created: number
  currency: string
  customer: any
  description: any
  id: string
  invoice: any
  last_payment_error: any
  latest_charge: any
  livemode: boolean
  metadata: Record<string, any>
  next_action: any
  object: string
  on_behalf_of: any
  payment_method: any
  payment_method_configuration_details: any
  payment_method_options: { boleto: any; card: any }
  payment_method_types: string[]
  processing: any
  receipt_email: any
  review: any
  setup_future_usage: any
  shipping: any
  source: any
  statement_descriptor: any
  statement_descriptor_suffix: any
  status: string
  transfer_data: any
  transfer_group: any
}
