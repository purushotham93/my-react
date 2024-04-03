import { useState } from "react";
import data from "./data";
import './style.css'

export default function Accordian () {
    const [selectedItem, setSelectedItem] = useState(null);
    const [enableMultiSelect, setEnableMultiSelection] = useState(false);
    const [multiSelectItems, setMultiSelectItems] = useState([]);
    function handleClickSelection(id) {
        if(enableMultiSelect) {
            let multiSelect = [...multiSelectItems];
            const itemIndex = multiSelect.indexOf(id);
            if(itemIndex !== -1) {
                multiSelect.splice(itemIndex, 1);
            } else {
                multiSelect.push(id)
            }
            setMultiSelectItems(multiSelect)
        }
        else {
            setSelectedItem(selectedItem === id ? null : id);
            console.log('test', selectedItem)
        }
    }
    return (
        <div className="wrapper">
            <button className="multi-select-button" onClick={() => {setEnableMultiSelection(!enableMultiSelect);setMultiSelectItems([])}}>Enable Multi Select</button>
            <div className='accordian'>
                {
                    data && data.length> 0 ? 
                    data.map((item) => 
                        <div className="item">
                            <div className='title' onClick={() => handleClickSelection(item.id)}>
                             <h3>{item.question}</h3>
                             <span>+</span>
                            </div>
                            {
                                selectedItem === item.id || multiSelectItems.indexOf(item.id) !== -1? <div className="showAnswer">{item.answer}</div> : <></>
                            }
                        </div>
                    )
                    :<div>No data found</div>
                }
            </div>
        </div>
    )
}