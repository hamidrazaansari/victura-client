import React, { useState } from 'react';
import '../assets/css/experience.css';
import RotateImg from '../assets/image/exp/rotateImage.png';
import WarmWhite from '../assets/image/exp/warm_white.png';
import CoolWhite from '../assets/image/exp/cool_white.png';
import OffSvg from '../assets/image/exp/off.svg';
import OnSvg from '../assets/image/exp/on.svg';

function Experience() {
    const [isFanOn, setIsFanOn] = useState(false);
    const [speed, setSpeed] = useState(0);
    const [direction, setDirection] = useState('forward');
    const [lightColor, setLightColor] = useState(''); // 
    const handleToggleFan = () => {
        if (isFanOn) {
            setIsFanOn(false);
            setSpeed(0);
        } else {
            setIsFanOn(true);
            setSpeed(1);
        }
    };

    const handleSpeedChange = (newSpeed) => {
        if (isFanOn) setSpeed(newSpeed);
    };

    const handleDirectionChange = (newDirection) => {
        if (isFanOn) setDirection(newDirection);
    };

    return (
        <div className="exp">
        <div className="container">
            <h2 className='heading fs-2'>Try the Experience Right Here</h2>
            <div className="row fan_experiance">
                <div className="col-md-6">
                    <div className="fan-remote">
                        <div className="button_circle">
                            <button className={`off ${!isFanOn ? 'current' : ''}`} onClick={handleToggleFan}>
                                <img src={OffSvg} alt="Fan Off" />
                            </button>
                            <button className={`on ${isFanOn ? 'current' : ''}`} onClick={handleToggleFan}>
                                <img src={OnSvg} alt="Fan On" />
                            </button>

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
                        </div>

                        {/* Down Light */}
                        <div className="direction donw_l_btn">
                            <span className="heading">Down Light</span>
                            <div className="d-flex mb-3">
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
                            </div>
                        </div>

                        {/* Fan Direction */}
                        <div className="direction direction_btn">
                            <span className="heading">Direction</span>
                            <div className="d-flex">
                                <button
                                    className={`next ${direction === 'forward' ? 'active' : ''}`}
                                    onClick={() => handleDirectionChange('forward')}
                                >
                                    Forward
                                </button>
                                <button
                                    className={`back ${direction === 'reverse' ? 'active' : ''}`}
                                    onClick={() => handleDirectionChange('reverse')}
                                >
                                    Reverse
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fan Preview */}
                <div className="col-md-6">
                    <h3 className="heading d-block d-md-none text-center">Try the Experience Right Here</h3>
                    <div className="fan_off">
                        <img
                            className={`brown_fan_list mw-100 fan-image ${isFanOn ? `rotate speed-${speed} ${direction}` : ''}`}
                            src={RotateImg}
                            alt="Brown Fan"
                            width="480"
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
    );
}

export default Experience;
