import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Cardv from './Card';
import CardGrid from './CardGrid';
import Modal from './Modal';
import Footer from '../pages/Footer';
import CardCarousel from './CardCarousel';

const BannerHome = () => {
   
    const bannerData =[
        {
          "format": "jpeg",
          "width": 5616,
          "height": 3744,
          "filename": "0000_yC-Yzbqy7PY.jpeg",
          "id": 0,
          "author": "Alejandro Escamilla",
          "author_url": "https://unsplash.com/@alejandroescamilla",
          "post_url": "data:image/jpeg;base64,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 "
        },
        {
          "format": "jpeg",
          "width": 5616,
          "height": 3744,
          "filename": "0001_LNRyGwIJr5c.jpeg",
          "id": 1,
          "author": "Alejandro Escamilla",
          "author_url": "https://unsplash.com/@alejandroescamilla",
          "post_url": "data:image/jpeg;base64,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"
        },
      ]
    const imageURL = ''
    const [currentImage,setCurrentImage] = useState(0)

    const handleNext = ()=>{
        if(currentImage < bannerData.length - 1){
            setCurrentImage(preve => preve + 1)
        }
    }
    const handleprevious = ()=>{
        if(currentImage > 0){
            setCurrentImage(preve => preve - 1)
        }
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            if(currentImage < bannerData.length - 1){
                handleNext()
            }else{
                setCurrentImage(0)
            }
        },5000)

        return ()=>clearInterval(interval)
    },[bannerData,imageURL,currentImage])

  return (<>
 
    <section className='w-full h-full'>
        <div className='flex min-h-full max-h-[95vh] overflow-hidden'>
            {
                bannerData.map((data,index)=>{
                    return(
                        <div key={data.id+"bannerHome"+index} className='min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all' style={{ transform : `translateX(-${currentImage * 100}%)`}}>
                                <div className='w-full h-full'>
                                    <img
                                        src={data.post_url}
                                        className='h-full w-full object-cover'
                                    />
                                </div>

                                {/***button next and previous image */}
                                <div className='absolute top-0 w-full h-full hidden items-center  justify-between px-4 group-hover:lg:flex'>
                                    <button onClick={handleprevious} className='bg-white  p-1 rounded-full  text-xl z-10 text-black'>
                                        <FaAngleLeft/>
                                    </button>
                                    <button onClick={handleNext} className='bg-white p-1 rounded-full  text-xl z-10 text-black '>
                                        <FaAngleRight/>
                                    </button>
                                </div>

                                <div className='absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent'>
                                </div>

                                <div className='container mx-auto'>
                                    <div className=' w-full absolute bottom-0 max-w-md px-3'>
                                        <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl '>Library page on this day</h2>
                                        <p className='text-ellipsis text-white line-clamp-3 my-2'>Library has been significantly improving the things</p>
                                        <div className='flex items-center gap-4'>
                                            <p className='text-white'>Rating : { Number(data.vote_average).toFixed(1) }+</p>
                                            <span>|</span>
                                            <p className='text-white'>View : { Number(data.popularity).toFixed(0) }</p>
                                        </div>
                                        <Link to={"/"+data?.media_type+"/"+data.id}>
                                            <button  className='bg-white px-4 py-2 text-black font-bold rounded mt-4  hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105'>
                                                Play Now
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                
                        </div>
                    )
                })
            }
        </div>
    </section>
{/* <CardGrid/> */}
<CardCarousel/>
<Footer/>
    </>
  )
}

export default BannerHome;



