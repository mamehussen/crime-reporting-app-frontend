import React from 'react'


const MainContainer = props => {
    return(
        <div>

        <div className="main-container" id="container">

        <div className="overlay"></div>
        <div className="search-overlay"></div>

            {props.children}
        
        </div>
        </div>       
    );
}

export default MainContainer 