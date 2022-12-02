import { db } from "../base";
import { collection, addDoc, getDocs } from "firebase/firestore";

const textCollection = collection(db, "Text")

class myText {
    addText = (text) => {
        return addDoc(textCollection, text)
    }

    getText = () => {
        return getDocs(textCollection)
    }
}

export default myText