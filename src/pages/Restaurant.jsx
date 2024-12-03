import React from 'react'
import RestaurantDeatail from '../components/RestaurantDetail'
import RestaurantProducts from '../components/RestaurantProducts'

const Restaurant = () => {
    return (
        <div>
            <div className='shadow'>
                <div className='container'>
                    <RestaurantDeatail />
                </div>
            </div>
            <div className='container'>
                <RestaurantProducts />
            </div>
        </div>
    )
}

export default Restaurant