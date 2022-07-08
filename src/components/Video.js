import React from 'react'
import "./sass/style.scss"
import "./sass/Videostil.scss"
import "./img/photo_2022-07-08_14-41-21.jpg"
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
     
      img:"https://main-cdn.sbermegamarket.ru/hlr-system/-6/39/89/38/79/10/2/600002402423b0.jpeg",
      name: "Email",
      years:2021,
    },
    {
      img:"https://avatars.mds.yandex.net/i?id=75a2fac167acf35a3cdb8eb40cd002be-6497606-images-thumbs&n=13",
      name: "Email",
      years:2021,
      buy: "Sign up for free",
    },
    {
      img:"https://images.unsplash.com/photo-1601925662822-510b76665bd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      img:"https://avatars.mds.yandex.net/i?id=63ec542c72039b83d0ad59b4058e792a-4577300-images-thumbs&n=13",
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
      img:"https://avatars.mds.yandex.net/i?id=63ec542c72039b83d0ad59b4058e792a-4577300-images-thumbs&n=13",
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
      img:"https://avatars.mds.yandex.net/i?id=63ec542c72039b83d0ad59b4058e792a-4577300-images-thumbs&n=13",
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
      img:"https://avatars.mds.yandex.net/i?id=63ec542c72039b83d0ad59b4058e792a-4577300-images-thumbs&n=13",
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
      img:"https://avatars.mds.yandex.net/i?id=63ec542c72039b83d0ad59b4058e792a-4577300-images-thumbs&n=13",
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