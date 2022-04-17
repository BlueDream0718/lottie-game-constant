
import React, { useState, useEffect, useRef } from 'react';

import TitleScene from "../Scenes/TitleScene";
import ScaleScene from "../Scenes/ScaleScene";
import DrawingScene from "../Scenes/DrawingScene";
import ExcellentScene from "../Scenes/ExcellentScene";
import { MusicButton } from './CommonButtons';

import "../stylesheets/styles.css";
import "../stylesheets/button.css";

import { prePathUrl } from "./CommonFunctions";

const Switch = props => {
  const { test, children } = props
  // filter out only children with a matching prop
  return children.find(child => {
    return child.props.value === test
  })
}

var __geo;
var backgroundImageIndex = 0;
var backgroundImageList = [
  "SB_05_Intro_BG_1", //1
  "SB_05_BG_01",
  "SB_05_BG_01",
  "SB_05_shaabash_01"
];


const App = ({ geo, _setBackground, __controlBacksound, _startTransition,
  _hideIntroTitle, _showIntroTitle, baseGeo, _isBackloaded, _audioList,
  currentSceneNumber
}, ref) => {

  const [index, setIndex] = useState(1);
  const [_isBackSoundPlaying, _setBackgroundPlaying] = useState(true);
  const musicRef = useRef();
  __geo = geo;

  useEffect(
    () => {
      return () => {
      }
    }, []
  )

  function controlBacksound() {
    __controlBacksound();
    if (_isBackSoundPlaying) {
      _setBackgroundPlaying(false);
    }
    else {
      _setBackgroundPlaying(true);
    }
  }

  const transitionSceneList = [3, 8, 15]
  function changeBackgroundImage(judgeNum) {
    if (judgeNum == 1)
      _hideIntroTitle();
    let sendNum = -1;
    if (judgeNum == 0)
      sendNum = 0;
    if (transitionSceneList.includes(judgeNum))
      sendNum = 1;
    if (judgeNum != backgroundImageIndex) {
      backgroundImageIndex = judgeNum;
      _setBackground(backgroundImageList[judgeNum], sendNum);
    }
  }

  function setFomart(sceneNum) {
    if (sceneNum == 1) {
      musicRef.current.fomartSound()

    }
    setIndex(sceneNum);
    changeBackgroundImage(sceneNum);
  }

  React.useImperativeHandle(ref, () => ({
    nextFunc: () => {
      setFomart(1);
      _hideIntroTitle()

    },
    showMusicBtn: () => {

    }
  }))

  function nextFunc() {
    setFomart(index + 1);
  }

  function goHome() {
    backgroundImageIndex = 0;
    musicRef.current.setClass('hideObject')

    _audioList.backAudio.pause();
    _audioList.backAudio.currentTime = 0;

    setIndex(0);
    _showIntroTitle();
    _setBackground(backgroundImageList[0])
  }


  return (
    <div >
      <div className={_isBackloaded ? '' : 'hideObject'}>
        <Switch test={index}>
          <TitleScene key={0} nextFunc={nextFunc} _geo={__geo} value={0} />
          <ScaleScene key={1} currentLetterNum={currentSceneNumber} nextFunc={nextFunc} _baseGeo={baseGeo}
            audioList={_audioList} _geo={__geo} value={1} />
          <DrawingScene key={2}
            startTransition={_startTransition}
            currentLetterNum={currentSceneNumber} nextFunc={nextFunc} _baseGeo={baseGeo} audioList={_audioList} _geo={__geo} value={2} />
          <ExcellentScene key={3} nextFunc={goHome} audioList={_audioList} _geo={__geo} value={3} _baseGeo={baseGeo} />
        </Switch>
      </div>

      <MusicButton ref={musicRef} _geo={__geo} backAudio={_audioList.backAudio} />

    </div >
  );
}

export default React.forwardRef(App);
