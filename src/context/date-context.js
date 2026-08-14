import { useContext, createContext, useReducer } from "react";
import { dateReducer } from "../reducer";

const initialValue={
    guests: 0,
    destination: "",
    checkInDate: null,
    checkOutDate: null,
    isSearchModalOpen: false,
    isSearchResultOpen: true,
}

const DateContext= createContext(initialValue);


const DateProvider= ({children})=>{
    const [{guests, destination, checkInDate, checkOutDate, isSearchModalOpen, isSearchResultOpen}, dateDispatch]= useReducer(dateReducer, initialValue);

    return <DateContext.Provider value= {{guests, destination, checkInDate, checkOutDate, isSearchModalOpen, isSearchResultOpen, dateDispatch}}>{children}</DateContext.Provider>
}

const useDate=()=>useContext(DateContext);

export {useDate, DateProvider};