"use client";

import React, { useCallback, RefObject } from "react";
import { IoCloseSharp, IoPhonePortraitSharp } from "react-icons/io5";
import { TbMapPinDown } from "react-icons/tb";
import { useAlertModal } from "../AlertStore";

interface PlaceProps {
  place_name: string;
  road_address_name?: string;
  address_name: string;
  phone?: string;
}

interface Props {
  place: PlaceProps;
  onClose: () => void;
  detailRef: RefObject<HTMLDivElement | null>;
}

const PlaceDetail = ({ detailRef, onClose, place }: Props) => {
  const { openAlert } = useAlertModal();

  //! 주소 복사 기능
  const jusoClip = useCallback(
    (selectedPlace: PlaceProps) => [
      {
        icon: <TbMapPinDown />,
        text: selectedPlace.road_address_name || selectedPlace.address_name,
        msg: "주소가 복사되었습니다!",
      },
      {
        icon: <IoPhonePortraitSharp />,
        text: selectedPlace.phone || "전화번호 없음",
        msg: "전화번호가 복사되었습니다!",
      },
    ],
    []
  );

  //! 전화번호 없을경우
  const handleCopy = (text: string, msg: string) => {
    if (text === "전화번호 없음") {
      openAlert("해당 장소의 전화번호가 등록되지 않았습니다.", [
        { text: "확인", isGreen: true },
      ]);
    } else {
      navigator.clipboard.writeText(text);
      openAlert(msg, [{ text: "확인", isGreen: true }]);
    }
  };

  return (
    <div
      className="absolute z-10 shadow-md w-60 max-w-xs p-3 h-fit bg-gray-50 dark:bg-[#555555] dark:text-white border border-gray-100 dark:border-gray-500 rounded-xl sm:rounded-2xl

    left-[20%] top-[32%] -translate-y-1/2 sm:left-[25%] sm:top-[21%] sm:translate-x-0 sm:translate-y-0 lg:left-[35%] lg:top-[20%] lg:translate-x-0 lg:translate-y-0"
      ref={detailRef}
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-lg sm:text-xl font-bold"
      >
        <IoCloseSharp />
      </button>

      <h2 className="text-sm sm:text-md mb-2 font-semibold">상세 정보</h2>
      <p className="font-bold sm:font-extrabold text-base sm:text-lg text-primary truncate">
        {place.place_name}
      </p>
      <p className="text-sm truncate">
        {place.road_address_name || place.address_name}
      </p>
      <p className="text-xs sm:text-sm mt-1 truncate">
        {place.phone || "전화번호 없음"}
      </p>

      <ul className="mt-2 flex gap-x-2 text-lg sm:text-xl">
        {jusoClip(place).map(({ icon, text, msg }, i) => (
          <button
            key={i}
            onClick={() => handleCopy(text, msg)}
            className="hover:text-primary"
          >
            {icon}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default PlaceDetail;
