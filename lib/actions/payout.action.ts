import { IPaymentData } from "@/typescript/interface";
import axios from "axios";

export const handlePayout = async (
  data: any
): Promise<{
  status: number;
  message: string;
  url: string;
}> => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payout`,
      data,
      {
        withCredentials: true,
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Something went wrong");
    }
  } catch (error) {
    console.log("error from ui handle payout", error);
    throw error;
  }
};

export const getPayoutsByUserId = async (
  userId: string
): Promise<IPaymentData[]> => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/payout/get-payout/${userId}`
    );
    if (response.status === 200) {
      return response.data.data;
    } else {
      throw new Error("Something went wrong user payout data");
    }
  } catch (error) {
    console.log("error from get payouts user id", error);
    throw error;
  }
};
