import React from "react";
import s from './Home.module.scss'
import {ThisDay} from "./components/ThisDay/ThisDay";
import {ThisDayInfo} from "./components/ThisDayInfo/ThisDayInfo";
import {Days} from "./components/Days/Days";


type HomeProps = {}


export const Home = (props: HomeProps) => {
    return (
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay/>
                <ThisDayInfo/>
            </div>
            <Days />
        </div>
    )
}