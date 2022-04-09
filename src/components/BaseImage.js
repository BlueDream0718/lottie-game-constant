import React, { useRef } from "react";
import "../stylesheets/styles.css"
import { prePathUrl } from "./CommonFunctions";

const BaseImage = (prop, ref) => {

    let style = {
        left: '0px',
        top: '0px',

    };

    const currentRef = useRef();

    let widthScale = '100%'
    if (prop.style) {
        style = { ...style, ...prop.style }
        // if (prop.style.transition == null)
        //     style.transition = '0.7s'
    }


    React.useImperativeHandle(ref, () => ({
        setClass: (className) => {
            currentRef.current.className = "baseImage " + className
        },

        setStyle: (styles) => {
            let allkeys = Object.keys(styles)
            allkeys.map(key => {
                currentRef.current.style[key] = styles[key]
            })
        },
        setUrl: (url) => {
            currentRef.current.src = prePathUrl() + "images/" + url
        }



    }))




    if (prop.scale != null)
        widthScale = prop.scale * 100 + "%";

    if (prop.posInfo != null) {
        if (prop.posInfo.l != null) {
            style.left = 100 * prop.posInfo.l + '%'
            delete style.right
        }
        if (prop.posInfo.r != null) {
            style.right = 100 * prop.posInfo.r + '%'
            delete style.left
        }
        if (prop.posInfo.t != null) {
            style.top = 100 * prop.posInfo.t + '%'
            delete style.bottom
        }
        if (prop.posInfo.b != null) {
            style.bottom = 100 * prop.posInfo.b + '%'
            delete style.top
        }
    }

    return (
        <img draggable={false} className={"baseImage " + (prop.className != null ? prop.className : '')}
            width={widthScale}
            src={prePathUrl() + "images/" + prop.url}
            style={style}
            onClick={prop.onClick}
            ref={currentRef}
            onLoad={prop.onLoad}
        />
    )
}

export default React.forwardRef(BaseImage);
