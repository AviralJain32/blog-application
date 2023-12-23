import './App.css'

function App() {
  //env file ko access krne ka tarika hamesha different hota hai 
  console.log(import.meta.env.VITE_APPWRITE_URL); //  *2 baar aaayega due to react strct mode
  return(
    <h1>a blog app with appright</h1>
  )
}

export default App
