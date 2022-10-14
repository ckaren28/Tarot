import React from "react";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { allCards, client } from "../../pocket/config";

import { TheList } from "./TheList";
import { Wrapper, Content, CardImg } from "./AllCards.styles";




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

  const tarotQuery = useQuery(["tarot_cards"], allCards);
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
        <TheList list={tarotQuery.data} />
      </Content>
    </Wrapper>
  );
};
