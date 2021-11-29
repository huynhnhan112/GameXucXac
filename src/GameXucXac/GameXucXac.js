import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import './GameXucXac.css'

export default class GameXucXac extends Component {
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-center mt-5 display-4">Game Xúc Xắc</h3>
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
