import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <ChakraProvider>
   <SessionProvider session={pageProps.session}>
    <Component {...pageProps} />
   </SessionProvider>
   </ChakraProvider>
  );
 }
 
 export default App;