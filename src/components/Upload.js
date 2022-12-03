import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  listAll,
} from 'firebase/storage'
import { imageStorage } from '../base'
import myImage from '../service/imageService'
import { IoIosArrowForward } from 'react-icons/io'

function Upload() {
  const [formInputs, changeFormInputs] = useState({
    picture: '',
    loading: true,
    // imagePreview: '',
  })

  const [imgUrl, setImgUrl] = useState('')
  const [imagePreview, setimagePreview] = useState('')

  const updateImage = (e) => {
    const file = e.target.files[0]
    if (e.target.files.length !== 0) {
      changeFormInputs({
        ...formInputs,
        picture: file,
      })
    }
    // setimagePreview(URL.createObjectURL(file))
  }
  const storageList = ref(imageStorage, 'files/')

  const handleUpload = () => {
    if (!formInputs.picture) return
    const storageRef = ref(imageStorage, `files/${formInputs.picture.name}`)
    uploadBytesResumable(storageRef, formInputs.picture).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUrl(url)
      })
    })
  }

  useEffect(() => {
    handleUpload()
  }, [formInputs.picture])
  getFromstore()

  // useEffect(() => {
  //   getFromstore()
  //   // window.location.reload()
  // }, [imagePreview])

  const uploadToStore = () => {
    if (!imgUrl) return
    const classText = new myImage()
    classText.addImage({ imgUrl })
    // window.location.reload()
    alert('Image Successfully uploaded')
  }

  function getFromstore() {
    if (!imagePreview) {
      const classImage = new myImage()
      classImage.getImage().then((response) => setimagePreview(response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
    // window.location.reload()
    } else {
      return;
    }
  }
  // 

  // const getUrl = { ...imagePreview }
  console.log(imagePreview[0] )
  // const preview = imagePreview.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return (
    <div className="upload">
      <div className="ImgEdit">
        {!imagePreview[0] ? (
          <p>No image gotten yet...</p>
        ) : imagePreview[0] ? (
          <div className="uploadbtn">
            {' '}
            <div className="ImgCover">
              <img src={imagePreview[0].imgUrl} alt="UploadedImage" />
            </div>{' '}
            <label
              htmlFor="file"
              className={formInputs.picture ? null : 'fadeinlabel'}
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
            htmlFor="file"
            className={formInputs.picture ? null : 'fadeinlabel'}
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
        {/* <button onClick={((e) => handleUpload(e), () => uploadToStore())}> */}
        <button onClick={uploadToStore}>Upload image</button>
      </div>
      <NavLink to={'/text'}>
        Write text <IoIosArrowForward className="foward" />
      </NavLink>
    </div>
  )
}

export default Upload
