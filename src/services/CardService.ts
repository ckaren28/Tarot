import http from "../http-common";
import ICard from '../types/Cards'

const getAll = () => {
  return http.get<Array<ICard>>("/cards");
};

const get = (id: any) => {
  return http.get<ICard>(`/cards/${id}`);
};

const create = (data: ICard) => {
  return http.post<ICard>("/cards", data);
};

const update = (id: any, data: ICard) => {
  return http.put<any>(`/cards/${id}`, data);
};

const removeAll = () => {
  return http.delete<any>(`/cards`);
};

const findByTitle = (title: string) => {
  return http.get<Array<ICard>>(`/cards?title=${title}`);
};

const CardService = {
  getAll,
  get,
  create,
  update,
  removeAll,
  findByTitle,
};

export default CardService;