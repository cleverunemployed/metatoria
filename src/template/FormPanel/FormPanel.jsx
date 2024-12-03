import { useState } from 'react';
import VRGlassesOnTable from '../../image/vr-glasses-on-table.png';

export const FormPanel = () => {

    const [ telInput, setTelInput ] = useState(() => '');

    const handleTelInput = (event) => {
        console.log(event.target.value);

        /* TODO: validate inputs */

        setTelInput(event.target.value);
    }

    return (
        <div className="w-full h-screen">
            <div className='m-10'>
                <h2 className='text-center text-6xl'>Заполнить анкету</h2>
            </div>
            <div className='flex'>
                <div className="flex-1 flex">
                    <form className='w-[90%] flex flex-col gap-10 items-center justify-center'>
                        <input
                            className='w-4/5' 
                            type='text' 
                            placeholder='Иванов Иван'
                            required />
                        <input 
                            className='w-4/5'
                            type='tel' 
                            name='phoneNumber' 
                            placeholder='+7(___)___-__-__' 
                            pattern="^\+7$\d{3}$\d{3}-\d{2}-\d{2}$" value={telInput} 
                            onChange={handleTelInput}
                            required />
                        <textarea
                            className='w-4/5 resize-none'
                            type='text' 
                            placeholder='Комментарий'
                            required />
                        <button type='submit'>Отправить</button>
                    </form>
                </div>
                <div className="flex-1 flex flex-col items-start justify-center">
                    <div className='max-w-[80%] rounded-xl overflow-hidden rotate-[6deg]'>
                        <img className='' src={VRGlassesOnTable} alt="vr glasses" />
                    </div>
                </div>
            </div>
        </div>
    );
}