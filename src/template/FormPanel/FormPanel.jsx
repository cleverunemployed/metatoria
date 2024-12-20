import { useRef, useState } from "react";
import VRGlassesOnTable from "../../image/vr-glasses-on-table.png";
import { Modal } from "../../components/Modal/Modal";
import axios from "axios";
import bot from "../../bot"

export const phoneNumberMask = "+7(___)___-__-__";

export const FormPanel = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [phoneNumberInput, setPhoneNumberInput] = useState(() => "");
    const [clientName, setClientName] = useState(() => "");
    const [comment, setComment] = useState(() => "");

    const phoneInputRef = useRef(null);

    const sendMessageToTelegram = (message) => {
        const botToken = bot;
        const chatId = "ID кому присылать черз бота";
        const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    
        axios.post(url, {
            chat_id: chatId,
            text: message,
        })
        .then((response) => {
            console.log("Message sent to Telegram:", response.data);
        })
        .catch((error) => {
            console.error("Failed to send message:", error);
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        const { client, phoneNumber, comment } = event.target;

        if (
            !(
                client &&
                client.value &&
                typeof client.value === "string" &&
                client.value.trim()
            ) ||
            !phoneNumber
        ) {
            setModalOpen(true);

            return;
        }
        if (modalOpen) {
            setModalOpen(false);
        }

        sendMessageToTelegram(`
            ФИО: ${client.value.trim()}
Телефон: ${phoneNumber.value}
Комментарий: ${comment.value}
        `)
        setComment("")
        setClientName("")
        setPhoneNumberInput("")
    };

    const handlePhoneNumberInput = (event) => {
        const { value, selectionStart, selectionEnd } = event.target;
        /* TODO: normal validate inputs */
        const input = value.replace(/^\+7|[^\d]/g, "");

        let formattedValue = phoneNumberMask;

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
        <div
            id="formPanel"
            className="w-full h-screen grid grid-rows-[auto_1fr]"
        >
            <div className="m-10">
                <Modal isOpen={modalOpen} />
                <h2 className="text-center text-6xl">Заполнить анкету</h2>
            </div>
            <div className="flex justify-around">
                <div className="flex-1 flex justify-center">
                    <form
                        onSubmit={onSubmit}
                        className="w-[80%] h-5/6 p-10 grid grid-cols-1 grid-rows-[1fr_1fr_1fr_1fr] gap-4 px-4 items-center justify-center rounded-[45px] shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)] bg-[#F2EFEF4D]"
                    >
                        <label className="h-28 w-full border-4 rounded-3xl border-black bg-[#ACC5F8] hover:bg-[#9cb7ee] flex items-center justify-center">
                            <input
                                className="w-full h-[90%] m-5 text-center text-5xl border-black bg-[#ACC5F8] hover:bg-[#9cb7ee] border-none outline-none focus:ring-0 placeholder:text-center placeholder:text-5xl placeholder:text-black focus:placeholder:text-transparent"
                                type="text"
                                placeholder="Иванов Иван"
                                name="client"
                                value={clientName}
                                onChange={({ target }) =>
                                    setClientName(target.value)
                                }
                                required
                            />
                        </label>
                        <label className="h-28 w-full rounded-3xl border-4 border-black bg-[#ACC5F8] hover:bg-[#9cb7ee] flex items-center justify-center">
                            <input
                                ref={phoneInputRef}
                                type="tel"
                                name="phoneNumber"
                                className="text-center text-3xl tracking-[.2em] m-5 w-full h-[90%] bg-[#ACC5F8] hover:bg-[#9cb7ee] placeholder:text-center placeholder:text-4xl placeholder:text-black placeholder:tracking-widest focus:placeholder:text-transparent border-none outline-none focus:ring-0"
                                placeholder={phoneNumberMask}
                                pattern="^\+7\([\d]{3}\)[\d]{3}-[\d]{2}-[\d]{2}"
                                value={
                                    phoneNumberInput === ""
                                        ? phoneNumberMask
                                        : phoneNumberInput
                                }
                                onChange={handlePhoneNumberInput}
                                required
                            />
                        </label>
                        <label className="h-28 w-full border-4 rounded-3xl border-black bg-[#ACC5F8] hover:bg-[#9cb7ee] flex items-center justify-center">
                            <textarea
                                className="resize-none text-3xl m-5 w-full h-[90%] box-border bg-[#ACC5F8] hover:bg-[#9cb7ee] focus:outline-none placeholder:p-6 placeholder:text-center placeholder:text-4xl placeholder:text-black focus:placeholder:text-transparent"
                                onChange={({ target }) =>
                                    setComment(target.value)
                                }
                                value={comment}
                                type="text"
                                name="comment"
                                placeholder="Комментарий"
                            />
                        </label>
                        <button
                            className="h-28 w-full text-center text-3xl rounded-3xl border-4 border-black bg-[#907DFFB2] hover:bg-[#7b67ecb2]"
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
                <div className="flex-1 flex items-center justify-center max-h-[90%]">
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
