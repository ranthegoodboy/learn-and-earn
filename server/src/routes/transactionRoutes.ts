import express from "express";
import {
  createStripePaymentIntent,
  createTransaction,
  getTransactions,
} from "../controllers/transactionController";
import { ensureAuthenticated } from "../middleware/ensure-authenticated";

const router = express.Router();

router.get("/", ensureAuthenticated, getTransactions);
router.post("/", ensureAuthenticated, createTransaction);
router.post(
  "/stripe/payment-intent",
  ensureAuthenticated,
  createStripePaymentIntent
);

export default router;
