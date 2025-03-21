import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

const getPostData =({ limit=0 })=>{
  const fileNames = fs.readdirSync(postDirectory);
  
  const allPost = fileNames.map((filename)=>{
    const id = filename.replace(/\.md$/, "");
    
    const fullPath = path.join(postDirectory, filename)

    const fileContents = fs.readFileSync(fullPath, "utf8")

    const matterFile = matter(fileContents);

    return{
      id,
      ...matterFile.data,
    }
  });

  let slicedPostData = allPost;
  if(limit > 0){
    slicedPostData = allPost.slice(0, limit);
  }
  return slicedPostData.sort((a, b) => {
    //@ts-expect-error
      if(a.date > b.date){
        return 1;
      }else{
        return -1;
      }
  });
}

export default getPostData;