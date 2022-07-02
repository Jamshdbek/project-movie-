import React from 'react'
import "./sass/style.scss"

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