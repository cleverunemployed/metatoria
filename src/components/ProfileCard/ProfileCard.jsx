export const ProfileCard = ({ imgSource, className = "", person, role }) => (
    <div
        className={`bg-[#F2EFEF4D] rounded-[45px] flex flex-col justify-center items-center shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)] ${className}`}
    >
        <div className="overflow-hidden rounded-xl w-5/6 m-5">
            <img src={imgSource} alt="" className="" />
        </div>
        <div className="">
            <h3 className="text-center text-[#1652D1] font-extrabold font-montserrat">
                {person}
            </h3>
            <h5 className="text-center text-[#1652D1] font-normal">{role}</h5>
        </div>
    </div>
);
