"use client"
import Card from '@/components/Card';

const fetchData = async()=>{
  const response= await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies',{cache:'force-cache'});
  return await response.json();
}

const Movies = async() => {
 


  const moviedata= await fetchData();
  return (
    <div className=' px-6 md:px-28 pb-16 '> 
     <h1 className='text-center py-8 text-2xl md:text-4xl font-extrabold '>Series and Movies</h1>
    <div className='flex items-center text-center flex-1 justify-start  flex-wrap gap-10'>
    {
    moviedata.map((movies:any)=>{
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

