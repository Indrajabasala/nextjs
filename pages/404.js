// import {useRouter} from 'next/router'
import React  from 'react';
import Link from 'next/Link'
export default function Custom404() {
    // const router = useRouter();
  return (
  <div>
    the page in progress
   {/* <button onClick={() => router.push('/Routing/Welcome')}> Welcome page </button> */}
   <Link href="/Routing/Welcome">
      <button>
        Go back Welcome 
      </button>
    </Link>
  </div>
  )
}
