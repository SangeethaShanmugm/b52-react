import React, { useState } from 'react'

function Example() {
    // const username = ["Deepak", "Richard", "Vivek"]

    const [username, setUserName] = useState(["Deepak", "Richard", "Vivek"])
    const [name, setName] = useState("")

    const movieName = "Frozen"
    const rating = 5

    const handleClick = (event) => {
        // setUserName([...username, name])
        setName(event.target.value)
    }

    return (
        <div>
            <h1>Hi {name}</h1>
            <input type="text" />
            <button onClick={handleClick}>Change Name</button>
            {/* {username.map((item) => (
                <Example1 name={item} movieName={movieName} />
            ))} */}
            {/* <h1>Movie Name: {movieName} </h1>
            <p>Rating for the movie: {rating}</p> */}
        </div>

    )
}


function Example1({ name, movieName }) {
    return (
        <div> <h1>Hi {name}</h1></div>
    )
}


export default Example