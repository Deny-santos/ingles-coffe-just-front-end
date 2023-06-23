import MainWrapper from "@/components/mainComponents/MainWrapper"
import { BarProvider } from "../../context/bars"
import { UserProvider } from "../../context/user"
import { DarkProvider } from "@/context/theme"
import { FocusProvider } from "@/context/focus"




const MainContent = () => {



    return (
        <BarProvider>
            <UserProvider>
                <DarkProvider>
                    <FocusProvider>
                        <MainWrapper />
                    </FocusProvider>
                </DarkProvider>
            </UserProvider>
        </BarProvider>
    )
}

export default MainContent