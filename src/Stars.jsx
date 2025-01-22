import { Canvas, useFrame } from "@react-three/fiber";
import React, { useState, useEffect, useRef, useMemo } from "react";

import "./styles/Stars.css";

const zoom_lvl = 1;
const num_of_stars = 100;



function Sphere(props) {
    
    const sphereRef = useRef();

    var speed_x = props.speedx;    
    var speed_y = props.speedy; 
    
    useFrame(() => {
        if(!sphereRef.current)return;
        const sphere = sphereRef.current;
        sphere.position.x += speed_x;
        sphere.position.y += speed_y;

        if(sphere.position.x >= window.innerWidth/2 || sphere.position.x <= -window.innerWidth/2){
            speed_x = -speed_x;
        }
        if(sphere.position.y >= window.innerHeight/2 || sphere.position.y <= -window.innerHeight/2){
            speed_y = -speed_y;
        }
    });

    return (
        <>
            <mesh ref={sphereRef} position={props.position}>
                <sphereGeometry args={[3, 1, 1]} />
                <meshStandardMaterial/>
            </mesh>
        </>
    );
}



function Cluster() {
    const x_range = window.innerWidth / zoom_lvl;
    const y_range = window.innerHeight / zoom_lvl;

    const cluster = useMemo(() => {
        return Array.from({ length: num_of_stars }, () => {
            const position = [
                Math.random() * x_range - window.innerWidth / (zoom_lvl * 2),
                Math.random() * y_range - window.innerHeight / (zoom_lvl * 2),
                0,
            ];
            const speedx = Math.random() * 4 - 2;
            const speedy = Math.random() * 4 - 2;

            return <Sphere key={position.toString()} position={position} speedx={speedx} speedy={speedy} />;
        });
    }, [x_range, y_range]);

    return <>{cluster}</>;
}


function Light(){
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (event) => {
            const n_x = (event.clientX-(window.innerWidth)/2);
            const n_y = -(event.clientY - (window.innerHeight)/2);

            setMousePosition({ x: n_x, y: n_y });
        };

        window.addEventListener("mousemove", handleMouse);

        return () => {
            window.removeEventListener("mousemove", handleMouse);
        };
    }, []);

    return(
        <pointLight distance={100} intensity={50} decay={0.9} position={[mousePosition.x, mousePosition.y, 3]} color="#ffffff"/>
    );
}
function Stars() {
    return (
        <Canvas id="stars-canvas" orthographic camera={{zoom:zoom_lvl, position:[0,0,100]}}>
            <Cluster/>
            <Light/>
            <ambientLight intensity={.05}/>
            {/* <mesh position ={[0,0,-1]}>
                <planeGeometry args={[window.innerWidth,window.innerHeight]} />
                <meshStandardMaterial color="#2f73cd" transparent/>
            </mesh> */}
        </Canvas>
    );
}

export default Stars;
