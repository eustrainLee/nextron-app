'use client'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Board from '../_board'

export default function Home() {
  let [count, setCount] = React.useState(0)

  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-tailwindcss)</title>
      </Head>
      <div className="grid grid-col-1 text-2xl w-full text-center">
        <div>
          <Board><div>123</div></Board>
        </div>
      </div>
      <p onClick={()=>{setCount(count+1)}}>count is {count}</p>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/next">Go to next page</Link>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/game">Go to game page</Link>
      </div>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <Link href="/">Go to root page</Link>
      </div>
    </React.Fragment>
  )
}
