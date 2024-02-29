import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Headline from './components/Headline'
import Bio from './components/Bio'

export default function App() {

  /*
    Hooks are simply reusable pieces of functionality that we want to give to multiple components in our app.
    Props = immutable
    Stateful values = can be updated anytime 
  */

  const [ hitCounter, setHitCounter ] = useState(0)
  const [ username, setUsername ] = useState("")

  const [ formData, setFormData ] = useState({ fname: "", lname: "", email: "", phone: "" })

  function addToCounter(){
    setHitCounter(hitCounter+1)
  }

  function reverseUserName(name){
    console.log( name.split("").reverse().join() )
  }

  function handleInputChange(e){
    setUsername(e.target.value)
    reverseUserName(e.target.value)
  }

  // const handleFormChange = (e) => setFormData({...formData, [e.target.name]: e.target.value })

  function handleFormChange(e){
    console.log("hello")
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  async function submitData(){
    await fetch("/api/user", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  
  useEffect( () => {

  }, [])



  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <Headline title="Hello world" subtitle="Buy Dizzy Some Glasses"  />


      <Bio title="All About Me" counter={hitCounter} setHitCounter={setHitCounter}>
        <p>The quick brown fox jumped over the lazy moon.</p>
        <p>The quick brown fox jumped over the lazy moon.</p>
      </Bio>

      <form>
        <input type="text" name="fname" placeholder="Mary" value={formData.fname} onChange={handleFormChange} />
        <input type="text" name="lname" placeholder="Jones" value={formData.lname} onChange={handleFormChange}  />
        <input type="text" name="email" placeholder="mjones@gmail.com" value={formData.email} onChange={handleFormChange}  />
        <input type="text" name="phone" placeholder="555-555-1212" value={formData.phone} onChange={handleFormChange}  />
      </form>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

