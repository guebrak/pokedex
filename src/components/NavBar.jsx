import React from "react"




function NavBar({count, setCount}){
    const handleClickNext = () => {
        setCount(count + 1)
      }
      const handleClickPrev = () => {
        setCount(count - 1)
      }
    
      return (
        <div>
           <button onClick={handleClickPrev}>prev</button>
           <button onClick={handleClickNext}>next</button>
        </div>
      )
    }


export default NavBar