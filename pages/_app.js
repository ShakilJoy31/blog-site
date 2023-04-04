import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div style={{
      backgroundImage: `url('https://images.pexels.com/photos/122107/pexels-photo-122107.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
      width: '100vw',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      minHeight: "100vh"
  }}>
      <Component {...pageProps} />
    </div>
  )
}
