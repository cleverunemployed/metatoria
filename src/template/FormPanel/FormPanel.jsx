import { useRef, useState } from "react";
import VRGlassesOnTable from "../../image/vr-glasses-on-table.png";

export const FormPanel = () => {
    const phoneNumberMask = "+7(___)___-__-__";

    const [phoneNumberInput, setPhoneNumberInput] = useState(() => "");

    const phoneInputRef = useRef(null);

    const handlePhoneNumberInput = (event) => {
        const { value, selectionStart, selectionEnd } = event.target;
        /* TODO: normal validate inputs */
        const input = value.replace(/^\+7|[^\d]/g, "");
        let formattedValue = phoneNumberMask;
        console.log(value, input);

        Array.from(input).forEach((digit) => {
            formattedValue = formattedValue.replace("_", digit);
        });

        setPhoneNumberInput(formattedValue);

        // just for re-render
        setTimeout(() => {
            if (phoneInputRef.current) {
                const pos =
                    formattedValue.indexOf(
                        value[selectionStart - 1],
                        selectionEnd - 1
                    ) + 1 || selectionEnd;
                phoneInputRef.current.setSelectionRange(pos, pos);
            }
        }, 0);
    };

    return (
        <div className="w-full h-screen grid grid-rows-[auto_1fr]">
            <div className="m-10">
                <h2 className="text-center text-6xl">Заполнить анкету</h2>
            </div>
            <div className="flex justify-around">
                <div className="flex-1 flex justify-center">
                    <form
                        style={{ backgroundColor: "#F2EFEF4D" }}
                        className="w-[80%] h-5/6 p-10 flex flex-col gap-12 items-center justify-center rounded-[45px] shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)]"
                    >
                        <input
                            className="w-full h-2/6 text-center text-5xl rounded-3xl border-4 border-black placeholder:text-center placeholder:text-5xl placeholder:text-black focus:placeholder:text-transparent"
                            style={{ backgroundColor: "#ACC5F8" }}
                            type="text"
                            placeholder="Иванов Иван"
                            required
                        />
                        <input
                            ref={phoneInputRef}
                            className="h-2/6 w-full text-center text-3xl rounded-3xl border-4 border-black placeholder:text-center placeholder:text-4xl placeholder:text-black focus:placeholder:text-transparent"
                            type="tel"
                            name="phoneNumber"
                            style={{ backgroundColor: "#ACC5F8" }}
                            placeholder={phoneNumberMask}
                            // pattern="^\+7$\d{3}$\d{3}-\d{2}-\d{2}$"
                            value={
                                phoneNumberInput === ""
                                    ? phoneNumberMask
                                    : phoneNumberInput
                            }
                            onChange={handlePhoneNumberInput}
                            required
                        />
                        <textarea
                            className="resize-none h-2/6 w-full text-center text-3xl rounded-3xl border-4 border-black placeholder:p-6 placeholder:text-center placeholder:text-4xl placeholder:text-black focus:placeholder:text-transparent"
                            style={{ backgroundColor: "#ACC5F8" }}
                            type="text"
                            placeholder="Комментарий"
                        />
                        <button
                            className="h-2/6 w-full text-center text-3xl rounded-3xl border-4 border-black"
                            style={{ backgroundColor: "#907DFFB2" }}
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <img
                        className="rounded-xl max-w-[80%] max-h-[70%] rotate-[6deg] mx-auto"
                        src={VRGlassesOnTable}
                        alt="vr glasses"
                    />
                </div>
            </div>
        </div>
    );
};
