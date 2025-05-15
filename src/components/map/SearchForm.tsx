"use client";

import React from "react";
import { IoSearch } from "react-icons/io5";

type SearchFormProps = {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleSearch: () => void;
  placeholder?: string;
};

const SearchForm = ({
  inputValue,
  setInputValue,
  handleSearch,
  placeholder = "원하는 장소를 입력하세요.",
}: SearchFormProps) => {
  return (
    <>
      <form
        className="flex dark:text-white dark:bg-[#4B4B4B] bg-white rounded-full shadow-md p-2 outline-none border border-gray-300 focus-within:border-green-500"
        onSubmit={(e) => {
          e.preventDefault();
          handleSearch();
        }}
      >
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={placeholder}
          className="p-1 text-sm focus:outline-none dark:placeholder:text-gray-200 placeholder:text-gray-500 w-55"
        />
        <button type="submit" className="text-xl px-2 hover:text-green-500">
          <IoSearch />
        </button>
      </form>
    </>
  );
};

export default SearchForm;
