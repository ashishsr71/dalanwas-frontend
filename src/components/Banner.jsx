import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Cardv from './Card';
import CardGrid from './CardGrid';
import Modal from './Modal';
import Footer from '../pages/Footer';
import CardCarousel from './CardCarousel';
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"; 

// component starts here
const BannerHome = () => {
    const [bannerData, setBannerData] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);

    // Fetch the data from Firebase
    useEffect(() => {
        async function getSome() {
            const querySnapshot = await getDocs(collection(db, "carousel"));
            setBannerData(querySnapshot.docs.map(doc => {
                return { imgUrl: doc.data().imgUrl, ...doc.data() }; 
            }));
        }
        getSome();
    }, []);

    const handleNext = () => {
        if (currentImage < bannerData.length - 1) {
            setCurrentImage(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentImage > 0) {
            setCurrentImage(prev => prev - 1);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentImage < bannerData.length - 1) {
                handleNext();
            } else {
                setCurrentImage(0);
            }
        }, 8000);
        return () => clearInterval(interval);
    }, [bannerData, currentImage]);

    return (
        <>
            <section className='w-full h-full'>
                <div className='flex min-h-full max-h-[90vh] overflow-hidden relative'>
                    {bannerData?.map((data, index) => {
                        return (
                            <div
                                key={data?.id + "bannerHome" + index}
                                className='min-w-full relative group transition-transform'
                                style={{ transform: `translateX(-${currentImage * 100}%)` }}
                            >
                                <div className='w-full h-full relative'>
                                    {/* Image Wrapper */}
                                    <div className='relative h-full'>
                                        <img
                                            src={data?.imgUrl}
                                            className='w-full h-full object-cover'
                                            style={{
                                                objectPosition: 'top',  // Keeps the top part visible
                                            }}
                                        />
                                        {/* Masking effect using gradient */}
                                        <div className='absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-neutral-900 to-transparent'></div>
                                    </div>

                                    {/* Button Controls */}
                                    <div className='absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:flex'>
                                        <button onClick={handlePrevious} className='bg-white p-1 rounded-full text-xl z-10 text-black'>
                                            <FaAngleLeft />
                                        </button>
                                        <button onClick={handleNext} className='bg-white p-1 rounded-full text-xl z-10 text-black'>
                                            <FaAngleRight />
                                        </button>
                                    </div>

                                    {/* Text Content */}
                                    <div className='container mx-auto'>
                                        <div className='absolute bottom-0 max-w-md px-3'>
                                            <h2 className='font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl'>
                                                बाबा सांवत नाथ पुस्तकालय
                                            </h2>
                                            <p className='text-ellipsis text-white line-clamp-3 my-2'>
                                                Library has been significantly improving the things
                                            </p>
                                            <div className='flex items-center gap-4'>
                                                <p className='text-white'>
                                                    Rating: {Number(data?.vote_average).toFixed(1)}+
                                                </p>
                                                <span>|</span>
                                                <p className='text-white'>
                                                    View: {Number(data?.popularity).toFixed(0)}
                                                </p>
                                            </div>
                                            <Link to='/gallery'>
                                                <button className='bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105'>
                                                    Explore
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <CardCarousel />
            <Footer />
        </>
    );
};


export default BannerHome;



