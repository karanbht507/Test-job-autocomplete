import React, { useCallback, useState } from 'react';

export default function AutoCompleteDropdown({
  isError,
  data,
  setSearchValue,
  open,
  toggleDropdown,
  isLoading
}) {
  const [activeItem, setActiveItem] = useState(undefined);

  const handleSelect = useCallback((selectedValue, id) => {
    setActiveItem(id);
    setSearchValue(selectedValue);
    toggleDropdown(false);
  }, [setSearchValue, toggleDropdown, setActiveItem])

  return (
    open && (
      <div className="dropdown_container">
        {isLoading && <p className="loading_text">Loading...</p>}
        {data ? (
          <ul className="list">
            {data.map(({ name, id }, index) => (
              <li onClick={() => handleSelect(name, id)} key={index} className={id === activeItem ? 'active_item item' : 'item'}>
                {name}
              </li>
            ))}
          </ul>
        ) : (
            isError && <p className="no_results_text">Search does not match with any name! Please try with a different name</p>
          )}
      </div>
    )
  )
}
