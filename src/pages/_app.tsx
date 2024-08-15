import "@/styles/globals.css";
import type { AppProps } from "next/app";


const Layout = ({children})=>{
  return (
    <div>
      <header style={{backgroundColor:"#000080", width:"100%", height: "80px", top: "0", marginBottom: "10px"}}>
        this is header
      </header>
      {children}
    </div>
  )
}


export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
  return getLayout(<Component />);


  
 
}
