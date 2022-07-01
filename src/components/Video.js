import React from 'react'
import "./sass/style.scss"
// function Video() {
//   const [endPoind ,  setEndPoind] = useState("");
//   const [container , setConatainer] = useState([]);
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'b1f14ebcc2msha5be00f66d62ec2p1be90djsn1fcf72c13737',
//       'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
//     }
//   };
//   useEffect(( )=>{
//    fechMe()
//   },[endPoind])
//   const fechMe = () =>{

//     fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q= ${endPoind}`, options)
//     .then(response => {
//     return  response.json()
    
//     })
      
//   .then(data=>{
//     setConatainer(data.d)
//   })
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
// }
  
  
//   const heatChange  = (e)=>{
//     setEndPoind(e.terget.value)
    
//   }
//   const onSubmiter = (e)=>{
//     e.preventDefault()

//   }
//   return (
//     <div  className='Videos'>
//       <form onSubmit={onSubmiter}>
//         <input type="text"
//          onChange={heatChange}
//         />
//         <button type='submit'>Best</button>
//       </form>
//       {container.map((value)=>{
//         return(
//           <p>dsafasdfsa</p>
//         )
//       })}
//     </div>
//   )
// }
function Seting(props){
  return (
    <>
      <div className="cards">
        <h3>
          {props.name} <br />
          {props.years}
        </h3>
        <img src={props.img} alt="" /><br />
        <p>
        </p>
      </div>
    </>
  );
}

 
function Video(){
  const obj = [
    {
     
      img:"https://cdna.artstation.com/p/top_row_items/images/000/002/358/default/c18cbe48ad11c7ed.jpg?1656005899",
      name: "Email",
      years:2021,
    },
    {
      img:"https://gothamcentralcomics.com/wp-content/uploads/2019/12/91V9bOCc6xL.jpg",
      name: "Email",
      years:2021,
      buy: "Sign up for free",
    },
    {
      img:"https://artfiles.alphacoders.com/999/99913.jpg",
      name: "Email",
      years:2021,
    },
    {
     
      img:"https://cdna.artstation.com/p/top_row_items/images/000/002/358/default/c18cbe48ad11c7ed.jpg?1656005899",
      name: "Email",
      years:2021,
    },
    {
      img:"https://gothamcentralcomics.com/wp-content/uploads/2019/12/91V9bOCc6xL.jpg",
      name: "Email",
      years:2021,
      buy: "Sign up for free",
    },
    {
      img:"https://artfiles.alphacoders.com/999/99913.jpg",
      name: "Email",
      years:2021,
    },
    {
     
      img:"https://avatars.mds.yandex.net/i?id=496bb3e651cc93be039ebe903b62e84d-6579542-images-thumbs&n=13",
      name: "Email",
      years:2021,
    },
    {
      img:"https://gothamcentralcomics.com/wp-content/uploads/2019/12/91V9bOCc6xL.jpg",
      name: "Email",
      years:2021,
      buy: "Sign up for free",
    },
    {
      img:"https://artfiles.alphacoders.com/999/99913.jpg",
      name: "Email",
      years:2021,
    },
    {
     
      img:"https://avatars.mds.yandex.net/i?id=496bb3e651cc93be039ebe903b62e84d-6579542-images-thumbs&n=13",
      name: "Email",
      years:2021,
    },
    {
      img:"https://gothamcentralcomics.com/wp-content/uploads/2019/12/91V9bOCc6xL.jpg",
      name: "Email",
      years:2021,
      buy: "Sign up for free",
    },
    {
      img:"https://artfiles.alphacoders.com/999/99913.jpg",
      name: "Email",
      years:2021,
    },
    {
     
      img:"https://avatars.mds.yandex.net/i?id=496bb3e651cc93be039ebe903b62e84d-6579542-images-thumbs&n=13",
      name: "Email",
      years:2021,
    },
    {
      img:"https://gothamcentralcomics.com/wp-content/uploads/2019/12/91V9bOCc6xL.jpg",
      name: "Email",
      years:2021,
      buy: "Sign up for free",
    },
    {
      img:"https://artfiles.alphacoders.com/999/99913.jpg",
      name: "Email",
      years:2021,
    },
    {
     
      img:"https://avatars.mds.yandex.net/i?id=496bb3e651cc93be039ebe903b62e84d-6579542-images-thumbs&n=13",
      name: "Email",
      years:2021,
    },
    {
      img:"https://gothamcentralcomics.com/wp-content/uploads/2019/12/91V9bOCc6xL.jpg",
      name: "Email",
      years:2021,
      buy: "Sign up for free",
    },
    {
      img:"https://artfiles.alphacoders.com/999/99913.jpg",
      name: "Email",
      years:2021,
    },
  ];

  return (
    <div className='mian_video'>

      <div className="main">
        {obj.map((get) => (
          <Seting
           img={get.img}
           name={get.name}
           years={get.years}

          />
        ))}
      </div>
    </div>
  )
}

export default Video