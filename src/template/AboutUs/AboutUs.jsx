import AboutUs1Img from '../../image/about-us-1.jpg';
import GyuInVrGlasses from '../../image/guy-in-vr-glasses.png';

export const AboutUs = () => {
    return (
        <div className="min-h-screen w-full">
            <a name="aboutme"></a>
            <div className="flex items-center justify-center w-full my-20">
                <h2 className="text-7xl px-10 py-5">Коротко о нас</h2>
            </div>
            <div className="flex w-full justify-around">
                <div className="p-3 bg-gray-200/70 rounded-[15px] shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)] py-10 px-5">
                    <p className="px-1 pt-6 pb-8 text-3xl font-normal">Студенческое пространство в УлГТУ</p>
                    <p className="px-1 py-8 text-3xl font-normal">3D-моделирование и VR-разработка</p>
                    <p className="px-1 py-8 text-3xl font-normal">Проектирование виртуальных миров</p>
                    <p className="px-1 pt-8 pb-5 text-3xl font-light">Применение XR-технологий</p>
                </div>
                <div className='relative flex-1 max-w-96'>
                    <div className='max-w-96 absolute left-0 -top-4'>
                        <img className='rounded-[15px] -rotate-[7deg]' src={AboutUs1Img} alt='guys img1' />
                    </div>
                    <div className='absolute -bottom-5 right-0 max-w-80'>
                        <img className='rounded-[15px] rotate-[6deg]' src={GyuInVrGlasses} alt='in vr' />
                    </div>
                </div>
            </div>
        </div>
    );
}