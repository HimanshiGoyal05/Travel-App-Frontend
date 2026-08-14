import './HotelImages.css'

export const HotelImages=({singleHotel})=>{

    const {image, imageArr}= singleHotel;

    return(
        <div className="hotel-image-container flex gap-4">
            <div className="primary-image-container">
                <img className="primary-image" src={image} alt="primary-image" />
            </div>
            <div className='flex flex-wrap gap-4'>
                {
                    imageArr && imageArr.map(image => <img key={image} className="hotel-image" src={image} alt="hotel-image"/>)
                }
            </div>
        </div>
    )
}