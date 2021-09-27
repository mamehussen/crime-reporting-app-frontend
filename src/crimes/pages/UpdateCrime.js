import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import MainLayoutBox from '../../shared/components/UIElements/MainLayoutBox';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hook';
import TopBar from '../../shared/components/Navigation/TopBar';

const DUMMY_CRIMES = [
    {
      "location": {
        "coordinates": []
      },
      "status": "ACTIVE",
      "_id": "612577ff0947132e04cacb57",
      "crimeType": "Theft",
      "description": "I just saw a tall man steal a purse",
      "createdBy": "612561db02fe4c1588a779f9",
      "createdAt": "2021-08-24T22:51:43.840Z",
      "updatedAt": "2021-08-24T22:51:43.840Z",
      "__v": 0,
      "images": []
    },
    {
      "location": {
        "coordinates": []
      },
      "status": "ACTIVE",
      "_id": "61257bc8edc9173eb8618f68",
      "crimeType": "Vehicle Robbery",
      "description": "I just saw a vehicle theft around kazanchis",
      "createdBy": "61255e277acb3e28acaec722",
      "createdAt": "2021-08-24T23:07:52.486Z",
      "updatedAt": "2021-08-24T23:07:52.486Z",
      "__v": 0,
      "images": []
    },
    {
      "location": {
        "coordinates": []
      },
      "status": "ACTIVE",
      "_id": "61257becedc9173eb8618f6c",
      "crimeType": "Assault",
      "description": "I just saw a man assaulting a beggar",
      "createdBy": "61255e277acb3e28acaec722",
      "createdAt": "2021-08-24T23:08:28.346Z",
      "updatedAt": "2021-08-24T23:08:28.346Z",
      "__v": 0,
      "images": []
    },
    {
      "location": {
        "coordinates": []
      },
      "status": "ACTIVE",
      "_id": "612600d84ab9cc2b6893983c",
      "crimeType": "Assault",
      "description": "I just saw a man getting assaulted by the candy man",
      "createdBy": "61255e277acb3e28acaec722",
      "createdAt": "2021-08-25T08:35:36.770Z",
      "updatedAt": "2021-08-25T08:35:36.770Z",
      "__v": 0,
      "images": []
    },
    {
      "location": {
        "coordinates": []
      },
      "status": "SOLVED",
      "_id": "612601424ab9cc2b68939841",
      "crimeType": "Vandalism",
      "description": "Someone 2k vandalism",
      "createdBy": "612561db02fe4c1588a779f9",
      "createdAt": "2021-08-25T08:37:22.562Z",
      "updatedAt": "2021-09-13T16:29:15.191Z",
      "__v": 0,
      "images": []
    },
    {
      "location": {
        "coordinates": []
      },
      "status": "ACTIVE",
      "_id": "61275c9a6aaa832fe42ac2ba",
      "crimeType": "Assault",
      "description": "OMG SOMEONE ASSAULTED ME",
      "createdBy": "61255e277acb3e28acaec722",
      "createdAt": "2021-08-26T09:19:22.813Z",
      "updatedAt": "2021-08-26T09:19:22.813Z",
      "__v": 0,
      "images": []
    },
    {
      "location": {
        "coordinates": []
      },
      "status": "ACTIVE",
      "_id": "61292d053feaac16584d3f67",
      "crimeType": "Vandalism",
      "description": "Someone vandalized our towns walls with graffiti paint",
      "createdBy": "61255e277acb3e28acaec722",
      "createdAt": "2021-08-27T18:20:53.786Z",
      "updatedAt": "2021-08-27T18:20:53.786Z",
      "__v": 0,
      "images": []
    }
  ]

const UpdateCrime = () => {
    const [isLoading, setIsLoading] = useState(true)
    const crimeId = useParams().crimeId;

    

    const [formState, inputHandler, setFormData] = useForm(
        {
        status: {
            value: '',
            isValid: false
        }
    },
     false
     );

    const identifiedCrime = DUMMY_CRIMES.find(crime => crime._id === crimeId)

    useEffect(() => {
        if (identifiedCrime) {
            setFormData(
                {
                status: {
                    value: identifiedCrime.status,
                    isValid: true
                }
            },
             true
            );
        }
        
        setIsLoading(false);
    }, [setFormData, identifiedCrime]);
    

    const crimeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs)
    }

    if(!identifiedCrime) {
        return(
            <MainLayoutBox>
                <h2>Couldn't find crime</h2>
                <NavLink to="/crimes">
                <button className="btn btn-primary mb-2"> GO TO CRIMES </button>
                </NavLink>
            </MainLayoutBox>
        )
    }

    if (isLoading) {
        return(
            <MainLayoutBox>
                <h2>Loading ...</h2>   
            </MainLayoutBox>
        )
    }

    return (
         <div>
           <TopBar />
        <MainLayoutBox>
            <div className="col-lg-6 col-12 mx-auto">
            
             <form onSubmit={crimeUpdateSubmitHandler}>
                    <Input 
                    id="status" 
                    element="selectStatus" 
                    type="select" 
                    label="Status" 
                    validators={[VALIDATOR_REQUIRE()]} 
                    onInput={inputHandler}  
                    initialValid={formState.inputs.status.isValid} 
                    initialValue={formState.inputs.status.value} 
                    errorText="Please Specify STATUS"
                    />
                    <br/>
                    <button className="btn btn-primary mb-2"> UPDATE CRIME </button>
                </form>
            </div>
            </MainLayoutBox>
            </div>
        
    )
};

export default UpdateCrime;