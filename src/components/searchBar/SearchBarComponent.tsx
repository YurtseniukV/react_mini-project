import React, {useState} from 'react';
import classes from "./search-bar.module.css";

const SearchBarComponent = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange=(e:React.ChangeEvent<HTMLInputElement>) =>{
        setSearchValue((e.target.value));
    }


    return (
        <div className={classes.searchBar}>
            <input type="text" placeholder="Пошук за назвою" value={searchValue} onChange={handleInputChange}/>
        </div>
    );
};

export default SearchBarComponent;