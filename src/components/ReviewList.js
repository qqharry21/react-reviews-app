/** @format */

import React from 'react';
import Review from './Review';

function ReviewList() {
  return (
    <section className='container'>
      <div className='title'>
        <h2>Our Reviews</h2>
        <div className='underline'></div>
      </div>
      <Review />
    </section>
  );
}

export default ReviewList;
