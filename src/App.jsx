import './App.css'
import { AboutUs } from './template/AboutUs/AboutUs'
import BottomPanel from './template/BottomPanel/BottomPanel'
import { CurrentProjects } from './template/CurrentProjects/CurrentProjects'
import Header from './template/header/Header'
import { WhyWe } from './template/WhyWe/WhyWe'
import { FormPanel } from "./template/FormPanel/FormPanel"
import { LinkPanel } from "./template/LinkPanel/LinkPanel"
import { OurTeam } from "./template/OurTeam/OurTeam"
import { Metaverse } from "./template/Metaverse/Metaverse"

export default function App() {
    return (
        <>
            <Header />
            <LinkPanel />
            <AboutUs />
            <CurrentProjects />
            <WhyWe />
            <FormPanel />
            <OurTeam /> 
            <Metaverse />
            <BottomPanel/>
        </>
    )
}