import { collection, getDocs } from "firebase/firestore/lite";
import { database } from "../firebase";
import { Todo } from "../shared/Todo";

export const getTodos = async () => {
  const usersCollectionRef = collection(database, "todo");
  // getDocs로 컬렉션안에 데이터 가져오기
  const data = await getDocs(usersCollectionRef);
  const listArr = data.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      } as Todo)
  );
  return listArr;
};
