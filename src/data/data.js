import BlogMark from '../../public/posts/next.jpg';
import HMS from '../../public/posts/go.png';
import Spodev from '../../public/posts/test.png';



export const data = [
   
    {
        id : 1,
        name : "Hospital Management System",
        image : HMS,
        github: "https://github.com/sarahsimorangkir/finalproject-hms-fe",
        live: "https://hms-adm-app.vercel.app/",
        created_at : "December 2021",
        stack : "JS, ReactJS, Go, MongoDB, MySQL", 
        description:"This application is centered on outpatient services. The aim of this project is to facilitate health facilities in the midst of a pandemic to go digital so they can work more effectively. This application will mainly target the lower class of health facilities in the second-third tier cities.",
    },
    
    
    {
        id : 2,
        name : "Spotify Dev",
        image : Spodev,
        github: "https://github.com/sarahsimorangkir/generasigigih-fe-p/tree/deploy",
        live: "https://generasigigih-fe-p.vercel.app/",
        created_at : "March 2022",
        stack :"JS, ReactJS, Typescript, ChakraUI",
        description :"An application for search song, select favorite songs and create your spotify playlist. it's seamless integration with your spotify account.  ",

    },
    {
        id : 3,
        name : "Blog Mark",
        image : BlogMark,
        github: "https://github.com/sarahsimorangkir/MiniProject-FE-BlogApp",
        live: "",
        created_at : "November 2021",
        stack : "JS, ReactJS, GraphQL",
        description:"A blog app that provide information based on given category : Technology, Story, Social, Traditional. in this app,  we can register our account then login to create a blog, and also can delete and edit too. The blog will be launched on homepage."
    },

]
