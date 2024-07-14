//Done
import React,{useState} from 'react';
import { apiUrl,filterData } from './datas';
import Navbar from './Component/Navbar';
import Filter from './Component/Filter';
import Cards from './Component/Cards';
import Spinner from './Component/Spinner';
import {useEffect} from "react";
// import { toast } from 'react-toastify'; 

function Catalog() {

  const [courses,setCourses] = useState(null);

  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);


  async function fetchData() {
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output m cards ki saari values aaagyi
      setCourses(output.data);
    }
    catch(error){
     
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[])



  return (
    <div className="min-h-screen flex flex-col bg-black">
    
      
      <div>
       <Navbar/>
       </div>
     
  

      <div className="bg-black"> 
      <div>      
      <Filter
         filterData = {filterData}
         category = {category}
         setCategory = {setCategory}
         />
      </div>
       
    <div className='w-11/12 max-w-[1200px]
    mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
    {
      (loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>))
    }
    </div>
      </div>
        
    </div>
  );
};

export default Catalog;
