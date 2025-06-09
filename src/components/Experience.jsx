import React, { useState } from 'react';
import '../assets/css/experience.css';
import RotateImg from '../assets/image/exp/fan-rotate.png';
import WarmWhite from '../assets/image/exp/warm_white.png';
import CoolWhite from '../assets/image/exp/cool_white.png';
import OffSvg from '../assets/image/exp/off.png';
import OnSvg from '../assets/image/exp/on.png';
import ExpBg from '../assets/image/experience-bg.jpg'
import shuttle from '../assets/image/exp/shuttle.png'
import remoteLogo from '../assets/image/logoVertical.png'

function Experience() {
    const [isFanOn, setIsFanOn] = useState(false);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState('forward');
    const [lightColor, setLightColor] = useState(''); // 

    const handleFanOn = () => {
        setIsFanOn(true);
        setSpeed(1);
    };

    const handleFanOFF = () => {
        setIsFanOn(false);
        setSpeed(0);
    };

    const handleSpeedChange = (newSpeed) => {
        if (isFanOn) setSpeed(newSpeed);
    };

    const handleDirectionChange = (newDirection) => {
        if (isFanOn) setDirection(newDirection);
    };

    return (
        <div className="exp">
            <img src={ExpBg} className='img-fluid backgroundImg' alt="exp image" />
            <div className="expFeature">
                <div className="container">
                    <div className="row fan_experiance">
                        <div className="col-md-6">
                            <h2 className='heading mb-5 text-start'>Dive Into the Experience Now</h2>
                            <div className="fan-remote">
                                <div className="remoteBtn">
                                    <div><h3>ON</h3> <img src={OffSvg} alt="power button" onClick={handleFanOn} /></div>
                                    <div><h3>OF</h3> <img src={OnSvg} alt="power button" onClick={handleFanOFF} /></div>
                                </div>
                                {/* 
                            <div className="button_circle">


                                <span className="speed">Speed</span>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <button
                                        key={num}
                                        className={['one', 'two', 'three', 'four', 'five'][num - 1]}
                                        onClick={() => handleSpeedChange(num)}
                                    >
                                        {num}
                                    </button>
                                ))}
                            </div> */}

                                {/* Fan Direction */}
                                <div className="direction direction_btn">
                                    <div className="d-flex align-items-center justify-content-between w-100 mx-2">
                                        <div>
                                            <p>Forward</p>
                                            <button
                                                className={`next ${direction === 'forward' ? 'active' : ''}`}
                                                onClick={() => handleDirectionChange('forward')}
                                            ></button>
                                        </div>

                                        <div>
                                            <p>Reverse</p>
                                            <button
                                                className={`back ${direction === 'reverse' ? 'active' : ''}`}
                                                onClick={() => handleDirectionChange('reverse')}
                                            ></button>
                                        </div>
                                    </div>
                                </div>

                                <div className="circle-container">
                                    <div className="center-icon">
                                        <img src={shuttle} alt="" />
                                    </div>

                                    {[1, 2, 3, 4, 5].map((num, idx) => (
                                        <>
                                            <div key={idx} className={`segment seg-${idx + 1}`}>
                                            </div>
                                            <span className={`text  text${num}`} onClick={() => handleSpeedChange(num)} >{num}</span>

                                        </>
                                    ))}
                                </div>

                                {/* Down Light */}
                                <div className="direction donw_l_btn">
                                    <div className="d-flex mb-3 align-items-center justify-content-center w-100">
                                        <button
                                            className={`light c_white ${lightColor === 'cool' ? 'active' : ''}`}
                                            onClick={() =>
                                                setLightColor((prev) => (prev === 'cool' ? '' : 'cool'))
                                            }
                                        >
                                            White
                                        </button>

                                        <button
                                            className={`light n_white ${lightColor === 'warm' ? 'active' : ''}`}
                                            onClick={() =>
                                                setLightColor((prev) => (prev === 'warm' ? '' : 'warm'))
                                            }
                                        >
                                            Warm White
                                        </button>
                                        <button
                                            className={`light  ${lightColor === 'warm' ? 'active' : ''}`}
                                            onClick={() =>
                                                setLightColor((prev) => (prev === 'warm' ? '' : 'warm'))
                                            }
                                        >
                                            Yellow
                                        </button>
                                    </div>
                                </div>

                                <div className="remoreLogo">
                                    <img src={remoteLogo} alt="remoteLogo" />
                                </div>
                            </div>
                        </div>

                        {/* Fan Preview */}
                        <div className="col-md-6">
                            <h3 className="heading d-block d-md-none text-center">Try the Experience Right Here</h3>
                            <div className="fan_off mt-5">
                                <img
                                    className={`brown_fan_list mw-100 fan-image mt-5 ${isFanOn ? `rotate speed-${speed} ${direction}` : ''}`}
                                    src={RotateImg}
                                    alt="Brown Fan"
                                    width="580"
                                />
                                {lightColor === 'cool' && (
                                    <div className="fan_light cool_white">
                                        <img className="mw-100 lazyload" src={CoolWhite} alt="Cool White Light" width="480" />
                                    </div>
                                )}
                                {lightColor === 'warm' && (
                                    <div className="fan_light warm_white">
                                        <img className="mw-100 lazyload" src={WarmWhite} alt="Warm White Light" width="480" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
