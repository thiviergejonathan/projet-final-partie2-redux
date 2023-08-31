import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Categories from "./components/Categories/Categories";
import Category from "./components/Category/Category";
import { Link } from 'react-router-dom';

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/category/:id" element={<Category />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;