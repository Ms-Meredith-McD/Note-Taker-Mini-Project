


export default function Note(props){

  if( !props.currentNote ) return <></>
  return (
    <>
      <h1>{ props.currentNote.title }</h1>
      <p>{props.currentNote.body}</p>
      <p>
        This note is of 

          { props.currentNote.priority === "1" && 
          <span> Low </span>
           }
          { props.currentNote.priority === "2" && (<span> Medium </span>) }
          { props.currentNote.priority === "3" && (<span> High </span>) }

        priority
      </p>
    </>
  )
}