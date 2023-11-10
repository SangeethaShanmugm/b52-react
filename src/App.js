import './App.css';
import { useState } from "react"
function App() {
  //JS starts
  const name = "Jack";
  const name1 = "John";

  const users = [
    {
      name: "jack",
      age: "20"
    },
    {
      name: "john",
      age: "22"
    },
    {
      name: "peter",
      age: "25"
    },
    {
      name: "mick",
      age: "30"
    }
  ];

  const profile = [
    {
      name: "jack",
      pic:
        "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
    },
    {
      name: "john",
      pic: "https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    },
    {
      name: "peter",
      pic:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
  ];
  //JS ends
  //JSX starts
  return (
    <div className="App">
      <Counter />
      {/* {users.map((usr) => (
        <Welcome name={usr.name} age={usr.age} />
      ))} */}
      {/* // profile pic and name => task */}

      {/* {profile.map((profile) => (
        <Msg name={profile.name} picture={profile.pic} />
      ))} */}

      {/* <Msg
        name="jack"
        pic="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?cs=srgb&dl=pexels-mohamed-abdelghaffar-771742.jpg&fm=jpg"
      />
      <Msg
        name="john"
        pic="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
      />
      <Msg
        name="peter"
        pic="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      /> */}
      {/* <h1>Hello {name}</h1>
      <h1>Welcome {name1}</h1> */}
      {/* <Welcome name="jack" age="20" />
      <Welcome name="john" age="22" />
      <Welcome name="peter" age="25" /> */}
      {/* <Msg username="Mick" /> */}
    </div>
  );
  //JSX ends
}



function Counter() {
  // let like = 10
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  // console.log("previous value", like)
  return (
    <div>
      {/* onClick => camelCase */}
      <button onClick={() => {
        setLike(like + 1);
        console.log(like)
      }} >👍 {like}</button>

      {/* create dislike button */}
      <button onClick={() => {
        setDislike(dislike + 1);
        console.log(dislike)
      }} >👎 {dislike}</button>

    </div>
  )
}

//props => property
function Welcome({ name, age }) {
  return (
    <h1>
      Hey {name} {age}
    </h1>
  );
}

function Msg({ name, picture }) {
  return (
    <div>
      <img className="profile-pic" src={picture} />
      <h1>Hi {name}</h1>
    </div>
  );
}

//{} => template syntax
//SPA => index.html
//Webpack +babel

//JSX => Javascript XML /extended
//class in JS  => reserved keyword

//Types of component
// 1. functional component
// 2. class component

//custom component
// 1.First letter must be capital
// 2. It return  a JSX element

//<> </> => Fragment



export default App;
