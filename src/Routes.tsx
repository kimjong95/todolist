import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResponsiveContainer } from "./App";
import { CreateTodoPage } from "./main/create/CreateTodoPage";
import { MainPage } from "./main/MainPage";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<CreateTodoPage />} />
        </Routes>
      </ResponsiveContainer>
    </BrowserRouter>
  );
};
