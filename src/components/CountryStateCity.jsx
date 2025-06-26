import React, { useState } from "react";
import { CountrySelect, StateSelect, CitySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function CountryStateCity({ currentState, setCurrentState , errors }) {

    return (
        <div>

            <div  className="input-box d-flex">
                {/* <label>State*</label> */}
                <StateSelect
                    countryid={101}
                    containerClassName="form-group"
                    inputClassName=""
                    onChange={(_state) => setCurrentState(_state)}
                    onTextChange={(_txt) => console.log(_txt)}
                    defaultValue={currentState}
                    placeHolder="State*"
                />
                {errors.state && <small className="text-danger" style={{left:"0px" , bottom:"-20px"}}>{errors.state}</small>}
            </div>

        </div>
    );
}