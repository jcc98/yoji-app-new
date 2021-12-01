import React from 'react'
import KanjiGameOptions from '../components/KanjiGameOptions'
import Nav from '../components/Nav'
import {yojiAll} from "../public/json/yojiAll"

const KanjiGame = () => {
    // const yojiFive = yojiAll.filter((item) => item.grade === "5")
    return (
        <div>
            <Nav/>
            <KanjiGameOptions/>

        </div>
    )
}

export default KanjiGame
