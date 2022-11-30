import React, { useState } from "react";

function Upload() {
  const [formInputs, changeFormInputs] = useState({
    picture: "",
  });

  const updateImage = (e) => {
    if (e.target.files.length !== 0) {
      changeFormInputs({
        ...formInputs,
        picture: e.target.files[0],
      });
    }
  };
  console.log(formInputs.picture);
  return (
    <div className="upload">
      <div className="ImgEdit">
        {formInputs.picture ? (
          <div className="uploadbtn">
            {" "}
            <div className="ImgCover">
              <img src={formInputs.picture} alt="UploadedImage" />
            </div>{" "}
            <label
              for="file"
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
        {!formInputs.picture ? (
          <label
            for="file"
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
        <button>Upload image</button>
      </div>
    </div>
  );
}

export default Upload;
