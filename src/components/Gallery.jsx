import React, { useEffect, useRef, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../firebase';

function Gallery() {
    const [state,setState]=useState("all");
    const[photos,setPhotos]=useState([]);
    const divRef=useRef(null);
    useEffect(()=>{
        if(divRef.current){
            divRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    },[])


    
    useEffect(()=>{
      async function getSome() {
          const querySnapshot = await getDocs(collection(db, "gallery"));
         if(state=="all"){
          setPhotos(querySnapshot.docs.map(doc => {
            return {...doc.data() }; 
        }));
         }
        if(state=="Shoes"){
          const arr=querySnapshot.docs.map(doc => {
            return {...doc.data() }; 
        });
        setPhotos(arr.filter(a=>a.title=="Library"));
        }
        if(state=="Bags"){
          const arr=querySnapshot.docs.map(doc => {
            return {...doc.data() }; 
        });
        setPhotos(arr.filter(a=>a.title=="Mandir"));
        }
        if(state=="Electronics"){
          const arr=querySnapshot.docs.map(doc => {
            return {...doc.data() }; 
        });
        setPhotos(arr.filter(a=>a.title=="Prize"));
        }
      
        if(state=="Gaming"){
          const arr=querySnapshot.docs.map(doc => {
            return {...doc.data() }; 
        });
        setPhotos(arr.filter(a=>a.title=="Games"));
        }
      
      
          }
          
      getSome();
  },[state]);

  
  return (
    <>
    <div  className="flex items-center justify-center py-4 md:py-8 flex-wrap">
      <button onClick={()=>{setState("all")}}
        type="button"
        className={`${state=="all" ? "text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" :'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'}`}
      >
        All categories
      </button>
      <button onClick={()=>{setState("Shoes")}}
        type="button"
        className={`${state=="Shoes"?"text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" :'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'}`}
      >
        Library
      </button>
      <button onClick={()=>{setState("Bags")}}
        type="button"
        className={`${state=="Bags"?"text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" :'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'}`}
      >
        Mandir
      </button>
      <button onClick={()=>{setState("Electronics")}}
        type="button"
        className={`${state=="Electronics"?"text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" :'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'}`}
      >
        Prize
      </button>
      <button onClick={()=>{setState("Gaming")}}
        type="button"
        className={`${state=="Gaming"?"text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800" :'text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:text-white dark:focus:ring-gray-800'}`}
      >
      Games
      </button>
    </div>
    <div ref={divRef}  className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {photos.length>0&&photos.map((photo,i)=>   <div key={i}>
        <img
          className="h-auto max-w-full rounded-lg"
          src={photo.imgUrl}
          alt=""
        />
      </div>)}
   
      {/* <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
          alt=""
        />
      </div> */}
    </div>
  </>
  

  

  )
}

export default Gallery


// {id:"sdkfhsakldfhklsdhf",name:"ashish",fathername:"ashsish",url:"httpkjkhskfhsdk"}