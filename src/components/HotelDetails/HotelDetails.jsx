import "./HotelDetails.css";

export const HotelDetails = ({ singleHotel }) => {

    const {numberOfBathrooms, numberOfBeds, numberOfGuest, numberOfBedrooms, hostName, hostJoinedOn} = singleHotel

  return (
    <div className="hotel-details-container">
      <div className="host-details">
        <p className="text-gray-500">Hosted by {hostName}, Joined on {hostJoinedOn}</p>
        <span className="span">{numberOfGuest} guests, {numberOfBedrooms} bedroom, {numberOfBeds} bed, {numberOfBathrooms} bathroom</span>
      </div>
      <div className="key-features host-details">
        <div className="gutter-bottom-small">
            <p className="flex items-center gap-4 text-gray-500">
                <span className="apps material-icons-outlined"> apps</span>
                Dedicated Workspace
            </p>
            <span className="span">
                A common area for wifi that is well suited for learining
            </span>
        </div>
        <div className="gutter-bottom-small">
            <p className="flex items-center gap-4 text-gray-500">
                <span className="apps material-icons-outlined"> apps</span>
                Great Location
            </p>
            <span className="span">
                80% of recent guests gave the location a 5-star rating
            </span>
        </div>
        <p className="flex items-center gap-4 text-gray-500">
            <span className="apps material-icons-outlined"> apps</span>
            Free cancellation before 7 days of booking
        </p>
      </div>
      <div className="host-details">
        <p className="amenities text-gray-500">What this place offers</p>
        <div className="flex gap-8">
            <div className="flex flex-col gap-2">
                <span className="span flex items-center gap-4">
                    <span className="apps material-icons-outlined">apps</span>
                    Kitchen
                </span>
                <span className="span flex items-center gap-4">
                    <span className="apps material-icons-outlined">apps</span>
                    Free parking on premises
                </span><span className="span flex items-center gap-4">
                    <span className="apps material-icons-outlined">apps</span>
                    Dedicated Workspace
                </span>
            </div>
            <div className="flex flex-col gap-2">
                <span className="span flex items-center gap-4">
                    <span className="apps material-icons-outlined">apps</span>
                    WiFi
                </span>
                <span className="span flex items-center gap-4">
                    <span className="apps material-icons-outlined">apps</span>
                    Washing Machine
                </span><span className="span flex items-center gap-4">
                    <span className="apps material-icons-outlined">apps</span>
                    Balcony
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};
