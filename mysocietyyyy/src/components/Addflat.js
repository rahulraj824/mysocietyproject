import React, { useState} from 'react';

const SimpleInput = (props) => {
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredCityTouched, setEnteredCityTouched] = useState(false);
    const [enteredState, setEnteredState] = useState('');
    const [enteredStateTouched, setEnteredStateTouched] = useState(false);
    const [enteredRent, setEnteredRent] = useState('');
    const [enteredRentTouched, setEnteredRentTouched] = useState(false);
    const [enteredLocality, setEnteredLocality] = useState('');
    const [enteredLocalityTouched, setEnteredLocalityTouched] = useState(false);
    const [enteredPin, setEnteredPin] = useState('');
    const [enteredPinTouched, setEnteredPinTouched] = useState(false);
    const [enteredHouseNo, setEnteredHouseNo] = useState('');
    const [enteredHouseNoTouched, setEnteredHouseNoTouched] = useState(false);
    const [enteredNoOfRooms, setEnteredNoOfRooms] = useState('');
    const [enteredNoOfRoomsTouched, setEnteredNoOfRoomsTouched] = useState(false);
    

    const enteredCityIsValid = enteredCity.trim() !== '';
    const cityInputIsInvalid = !enteredCityIsValid && enteredCityTouched;
    const enteredStateIsValid = enteredState.trim() !== '';
    const stateInputIsInvalid = !enteredStateIsValid && enteredStateTouched;
    const enteredRentIsValid = enteredRent.trim() !== '';
    const rentInputIsInValid = !enteredRentIsValid && enteredRentTouched;
    const enteredLocalityIsValid = enteredLocality.trim() !== '';
    const localityInputIsInValid = !enteredLocality && enteredLocalityTouched;
    const enteredHouseNoIsValid = enteredHouseNo.trim() !== '';
    const houseNoInputIsInValid = !enteredHouseNo && enteredHouseNoTouched;
    const enteredPinIsValid = enteredPin.trim() !== '';
    const pinInputIsInValid = !enteredPin && enteredPinTouched;
    const enteredNoOfRoomsIsValid = enteredNoOfRooms.trim() !== '';
    const noOfRoomsInputIsInValid = !enteredNoOfRooms && enteredNoOfRoomsTouched;

    let formIsValid = false;

    if(enteredCityIsValid && enteredStateIsValid && enteredRentIsValid && enteredLocalityIsValid && enteredPinIsValid && enteredHouseNoIsValid && enteredNoOfRoomsIsValid) {
        formIsValid = true;
    } 


    const cityInputBlurHandler = event => {
        setEnteredCityTouched(true);
    };
    const stateInputBlurHandler = event => {
        setEnteredStateTouched(true);
    }
    const localityInputBlurHandler = event => {
        setEnteredLocalityTouched(true);
    };
    const rentInputBlurHandler = event => {
        setEnteredRentTouched(true);
    }
    const pinInputBlurHandler = event => {
        setEnteredPinTouched(true);
    }
    const houseNoInputBlurHandler = event => {
        setEnteredHouseNoTouched(true);
    }
    const noOfRoomsInputBlurHandler = event => {
        setEnteredNoOfRoomsTouched(true);
    }


    const cityInputChangeHandler = event => {
        setEnteredCity(event.target.value);
    };
    const stateInputChangeHandler = event => {
        setEnteredState(event.target.value);
    }
    const localityInputChangeHandler = event => {
        setEnteredLocality(event.target.value);
    }
    const rentInputChangeHandler = event => {
        setEnteredRent(event.target.value);
    }
    const pinInputChangeHandler = event => {
        setEnteredPin(event.target.value);
    }
    const houseNoInputChangeHandler = event => {
        setEnteredHouseNo(event.target.value);
    }
    const noOfRoomsInputChangeHandler = event => {
        setEnteredNoOfRooms(event.target.value);
    }


    const formSubmissionHandler = event => {
        event.preventDefault();

        setEnteredCityTouched(true);
        setEnteredStateTouched(true);
        setEnteredRentTouched(true);
        setEnteredLocalityTouched(true);
        setEnteredPinTouched(true);
        setEnteredHouseNoTouched(true);
        setEnteredNoOfRoomsTouched(true);

        if(!enteredCityIsValid || !enteredStateIsValid || !enteredRentIsValid || !enteredLocalityIsValid || !enteredPinIsValid || !enteredHouseNoIsValid || !enteredNoOfRoomsIsValid) {
            return;
        }

        console.log(enteredCity, enteredState, enteredRent, enteredLocality, enteredPin, enteredHouseNo, enteredNoOfRooms, enteredRent);

        setEnteredCity('');
        setEnteredCityTouched(false);
        setEnteredState('');
        setEnteredStateTouched(false);
        setEnteredRent('');
        setEnteredRentTouched(false);
        setEnteredLocality('');
        setEnteredLocalityTouched(false);
        setEnteredPin('');
        setEnteredPinTouched(false);
        setEnteredHouseNo('');
        setEnteredHouseNoTouched(false);
        setEnteredNoOfRooms('');
        setEnteredNoOfRoomsTouched(false);
    };

    const cityInputClasses = cityInputIsInvalid 
                            ? 'form-control invalid' 
                            : 'form-control';
    const stateInputClasses = stateInputIsInvalid 
                            ? 'form-control invalid' 
                            : 'form-control';
    const rentInputClasses = rentInputIsInValid 
                            ? 'form-control invalid' 
                            : 'form-control';
    const localityInputClasses = localityInputIsInValid 
                            ? 'form-control invalid' 
                            : 'form-control';
    const pinInputClasses = pinInputIsInValid 
                            ? 'form-control invalid' 
                            : 'form-control';
    const houseNoInputClasses = houseNoInputIsInValid 
                            ? 'form-control invalid' 
                            : 'form-control';
    const noOfRoomsInputClasses = noOfRoomsInputIsInValid 
                            ? 'form-control invalid' 
                            : 'form-control';
                            

    return (
        <form className="app" onSubmit={formSubmissionHandler}>
            <div className={stateInputClasses}>
                <label htmlFor='state'>state</label>
                <input 
                 type='text'
                 id='state' 
                 onChange={stateInputChangeHandler} 
                 onBlur = {stateInputBlurHandler}
                 value = {enteredState}
                 />
            </div>
            {stateInputIsInvalid && <p className="error-text">state must not be empty.</p>}

            <div className={`${cityInputIsInvalid 
                            ? 'form-control invalid' 
                            : 'form-control'}`}>
                <label htmlFor='city'>City</label>
                <input 
                 type='text'
                 id='city' 
                 onChange={cityInputChangeHandler} 
                 onBlur = {cityInputBlurHandler}
                 value = {enteredCity}
                 />
            </div>
            {cityInputIsInvalid && <p className="error-text">city must not be empty.</p>}

            <div className={localityInputClasses}>
                <label htmlFor='locality'>Locality</label>
                <input 
                 type='text'
                 id='locality' 
                 onChange={localityInputChangeHandler} 
                 onBlur = {localityInputBlurHandler}
                 value = {enteredLocality}
                 />
            </div>
            {localityInputIsInValid && <p className="error-text">locality must not be empty.</p>}

            <div className={pinInputClasses}>
                <label htmlFor='pincode'>Pincode</label>
                <input 
                 type='number'
                 id='pincode' 
                 onChange={pinInputChangeHandler} 
                 onBlur = {pinInputBlurHandler}
                 value = {enteredPin}
                 />
            </div>
            {pinInputIsInValid && <p className="error-text">Pincode must not be empty.</p>}

            <div className={houseNoInputClasses}>
                <label htmlFor='houseNumber'>House Number</label>
                <input 
                 type='number'
                 id='houseNumber' 
                 onChange={houseNoInputChangeHandler} 
                 onBlur = {houseNoInputBlurHandler}
                 value = {enteredHouseNo}
                 />
            </div>
            {houseNoInputIsInValid && <p className="error-text">House Number must not be empty.</p>}

            <div className={noOfRoomsInputClasses}>
                <label htmlFor='noofrooms'>Number of Rooms</label>
                <input 
                 type='number'
                 id='noofrooms' 
                 onChange={noOfRoomsInputChangeHandler} 
                 onBlur = {noOfRoomsInputBlurHandler}
                 value = {enteredNoOfRooms}
                 />
            </div>
            {noOfRoomsInputIsInValid && <p className="error-text">no of rooms must not be empty.</p>}

            <div className={rentInputClasses}>
                <label htmlFor='rent'>Rent</label>
                <input 
                 type='number'
                 id='rent' 
                 onChange={rentInputChangeHandler} 
                 onBlur = {rentInputBlurHandler}
                 value = {enteredRent}
                 />
            </div>
            {rentInputIsInValid && <p className="error-text">rent must not be empty.</p>}
                <br />
            <div className="form-actions">
                <button className="btn-primary" disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;