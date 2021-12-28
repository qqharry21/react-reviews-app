/** @format */

import React, { useState, useEffect } from 'react';
import people from '../data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex(prevState => {
      return checkIndex(prevState - 1);
    });
  };
  const nextPerson = () => {
    setIndex(prevState => {
      return checkIndex(prevState + 1);
    });
  };

  const randomPerson = () => {
    setIndex(prevState => {
      let newIndex = Math.floor(Math.random() * people.length);
      if (prevState === newIndex) {
        return checkIndex(newIndex + 1);
      }
      return Math.floor(Math.random() * people.length);
    });
  };

  const checkIndex = index => {
    if (index > people.length - 1) {
      // 回到元素的第一個
      return 0;
    }
    if (index < 0) {
      // 回到元素的最後一個
      return people.length - 1;
    }
    return index;
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}

export default Review;
