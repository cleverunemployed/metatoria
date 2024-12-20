import "./App.css";
import { AboutUs } from "./template/AboutUs/AboutUs";
import { CurrentProjects } from "./template/CurrentProjects/CurrentProjects";
import { FormPanel } from "./template/FormPanel/FormPanel";
import Header from "./template/header/Header";
import { LinkPanel } from "./template/LinkPanel/LinkPanel";
import { Metaverse } from "./template/Metaverse/Metaverse";
import { OurTeam } from "./template/OurTeam/OurTeam";
import { WhyWe } from "./template/WhyWe/WhyWe";

export default function App() {
    return (
        <>
            <Header />
            {/* <AboutUs />
            <CurrentProjects />
            <WhyWe />
            <FormPanel /> */}
            {/* <OurTeam /> */}
            {/* <Metaverse /> */}
            <LinkPanel />
        </>
    );
}
