import React from 'react';
import CardItem from './CardItem';
import './BtnNav.css';
import ScrollAnim from './ScrollAnim';

function Cards() {
  return (
    <div>
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/maldives.jpg'
              text='Make your dreams come true, Now is the right time! -Maldives.'
              label='1450$'
              path='/summer2022'
            />
            <CardItem
              src='images/paris.jpg'
              text='Paris - Visit the Eiffel Tower for the perfect view.'
              label='120$'
              path='/weekends'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/hurghada.jpg'
              text='Here is the best Egzotic experience for you - Hurghada.'
              label='479$'
              path='/summer2022'
            />
            <CardItem
              src='images/athens.jpg'
              text='Here is a wise choice to Fulfill your free time - Visit Athens!'
              label='220$'
              path='/weekends'
            />
            <CardItem
              src='images/thessaloniki.jpg'
              text='You know the best place for shopping right? -Thessaloniki.'
              label='Only 50$'
              path='/weekends'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/istanbul1.jpg'
              text='Make a good decision and visit Istanbul this weekend!'
              label='189$'
              path='/weekends'
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
            <CardItem
              src='images/spain.jpg'
              text='Spend the hottest days in Spain!'
              label='830$'
              path='/summer2022'
              />
          </ul>
          <ul className='cards__items'>
            <ScrollAnim />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;