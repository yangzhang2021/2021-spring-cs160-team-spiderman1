import React, {useState, useEffect,useCallback} from "react";
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useDropzone} from 'react-dropzone';


const UserProfile = () => {

  const [UserProfile, setUserProfile] = useState([]);
  
  const fetchUserProfile = () => {
    axios.get("http://localhost:8080/api/v1/user-profile").then(res => {
      console.log(res);
      setUserProfile(res.data);
    });
  };

  useEffect(()=>{
    fetchUserProfile();
  }, []);

  return UserProfile.map((userProfile, index) => {
    return  (
      <div key={index}>
        {userProfile.userProfileID ? (
        <img 
           src={`http://localhost:8080/api/v1/user-profile/${userProfile.userProfileID}/image/download`}
        />
        ) : null}
        <br/>
        <br/>
        <h1>{userProfile.userName}</h1>
        <p>{userProfile.userProfileID}</p>
        <Dropzone {...userProfile}/>
        <br/>
      </div>
    )
  })
};
function Dropzone({userProfileID}) {
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    
    console.log(file);
    
    const formData = new FormData();
    formData.append("file", file);

    axios.post(
      `http://localhost:8080/api/v1/user-profile/${userProfileID}/image/upload`,
      formData,
      {
        header: {
        "Content-Type": "multipart/form-data"
       }
     }
    ).then(()=>{
      console.log("file uploaded successfully")
    }).catch(err => {
      console.log(err);
    });

  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      { isDragActive ?(
          <p>Drop the files here ...</p> 
          ) : (
          <p>Drag 'n' drop profile image, or click to select profile image</p>
          )}
    </div>
  );
}

function App() {
  return( <div className="App">
  <UserProfile />
  </div>
  );
}

export default App;
