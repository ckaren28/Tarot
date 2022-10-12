import React from "react";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { allCards, client } from "../../pocket/config";
import { useTheme } from "../../utils/hooks/themeHook";
import { useNavigate } from "react-router-dom";
import { TheList } from '../TheList';
import { TheButton } from '../TheButton';

interface AllCardsProps {
//   user?: UserType | null;
}
type MutationVars = {
  data: any;
  index: string;
};
export const AllCards: React.FC<AllCardsProps> = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const tarotQuery = useQuery(["tarot_cards"], allCards);
  const mutation = useMutation(
    ({ data, index }: MutationVars) => {
      return client.records.create(index, data);
    },
    {
      //throw error if mutation fails
      onError: (err, { data: newData, index }, context) => {
        // queryClient.setQueryData(index, context?.previousData);
        console.log("error saving the item === ", err);
      },
      //update the list with created record
      onSuccess: (data, { index }) => {
        console.log("vars === ", data, index);
        queryClient.setQueryData(index, (old: any) => {
          old.unshift(data);
          return old;
        });
        console.log("successfull save of item ", data);
      },
    }
  );
  return (
    <div>
      <div className="w-full h-full">
        <div className="w-full p-2 m-3 flex-center flex-">

          <div className="text-xl font-mono gap-12">HI ALL CARDS</div>
        </div>
        
      </div>
      <div className="flex-center ">
        
        <TheButton
          label="login"
          onClick={() => navigate("/login")}
          radius="5px"
          textSize="1.3rem"
          margin="10px"
          border={"1px  solid"}
        />
      </div>

      <div className="w-full h-full ">
                           <TheList list={tarotQuery.data} />
                       </div>
    </div>
  );
};
