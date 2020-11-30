import React, {useEffect, useMemo, useRef} from "react";
import {useResource} from "react-three-fiber";
import * as THREE from "three";
import {Mesh} from "three";
import { ICanvasImage } from "./canvasImage.type";

const CanvasImage = (props: ICanvasImage) => {
    const {url, ...rest} = props;
    const texture = useMemo(() => new THREE.TextureLoader().load(url), [url]);
    const meshResource = useResource<Mesh>();

    return (
        <mesh ref={meshResource} {...rest}>
            {meshResource.current && <boxHelper args={[meshResource.current, 0xff0000]}/>}
            <planeBufferGeometry attach="geometry"/>
            <meshLambertMaterial attach="material" transparent>
                <primitive attach="map" object={texture}/>
            </meshLambertMaterial>
        </mesh>
    );
};

export {
    CanvasImage
}
