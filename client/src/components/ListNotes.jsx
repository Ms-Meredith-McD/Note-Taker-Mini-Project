import { useEffect } from "react"


export default function ListNotes(props){

  function getPriority(value){
    if( value === "1" ) return "Low"
    if( value === "2" ) return "Medium"
    if( value === "3" ) return "High"
  }

  useEffect(() => {
    console.log(props.notes)
  }, [])

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Priority</th>
          </tr>
        </thead>

        <tbody>
          { props.notes.map( (note) => (
            <tr key={note._id}>
              <td>
                <span>
                  <a href={`/note/${note?._id}`}>
                    { note.title }
                  </a>
                </span>
              </td>
              <td>{ note.body }</td>
              <td>
                { note.priority === "1" && (
                  <span>Low</span>
                )}

                { note.priority === "2" && (
                  <span>Medium</span>
                )}

                { note.priority === "3" && (
                  <span>High</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}