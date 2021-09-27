import React from 'react';

import MainLayoutBox from '../../shared/components/UIElements/MainLayoutBox';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validators';

import { useForm } from '../../shared/hooks/form-hook';
import TopBar from '../../shared/components/Navigation/TopBar';

const NewCrime = () => {

    const [formState, inputHandler] = useForm( {
        address:{
            value: '',
            isValid: false
        },
        description:{
            value: '',
            isValid: false
        },
        crimeType:{
            value: '',
            isValid: true
        },
        
    }, false)

    const crimeSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs); // send this to backend!
        
    }

    return (
        <div>
        <TopBar />
    <MainLayoutBox>
    <div className="col-lg-6 col-12 mx-auto">
    <form onSubmit={crimeSubmitHandler}>
        <Input id="address" element="input" type="text" label="Address" validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler} errorText="Please Specify Address"/><br />
        <Input id="description" element="textarea" type="text" label="Description" validators={[VALIDATOR_REQUIRE()]} errorText="Please Specify Description" onInput={inputHandler}/><br />
        <Input id="crimeType" element="select" type="text" label="Crime Type" validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler}/><br />
        {/* <Input id="uploadImage" element="file" type="file" label="Upload Image"  onInput={inputHandler} /><br /> */}
        <button className="btn btn-primary mb-2" disabled={!formState.isValid} >ADD CRIME</button>
    </form>
    </div>
    </MainLayoutBox>
    </div>
    );
}

export default NewCrime;