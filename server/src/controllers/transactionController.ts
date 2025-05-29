import dotenv from "dotenv";
import { Request, Response } from "express";
import Stripe from "stripe";
import { db } from "../lib/db";

dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createStripePaymentIntent = async (
  req: Request,
  res: Response
): Promise<void> => {
  let { amount } = req.body;

  if (!amount || amount <= 0) {
    amount = 50;
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });

    res.status(200).json({
      message: "",
      data: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating stripe payment intent", error);
    res
      .status(500)
      .json({ message: "Error creating stripe payment intent", error });
  }
};

export const createTransaction = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId, courseId, transactionId, amount, paymentProvider } = req.body;

  try {
    const purchaseTransaction = await db.$transaction(async (prisma) => {
      const course = await prisma.course.findUnique({
        where: {
          id: courseId,
        },
      });

      if (!course) {
        throw new Error("Course not found");
      }

      const newTransaction = await prisma.transaction.create({
        data: {
          userId,
          courseId,
          amount,
          paymentProvider,
          transactionId,
        },
      });

      const initialProgress = await prisma.userCourseProgress.create({
        data: {
          userId,
          courseId,
          enrollmentDate: new Date().toISOString(),
          lastAccessedTimestamp: new Date().toISOString(),
          overallProgress: 0,
        },
      });

      const newEnrollment = await prisma.enrollment.create({
        data: {
          userId,
          courseId,
        },
      });

      return {
        transaction: newTransaction,
        courseProgress: initialProgress,
        enrollement: newEnrollment,
      };
    });

    res.status(200).json({
      message: "Purchase Course Successfully",
      data: purchaseTransaction,
    });
  } catch (error) {
    console.error("Error while purchasing course", error);
    res.status(500).json({ message: "Error while purchasing course", error });
  }
};

export const getTransactions = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { userId } = req.query;

  try {
    const user = await db.user.findUnique({
      where: {
        id: userId as string,
      },
    });
    if (!user) {
      res.status(404).json({
        message: "User not found",
        data: "",
      });
    }

    const transactions = await db.transaction.findMany({
      where: {
        userId: userId as string,
      },
      include: {
        course: true,
      },
    });
    res.status(200).json({
      message: "Get transactions successfully",
      data: transactions,
    });
  } catch (error) {
    console.error("Error while getting transactions", error);
    res
      .status(500)
      .json({ message: "Error while getting transactions", error });
  }
};
