import { BarProvider } from "../context/bars"
import Home from "../components/Home"
import { UserProvider } from "../context/user"


export default function HomePage() {



  return (
    <BarProvider >
      <UserProvider>
        <Home />
      </UserProvider>
    </BarProvider>


  )
}
