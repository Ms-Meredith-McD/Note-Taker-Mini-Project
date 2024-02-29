import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cookie from "js-cookie"
import { Home, Note, Auth } from "./pages"
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function App() {

  function verifyUser(){
    const cookie = Cookie.get("auth_cookie")
    console.log("cookie", cookie)
  }

  useEffect(() => {
    verifyUser()
  },[])

  return (
    <>
      <header>
        <p>This is the header</p>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/note/:id" element={<Note />} />
          <Route path="*" element={<Note />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

