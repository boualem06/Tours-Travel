import avatar from '../assets/images/avatar.jpg'
import Rating from '@material-ui/lab/Rating';
import { useState } from 'react';
const Review = ({review}) => {

    return (
        <div className='flex items-center w-full'>
            <img className='h-20 w-20' src={avatar}></img>
            <div className='w-full'>
                <div className='flex w-full justify-between'>
                    <h1 className='font-bold text-blue-900'>{review.username}</h1>
                    <Rating
                            
                            value={review.rating}
                            precision={0.5}
                        />
                </div>
                <h2 className='text-sm text-gray-400'>{review.updatedAt.slice(0, 10)}</h2>
                <h2>{review.reviewText} </h2>
            </div>
        </div>
    )
}

export default Review