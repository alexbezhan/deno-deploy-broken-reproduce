/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useLayoutEffect } from "preact/hooks"
import Logo from '../islands/Logo.tsx'
import { IS_BROWSER } from "fresh/runtime.ts";


export default (props: any) => {

    const [mode, setMode] = useState(IS_BROWSER ? localStorage.theme : 'dark')

    useLayoutEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (IS_BROWSER) {
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.remove('light')
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
                document.documentElement.classList.add('light')
            }
        }
    }, [mode])

    // <Logo setter={setMode} />
    // <NavBar class={tw`my-4 flex flex-row`} {...props} />
    return (
        <div class={tw`mt-4`}>
        </div>
    )
}