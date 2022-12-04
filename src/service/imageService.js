import { db } from "../base";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
} from "firebase/firestore";

const imageCollection = collection(db, "Image");

class myImage {
  addImage = (image) => {
    return addDoc(imageCollection, image);
  };

  updateImage = (image, id) => {
    const upImg = doc(imageCollection, id);
    return updateDoc(upImg, image);
  };

  getImage = () => {
    return getDocs(imageCollection);
  };
}
export default myImage;
