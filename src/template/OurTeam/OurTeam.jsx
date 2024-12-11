import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import DEdremov from "../../image/chief-efremov-d.jpg";
import GuskovGleb from "../../image/guskov-gleb.jpg";
import KadyrovaDinara from "../../image/kadyrova-dinara.jpg";
import FedorinAndrey from "../../image/fedorin-andrey.jpg";
import VatlinVyacheslav from "../../image/vatlin-vyacheslav.jpg";
import KlimentovaAnastasia from "../../image/klimentova-anastasia.jpg";
import DolgovKirill from "../../image/dolgov-kirill.jpg";

export const OurTeam = () => {
    return (
        <div className="w-full h-screen">
            <div className="flex justify-center items-center">
                <h2>Наша команда</h2>
            </div>
            <div className="grid grid-cols-4 grid-rows-2">
                <ProfileCard
                    imgSource={DEdremov}
                    person={"Ефремов Денис"}
                    role={"Автор и куратор проекта"}
                />
                <ProfileCard
                    imgSource={GuskovGleb}
                    person={"Гуськов Глеб"}
                    role={"Научный руководитель"}
                />
                <ProfileCard
                    imgSource={KadyrovaDinara}
                    person={"Кадырова Динара"}
                    role={"Руководитель лаборатории"}
                />
                <ProfileCard
                    imgSource={FedorinAndrey}
                    person={"Федорин Андрей"}
                    role={"3D-художник"}
                />
                <ProfileCard
                    imgSource={VatlinVyacheslav}
                    person={"Ватлин Владислав"}
                    role={"Ведущий разработчик"}
                />
                <ProfileCard
                    imgSource={KlimentovaAnastasia}
                    person={"Климентова Анастасия"}
                    role={"Сценарист"}
                />
                <ProfileCard
                    imgSource={DolgovKirill}
                    person={"Долгов Кирилл"}
                    role={"Системный администратор"}
                />
            </div>
        </div>
    );
};
