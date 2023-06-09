import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import FoodProductStyle from '../Components/FoodProductStyle.module.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { addUser } from '@/lib/healper';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [role, setRole] = useState('');

  // const [isRegisteredUser, setIsRegisteredUser] = useState(''); 
  //   useEffect(()=>{
  //       const localStorageUser = JSON.parse(localStorage.getItem('user'));
  //       setIsRegisteredUser(localStorageUser?.role); 
  //   },[])
  const handleRegisterButton = () =>{
    const formData = {name: name, email:email, role:role}
    localStorage.setItem('user', JSON.stringify(formData));
    router.push('/readPost');
  }
  return (
    <>
      <Head>
        <title>Blog Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center'>
        <div>
        <div style={{
          backgroundColor: '#19A7CE',
          borderRadius: '5px',
          width: '420px'
        }} className="relative modal-box">
          <div>
            <div>
              <h1 className="flex justify-center text-4xl text-white">Your Identity</h1>
              <div className="mt-6 ">
                <div>
                  <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Type your name here' className="w-full bg-black border-0 input focus:outline-none" />

                  <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Type your email here' className="w-full my-6 bg-black border-0 input focus:outline-none" required />

                  <select onChange={(e)=>setRole(e.target.value)} className="w-full mb-6 bg-black border-0 select">
                    <option disabled selected>Your role</option>
                    <option>Reader</option>
                    <option>Author</option>
                    <option>Admin</option>
                  </select>

                  <button onClick={handleRegisterButton} className={`block mx-auto mb-4 w-full text-xl hover:text-white normal-case hover:bg-black border-0 btn text-black bg-white`}>Register</button>

                </div>
              </div>
            </div>
          </div>

        </div>

        <div className='flex justify-around'>
          <label onClick={()=>router.push('/addPost')} style={{
            backgroundImage: "linear-gradient(45deg ,#FEA1BF, #BFEAF5)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }} className={`normal-case btn ${FoodProductStyle.moreFoodButton} btn-sm border-0 text-xl text-black mt-2 w-32`}>Add Post
          </label>

          <label onClick={()=>router.push('/readPost')} style={{
            backgroundImage: "linear-gradient(45deg ,green ,white)",
            backgroundSize: "100%",
            backgroundRepeat: "repeat",
          }} className={`normal-case btn ${FoodProductStyle.logOut} btn-sm border-0 text-xl text-black mt-2 w-32`}>Read Posts
          </label>

        </div>
        </div>
      </main>
    </>
  )
}
