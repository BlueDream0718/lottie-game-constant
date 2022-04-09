import "../stylesheets/styles.css";
import "../stylesheets/button.css";

import { useEffect, useRef } from "react";
import BaseImage from "../components/BaseImage";
import { prePathUrl } from "../components/CommonFunctions";
import { returnAudioPath } from "../utils/loadSound";
import { Player } from '@lottiefiles/react-lottie-player';

import { scaleImageList, moveImageList, letterList } from "../components/CommonVariants"

const audioPath = [
    { first: '02', second: '03', third: '29' },
    { first: '02', second: '04', third: '44' },
    { first: '02', second: '05', third: '49' },
    { first: '02', second: '06', third: '54' },
    { first: '02', second: '07', third: '59' },
    { first: '02', second: '08', third: '64' },
    { first: '02', second: '15', third: '69' },
    { first: '02', second: '09', third: '74' },
    { first: '02', second: '10', third: '79' },
    { first: '02', second: '11', third: '84' },
    { first: '02', second: '12', third: '89' },
    { first: '02', second: '13', third: '39' },
]


let runInterval

export default function Scene({ nextFunc, _baseGeo, currentLetterNum, _geo,
    audioList
}) {
    const parentObject = useRef()

    const moveBG = useRef()
    const moveBG1 = useRef()

    const rabitBaseRef = useRef();
    const introRabit = useRef();
    const scaleRef = useRef()
    const letterRef = useRef()
    const animationRef = useRef();

    const rabitListRef = Array.from({ length: 8 }, ref => useRef())

    useEffect(() => {

        audioList.bodyAudio1.src = returnAudioPath(audioPath[currentLetterNum].first)
        audioList.bodyAudio2.src = returnAudioPath(audioPath[currentLetterNum].second)


        rabitBaseRef.current.style.transform = 'translateX(' + _baseGeo.width * -0.5 + 'px)'
        moveBG.current.style.transition = '3s linear'
        moveBG1.current.style.transition = '3s linear'

        playAnimation()
        setTimeout(() => {
            rabitBaseRef.current.style.transition = '1.8s linear'
            rabitBaseRef.current.style.transform = 'translateX(' + _baseGeo.width * 0 + 'px)'
            setTimeout(() => {

                moveBG.current.style.transform = 'translateX(' + _baseGeo.width * (moveImageList[currentLetterNum] != '03'
                    ? -0.8 : -0.7) + 'px)'

                moveBG1.current.style.transform = 'translateX(' + _baseGeo.width * (moveImageList[currentLetterNum] != '03'
                    ? -0.8 : -0.7) + 'px)'
                setTimeout(() => {
                    stopAnimation()
                }, 3000);
            }, 1800);
        }, 1500);



        return () => {
        }

    }, [])

    const playAnimation = () => {
        let aniNum = 0;

        runInterval = setInterval(() => {
            rabitListRef[aniNum].current.setClass('hideObject')
            if (aniNum < rabitListRef.length - 1)
                aniNum++
            else
                aniNum = 0
            rabitListRef[aniNum].current.setClass('showObject')
        }, 70);
    }

    const stopAnimation = () => {

        clearInterval(runInterval)
        animationRef.current.className = 'showObject'

        rabitListRef.map(rabit => {
            rabit.current.setClass('hideObject')
        })

        setTimeout(() => {
            letterRef.current.setClass('aniObject')
            introRabit.current.play();
            audioList.bodyAudio1.play();
            setTimeout(() => {
                audioList.bodyAudio2.play();
                audioList.bodyAudio1.src = returnAudioPath(audioPath[currentLetterNum].third)

                setTimeout(() => {
                    introRabit.current.stop();
                    setTimeout(() => {
                        scaleRef.current.className = 'aniObject'
                        setTimeout(() => {
                            audioList.bodyAudio1.play();
                            setTimeout(() => {
                                parentObject.current.style.transition = '0.5s'
                                parentObject.current.style.opacity = 0
                                setTimeout(() => {
                                    nextFunc()
                                }, 500);
                            }, audioList.bodyAudio1.duration * 1000 + 1000);
                        }, 1500);
                    }, 500);


                }, audioList.bodyAudio2.duration * 1000);
            }, audioList.bodyAudio1.duration * 1000 + 300);



        }, 500);

    }

    return (
        <div
            className="aniObject"
            ref={parentObject}
            style={{
                position: "fixed", width: _baseGeo.width + "px"
                , height: _baseGeo.height + "px",
                left: _baseGeo.left + 'px',
                top: _baseGeo.top + 'px',
            }}
        >



            <div
                ref={moveBG}
                style={{
                    position: "fixed", width: _baseGeo.width + "px"
                    , height: _baseGeo.height + "px",
                    left: _baseGeo.left + 'px',
                    top: _baseGeo.top + 'px',
                }}
            >
                <img
                    width={'100%'}
                    style={{
                        position: 'absolute',
                        left: '0%',
                        top: '0%',
                        transform: 'scale(3)'
                    }}
                    src={prePathUrl() + "images/SB05_BG/SB05_PAN_BG/PAN_BG/SB_05_PAN_BG_" + moveImageList[currentLetterNum] + ".svg"}
                />


            </div>


            <div
                ref={rabitBaseRef}
                style={{
                    position: "fixed", width: _baseGeo.width + "px"
                    , height: _baseGeo.height + "px",
                    left: _baseGeo.left + 'px',
                    top: _baseGeo.top + 'px',
                }}
            >
                {
                    Array.from(Array(8).keys()).map(value =>
                        <BaseImage
                            key={value}
                            ref={rabitListRef[value]}
                            scale={[0.2, 0.2, 0.2, 0.2, 0.224, 0.224, 0.224, 0.224][value]}
                            posInfo={{ l: 0.2, t: 0.25 }}
                            className={value != 0 ? 'hideObject' : ''}
                            url={'SB05_Rabbit_Animation/SB_05_CI_rabbit_01_Animation_0' + (value + 1) + '.svg'} />
                    )

                }
                <div
                    ref={animationRef}
                    className='hideObject'
                    style={{
                        position: 'absolute',
                        width: '26%',
                        left: '18%',
                        top: '20%',
                        pointerEvents: 'none',
                        overflow: 'visible'
                    }}
                >
                    <Player
                        ref={introRabit}
                        src={prePathUrl() + 'lottieFiles/Rabbit_edit.json'}
                        loop
                        style={{
                            position: 'absolute',
                            width: '100%',
                            left: '0%',
                            top: '0%',
                            pointerEvents: 'none',
                            overflow: 'visible'
                        }}
                    >
                        {/* <Controls visible={false} buttons={['play', 'frame', 'debug']} /> */}
                    </Player>
                </div>
            </div>

            <BaseImage
                className='hideObject'
                ref={letterRef}
                scale={letterList[currentLetterNum].s}
                posInfo={{ l: letterList[currentLetterNum].l, t: letterList[currentLetterNum].t }}
                url={'SB05_Text_Interactive/Letters_for_BG/SB_50_TI_BG_' + letterList[currentLetterNum].path + '.svg'}
            />



            <div
                ref={moveBG1}
                style={{
                    position: "fixed", width: _baseGeo.width + "px"
                    , height: _baseGeo.height + "px",
                    left: _baseGeo.left + 'px',
                    top: _baseGeo.top + 'px',
                }}
            >
                <img
                    width={'100%'}
                    style={{
                        position: 'absolute',
                        left: '14%',
                        top: '8%',
                        transform: 'scale(2.5)',
                    }}
                    src={prePathUrl() + "images/SB05_BG/SB_05_FG_01.svg"}
                />



            </div>




            <img
                ref={scaleRef}
                className='hideObject'
                width={'100%'}
                style={{
                    position: 'absolute',
                    left: '0%',
                    top: '0%',

                }}
                src={prePathUrl() + "images/ScaleBG/SB_05_BG_" + scaleImageList[currentLetterNum] + ".svg"}
            />
        </div>
    );
}

var list = []