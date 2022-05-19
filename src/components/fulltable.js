import { useState, useEffect } from "react";
import Tablecoffe from './Tablecoffe';

const Fulltable = (props) => {
    const [filterText, setFilterText] = useState();
    const { onDelete } = props;
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        setFilteredList(props.list);
    }, [props.list])

    let handleFilter = () => {
        setFilteredList(props.list.filter((product) => {
            if (filterText === '') {
                return true;
            }
            else {
                return product.name.toLowerCase().includes(filterText.toLowerCase()) || product.description.toLowerCase().includes(filterText.toLowerCase());
            }
        }));
    };

    return <div>
   
        Search :    <input  type="text" value={filterText} 
                            onChange={(e) => {setFilterText(e.target.value)}}>
                    </input>
        <button onClick={handleFilter}>?</button>
        <Tablecoffe list={filteredList} onDelete={onDelete}></Tablecoffe>
    </div>
}
export default Fulltable;
