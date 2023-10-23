import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { Button, ButtonGroup } from '@chakra-ui/react'
const inter = Inter({ subsets: ["latin"] });
import { AiOutlineGooglePlus } from 'react-icons/ai';

import { useSession, signIn, signOut } from 'next-auth/react';
export default function IndexPage() {
  const { data, status } = useSession();
  if (status === 'loading') return <h1> loading... please wait</h1>;
  if (status === 'authenticated') {
    return (
      <div>
        <Header></Header>
        <h1>Hi {data.user.name}</h1>
        <img src={data.user.image} alt={data.user.name + ' photo'} />
        <button onClick={signOut}>Sign out</button>
      </div>
    );
  }
  return (
    <div className="h-1/2 w-1/2 m-auto">
      <Button colorScheme='teal' size='md' onClick={() => signIn('google')}><AiOutlineGooglePlus className="mr-4"/>Sign in with Google</Button>
    </div>
  );
}

