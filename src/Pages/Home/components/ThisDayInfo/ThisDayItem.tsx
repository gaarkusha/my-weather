import React from "react";
import {Item} from "./ThisDayInfo";
import s from './ThisDayInfo.module.scss'
import {IndicatorSvgSelector} from "../../../../assets/icons/Indicators/IndicatorSvgSelector";

type ThisDayItemProps = {
    item: Item
}

export const ThisDayItem = ({ item }: ThisDayItemProps) => {

    const {icon_id, name, value} = item

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <IndicatorSvgSelector id={icon_id}/>
            </div>
            <div className={s.indicator_name}>{name}</div>
            <div className={s.indicator_value}>{value}</div>
        </div>
    );
};