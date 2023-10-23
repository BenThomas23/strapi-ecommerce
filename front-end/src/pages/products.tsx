
import axios from 'axios';
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Product from '@/components/Product'
import Header from '@/components/Header'
import { useSession, signIn, signOut } from 'next-auth/react';
import { Button } from '@chakra-ui/react';
import { AiOutlineGooglePlus } from 'react-icons/ai';

export async function getServerSideProps(context: any) {
  const token = process.env.API_TOKEN
  const response = await axios.get('http://127.0.0.1:1337/api/products?populate=*', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  //console.log(response.data);
  const y = await response.data;
  return {
    props: {
      data: y
    }
  };
}


function products(props: any) {
  //console.log(props.data.data);
  //console.log(props.data.data[0].attributes);
  const { data, status } = useSession();
  if(status === 'authenticated') {
  return (
    <>
      <Header />
      
        <div className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto ">
          <div className="flex flex-wrap -m-4">
            {props.data.data.map((item: any) => {
  return (<Product   image={"http://127.0.0.1:1337" + item.attributes.image.data[0].attributes.url} name={item.attributes.Title} price={item.attributes.Price} cat={item.attributes.category} slug={item.attributes.slug}/>)
            })}
          </div>
        </div>
      </div>
      
      
    </>
  )}
  else{
    return (
      <div className="h-1/2 w-1/2 m-auto">
        <Button colorScheme='teal' size='md' onClick={() => signIn('google')}><AiOutlineGooglePlus className="mr-4"/>Sign in with Google</Button>
      </div>
    );
  }
  
}


export default products