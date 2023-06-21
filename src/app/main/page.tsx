import MainHeader from "@/components/mainComponents/MainHeader"
import Words from "@/components/mainComponents/Words"
import { BarProvider } from "../../context/bars"
import UserName from "@/components/mainComponents/UserName"
import { UserProvider } from "../../context/user"
import CardSesion from "@/components/mainComponents/CardSesion"



const MainContent = () => {

    return (
        <BarProvider>
            <UserProvider>
                <main className="bg-zinc-900 min-h-screen max-w-[100vw]">
                    <MainHeader />
                    <UserName />
                    <CardSesion />
                    <Words />
                </main>
            </UserProvider>
        </BarProvider>
    )
}

export default MainContent