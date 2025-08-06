import React from 'react';
import { mobileData } from '../stores/data/mobiles';
import { useParams } from 'react-router-dom';

const MobileSinglePage = () => {
    const { id } = useParams()
    const Product = mobileData.find((item) => item.id === id)
    console.log(id)

    return (
        <>
            <div>
                <div>this is sample</div>

                <div>
                    <img src={Product.image } alt=""/>
                </div>
                <div>
                    {Product.company},{Product.model }
                </div>
                <div>
                    {Product.price }
                </div>
            
              
            </div>

        </>
    )
}

export default MobileSinglePage