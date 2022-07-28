import { doc, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilState } from "recoil";
import { currentUserAtom } from "../atom/CurrentUserAtom";
import { auth, db } from "./firebase";

export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useRecoilState(currentUserAtom);

  useEffect(() => {
    let unsubscribe;
    if (user) {
      unsubscribe = onSnapshot(doc(db, "users", user.uid), (doc) => {
        console.log(doc, "zzz!!!");
        setUsername(doc.data()?.username);
      });
    } else {
      setUsername(null);
    }
    return unsubscribe;
  }, [user]);

  return { user, username };
}
