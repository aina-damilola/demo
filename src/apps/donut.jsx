import "../styles/donut.css"
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState} from "react";
import { animated, useSpring } from "@react-spring/three";

function TorusSkeleton(){
    const torusRef = useRef();
    const [triggered, setTriggered] = useState(false);
    useEffect(() => {
        const scroll = () => {
            setTriggered(((window.scrollY/window.innerHeight) *100)>0); 
        };

        window.addEventListener("scroll", scroll);
        return()=>{
            window.removeEventListener("scroll", scroll);
        };
        
    }, []);

    
    const { position, rotation, scale } = useSpring({
        position: triggered ? [45, 38, -5] : [8,-13,-5],
        rotation: triggered ? [0,0,0] : [(-3 * Math.PI) / 8, (-2 * Math.PI) / 8, 0],
        scale: triggered ? [0.05, 0.05, 0.05] : [1,1,1],
        config: {mass:1,tension:200,friction:30},
        // config: {duration: 3000},
        // onRest: () => setAnimate(false),
    });
    
    useFrame(() => {
        if (!torusRef.current)return;
        // torusRef.current.rotation.x += 0.01;
        torusRef.current.rotation.z -= 0.002;
        
    });

    return( 
        <animated.mesh ref={torusRef} position={position} rotation={rotation} scale={scale}>
            <torusGeometry args = {[30,8,8,24]}/>
            <meshBasicMaterial wireframe />
        </animated.mesh>
    );
}
//[(21 * Math.PI) / 8, (10 * Math.PI) / 8, 0]
//ref={torusRef}
//const torusRef = useRef();
function Torus(){
    return(
        <div id="donut-torus">
            <Canvas camera={{fov:75, position:[0,0,50]}}>
                <TorusSkeleton/>
            </Canvas>
        </div>
    );
}

export default Torus;