import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getTrendingMovies();
    }, []);

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos().then(resp => {
            console.log(resp.data.results);
            setMovieList(resp.data.results);
        });
    }

    const sliderRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += elementRef.current.offsetWidth - 110;
        }
    }

    const sliderLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= elementRef.current.offsetWidth - 110;
        }
    }

    return (
        <div className='bg-black'>
            <HiChevronLeft
                className="hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer "
                onClick={sliderLeft}
            />
            <HiChevronRight
                className='hidden md:block text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0'
                onClick={sliderRight}
            />

            <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
                {movieList.map((item) => (
                    <img
                        key={item.id}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        className='min-w-full  md:h-[500px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in'
                        alt={item.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Slider;
