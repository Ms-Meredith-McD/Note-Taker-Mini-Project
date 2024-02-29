import React from "react"


export default function Bio(props){

  return (
    <>
      <h1>{ props.title } </h1>

      <h3>Total hits: { props.counter }</h3>

      <button onClick={() => props.setHitCounter(props.counter+1)}>Increase Hit Count</button>

      { props.children }
    </>
  )
}