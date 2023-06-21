import MainWrapper from "@/components/mainComponents/MainWrapper"
import { BarProvider } from "../../context/bars"
import { UserProvider } from "../../context/user"
import { DarkProvider } from "@/context/theme"




const MainContent = () => {

    

    return (
        <BarProvider>
            <UserProvider>
                <DarkProvider>
                    <MainWrapper/>
                </DarkProvider>
            </UserProvider>
        </BarProvider>
    )
}

export default MainContent