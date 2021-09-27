import React, { useReducer, useEffect } from 'react';

import { validate } from '../../util/validators';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state, 
                value: action.val,
                isValid: validate(action.val, action.validators)
            };    
            case 'TOUCH':
            return {
                ...state, 
                isTouched: true
            }; 
        default:
            return state;
    }
}

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: props.initialValue || '', 
        isTouched: false,
        isValid: props.initialValid || false
    });

    const {id, onInput} = props;
    const {value, isValid} = inputState;

    useEffect(() => {
      onInput(id, value, isValid)
    }, [id, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
        type: 'CHANGE', 
        val: event.target.value, 
        validators: props.validators
    });
    };

    const touchHandler = () => {
        dispatch({
            type: 'TOUCH'
        })
    }
    

    let element = props.element === 'input' ? (
    <input 
    className="form-control" 
    id={props.id} 
    value={inputState.value}
    type={props.type} 
    placeholder={props.placeholder} 
    onChange={changeHandler}
    onBlur={touchHandler}
    
      /> 
        ) : (
        <textarea 
        className="form-control" 
        id={props.id} rows={props.rows} 
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        />
        );
    if (props.element === 'select'){
        element = (
        <select className="form-control"  onChange={changeHandler} value={inputState.value}>
            <option>Vandalism</option>
            <option>Assault</option>
            <option>Theft</option>
            <option>Vehicle Robbery</option>
        </select> )
    }
    if (props.element === 'selectStatus'){
        element = (
        <select className="form-control"  onChange={changeHandler} value={inputState.value}>
            <option>ACTIVE</option>
            <option>SOLVED</option>
            
        </select> )
    }
    if (props.element === 'file'){
        element = (
            <input className="form-control-file" id={props.id} type={props.type} value={inputState.value}/> 
)
    }

    return <div >
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouched && 
        <span className="badge badge-danger w-100">
            {props.errorText}
        </span>}    
    </div>
}

export default Input;