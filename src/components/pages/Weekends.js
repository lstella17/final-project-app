import React from 'react';
import CardItem from '../CardItem';
import '../../App.css';

export default function Weekedns() {
  return (
    <div className='summer2022'>
      <div className='cards__container'>
      <h6>Weekend Escape!</h6>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/paris.jpg'
              text='Paris - Visit the Eiffel Tower for the perfect view.'
              label='120$'
              path='/weekends'
            />
            <CardItem
              src='images/belgrade.jpg'
              text='Escape from your everyday Habits and experience something new! -Belgrade.'
              label='65$'
              path='/weekends'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour.'
              label='400$'
              path='/weekends'
            />
            <CardItem
              src='images/istanbul1.jpg'
              text='Make a good decision and visit Istanbul this weekend!'
              label='189$'
              path='/weekends'
            />
          </ul>
          <ul className='cards__items'>        
            <CardItem
              src='images/thessaloniki.jpg'
              text='You know the best place for shopping right? -Thessaloniki.'
              label='Only 50$'
              path='/weekends'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise.'
              label='1020$'
              path='/weekends'
            />
            <CardItem
              src='images/athens.jpg'
              text='Here is a wise choice to Fulfill your free time - Visit Athens!'
              label='220$'
              path='/weekends'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains.'
              label='260$'
              path='/weekends'
            />
          </ul>         
        </div>
      </div>
    </div>
  )
}