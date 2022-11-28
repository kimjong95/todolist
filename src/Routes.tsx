import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResponsiveContainer } from "./App";
import { CreateTodoPage } from "./create/CreateTodoPage";
import { DetailTodoPage } from "./detail/DetailTodoPage";
import { MainPage } from "./main/MainPage";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <ResponsiveContainer>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<CreateTodoPage />} />
          <Route path="/detail">
            <Route path=":todoId" element={<DetailTodoPage />} />
          </Route>
        </Routes>
      </ResponsiveContainer>
    </BrowserRouter>
  );
};
