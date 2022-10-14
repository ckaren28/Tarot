import React from "react";
import { useQueryClient, useQuery } from "react-query";
import { allCards, CardResponse } from '../../pocket/config';
import { Record } from "pocketbase";
import { TheList } from "./TheList";
import { Wrapper, Content, CardImg } from "./AllCards.styles";
import { any, array } from "prop-types";




interface AllCardsProps {
  //   user?: UserType | null;
  // setCurrentCard: string
}
// type MutationVars = {
//   data: any;
//   index: string;
// };
export const AllCards: React.FC<AllCardsProps> = () => {
  // const queryClient = useQueryClient();

  const tarotQuery = useQuery(["tarot_cards"], allCards, {
    // select: (index) => index.length,
    
  });
  // console.log('query:',  tarotQuery)
  // console.log('data:   ', tarotQuery.data?.length)

  // const shuff = async (data: any) => {
  //   for (let i:number = shuff?.length -1, i>0, i--){
  //     const j = Math.floor(Math.random() * (i + 1));            
  //         [array[i], array[j]] = [array[j], array[i]];   
  // }}
  
  
  // const mutation = useMutation(
  //   ({ data, index }: MutationVars) => {
  //     return client.records.create(index, data);
  //   },
  //   {
  //     //throw error if mutation fails
  //     onError: (err, { data: newData, index }, context) => {
  //       // queryClient.setQueryData(index, context?.previousData);
  //       console.log("error saving the item === ", err);
  //     },
  //     //update the list with created record
  //     onSuccess: (data, { index }) => {
  //       console.log("vars === ", data, index);
  //       queryClient.setQueryData(index, (old: any) => {
  //         old.unshift(data);
  //         return old;
  //       });
  //       console.log("successfull save of item ", data);
  //     },
  //   }
  // );
  // const createCard = async (data: any) => {
  //   mutation.mutate({ data, index: "tarot_cards" });
  // };


  return (
    <Wrapper>
      <Content>
        <TheList list= {tarotQuery.data} />
      </Content>
    </Wrapper>
  );
};
