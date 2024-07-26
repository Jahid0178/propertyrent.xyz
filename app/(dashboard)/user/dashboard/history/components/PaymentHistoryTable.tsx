"use client";

import React, { useEffect, useState } from "react";
import moment from "moment";
import authStore from "@/store/authStore";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getPayoutsByUserId } from "@/lib/actions/payout.action";
import { IPaymentData } from "@/typescript/interface";

const PaymentHistoryTable = () => {
  const [payouts, setPayouts] = useState<IPaymentData[]>([]);
  const { user } = authStore((state) => state);

  useEffect(() => {
    const getAllPayoutsByUserId = async () => {
      const payoutsData = await getPayoutsByUserId(user?._id);
      setPayouts(payoutsData);
    };

    getAllPayoutsByUserId();
  }, []);

  return (
    <Table className="border dark:border-gray-800">
      <TableCaption>Your all payment history.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Payment ID</TableHead>
          <TableHead>Package Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Purchase Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {payouts.map((payout: IPaymentData) => (
          <TableRow key={payout?._id}>
            <TableCell>#{payout?.tranId}</TableCell>
            <TableCell>{payout?.packageId?.packageTitle}</TableCell>
            <TableCell>{payout?.amount}</TableCell>
            <TableCell>
              <Badge variant={payout?.status ? "default" : "destructive"}>
                {payout?.status ? "Active" : "Deactive"}
              </Badge>
            </TableCell>
            <TableCell>{moment(payout?.createdAt).format("LL")}</TableCell>
          </TableRow>
        ))}
        {payouts.length === 0 && (
          <TableRow>
            <TableCell colSpan={8} className="text-center">
              No payment history found
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default PaymentHistoryTable;
