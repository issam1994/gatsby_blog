import React from "react";
import Logo from "../components/Logo"

export default function Footer() {
    return (
        <>
            <hr className="mt-4 max-w-5xl mx-auto" />
            <footer className="my-4 flex flex-col flex-center">
                <div className="">
                    © {new Date().getFullYear()}
                </div>
                <div className="">
                Built, with ❤️, by Issam Ait Ouahmane
                </div>
                <Logo />
            </footer>
        </>
    )
};