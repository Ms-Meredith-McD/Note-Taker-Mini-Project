import React from "react" 


export default function Headline(props){


  return (
    <>
      <h1>{ props.title.toUpperCase() }</h1>
      <h3>{ props.subtitle } </h3>
    </>
  )
}