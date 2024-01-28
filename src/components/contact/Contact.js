import React from 'react'
import { CURRENTLINE, CYAN, ORANGE, PURPLE, RED } from '../../helpers/Colors';


export default function Contact() {
  return (
    <>
        <div className='w-1/2'>
                        <div className=' card my-2' style={{ backgroundColor: CURRENTLINE }}>
                            <div className="card_body">
                                <div className='flex items-center justify-around'>
                                    <div className='md:w-4/12 sm:w-4/12 '>
                                        <img src="https://placehold.co/200" alt="" style={{ border: `1px solid ${PURPLE}` }}
                                            className='r rounded-md max-w-full'
                                        />
                                    </div>
                                    <div className='md:w-7/12 sm:w-7/12  '>
                                        <ul className=''>
                                            <li className='bor border-b-[1px] border-black bg-slate-300 p-2'>نام و نام خانوادگی : {" "}
                                                <span className='font-bold'>زهرا میرمحمدی</span>
                                            </li>
                                            <li className='bor border-b-[1px] border-black bg-slate-300 p-2'>شماره همراه :  {" "}
                                                <span className='font-bold'>09190712124</span>
                                            </li>
                                            <li className='bor border-b-[1px] border-black bg-slate-300 p-2'>آدرس ایمیل{" "}
                                                <span className='font-bold'>lady.mirmohammadi@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='md-w-1/12 sm:w-1/12 flex flex-col items-center'>
                                        <button className='my-1 p-2' style={{ backgroundColor: ORANGE }}>
                                            <i class='bx bxs-low-vision flex items-center justify-center'></i>
                                        </button>
                                        <button className='my-1 p-2' style={{ backgroundColor: CYAN }}>
                                            <i class='bx bxs-pencil  flex items-center justify-center'></i>
                                        </button>
                                        <button className='my-1 p-2' style={{ backgroundColor: RED }}>
                                            <i class='bx bxs-trash flex items-center justify-center'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    </>
  )
}
