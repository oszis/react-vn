import React, {useRef} from 'react';
import { CanvasImage } from '../../../common/components/atoms/canvasImage/canvasImage';

const HomePage: React.FC = (props) => {
    return (
        <mesh
            scale={[5,5,5]}
            position={[0,0,150]}
        >
            <CanvasImage
                url={'/logo512.png'}/>
        </mesh>
    )
};

export {
    HomePage
}
