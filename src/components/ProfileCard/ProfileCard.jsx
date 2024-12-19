export const ProfileCard = ({ imgSource, className = "", person, role }) => (
    <div
        className={`bg-[#F2EFEF4D] max-h-80 rounded-[45px] flex flex-col justify-center items-center shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)] ${className}`}
    >
        <div className="overflow-hidden w-5/6 aspect-square pt-1 px-5 pb-1 flex m-auto">
            <img
                src={imgSource}
                alt={person}
                className="rounded-xl object-cover"
            />
        </div>
        <div className="max-w-[90%]">
            <h3 className="text-center text-[#1652D1] font-extrabold font-montserrat">
                {person}
            </h3>
            <h5 className="text-center text-[#1652D1] font-normal">{role}</h5>
        </div>
    </div>
);
