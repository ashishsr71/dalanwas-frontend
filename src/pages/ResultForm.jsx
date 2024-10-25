import React, { useState } from 'react'
import {storage,db} from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 
import { toastCont } from '../App';
import {
  connectStorageEmulator,
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import {v4 as uuid4} from 'uuid'


// component starts here
function ResultForm() {
    const [formData, setFormData] = useState({
        name: '',
        fathername: '',
        grandfathername: '',
        address: '',
        prize: '',
        level: '',
        rank:'',
        image: null,
      });
    const {toCallToast}=toastCont();
    const storageRef = ref(storage);

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'image') {
          setFormData({ ...formData, [name]: files[0] });
        } else {
          setFormData({ ...formData, [name]: value });
        }
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        async function stor(imgUrl){
          try {
            const docRef = await addDoc(collection(db, "result"), {
              
                name: formData.name,
                fathername:formData.fathername,
                grandfathername: formData.grandfathername,
                address: formData.address,
                prize: formData.prize,
                level: formData.level,
                rank:formData.rank,
                imgUrl
              
            });
            console.log("Document written with ID: ", docRef.id);
            toCallToast("uploaded succesfully")
          } catch (e) {
            toCallToast("error uploading")
            console.error("Error adding document: ", e);
          };
        };
        if(formData.image){
          async function ashish(){
            const id=uuid4();
           await uploadBytes(ref(storageRef, 'result/' + `${formData.image.name}${id}`), formData.image)
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
    }
        
        console.log(formData);
        // Handle form submission logic here
      };
    
      return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
          <div className="w-full max-w-lg bg-white p-8 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">Result Form</h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
    
              {/* Email Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">Fathername</label>
                <input
                  type="text"
                  id="email"
                  name="fathername"
                  value={formData.fathername}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
    
              {/* Phone Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">Grandfathername</label>
                <input
                  type="text"
                  id="phone"
                  name="grandfathername"
                  value={formData.grandfathername}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>
    
              {/* Address Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="level">Level</label>
                <input
                  type="text"
                  id="level"
                  name="level"
                  value={formData.level}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="rank">Rank</label>
                <input
                  type="text"
                  id="rank"
                  name="rank"
                  value={formData.rank}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your address"
                  required
                />
              </div>
              {/* Description Input */}
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="prize">prize</label>
                <textarea
                  id="prize"
                  name="prize"
                  value={formData.prize}
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

export default ResultForm