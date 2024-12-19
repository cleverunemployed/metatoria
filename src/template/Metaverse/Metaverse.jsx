import icon1 from "../../image/icons/metaverses_1.png";
import icon2 from "../../image/icons/metaverses_2.png";
import icon3 from "../../image/icons/metaverses_3.png";

export const Metaverse = () => {
    return (
        <div className="w-full h-screen flex flex-col gap-12">
            <div>
                <h2 className="text-6xl px-10 py-5 text-center">
                    Зачем нужны метавселенные? хз честно
                </h2>
            </div>
            <div className="flex justify-around">
                <div className="w-[10%]">
                    <img src={icon1} alt="people" />
                </div>
                <div className="rounded-[45px] shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)] bg-[#F2EFEF4D] max-w-[50%] py-3 px-5">
                    <p className="text-3xl text-justify">
                        Способность выделяться на фоне конкурентов и обрести
                        значительно преимущество.
                    </p>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="rounded-[45px] shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)] bg-[#F2EFEF4D] max-w-[45%] py-3 px-5">
                    <p className="text-3xl text-left p-2">
                        Технологии метавселенной предоставят возможность
                        демонстрировать товары или услуги.
                    </p>
                </div>
                <div className="w-[12%]">
                    <img src={icon2} alt="speaker" />
                </div>
            </div>
            <div className="flex justify-around">
                <div className="w-[15%]">
                    <img src={icon3} alt="logo" />
                </div>
                <div className="rounded-[45px] shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)] bg-[#F2EFEF4D] max-w-[47%] py-3 px-5">
                    <p className="text-3xl text-right pt-2">
                        Организация корпоративов и рабочих встреч в виртуальном
                        3D-пространстве.
                    </p>
                </div>
            </div>
        </div>
    );
};
