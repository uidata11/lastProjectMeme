import React from "react";
import { IoRestaurantOutline, IoSubway } from "react-icons/io5";
import { FaLandmark, FaRegBuilding } from "react-icons/fa6";

// 개별 키워드 버튼의 속성 타입 정의
interface KeywordButtonProps {
  name: string;
  icon: React.ReactNode;
  onClick: (name: string) => void;
}

// 키워드 버튼들을 감싸는 컴포넌트의 속성 타입 정의
interface KeywordButtonsProps {
  onKeywordClick: (keyword: string) => void;
}
const keywordBtnStyle =
  "bg-white border dark:border-gray-500 border-gray-300 p-2.5 rounded-full shadow-sm hover:border-green-500 text-sm gap-x-1 flex items-center justify-center font-semibold focus:border-green-500 dark:bg-[#6B6B6B] dark:text-[#E5E7EB] sm:text-sm text-xs";

const KeywordButton = ({ name, icon, onClick }: KeywordButtonProps) => (
  <button className={keywordBtnStyle} onClick={() => onClick(name)}>
    <p className="text-green-400 sm:text-lg text-base">{icon}</p>
    {name}
  </button>
);

const KeywordButtons = ({ onKeywordClick }: KeywordButtonsProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {keywordBtn.map((word) => (
        <KeywordButton
          key={word.name}
          name={word.name}
          icon={word.icon}
          onClick={onKeywordClick}
        />
      ))}
    </div>
  );
};

export default KeywordButtons;

const keywordBtn = [
  { name: "맛집", icon: <IoRestaurantOutline /> },
  { name: "명소", icon: <FaLandmark /> },
  { name: "백화점", icon: <FaRegBuilding /> },
  { name: "지하철", icon: <IoSubway /> },
];
