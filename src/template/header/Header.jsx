import logo from '../../image/logo.png'
import telegramm from '../../image/telegramm_logo.png'
import vk from '../../image/vk_logo.png'



export default function Header({}) {
    return (
      <div className="flex flex-wrap gap-x-7 h-56 w-[100%]">
        <div className="relative h-56 w-[18%] top-11 left-11">
          <img className="h-52 w-52 object-covern" src={logo} alt="" />
        </div>
        <div className="relative h-40 w-[18%] flex justify-center cursor-pointer">
          <div className='text-4xl m-auto'><a href="#aboutme">О Нас</a></div>
        </div>
        <div className="relative h-40 w-[18%] flex justify-center cursor-pointer">
          <div className='text-4xl m-auto'><a href="#ourteam">Команда</a></div>
        </div>
        <div className="relative h-40 w-[18%] flex justify-center cursor-pointer">
          <div className='text-4xl m-auto'><a href="#currentprojects">Проекты</a></div>
        </div>
        <div className='flex relative right-1 h-56 w-[20%] justify-center items-center'>
          <div className="flex h-24 w-[40%] m-2 cursor-pointer">
            <a href="#">
              <img className="h-24" src={vk} alt="" />
            </a>
          </div>
          <div className="flex h-24 w-[40%] m-2 cursor-pointer">
            <a href="#">
              <img className="h-24" src={telegramm} alt="" />
            </a>
          </div>
        </div>

      </div>
    )
}