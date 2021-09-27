import React from 'react';

const AnnouncementItem = props => {
    return(
        <div className="infobox-3">
            <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-radio"><circle cx={12} cy={12} r={2} /><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" /></svg>                                
            </div>
            
            <h5 className="info-heading">{props.title}</h5>
            <p className="info-text">{props.content}</p>
            <p className="info-link" href>  STATUS {props.announcementStatus}</p>
           
        </div>
    );
}

export default AnnouncementItem;