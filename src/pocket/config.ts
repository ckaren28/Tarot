import PocketBase, { Record } from 'pocketbase';
import { QueryClient } from "react-query";

export interface CardResponse {
    id: string;
    created: string;
    updated: string;
    "@collectionId": string;
    "@collectionName": string;
    name: string;
    fortune_telling: object;
    "@expand": {};
  }
  
  // export const client = new PocketBase("http://192.168.43.238:8090");
  export const client = new PocketBase("http://127.0.0.1:8090");
  export const realTime = async (
    index: [string],
    queryClient: QueryClient,
   ) => {
    return await client.realtime.subscribe("cards", function (e) {
      console.log("real time peeps", e.record);
   });
  };
  
  export const allCards=async():Promise<CardResponse[]|Record[]>=>{
   return await client.records.getFullList("cards", 200 /* batch size */, {
     sort: "-created",
   });
  }
  export const appendToCache=async(index:[string],queryClient:QueryClient,newData:any)=>{
    queryClient.setQueryData(index, (old:any) => {
     old.unshift(newData)
     return old
    });
   }
   
   export const getPrevdata =(index:[string],queryClient:QueryClient)=>{
   const previous = queryClient.getQueryData(index);
   console.log("previous items", previous);
   }
   