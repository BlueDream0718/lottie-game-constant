import React from 'react';
import "../stylesheets/styles.css";
import { prePathUrl } from '../components/CommonFunctions';


export default function Scene1({ nextFunc, _geo }) {

    return (
        <div className='aniObject'>
            <div
                style={{
                    position: "fixed", width: _geo.width,
                    left: _geo.width * 0.08 + _geo.left
                    , bottom: (_geo.height * 0.1 + _geo.top) + "px",
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/SB05_Intro_BG/SB_05_Intro_BG_3.svg"}
                />
            </div>

            <div
                style={{
                    position: "fixed", width: _geo.width,
                    left: _geo.left - _geo.width * 0.05
                    , bottom: (_geo.top) + "px",
                    pointerEvents: 'none',
                    userSelect: 'none'
                }}>
                <img draggable={false} width={"100%"}
                    src={prePathUrl() + "images/SB05_Intro_BG/SB_05_Intro_BG_4.svg"}
                />
            </div>
        </div>
    );
}
