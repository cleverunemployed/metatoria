import logo from '../../image/logo.png'
import telegramm from '../../image/telegramm_logo.png'
import vk from '../../image/vk_logo.png'



export default function Header() {
    return (
      <div className="flex h-56 w-[100%]">
        <div className="relative h-56 w-56 top-11 left-11">
          <img className="h-52 w-52 object-covern" src={logo} alt="" />
        </div>
        <div className="relative h-40 w-56 m-10 flex justify-center cursor-pointer">
          <div className='text-4xl m-auto'>О Нас</div>
        </div>
        <div className="relative h-40 w-56 m-10 flex justify-center cursor-pointer">
          <div className='text-4xl m-auto'>Команда</div>
        </div>
        <div className="relative h-40 w-56 m-10 flex justify-center cursor-pointer">
          <div className='text-4xl m-auto'>Проекты</div>
        </div>
        <div className='flex relative right-1 h-56 w-56 justify-center items-center'>
          <div className="flex h-24 w-24 m-2 cursor-pointer">
            <a href="#">
              <img className="h-24 w-24" src={vk} alt="" />
            </a>
          </div>
          <div className="flex h-24 w-24 m-2 cursor-pointer">
            <a href="#">
              <img className="h-24 w-24" src={telegramm} alt="" />
            </a>
          </div>
        </div>

      </div>
    )
}