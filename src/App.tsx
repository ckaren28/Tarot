import { GlobalStyle } from './GlobalStyle';


// import { Query, useQuery } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { client } from "./pocket/config";
import Header from "./components/Header";
import { AllCards } from './components/All/AllCards';

type AppProps = {
  // queryClient:QueryClient
};
// type MutationVars = {
//   data: any;
//   index: string;
// };

export interface FormOptions {
  field_name: string;
  field_type: string;
  default_value: string | number;
  options?: { name: string; value: string }[];
}
function App({}: AppProps) {
  

  return (
   
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/all-cards" element={ <AllCards />}/>
        </Routes>
        <GlobalStyle />
      </BrowserRouter>

  );
}

export default App;
