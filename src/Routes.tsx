import { collection, getDocs } from "firebase/firestore/lite";
import { useCallback, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResponsiveContainer } from "./App";
import { CreateTodoPage } from "./create/CreateTodoPage";
import { DetailTodoPage } from "./detail/DetailTodoPage";
import { database } from "./firebase";
import { MainPage } from "./main/MainPage";

export const MainRoutes = () => {
  //
  const usersCollectionRef = collection(database, "todo");

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getUsers = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(usersCollectionRef);
      const listArr = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(listArr);
    };

    getUsers();
  }, []);

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
