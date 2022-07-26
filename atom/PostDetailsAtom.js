import { atom } from "recoil";

export const postDetailsModalAtom = atom({
  key: "postDetailsModalState",
  default: false,
});

export const selectedPostAtom = atom({
  key: "postDetailsSelectedPost",
  default: null,
});
