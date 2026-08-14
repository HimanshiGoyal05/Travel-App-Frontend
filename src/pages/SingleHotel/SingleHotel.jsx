import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { FinalPrice, HotelDetails, HotelImages, Navbar } from "../../components";
import './SingleHotel.css'

export const SingleHotel=()=>{
    const {id}= useParams();
    const [singleHotel, setSingleHotel]= useState([])

    useEffect(()=>{
        (async()=>{
            try{
                const {data} = await axios.get(`https://breeze-travel-planner-app.onrender.com/api/hotels/${id}`)
                setSingleHotel(data)
            }catch(err){
                console.log(err)
            }
        })()
    }, [id])

    const {name, state}= singleHotel

    return (
        <>
            <Navbar />
            <main className="single-hotel-page">
                <p className="text-2xl pb-4">{name}, {state}</p>
                <HotelImages singleHotel={singleHotel} />
                <div className="flex justify-between">
                    <HotelDetails singleHotel={singleHotel}/>
                    <FinalPrice singleHotel={singleHotel} />
                </div>
            </main>
        </>
    )
}