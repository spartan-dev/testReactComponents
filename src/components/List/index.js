import React from 'react'
 const numbers = [1,2,3,4,5,6,7];

export const listItems = numbers.map((oneNumber, index) => 
  <li key={index}>{oneNumber}</li>)
