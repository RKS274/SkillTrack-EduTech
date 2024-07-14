import React from 'react'
import Card from './Card';
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi';
import {useState} from 'react';

const Testimonials = (props) => {
    let reviews = props.reviews; 

    const[index,setIndex] = useState(0);

    function leftShiftHandler(){
      if(index - 1 < 0){
        setIndex(reviews.length - 1);
      }
      else{
        setIndex(index - 1);
      }
    }

    function rightShiftHandler(){

      if(index +  1 >= reviews.length){
        setIndex(0);
      }
      else{
        setIndex(index + 1);
      }

    }

    //Math.random koi bhi random value dadega 0 se 1 k bich
    // so to get 0 to 5  we need to multiply it with the length
    // firr 0 s 5 me koi bhi i.e 4.2 bhi aa skta hai so, always give floor() value

    function surpriseHandler(){
      let randomIndex = Math.floor(Math.random() * reviews.length);
      setIndex(randomIndex);
    }



  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 hover:shadow-xl'>

        <Card review = {reviews[index]}></Card>

        <div className='flex text-3xl mt-11 gap-3 text-violet-400 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-violet-500'>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-violet-500'>
            <FiChevronRight/>
        </button>
    </div>

    {/* <div className='mt-6'>
        <button
        onClick={surpriseHandler}
         className='bg-black hover:bg-violet-500 transition-all duration-200
        cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
            Surprise Me
        </button>
    </div> */}





    </div>
  )
} 

export default Testimonials
//rafc for shortcut codes