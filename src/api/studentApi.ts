/* eslint-disable @typescript-eslint/no-explicit-any */
import { IListParams, IStudent, ListResponse } from "../@type";
import axiosClient from "./axiosClient";

const studentApi = {
  getAll(params: IListParams): Promise<ListResponse<IStudent>> {
    const url = "/students";
    return axiosClient.get(url, {
      params,
    });
  },
  getByID(id: string): Promise<ListResponse<IStudent>> {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },
  add(dataStudent: IStudent): Promise<ListResponse<IStudent>> {
    const url = "/students";
    return axiosClient.post(url, dataStudent);
  },
  update(dataStudent: IStudent): Promise<ListResponse<IStudent>> {
    const url = "students";
    return axiosClient.patch(url, dataStudent);
  },
  remove(id: string): Promise<any> {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  },
};

export default studentApi;
