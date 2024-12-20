export const ProfileCard = ({ imgSource, className = "", person, role }) => (
    <div
        className={`bg-[#F2EFEF4D] rounded-[45px] shadow-[4px_4px_4px_-1px_rgba(0,0,0,0.3)] flex flex-col items-center ${className}`}
    >
        <div className="h-[70%] flex justify-center pt-1">
            <img
                src={imgSource}
                alt={person}
                className="object-cover rounded-[25px]"
            />
        </div>
        <div className="h-[30%] flex flex-col justify-center items-center px-2">
            <h3 className="text-center max-w-24 text-[#1652D1] font-extrabold font-montserrat">
                {person}
            </h3>
            <h5 className="text-center max-w-60 text-[#1652D1] font-normal pb-1">
                {role}
            </h5>
        </div>
    </div>
);
