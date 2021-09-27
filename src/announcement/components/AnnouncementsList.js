import React from 'react';

import AnnouncementItem from './AnnouncementItem';

const AnnouncementList = props => {
    return (<ul>
        {props.items.map(announcement => (
            <AnnouncementItem 
            key={announcement._id}
            id={announcement._id}
            title={announcement.title}
            content={announcement.content}
            announcementStatus={announcement.announcementStatus}
             />
    ))}
    </ul>
    );
}

export default AnnouncementList;