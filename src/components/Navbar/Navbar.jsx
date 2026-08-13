import "./Navbar.css";

export const Navbar=()=>{
    return (
    <>
      <header className="heading flex text-slate-50 items-center">
        <h1 className="heading-1">
            <a href="/">TravelO</a>
        </h1>
        <div className="form-container flex items-center cursor-pointer shadow">
            <span className="form-option">Any Where</span>
            <span className="border-right-1px"></span>
            <span className="form-option">Any Week</span>
            <span className="border-right-1px"></span>
            <span className="form-option">Add Guests</span>
            <span className="search material-icons-outlined">search</span>
        </div>
        <nav className="flex gap-8 items-center">
            <div className="nav flex items-center cursor-pointer">
                <span className="material-icons-outlined profile-option menu"> menu </span>
                <span className="material-icons-outlined profile-option person"> person_2 </span>
            </div>
          
        </nav>
      </header>
    </>
  );
}