import React from 'react';
import CardItem from './CardItem';
import './Cards.css';




function Cards(props) {
    return (
        <div className='cards'>
      <h1>Check out these Amazing Opportunities</h1>
            <div className='cards_container'>
                <div className='cards_wrapper'>
                    <ul className='cards_items'>
                    <CardItem 
                    src='images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                     <CardItem 
                    src='images/img-5.jpg'
                    text='Stay at the most luxurious hotels'
                    label='Luxury'
                    path='/services'
                    />
                    </ul>
                    <ul className='cards_items'>
                    <CardItem 
                    src='images/img-3.jpg'
                    text='Set sail in the Atlantic Ocean Visiting Uncharted waters'
                    label='Adventure'
                    path='/services'
                    />
                     <CardItem 
                    src='images/img-4.jpg'
                    text='Hike to the top of the Himilayan Mountains'
                    label='Adrenaline'
                    path='/services'
                    />
                     <CardItem 
                    src='images/img-8.jpg'
                    text='Ride across the Sahara Desert By camel back'
                    label='Explore'
                    path='/services'
                    />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
