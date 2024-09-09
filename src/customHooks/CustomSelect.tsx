import { useState, useEffect, useRef } from 'react'
import React from 'react';




interface CustomSelectProps {
  placeholder: string
  options: string[]  // Assuming options are strings
  handleSelected: (option: string) => void
  selected: string
}

export const CustomSelect = ({ placeholder, options, handleSelected, selected }: CustomSelectProps) => {
  const selectRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickOutside = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('click', handleClickOutside)
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <section
      ref={selectRef}
      className={`custom-select ${isOpen ? 'open' : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="text-container flex align-center space-between">
        <span> sort by: </span>
        <p>{selected ? selected : placeholder}</p>
      </div>
      {isOpen && (
        <ul className="options-container flex column space-between">
          {options.map((option, idx) => (
            <li
              key={option}  // Assuming options are unique
              className={`option option-${idx}`}
              onClick={() => {
                handleSelected(option)
                setIsOpen(false)  // Close the dropdown after selection
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
