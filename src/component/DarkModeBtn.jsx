import React from "react";
import { useState, useEffect } from "react";
import sunIcon from '../assets/images/light.svg'
import moonIcon from '../assets/images/dark.svg'

export default function DarkModeBtn() {

    const [isDark, setIsDark] = useState(() => {
        const theme = localStorage.getItem("theme")
        console.log(theme)
        return theme === "dark"
    })

    useEffect(() => {
        const root = window.document.documentElement.classList
        if (isDark) {
            root.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            root.remove("dark")
            localStorage.setItem("theme", "light")
        }
        console.log(isDark)
    }, [isDark])

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="cursor-pointer"
        >
            {isDark ? (
                <img src={sunIcon} alt="sunIcon"className="w-9 sm:w-13 px-2.25 py-2 sm:px-4" />
            ) : (
                <img src={moonIcon} alt="moonIcon" className="w-9 sm:w-13 px-2.25 py-2 sm:px-4" />
            )}
        </button>
    )
}