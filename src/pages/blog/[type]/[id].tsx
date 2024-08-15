import { useRouter } from "next/router";

const LayoutBlog = ({children})=>{
    return (
      <div>
        <header style={{backgroundColor:"orange", width:"100%", height: "80px", top: "0", marginBottom: "10px"}}>
          this is header
        </header>
        {children}
      </div>
    )
  }

const BlogTypeId = () =>{
   const{query} =useRouter();
   console.log({query})

    return(
        <>
        <h1>Blog Page</h1>
        <p>type : {query.type}</p>
        <br/>
        <p>id : {query.id}</p>
        </>
    )
}

BlogTypeId.getLayout = (page) => <LayoutBlog>{page}</LayoutBlog>;

export default BlogTypeId;