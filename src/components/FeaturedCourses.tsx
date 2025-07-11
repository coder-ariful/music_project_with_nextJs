"use client"

import coursesData from '@/data/music_data.json'
import Link from 'next/link';
import { BackgroundGradient } from './ui/background-gradient';
import Image from 'next/image';

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string
}

const FeaturedCourses = () => {
    const featuredCourse = coursesData.courses.filter((course: Course) => course.isFeatured)
    return (
        <div className='py-12 bg-gray-900 '>
            <div>
                <div className='text-center'>
                    <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>Feature Course</h2>
                    <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the best</p>
                </div>
                <div className='mt-10 mx-20'>
                    <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                        {
                            featuredCourse.map((course) => (
                                <BackgroundGradient key={course.id} className="rounded-[22px] h-full max-w-[100vw] p-4 sm:p-10 bg-white dark:bg-zinc-900 " >
                                    <div className='flex justify-center items-center'>
                                        <Image
                                            src={course.image}
                                            alt="jordans"
                                            height="400"
                                            width='400'
                                            className="object-contain"
                                        />
                                    </div>
                                    <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 ">
                                        {course.title}
                                    </p>

                                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                        {course.description}
                                    </p>
                                    <button className="rounded-full pl-4 pr-1 py-1 w-36 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                                        <span>Buy now </span>
                                        <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                                            ${course.price}
                                        </span>
                                    </button>
                                </BackgroundGradient>
                            ))
                        }
                    </div>
                </div>
                <div className='mt-20 text-center'>
                    <Link href={'/courses'}
                        className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-200 hover:border-white transition duration-200'
                    >
                        View All Courses
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCourses;