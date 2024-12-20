import ChemicalLab from "../../image/chemical-lab.png";
import VirtualMuseum from "../../image/virtual-museum.jpg";

export const CurrentProjects = () => {
    return (
        <div className="min-h-screen w-full flex flex-col gap-12 items-center">
            <div className="flex items-center justify-center w-full my-6">
                <h2 className="text-6xl px-10">Текущие проекты</h2>
            </div>
            <div
                className="flex w-full justify-around gap-8"
                style={{ color: "#1652D1" }}
            >
                <div className="w-[45%]">
                    <div className="overflow-hidden rounded-[15px]">
                        <img
                            className="object-fill transition-transform duration-300 transform hover:scale-110"
                            src={ChemicalLab}
                            alt="chemical lab project"
                        />
                    </div>
                    <div>
                        <h3 className="text-center font-normal text-3xl m-3">
                            Химическая лаборатория
                        </h3>
                        <p className="text-center align-middle font-semibold text-xl">
                            Образовательный проект, направленный на создание
                            интерактивной среды обучения школьников и студентов
                        </p>
                    </div>
                </div>
                <div className="w-[45%]">
                    <div className="overflow-hidden rounded-[15px]">
                        {/* not working [clip-path:polygon(10%_5%,90%_5%,90%_95%,10%_95%)] */}
                        <img
                            className="object-fill transition-transform duration-300 transform hover:scale-110"
                            src={VirtualMuseum}
                            alt="virtual museum"
                        />
                    </div>
                    <div>
                        <h3 className="text-center font-normal text-3xl m-3">
                            Виртуальный музей
                        </h3>
                        <p className="text-center align-middle font-semibold text-xl">
                            Исторический проект, направленный на вовлечение
                            молодёжи в культуру региона
                        </p>
                    </div>
                </div>
            </div>
            <button className="w-[40%] border-2 px-4 py-5 text-2xl rounded-md text-fuchsia-50 bg-[#907DFFB2] border-[#907DFF]">
                Создать свою метавселенную
            </button>
        </div>
    );
};
