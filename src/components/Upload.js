import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { imageStorage } from "../base";
import myImage from "../service/imageService";
import { IoIosArrowForward } from "react-icons/io";

function Upload() {
  const [formInputs, changeFormInputs] = useState({
    picture: "",
  });

  const [imgUrl, setImgUrl] = useState("");
  const [imagePreview, setimagePreview] = useState("");

  const updateImage = (e) => {
    const file = e.target.files[0];
    if (e.target.files.length !== 0) {
      changeFormInputs({
        ...formInputs,
        picture: file,
      });
    }
  };
  const handleUpload = () => {
    if (!formInputs.picture) return;
    const storageRef = ref(imageStorage, `files/${formInputs.picture.name}`);
    uploadBytesResumable(storageRef, formInputs.picture).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        if (url === "") return;
        setImgUrl(url);
      });
    });
  };

  useEffect(() => {
    handleUpload();
    getFromstore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formInputs.picture]);

  console.log((imgUrl));

  const uploadToStore = () => {
    if (!imgUrl && imgUrl === ""){
      alert("Kindly select an Image")
      return;
    };
    const classText = new myImage();
    classText.addImage({ imgUrl });
    alert("Image Successfully uploaded");
    getFromstore();
  };

  function getFromstore() {
    // if (!imagePreview) {
    const classImage = new myImage();
    classImage
      .getImage()
      .then((response) =>
        setimagePreview(
          response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      );
    // }
  }

  console.log(imagePreview[0]);

  return (
    <div className="upload">
      <div className="ImgEdit">
        {!imagePreview[0] ? (
          <p>No image gotten yet...</p>
        ) : imagePreview[0] ? (
          <div className="uploadbtn">
            {" "}
            <div className="ImgCover">
              <img src={imagePreview[0].imgUrl} alt="UploadedImage" />
            </div>{" "}
            <label
              htmlFor="file"
              className={formInputs.picture ? null : "fadeinlabel"}
            >
              Edit Image
            </label>
            <input
              type="file"
              name="photo"
              onChange={updateImage}
              id="file"
              required
              hidden
            />
          </div>
        ) : null}
      </div>
      <div className="UploadImage">
        {!imagePreview[0] ? (
          <label
            htmlFor="file"
            className={formInputs.picture ? null : "fadeinlabel"}
          >
            Choose File
          </label>
        ) : null}
        <input
          type="file"
          name="photo"
          onChange={updateImage}
          id="file"
          required
          hidden
        />

        <button onClick={uploadToStore}>Upload image</button>
      </div>
      <NavLink to={"/text"}>
        Write text <IoIosArrowForward className="foward" />
      </NavLink>
    </div>
  );
}

export default Upload;
