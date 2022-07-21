import { atom } from "recoil";

export const modalState = atom({
  key: "createPostModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const selectedImages = atom({
  key: "createPostSelectedImages",
  default: [],
});

export const selectedImageIndex = atom({
  key: "createPostSelectedImageIndex",
  default: 0,
});

export const postAspectRatio = atom({
  key: "createPostAspectRatio",
  default: 1,
});

export const processedImages = atom({
  key: "createPostProcessedImages",
  default: {},
});

export const createPostStep = atom({
  key: "createPostStep",
  default: 0,
});

export const postCaption = atom({
  key: "createPostCaption",
  default: ""
})

export const postLocation = atom({
  key: "createPostLocation",
  default: ""
})
