import PocketBase, { Record } from 'pocketbase';
import { QueryClient } from "react-query";

export const IMAGE_BASE_URL: string = 'http://127.0.0.1:8090/api/files/tarot_cards/';
// Sizes: w300, w780, w1280, original
export const BACKDROP_SIZE: string = 'w1280';
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
    img: string;
    "@expand": {};
    
  }
  
  // export const client = new PocketBase("http://192.168.43.238:8090");

  export const client = new PocketBase('http://127.0.0.1:8090');

  
  export const allCards=async():Promise<CardResponse[]|Record[]>=>{
   return await client.records.getFullList('tarot_cards', 200 /* batch size */, {
     sort: "-created",
   });
  }
 
  // export const Card=async():Promise<CardResponse[]|Record[]>=>{
  //   return await client.records.getOne('tarot_cards', CardResponse.id, { expand: 'some_relation' })
  //  }
  
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
   