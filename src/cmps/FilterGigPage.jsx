import { useState } from "react";
import { CustomSelect } from "../customHooks/CustomSelect"



export function FilterGigPage() {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const [selected, setSelected] = useState('');

    const handleSelected = (option) => {
        setSelected(option);
    };

    return (
        <div>
            <div>
                <CustomSelect
                    placeholder="Best selling"
                    options={options}
                    handleSelected={handleSelected}
                    selected={selected}
                />
            </div>
        </div>
    );
};
