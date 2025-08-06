import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import {Link } from 'react-router-dom'


const MobilePage = () => {
    return (
        <>
            <Navbar />
            <div className='pageSection'>{
                mobileData.map((i) => {
                    return (
                        <div>
                            <Link to={`/mobiles/${i.id}`}>
                                <div className='pageImg'>
                                    <img src={i.image} alt="" />
                                </div>

                            </Link>
                            
                            <div className='proModel' >
                                {i.company},{i.model}
                            </div>
                        </div>
                    )
                })
            }</div>
        </>
    )
}
export default MobilePage