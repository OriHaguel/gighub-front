import { useState } from "react";
import { CustomSelect } from "../customHooks/CustomSelect"
import ArrowDown from '../assets/svg/ArrowDown.svg?react'
import { setFilterBy } from "../store/actions/gig.actions";
import { useSelector } from "react-redux";
// import ArrowDown from '../assets/svg/ArrowDown.svg?react'


export function FilterGigPage() {
    const options = ['Price High to Low', 'Price Low to High']
    const [selected, setSelected] = useState('')
    const filterBy = useSelector(state => state.gigModule.filterBy)
    console.log("🚀 ~ FilterGigPage ~ filterBy:", filterBy)
    const handleSelected = (option) => {
        setSelected(option);
        setFilterBy({ sortPrice: option })
    }


    return (
        <div>
            <div>
                <CustomSelect
                    placeholder='Best selling'
                    options={options}
                    handleSelected={handleSelected}
                    selected={selected}
                />
            </div>
        </div>
    )
}
