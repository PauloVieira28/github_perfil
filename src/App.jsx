import ReposList from "../components/ReposList"
import Perfil from "../components/Perfil"
import { useState } from "react"


function App() {

  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)}/>


      {nomeUsuario.length > 4 &&(
        <>
          <Perfil nomeUsuario={nomeUsuario}/>
          <ReposList nomeUsuario={nomeUsuario}/>
        
        </>
      )}
    </>
  )
}

export default App
