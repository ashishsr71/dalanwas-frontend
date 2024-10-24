import React, { useEffect, useState } from 'react'
// import app from '../firebase'
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc } from "firebase/firestore"; 
import {
    connectStorageEmulator,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
  } from 'firebase/storage';  
// import firebaseHook from './firebaseHook'
import {storage,db} from '../firebase';

function Upload() {

    // const {storage}=firebaseHook();
    const [file,setFile]=useState(null);
    

const storageRef = ref(storage);
useEffect(()=>{
//  console.log(import.meta.env.VITE_FIREBASE_API)
setFile(null)
},[])

    useEffect(()=>{
        const id=uuidv4()
       
        async function stor(imgUrl){
          try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815,
             imgUrl:imgUrl
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          };
        };
     
        if(file){
          async function ashish(){
           await uploadBytes(ref(storageRef, 'images/' + `${file.name}${id}`), file)
            .then(function (snapshot) {
              console.log('Uploaded', snapshot.metadata.size, 'bytes.');
              console.log('File metadata:', snapshot.metadata);
              // Let's get a download URL for the file.
              getDownloadURL(snapshot.ref).then(function (url) {
                console.log('File available at', url);
              stor(url)
              });
            })
            .catch(function (error) {
              console.error('Upload failed:', error);
            })
          }
            ashish()
          



        }
    },[file])
  return (
    <div>Upload
        <input type='file' onChange={(e)=>{
            setFile(e.target.files[0])
        }}/>
    </div>
  )
}

export default Upload