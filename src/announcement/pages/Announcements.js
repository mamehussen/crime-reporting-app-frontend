import React, {useEffect, useState} from 'react';

import AnnouncementList from '../components/AnnouncementsList';
import MainLayoutBox from '../../shared/components/UIElements/MainLayoutBox';
import TopBar from '../../shared/components/Navigation/TopBar';

import { useContext} from 'react';
import { AuthContext } from '../../shared/context/auth-context';


const Announcements = () => {
    const auth = useContext(AuthContext)

    const [loadedAnnouncements, setLoadedAnnouncements] = useState();

    useEffect(() => {
        const sendRequest = async () => {

            try {
                const response = await fetch('https://crime-reporting-app-api.herokuapp.com/api/v1/announcements');

                const responseData = await response.json();

                setLoadedAnnouncements(responseData.announcements);
            } catch (err) {
                console.log(err)
            }
            
        };
       sendRequest();
    }, [])
    
    return (    
         <div>
             <TopBar />
        <MainLayoutBox >
            {auth.isLoggedIn && 
                <div class="col-md-12 text-right mb-5">
                <br />
                <button className="btn btn-primary">Add Announcement</button>
            </div>
            }
            
            { loadedAnnouncements && <AnnouncementList items={loadedAnnouncements}/> }
        </MainLayoutBox>
        </div>
        
        
        
    )
}

export default Announcements;
