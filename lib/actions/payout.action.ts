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
