'use client'

import { useState } from 'react'

export default function DarkModeButton() {
    const [darkMode, setDarkMode] = useState(false)

    function handleToggleDarkMode() {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.body.classList.add('dark')
        } else {
            document.body.classList.remove('dark')
        }
    }

    return (
        <button
            onClick={handleToggleDarkMode}
            id="dark-mode-toggle"
            className="cursor-pointer mx-auto fixed top-[18px] right-20 flex justify-center items-center w-20 h-8 rounded-[56px] md:right-[370px] md:top-5 bg-zinc-900 dark:bg-zinc-200 text-zinc-200 dark:text-zinc-900 p-2"
        >
            <p className="text-[20px] font-bold relative">{darkMode ? 'Light' : 'Dark'}</p>
        </button>
    )
}
