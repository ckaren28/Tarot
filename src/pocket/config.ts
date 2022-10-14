import PocketBase, { Record } from 'pocketbase';
import { QueryClient } from 'react-query';

export const IMAGE_BASE_URL: string = 'http://127.0.0.1:8090/api/files/tarot_cards/';

// w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE: string = 'w780';

export interface CardResponse {
  id: string;
  created: string;
  updated: string;
  "@collectionId": string;
  "@collectionName": string;
  name: string;
  fortune_telling: object;
  keywords: string,
  meanings: object,
  suit: string,
  img: string;
  "@expand": {};
}


// export const client = new PocketBase("http://192.168.43.238:8090");

export const client = new PocketBase('http://127.0.0.1:8090');


export const allCards = async (): Promise<CardResponse[] | Record[]> => {
  return await client.records.getFullList('tarot_cards', 200 /* batch size */, {
    sort: "-created",
  });
}

export const getCard = async (index:string): Promise<CardResponse | Record> => {
  return await client.records.getOne('tarot_cards', index) ;
 };



export const appendToCache = async (index: [string], queryClient: QueryClient, newData: any) => {
  queryClient.setQueryData(index, (old: any) => {
    old.unshift(newData)
    return old
  });
}

export const getPrevdata = (index: [string], queryClient: QueryClient) => {
  const previous = queryClient.getQueryData(index);
  console.log("previous items", previous);
}



export const API_URL: string = 'http://127.0.0.1:8090';




