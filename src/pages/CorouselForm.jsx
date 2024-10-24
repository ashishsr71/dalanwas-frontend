import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { collection, addDoc } from "firebase/firestore"; 
import {
    connectStorageEmulator,
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
  } from 'firebase/storage';

import {storage,db} from '../firebase'



function CorouselForm() {
    
    const [formData, setFormData] = useState({
        title: '',
        text: '',
        place: '',
        description: '',
        image: null,
      });
      const storageRef = ref(storage);
      const handleChange = (e) => {
        // console.log(e.target.value)
        const { name, value, files } = e.target;
        if (name === 'image') {
          setFormData({ ...formData, [name]: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit =async (e) => {
        e.preventDefault();
        const id=uuidv4();  
        async function stor(imgUrl){
            try {
              const docRef = await addDoc(collection(db, "carousel"), {
                title: formData.title,
                text: formData.text,
                place: formData.place,
               imgUrl:imgUrl
              });
              console.log("Document written with ID: ", docRef.id);
            } catch (e) {
              console.error("Error adding document: ", e);
            };
          };
       
          if(formData.image){
            async function ashish(){
             await uploadBytes(ref(storageRef, 'carousel/' + `${formData.image.name}${id}`), formData.image)
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
        console.log(formData);
        // Handle form submission logic here
      };}
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Carousel Form</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Title</label>
                <input
                  type="text"
                  id="name"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
    
              {/* Email Input */}
              {/* <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
     */}
              {/* Phone Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">some text</label>
                <input
                  type="text"
                  id="phone"
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
    
              {/* Address Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="address">place</label>
                <input
                  type="text"
                  id="address"
                  name="place"
                  value={formData.place}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
    
              {/* Description Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter a brief description"
                  required
                />
              </div>
    
              {/* Image Upload */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="image">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full text-gray-700 px-2 py-1 border rounded-lg focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
    
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-200"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      );
    };

export default CorouselForm