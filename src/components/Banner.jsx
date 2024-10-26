import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Footer from '../pages/Footer';
import CardCarousel from './CardCarousel';
import { db } from '../firebase'
import { collection, getDocs } from "firebase/firestore"; 
import Loader from './Loader';
import Ban from './Ban';

// component starts here
const BannerHome = () => {
    const [bannerData, setBannerData] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [loading ,setIsLoading]=useState(true);
    // Fetch the data from Firebase
    useEffect(() => {
        async function getSome() {
            const querySnapshot = await getDocs(collection(db, "carousel"));
            setIsLoading(false);
            setBannerData(querySnapshot.docs.map(doc => {
                return { imgUrl: doc.data().imgUrl, ...doc.data() }; 
            }));
          
        }
        getSome();
    }, []);

    const handleNext = () => {
        if (currentImage < bannerData.length - 1) {
            setCurrentImage(prev => prev + 1);
        }else{
            setCurrentImage(0)
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
        {/* <Ban images={bannerData}/> */}
        <section className="w-full h-full">
    {loading && <Loader />}
    <div className="flex min-h-full max-h-[68vh] overflow-hidden relative">
        {bannerData?.map((data, index) => (
            <div
                key={data?.id + "bannerHome" + index}
                className="min-w-full relative group transition-transform"
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
            >
                <div className="w-full h-full relative">
                    {/* Image Wrapper */}
                    <div className="relative h-full w-full "> {/* Aspect Ratio */}
                        <img
                            src={data?.imgUrl}
                            className="w-full h-full object-contain aspect-w-16 aspect-h-9"
                            alt="Banner Image"
                        />
                        {/* Masking effect using gradient */}
                        <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-neutral-900 to-transparent"></div>
                    </div>

                    {/* Button Controls */}
                    <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:flex">
                        <button onClick={handlePrevious} className="bg-white p-1 rounded-full text-xl z-10 text-black">
                            <FaAngleLeft />
                        </button>
                        <button onClick={handleNext} className="bg-white p-1 rounded-full text-xl z-10 text-black">
                            <FaAngleRight />
                        </button>
                    </div>

                    {/* Text Content */}
                    <div className="container mx-auto">
                        <div className="absolute bottom-0 max-w-md px-3">
                            <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                                Dalanwas
                            </h2>
                            <p className="text-ellipsis text-white line-clamp-3 my-2">
                               Welcome to our official website
                            </p>
                            <div className="flex items-center gap-4">
                                <p className="text-white">
                                    Rating: ++
                                </p>
                                <span>|</span>
                                <p className="text-white">
                                    View: ++
                                </p>
                            </div>
                            <Link to="/gallery">
                                <button className="bg-white px-4 py-2 text-black font-bold rounded mt-4 hover:bg-gradient-to-l from-red-700 to-orange-500 shadow-md transition-all hover:scale-105">
                                    Explore
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
</section>

            <CardCarousel />
            <Footer />
        </>
    );
};


export default BannerHome;