import Link from "next/link"
import React from 'react'

const Nav = () => {
    return (
        <>
            <ul className="  shadow-xl bg-white rounded flex justify-center group-hover:cursor-style">
                <li className="m-3 hover:text-red-900">
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li className="m-3 hover:text-red-900">
                    <Link href="/kanji-game"><a>Kanji Game</a></Link>
                </li>
                <li className="m-3 hover:text-red-900">
                    <Link href="/search-yojis"><a>Search Yojis</a></Link>
                </li>
                <li className="m-3 hover:text-red-900">
                    <Link href="/list-yojis"><a>List of Yojis</a></Link>
                </li>
                <li className="m-3 hover:text-red-900">
                    <Link href="/about"><a>About</a></Link>
                </li>
            </ul>
        </>
    )
}

export default Nav
