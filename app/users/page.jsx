import React from 'react'
import GetUsers from '../libs/getUsers'
import Link from 'next/link';

export default async function UsersPage() {
  const properties = await GetUsers();
  console.log("The Data is", properties);

  function getRandomNumber(){
    return Math.random(6)
  }


  return (
    <div>
      <h1>Properties</h1>
      {properties.map(Data => {
        return (
          <>
            <p>
              <Link href={`/users/${Data.puid}?url=${getRandomNumber()}`}>
                {Data.puid}
              </Link>

            </p>
          </>
        )
      })
      }
    </div>
  )
}