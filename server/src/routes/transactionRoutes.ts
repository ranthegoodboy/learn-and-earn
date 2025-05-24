import express from "express";
import {
  createStripePaymentIntent,
  createTransaction,
} from "../controllers/transactionController";
import { ensureAuthenticated } from "../middleware/ensure-authenticated";

const router = express.Router();

router.post("/", ensureAuthenticated, createTransaction);
router.post(
  "/stripe/payment-intent",
  ensureAuthenticated,
  createStripePaymentIntent
);

export default router;
