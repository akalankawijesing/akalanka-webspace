import gsap from "npm:gsap@^3.12.5"; // <-- import GSAP
import { useGSAP } from "npm:@gsap/react@^2.1.1"; // <-- import the hook from our React package
import React, { useRef, useLayoutEffect } from "react";

const Pieces = () => {
    // target elements with useRef
    let animateBounce = useRef();
    let animateLeft = useRef();
    let animateRight = useRef();
    let animateUp = useRef();

    useLayoutEffect(() => {
        gsap.fromTo(
            animateBounce.current,
            { y: 40 },
            { y: 0, duration: 1, repeat: -1, yoyo: true }
        );
        gsap.fromTo(
            animateUp.current,
            { y: -100, opacity: 0 },
            {
                y: 0,
                duration: 4,
                opacity: 1,
            }
        );
        gsap.fromTo(
            animateLeft.current,
            { x: -200, opacity: 0 },
            {
                x: 0,
                duration: 4,
                opacity: 1,
            }
        );
        gsap.fromTo(
            animateRight.current,
            { x: 200, opacity: 0 },
            {
                x: 0,
                duration: 4,
                opacity: 1,
            }
        );
    }, []);

    return (
        <div>
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 ref={animateBounce} className="text-8xl text-center mb-20">
                        Pieces for Developers
                    </h1>
                    <li ref={animateUp} className="text-2xl text-center">
                        Copy and Save code with Pieces
                    </li>
                    <li ref={animateRight} className="text-2xl text-center">
                        Convert from one programming language to another using Pieces
                    </li>
                    <li ref={animateLeft} className="text-2xl text-center">
                        Speed up Development Time using the Pieces Copilot
                    </li>
                </div>
            </div>
        </div>
    );
};

export default Pieces;