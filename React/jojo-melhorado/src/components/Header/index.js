"use client"
import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./AnimationMenu.json"
import Link from "next/link";

//const App = () => <Lottie animationData={groovyWalkAnimation} loop={false} />;
export default function Header() {
    return (
        <div>
            <h1>Aqui é o header, vai tomando kkkk</h1>
            <Link href='/lista'>Lista</Link>
            <Link href='/'>Home</Link>
        </div>

    )
}
