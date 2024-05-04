import { atom } from "recoil";

export const userDataState = atom({
  key: "userDataState", // 고유한 키
  default: {
    nickName: "",
    exp: 0,
    walkedDay: 0,
    finishedCount: 0,
    pickedCount: 0,
  },
});

export const geolocationState = atom({
  key: "geolocationState",
  default: {
    longitude: 0,
    latitude: 0,
  },
});

export const locationState = atom({
  key: "locationState",
  default: "",
});
