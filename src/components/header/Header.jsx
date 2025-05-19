import "./Header.style.css"

export const Header = () => {
  return (
    <>
        <div className="header_container">
          <nav className="navbar_container">
             <div className="nav_Logo">
                <h1>Logo</h1>
             </div>
             <div>
                <button className="nav-btn">Sign out</button>
             </div>
          </nav>
          <div className="heading-container">
           <h1 className="heading_primary">Science Fiction Stories</h1>
          </div>
          <div className="column_container">
            <button className="tab-btn new-btn">new</button>
            <button className="tab-btn inProgess-btn">inProgress</button>
            <button className="tab-btn completed-btn">completed</button>
            <button className="tab-btn clearall-btn">clear All</button>
          </div>
        </div>
    </>
  )
}