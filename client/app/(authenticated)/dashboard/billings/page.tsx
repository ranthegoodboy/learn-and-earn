"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import useCurrentUser from "@/hooks/auth/user-current-user";
import { useUserTransactions } from "@/hooks/transactions/use-user-transactions";
import React from "react";

const columns = [
  { key: "course", label: "Course" },
  { key: "amount", label: "Amount" },
  { key: "paymentProvider", label: "Provider" },
  { key: "transactionId", label: "Transaction ID" },
  { key: "createdAt", label: "Transaction Date" },
];

const BillingsPage = () => {
  const user = useCurrentUser();
  const { data, isLoading } = useUserTransactions(user ? user.id : "");

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data?.success) {
    return (
      <div>
        {data?.error || "Something went wrong while fetching transactions."}
      </div>
    );
  }
  const transactions = data?.data;

  return (
    <div className="container max-w-5xl py-8">
      <Card>
        <CardHeader>
          <CardTitle>Billing Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead key={col.key}>{col.label}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions && transactions.length > 0 ? (
                transactions.map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell>{tx.course?.title}</TableCell>
                    <TableCell>${tx.amount}</TableCell>
                    <TableCell>{tx.paymentProvider}</TableCell>
                    <TableCell>{tx.transactionId}</TableCell>
                    <TableCell>
                      {new Date(tx.createdAt).toLocaleString()}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="text-center text-muted-foreground"
                  >
                    No transactions found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default BillingsPage;
