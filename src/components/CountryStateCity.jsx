import React, { useState } from "react";
import { CountrySelect, StateSelect, CitySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

export default function CountryStateCity({ setCountry, country, currentCity, setCurrentCity, currentState, setCurrentState , errors }) {

    return (
        <div>
            <div  className="input-box d-flex">
                {/* <label></label> */}
                <CountrySelect
                    containerClassName="form-group"
                    inputClassName=""
                    onChange={(_country) => setCountry(_country)}
                    onTextChange={(_txt) => console.log(_txt)}
                    placeHolder="Country / Region*"
                />
                {errors.country && <small className="text-danger" style={{left:"133px" , bottom:"-17px"}}>{errors.country}</small>}
              
            </div>



            <div  className="input-box d-flex">
                {/* <label>State*</label> */}
                <StateSelect
                    countryid={country?.id}
                    containerClassName="form-group"
                    inputClassName=""
                    onChange={(_state) => setCurrentState(_state)}
                    onTextChange={(_txt) => console.log(_txt)}
                    defaultValue={currentState}
                    placeHolder="State*"
                />
                {errors.state && <small className="text-danger" style={{left:"55px" , bottom:"-17px"}}>{errors.state}</small>}
            </div>
            <div  className="input-box d-flex" >
                {/* <label>Town / City*</label> */}
                <CitySelect
                    containerClassName="form-group"
                    countryid={country?.id}
                    stateid={currentState?.id}
                    onChange={(_city) => setCurrentCity(_city)}
                    defaultValue={currentCity}
                    placeHolder="Town / City*"
                />
                {errors.city && <small className="text-danger" style={{left:"100px" , bottom:"-17px"}}>{errors.city}</small>}

            </div>

        </div>
    );
}