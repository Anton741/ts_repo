import "./App.css";
import queryClient from "api/projects/queries/client";
import {  QueryClientProvider } from "react-query";

import MainPage from "./pages/MainPages/MainPage";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <MainPage />
    </div>
    </QueryClientProvider>
  );
}

export default App;
