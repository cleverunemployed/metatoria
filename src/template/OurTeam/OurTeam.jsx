import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import DEdremov from "../../image/chief-efremov-d.png";
import GuskovGleb from "../../image/guskov-gleb.png";
import KadyrovaDinara from "../../image/kadyrova-dinara.png";
import FedorinAndrey from "../../image/fedorin-andrey.png";
import VatlinVyacheslav from "../../image/vatlin-vyacheslav.png";
import KlimentovaAnastasia from "../../image/klimentova-anastasia.png";
import DolgovKirill from "../../image/dolgov-kirill.png";

export const OurTeam = () => {
    return (
        <div className="w-full h-screen">
            <div className="flex justify-center items-center">
                <h2 className="text-center text-6xl">Наша команда</h2>
            </div>
            <div className="grid grid-cols-8 gap-10 p-10 max-h-5/6">
                <ProfileCard
                    imgSource={DEdremov}
                    person={"Ефремов Денис"}
                    role={"Автор и куратор проекта"}
                    className="col-span-2 row-start-1"
                />
                <ProfileCard
                    imgSource={GuskovGleb}
                    person={"Гуськов Глеб"}
                    role={"Научный руководитель"}
                    className="col-span-2 row-start-1"
                />
                <ProfileCard
                    imgSource={KadyrovaDinara}
                    person={"Кадырова Динара"}
                    role={"Руководитель лаборатории"}
                    className="col-span-2 row-start-1"
                />
                <ProfileCard
                    imgSource={FedorinAndrey}
                    person={"Федорин Андрей"}
                    role={"3D-художник"}
                    className="col-span-2 row-start-1"
                />
                <ProfileCard
                    imgSource={VatlinVyacheslav}
                    person={"Ватлин Владислав"}
                    role={"Ведущий разработчик"}
                    className="col-span-2 row-start-2 col-start-2"
                />
                <ProfileCard
                    imgSource={KlimentovaAnastasia}
                    person={"Климентова Анастасия"}
                    role={"Сценарист"}
                    className="col-span-2 row-start-2 col-start-4"
                />
                <ProfileCard
                    imgSource={DolgovKirill}
                    person={"Долгов Кирилл"}
                    role={"Системный администратор"}
                    className="col-span-2 row-start-2 col-start-6"
                />
            </div>
        </div>
    );
};
