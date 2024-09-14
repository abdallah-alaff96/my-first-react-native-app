import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/api/axiosInstance";

const fetchData = async (url: string) => {
  const { data } = await axiosInstance.get(url);
  return data;
};

export const useFetchData = (url: string) => {
  return useQuery({
    queryKey: ["fetchData", url],
    queryFn: () => fetchData(url),
    staleTime: 1000 * 60 * 5,
  });
};
