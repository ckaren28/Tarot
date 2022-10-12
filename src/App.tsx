import "./App.css";
import { useTheme } from './utils/hooks/themeHook'

import { Query, useQuery } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { client } from "./pocket/config";
import Header from "./components/Header";

type AppProps = {
  // queryClient:QueryClient
};
type MutationVars = {
  data: any;
  index: string;
};

export interface FormOptions {
  field_name: string;
  field_type: string;
  default_value: string | number;
  options?: { name: string; value: string }[];
}
function App({}: AppProps) {
  const { colorTheme, setTheme } = useTheme();
  const mode = colorTheme === "light" ? "BsSunFill" : "BsFillMoonFill";
  const toggle = () => {
    setTheme(colorTheme);
  };

  // const getUser = async()=>{
  //   return client.authStore.model
  // }
  // const getCard = async()=> {
  //   return client.authStore.model
  // }
  // const cardQuery = useQuery(["card"], getCard);
  // const card = cardQuery.data as CardType|null|undefined

  //   const userQuery = useQuery(["user"],getUser);
  //    console.log("user query ======  ",userQuery)

  // if(userQuery.isLoading){
  //   return(
  //     <div className="w-full min-h-screen text-5xl font-bold flex-col-center">
  //      LOADING....
  //     </div>
  //   )
  // }
  //   if (userQuery.isError) {
  //     return (
  //       <div className="w-full min-h-screen text-5xl font-bold flex-col-center">
  //         {/* @ts-ignore */}
  //         {userQuery?.error?.message}
  //       </div>
  //     )
  //   }
  // const user = userQuery.data as UserType|null|undefined

  return (
    <div
      className="w-full min-h-screen  flex-col-center scroll-bar
   dark:bg-black dark:text-white "
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
