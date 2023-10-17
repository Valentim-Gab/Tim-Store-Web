import { GetServerSideProps } from 'next'
import { cookies } from 'next/headers'
import React from 'react'

export default function Header() {
  const token = cookies().get('access_token')

  return (
    <div>
      {token && <div>LOGADO</div>}
      {!token && <div>NÃO LOGADO</div>}
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const token = cookies().get('access_token')?.value

//   if (!token) {
//     // return {
//     //   redirect: {
//     //     destination: '/',
//     //     permanent: false
//     //   }
//     // }

//     return {
//       props: {
//         isAuthenticated: false
//       }
//     }
//   }

//   return {
//     props: {
//       isAuthenticated: true
//     }
//   }
// }
