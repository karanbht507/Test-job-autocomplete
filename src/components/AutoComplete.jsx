import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from 'react-query'
import { getCharacters } from "../services/fetchCharacters";
import AutoCompleteDropdown from './AutoCompleteDropdown';

export default function AutoComplete() {
  const [searchValue, setSearchValue] = useState('');
  const [isDropdownOpen, toggleDropdown] = useState(false);
  const wrapperRef = useRef(null);
  const { data, isLoading, isError } = useQuery(
    ['characters', searchValue],
    () => getCharacters(searchValue),
    {
      retry: 0,
    }
  );

  const handleChange = useCallback(
    (event) => {
      setSearchValue(event.target.value);
    },
    [setSearchValue]
  );

  // close on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        toggleDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div className="autocomplete_container" ref={wrapperRef}>
      <input
        type="text"
        onChange={handleChange}
        value={searchValue}
        className="autocomplete_input"
        placeholder="Please enter name!"
        onFocus={() => toggleDropdown(true)}
      />
      <AutoCompleteDropdown
        isError={isError}
        data={data?.data?.results}
        setSearchValue={setSearchValue}
        open={isDropdownOpen}
        isLoading={isLoading}
        toggleDropdown={toggleDropdown}
      />
    </div>
  )
}
