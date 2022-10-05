import React from 'react';
import CardItem from '../CardItem';
import '../../App.css';

export default function Summer2022() {

  return (
    <div className='summer2022'>
      <div className='cards__container'>
        <h6>Plan your summer right!</h6>
        <div className='cards__wrapper'>
          <ul className='cards__items'>          
          <CardItem
            src='images/maldives.jpg'
            text='Make your dreams come true, Now is the right time! -Maldives.'
            label='1450$'
            path='/summer2022'
          />
          <CardItem
            src='images/spain.jpg'
            text='Spend the hottest days in Spain!'
            label='830$'
            path='/summer2022'
          />
          <CardItem
            src='images/istanbul2.jpg'
            text='Enjoy the beautifull Istanbul this summer, offers from 7-10 days.'
            label='700-1000$'
            path='/summer2022'
          />
          <CardItem
            src='images/zante.jpg'
            text='Zakyntos has the best watters, take your Friends and make the best memories!'
            label='500$'
            path='/summer2022'
          />
          </ul>
          <ul className='cards__items'>
          <CardItem
            src='images/croatia.jpg'
            text='If you are tired of going to the Same place every year, Croatia is the best choice for you!'
            label='630$'
            path='/summer2022'
          />
          <CardItem
            src='images/hurghada.jpg'
            text='Here is the best Egzotic experience for you - Hurghada.'
            label='479$'
            path='/summer2022'
          />
          <CardItem
            src='images/budva.jpg'
            text='If you are a party people, We recommend Budva!'
            label='350$'
            path='/summer2022'
          />
          <CardItem
            src='images/santorini.jpg'
            text='There is a little Magic upon the blue sea, Come to see it - Santorini'
            label='499$'
            path='/summer2022'
          />
          </ul>       
        </div>
      </div>
    </div>
  )
}