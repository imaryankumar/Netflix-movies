import  { FC } from 'react'

interface pageprops{
  params?:{slug:string};
  searchParams?:{[key:string]:string | string[]| undefined };
};

const Aryan:FC<pageprops> = ({params,searchParams}) => {
  return (
    <>
     This is {params?.slug} Page
    </>
  )
}

export default Aryan