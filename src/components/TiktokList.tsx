import { ITiktok } from "../types/data";
import { Tiktok } from "./Tiktok";
import { useState } from "react";

interface ITiktokList {
    items: ITiktok[],
    removeCard: (id: number) => void;
    toggleCard: (id: number) => void;
}


const TiktokList: React.FC<ITiktokList> = (props) => {
    const {items, removeCard, toggleCard} = props;
    const [searchValue, setSearchValue] = useState('')
    const handlerSearchValue: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchValue(e.target.value)
    }

    return <div className="card-list">
        <div className="search">
            <input className="search-input" onChange={handlerSearchValue} value={searchValue}/>
            {searchValue ? <img onClick={() => setSearchValue('')} className="delete" src="/img/delete.png" alt="delete"/> : <img className="search-img" src="/img/search.png" alt="search"/>}
        </div>
        {props.items.filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase())).map(tiktok => <Tiktok key={tiktok.id} removeCard={removeCard} toggleCard={toggleCard} {...tiktok}/>)}
    </div>
}

export {TiktokList}