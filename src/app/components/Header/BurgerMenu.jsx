'use client';

import Link from "next/link";
import { useState } from "react";

export default function BurgerMenu() {
    const [sideBarOpen, setSideBarOpen] = useState(false);

    function toggleSideBar() {
        setSideBarOpen(!sideBarOpen);
    }

    return (
        <>
            <button 
                onClick={toggleSideBar} 
                className={`burger-button ${sideBarOpen ? 'button-gone-animation' : ''}`}
            >
                <div className="bg-zinc-100 rounded-full w-8 h-1 m-1"></div>
                <div className="bg-zinc-100 rounded-full w-8 h-1 m-1"></div>
                <div className="bg-zinc-100 rounded-full w-8 h-1 m-1"></div>
            </button>

            <div className={`sidebar ${sideBarOpen ? 'slide-in' : 'slide-out'}`}>
                <button className="text-white bg-none cursor-pointer text-5xl mb-10" onClick={toggleSideBar}>
                    &times;
                </button>
                <nav className="flex flex-col gap-6 justify-center">
                        <p>Test</p>
                        <p>Test</p>
                        <p>Test</p>
                </nav>
            </div>
        </>
    )
}
