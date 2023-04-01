import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div style={{
      backgroundImage: `url('https://img.freepik.com/free-vector/wireframe-landscape-against-starry-night-sky_1048-12248.jpg?w=1380&t=st=1680384003~exp=1680384603~hmac=e7bef29180bc0cce256dbab0703d6ddf13938d88ed27d1f0677642ffb0d57a9c')`,
      width: '100vw',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: "100vh"
  }}>
      <Component {...pageProps} />
    </div>
  )
}
