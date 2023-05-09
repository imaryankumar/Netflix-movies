"use client"
import Card from '@/components/Card';
import  {useEffect, useState } from 'react'
interface movieprops{}
interface apiprops{
  Title:string ;
  Year:number;
  Runtime:any;
  Poster:any;

}

const Movies:movieprops = async() => {
  
 const [moviedata,setMovieData]=useState<apiprops[]>([]);
   useEffect(()=>{
   try{
    fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies',{ cache: 'no-store' })
    .then(response => response.json())
    .then(json => setMovieData(json)).catch(err=>console.log(err));
   }catch(err){
    console.log(err)
   }
  },[])
  return (
    <div className='px-28 pb-16 '> 
     <h1 className='text-center py-8 text-4xl font-extrabold '>Series and Movies</h1>
    <div className='flex items-center text-center flex-1 justify-start  flex-wrap gap-10'>
    {
    moviedata.map((movies)=>{
      return(
        <div key={movies.Runtime}>
           <Card title={movies.Title} poster={movies.Poster} year={movies.Year} />
        </div>
        
      )
    })
   }
    </div>
    </div>
  )
}

export default Movies

