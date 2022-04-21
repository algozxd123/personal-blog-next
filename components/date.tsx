
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostDateType } from "../types/post";

const Date = ({date}: PostDateType) => {

  return (
    <div className="flex items-center">
      <FontAwesomeIcon icon={faCalendarDays} height={20} color="#EB5A3E" />
      <p className="text-[#7a7a7a] ml-2">{date}</p>
    </div>
  )
};

export default Date;