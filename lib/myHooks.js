import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  limit,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { currentUserAtom } from "../atom/CurrentUserAtom";
import { auth, db } from "./firebase";

export function useCollectionListener({ path, condition, order, limitNum }) {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const o = { by: order?.by || order || "createdAt", direction: order?.direction || "asc" };

    let q = query(collection(db, path), orderBy(o.by, o.direction), limit(limitNum));

    if (condition) {
      q = query(q, where(condition.field, condition.operation, condition.value));
    }

    return onSnapshot(q, (snapshot) => {
      const docs = [];
      snapshot.docs.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDocs(docs);
    });
  }, [path]);

  return docs;
}

export function useDocListener(path) {
  const [document, setDocument] = useState();
  useEffect(() => {
    return onSnapshot(doc(db, path), (snapshot) =>
      setDocument({ ...snapshot.data(), id: snapshot.id })
    );
  }, [path]);
  return document;
}

export function useDoc(path) {
  const [document, setDocument] = useState();
  useEffect(() => {
    let stillMounted = true;
    stillMounted &&
      getDoc(doc(db, path)).then((snapshot) =>
        setDocument({ ...snapshot.data(), id: snapshot.id })
      );
    return () => {
      stillMounted = false;
    }
  }, [path]);
  return document;
}

export function useSetDoc() {
  return async (path, data, merge = true) => {
    if (path.split("/").length % 2 === 0) {
      await setDoc(doc(db, path), data, { merge });
    } else {
      await addDoc(collection(db, path), data);
    }
  };
}

export const useLogout = () => {
  const setCurrentUser = useSetRecoilState(currentUserAtom);
  return () =>
    signOut(auth)
      .then((e) => setCurrentUser(null))
      .catch((e) => console.log("Oops! error in logout", e));
};
