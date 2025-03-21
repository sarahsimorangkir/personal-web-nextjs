import path from "path";
import fs from "fs";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "posts");

const getPostDetailData =(id: string)=>{
    const fileContents = fs.readFileSync(`${postDirectory}/${id}.md`, "utf8")

    const matterFile = matter(fileContents);

    return{
        id,
        content: matterFile.content,
        ...matterFile.data
    }
 
}

export default getPostDetailData;