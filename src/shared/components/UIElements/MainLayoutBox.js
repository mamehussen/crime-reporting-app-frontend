import React from 'react';

const MainLayoutBox = props => {
    return(
        <div id="content" className="main-content">
  <div className="layout-px-spacing">
    <div className="row layout-top-spacing">
      <div className="col-xl-12 col-lg-12 col-md-12 col-12 layout-spacing">
        <div className="widget-content-area br-4">
          
             
        {props.children}

          
          </div>
          </div>
          </div>
          </div>
          </div>
    );
}

export default MainLayoutBox