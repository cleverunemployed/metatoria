import Logo from "../../image/icons/icon.png";

export const LinkPanel = () => (
    <div className="p-10 flex flex-col items-center gap-10">
        <div className="bg-[#F2EFEF1A] flex flex-col gap-20 items-center rounded-[45px] shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)]  w-11/12 px-10 pb-10">
            <div className="max-w-[20%]">
                <img src={Logo} alt="logo" />
            </div>
            <div className="">
                <h1
                    className="text-[#FFFFFF] text-9xl font-spaceage text-center"
                    style={{ fontFamily: "Space Age Cyrillic" }}
                >
                    Метатория
                </h1>
                <h2 className="text-[#FFFFFF] text-4xl font-spaceage text-center">
                    Молодёжная лаборатория метавселенных
                </h2>
            </div>
        </div>
        <div>
            <a href="#formPanel">
                <button className="border-2 px-4 py-5 text-2xl rounded-md text-fuchsia-50 bg-[#907DFFB2] border-[#907DFF]">
                    Оставить заявку
                </button>
            </a>
        </div>
    </div>
);
