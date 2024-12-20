import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import DEfremov from "../../image/chief-efremov-d.png";
import GuskovGleb from "../../image/guskov-gleb.png";
import KadyrovaDinara from "../../image/kadyrova-dinara.png";
import FedorinAndrey from "../../image/fedorin-andrey.png";
import VatlinVyacheslav from "../../image/vatlin-vyacheslav.png";
import KlimentovaAnastasia from "../../image/klimentova-anastasia.png";
import DolgovKirill from "../../image/dolgov-kirill.png";

export const OurTeam = () => {
    return (
        <div className="w-full h-screen">
            <a name="ourteam"></a>
            <div className="flex justify-center">
                <h2 className="text-center text-6xl py-5">Наша команда</h2>
            </div>
            <div className="grid grid-rows-[320px_320px] gap-10 px-10 py-0">
                <ProfileCard
                    imgSource={DEfremov}
                    person={"Ефремов Денис"}
                    role={"Автор и куратор проекта"}
                    className="col-span-2 row-start-1 max-w-[300px]"
                />
                <ProfileCard
                    imgSource={GuskovGleb}
                    person={"Гуськов Глеб"}
                    role={"Научный руководитель"}
                    className="col-span-2 row-start-1 max-w-[300px]"
                />
                <ProfileCard
                    imgSource={KadyrovaDinara}
                    person={"Кадырова Динара"}
                    role={"Руководитель лаборатории"}
                    className="col-span-2 row-start-1 max-w-[300px]"
                />
                <ProfileCard
                    imgSource={FedorinAndrey}
                    person={"Федорин Андрей"}
                    role={"3D-художник"}
                    className="col-span-2 row-start-1 max-w-[300px]"
                />
                <ProfileCard
                    imgSource={VatlinVyacheslav}
                    person={"Ватлин Вячеслав"}
                    role={"Ведущий разработчик"}
                    className="col-span-2 row-start-2 col-start-2 max-w-[300px]"
                />
                <ProfileCard
                    imgSource={KlimentovaAnastasia}
                    person={"Климентова Анастасия"}
                    role={"Сценарист"}
                    className="col-span-2 row-start-2 col-start-4 max-w-[300px]"
                />
                <ProfileCard
                    imgSource={DolgovKirill}
                    person={"Долгов Кирилл"}
                    role={"Системный администратор"}
                    className="col-span-2 row-start-2 col-start-6 max-w-[300px]"
                />
            </div>
        </div>
    );
};
