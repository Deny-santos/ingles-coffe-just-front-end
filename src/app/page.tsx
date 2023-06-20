import { BarProvider } from "../context/bars"
import Home from "../components/Home"


export default function HomePage() {

  

  return (
    <BarProvider >
      <Home/>
    </BarProvider>


  )
}
