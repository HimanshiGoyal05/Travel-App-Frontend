import { useNavigate } from 'react-router-dom';

import './HotelCard.css'

export const HotelCard=({hotel})=>{
    const {_id, name, image, address, state, rating, price} = hotel;
    const navigate= useNavigate();

    const handleHotelCardClick = () => {
        navigate(`/hotels/${name}/${address}/${state}/${_id}/reserve`)
    }


    return(
        <div className="relative hotelcard-container shadow cursor-pointer">
            <div onClick={handleHotelCardClick}>
                <img className="img" src={image} alt={name} />
            
            <div className="hotelcard-details"> 
                <div className='flex items-center'>
                    <span className="location">{address}, {state}</span>
                    <span className="rating flex items-center">
                        <span className="material-icons-outlined">star</span>
                        <span>{rating}</span>
                    </span>
                </div>
                <p className="hotel-name">{name}</p>
                <p className="price-details">
                    <span className="price">Rs. {price}</span>
                    <span>night</span>
                </p>                
            </div>            
            </div>
            <div className="wishlist">
                <button className="btn-wishlist absolute">
                     <span className="material-icons favorite cursor-pointer">favorite</span>
                </button>
            </div>
        </div>        
    )
}