import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ref, getDownloadURL, uploadBytesResumable, listAll } from 'firebase/storage'
import { imageStorage } from '../base'
import myImage from '../service/imageService'
import { IoIosArrowForward } from 'react-icons/io'

function Upload() {
  const [formInputs, changeFormInputs] = useState({
    picture: '',
    loading: true
  })

  const [imgUrl, setImgUrl] = useState("")
  // const [percent, setPercent] = useState(0)

  const updateImage = (e) => {
    if (e.target.files.length !== 0) {
      changeFormInputs({
        ...formInputs,
        picture: e.target.files[0],
      })
    }
  }
  const storageList = ref(imageStorage, "files/")

  const handleUpload = () => {
    // e.preventDefault()
    if (!formInputs.picture) return
    const storageRef = ref(imageStorage, `files/${formInputs.picture.name}`)
    uploadBytesResumable(storageRef, formInputs.picture).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImgUrl((prev) => [...prev, url])
        alert("Image Successfully uploaded")
        window.location.reload()
      })
    })
    // return uploadRef

    // uploadTask.on(
    //   'state_changed',
    //   (snapshot) => {
    //     const percent = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
    //     )
    //     setPercent(percent)
    //   },
    //   (error) => {
    //     console.log(error)
    //   },
    //   () => {
    //     getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
    //       setImgUrl(downloadURL)
    //     })
    //   },
    // )
    // uploadToStore()
    // return task
  }

  useEffect(() => {
    listAll(storageList).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          if(!url) return;
          setImgUrl(url)
          changeFormInputs({
            ...formInputs,
            loading: false,
          })
        })
      })
    })
  }, [])

  const uploadToStore = async(e) => {
    handleUpload()
    console.log('Image url', imgUrl)
    await imgUrl
    // const classText = new myImage()
    // console.log(classText.addImage({imgUrl}))
    // const firestoreImage = { ...imgUrl }
    // console.log('Firestore', firestoreImage)
    // classText.addImage(firestoreImage)
  }

  console.log(imgUrl)
  console.log(formInputs.loading)

  return (
    <div className="upload">
      <div className="ImgEdit">
        {
          formInputs.loading ? <p>No image gotten yet...</p> : 
          imgUrl ? (
            <div className="uploadbtn">
              {' '}
              <div className="ImgCover">
                <img src={imgUrl} alt="UploadedImage" />
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
          ) : null
        }
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
        <button
          onClick={uploadToStore}
        >
          Upload image
        </button>
      </div>
      <NavLink to={'/text'}>
        Write text <IoIosArrowForward className="foward" />
      </NavLink>
    </div>
  )
}

export default Upload
