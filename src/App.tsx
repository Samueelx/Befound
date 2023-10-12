import Header from "./components/Header"
import Homepage from "./pages/Homepage"
import Profiles from "./pages/Profiles"

function App() {

  return (
    <>
      <div className="bg-slate-200 font-mono">
        <Header />
        <Homepage />
        <Profiles />
      </div>
    </>
  )
}

export default App
