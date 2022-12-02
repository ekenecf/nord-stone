import { db } from "../base";
import { collection, addDoc, doc, getDoc, updateDoc } from "firebase/firestore";

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
    return getDoc(imageCollection);
  };
}

export default myImage;
