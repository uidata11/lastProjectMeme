"use client";

import ReactDOM from "react-dom";
import { useAlertModal } from "./AlertStore"; // 경로는 상황 맞게 수정
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

const AlertModal = () => {
  const {
    isOpen,
    message,
    title,
    buttons,
    closeAlert,
    targetRefs = [],
  } = useAlertModal();

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen && message) {
      setTimeout(() => setShow(true), 10); // mount 후 애니메이션 트리거
    } else {
      setShow(false);
    }
  }, [isOpen, message]);

  if (!isOpen || !message) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-99999 bg-black/40 flex items-center justify-center "
      onClick={closeAlert}
    >
      <div
        className={twMerge(
          "bg-white  dark:bg-[#4a4a4a] p-6 rounded-lg shadow-lg w-80 transform transition-all duration-1000 ease-out",
          show ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {title && (
          <h2 className="text-lg font-bold text-center mb-3 dark:text-gray-200">
            {title}
          </h2>
        )}

        <p className="text-gray-800 text-center whitespace-pre-line mb-4 dark:text-gray-300">
          {message}
        </p>
        <div className="flex gap-2">
          {buttons?.map((btn, i) => (
            <button
              key={i}
              autoFocus={btn.autoFocus}
              onClick={() => {
                btn.onClick?.();
                // ✅ 포커스 타겟 처리 (null 방지)
                const ref =
                  btn.target !== undefined ? targetRefs[btn.target] : null;
                setTimeout(() => {
                  ref?.current?.focus();
                }, 100);
                closeAlert();
              }}
              className={`flex-1 py-2 rounded  transition outline-none  ${
                btn.isGreen
                  ? " shadow-sm bg-emerald-400 hover:bg-emerald-500 dark:bg-emerald-900 dark:hover:bg-emerald-800 text-white dark:text-gray-200"
                  : "shadow-sm bg-gray-200  hover:bg-gray-300  dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-400 "
              }`}
            >
              {btn.text || "확인"}
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AlertModal;
