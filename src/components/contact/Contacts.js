import React from 'react'
import { CURRENTLINE, ORANGE, PINK } from '../../helpers/Colors';
import Contact from './Contact';
// import notfound from '../../assets/Screenshot (127).png';
import Spinner from '../../components/Spinner';

export default function Contacts({ contacts, loading }) {
    return (
        <>
            <section className='container mt-24'>
                <div className='grid'>
                    <div className='flex justify-center'>
                        <button className='mx-2 text-lg p-2 flex items-center' style={{ backgroundColor: PINK }}>
                            ساخت مخاطب جدید
                            <i class='bx bx-user-plus mx-2'></i>
                        </button>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> :
                    <section className='container mt-10'>
                        <div className='grid-cols-2 '>
                            {
                                contacts.length > 0 ? contacts.map(c => (
                                    <Contact key={c.id} />

                                )) : (
                                    <div className='flex flex-col items-center p-5' style={{ backgroundColor: CURRENTLINE }}>
                                        <h3 className='text-lg mb-3' style={{ color: ORANGE }}>مخاطب یافت نشد...</h3>
                                        <img src={require('../../assets/no-found.gif')} alt="پیدا نشد" className='w-52' />
                                    </div>
                                )
                            }
                        </div>
                    </section>
            }

        </>
    )
}
