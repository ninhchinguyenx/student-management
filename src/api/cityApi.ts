import { ICity, ListResponse } from "../@type";
import axiosClient from "./axiosClient";

const cityApi = {
  getAll(): Promise<ListResponse<ICity>> {
    const url = "/cities";
    return axiosClient.get(url, {
      params: {
        _page: 1,
        _limit: 5,
      },
    });
  },
};

export default cityApi;
