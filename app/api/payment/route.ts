import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";
import shortid from "shortid";

export const POST = async (req: NextRequest, res: NextResponse) => {
  const { total } = await req.json();
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY!,
    key_secret: process.env.RAZORPAY_SECRET,
  });
  const payment_capture = 1;
  const amount = total.toString();
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    return NextResponse.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
};
