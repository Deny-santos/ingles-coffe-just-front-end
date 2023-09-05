import MainWrapper from "../../components/mainComponents/MainWrapper"
import { BarProvider } from "../../context/bars"
import { UserProvider } from "../../context/user"
import { DarkProvider } from "../../context/theme"
import { EyeProvider } from "../../context/eye"
import { FocusProvider } from "../../context/focus"
import { ReverseProvider } from "../../context/reverse"
import { LanguageProvider } from "../../context/language"

const MainContent = () => {

    return (
        <BarProvider>
            <UserProvider>
                <DarkProvider>
                    <FocusProvider>
                        <ReverseProvider>
                            <EyeProvider>
                                <LanguageProvider>
                                    <MainWrapper />
                                </LanguageProvider>
                            </EyeProvider>
                        </ReverseProvider>
                    </FocusProvider>
                </DarkProvider>
            </UserProvider>
        </BarProvider>
    )
}

export default MainContent