import metatoriaLogo from '../../image/logo.png'
import rosmolodezhLogo from '../../image/footer/rosmolodezh.png'


export default function BottomPanel({}) {
    return (
      <div className="w-full h-[400px] bg-footer relative flex bottom-0">
        <div className="h-full w-[25%] flex flex-wrap">
          <div className='h-[50%] w-full flex'><img className='h-full m-auto' src={metatoriaLogo} alt="" /></div>
          <div className='h-[50%] w-full flex'><img className='w-[80%] m-auto' src={rosmolodezhLogo} alt="" /></div>
        </div>
        <div className="h-full w-[25%] justify-center flex">
          <div className="flex-col mr-auto ml-auto pt-9">
            <div className='w-full mb-24 flex text-center justify-center text-2xl font-vezla'><p>Партнёры</p></div>
            <div className='w-full mb-12 flex text-center justify-center text-xl font-montserrat'><a href="https://vk.com/promvr">PROMVR</a></div>
            <div className='w-full mb-12 flex text-center justify-center text-xl font-montserrat'><a href="https://vk.com/simbirsoft">SimbirSoft</a></div>
            <div className='w-full mb-12 flex text-center justify-center text-xl font-montserrat'><a href="https://vk.com/vr_concept">Concept</a></div>
          </div>
        </div>
        <div className="h-full w-[25%] justify-center flex">
          <div className="flex-col mr-auto ml-auto pt-9">
            <div className='w-full mb-24 flex text-center justify-center text-2xl font-vezla'><p>Присоединиться</p></div>
            <div className='w-full mb-12 flex text-center justify-center text-xl font-montserrat'><a href="https://forms.yandex.ru/u/6675601c5056905fa2d451bd/">Стать участником</a></div>
          </div>
        </div>
        <div className="h-full w-[25%] justify-center flex">
          <div className="flex-col mr-auto ml-auto pt-9">
            <div className='w-full mb-24 flex text-center justify-center text-2xl font-vezla'><p>Социальные сети</p></div>
            <div className='w-full mb-12 flex text-center justify-center text-xl font-montserrat'><a href="https://vk.com/metatory">Вконтакте</a></div>
            <div className='w-full flex text-center justify-center text-xl font-montserrat'><a href="https://t.me/metatory">Телеграмм</a></div>
          </div>
        </div>
      </div>
    )
  }