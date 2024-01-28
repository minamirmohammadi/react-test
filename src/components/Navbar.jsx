import React from 'react'
import Searchcontact from './contact/Searchcontact'
import { PURPLE, BACKGROUND, } from '../helpers/Colors'

export default function Navbar() {
    return (

        <nav className='text-[#fff] w-full fixed top-3' style={{ backgroundColor: BACKGROUND }}>
            <div className="container">
                <div className='shadow-lg shadow-[#bd93f9] flex w-full p-2'>
                    <div className='w-1/3 flex items-center'>
                        <i class='bx bxs-user-badge'></i>
                        وب اپلیکیشن مدیریت {" "}
                        <span className=' mr-2' style={{ color: PURPLE }}>مخاطبین</span>
                    </div>
                    <div className='w-1/3 '>
                        <Searchcontact />
                    </div>
                </div>
            </div>

        </nav>


    )
}
