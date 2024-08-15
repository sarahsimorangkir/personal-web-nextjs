import { useRouter } from "next/router";

const Analytics = () =>{
  const {query} = useRouter();
  console.log({query})

    return(
        <>
        <h1>Dashboard</h1><br/>
        <p>apa yo{query.analytics}</p>
        </>
    )
}

export default Analytics;