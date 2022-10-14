import { GlobalStyle } from "./GlobalStyle";

import { Query, QueryClient, useQuery } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { client , CardResponse} from "./pocket/config";
import Header from "./components/Header";
import { AllCards } from "./components/All/AllCards";
import { Record } from "pocketbase";

import { OneCard } from "./components/OneCard";
type AppProps = {
  // queryClient:QueryClient
  // cardId: CardResponse | Record
};
// type MutationVars = {
//   data: any;
//   index: string;
// };

// export interface FormOptions {
//   field_name: string;
//   field_type: string;
//   default_value: string | number;
//   options?: { name: string; value: string }[];
// }
  function App({}: AppProps) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AllCards />} />
        <Route path="/all-cards" element={<AllCards />} />
        <Route path="/:cardId" element={<OneCard />} />
      </Routes>
      <GlobalStyle />
    </Router>
  );
}

export default App;
