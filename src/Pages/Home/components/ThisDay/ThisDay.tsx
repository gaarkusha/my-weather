import React from "react";
import s from './ThisDay.module.scss'
import {GlobalSvgSelector} from "../../../../assets/icons/global/GlobalSvgSelector";

type ThisDayProps = {}

export const ThisDay = (props: ThisDayProps) => {
    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
                <div className={s.top_block_wrapper}>
                    <div className={s.this_temp}>20°</div>
                    <div className={s.this_day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id='sun'/>
            </div>
            <div className={s.bottom_block}>
                <div className={s.this_time}>
                    Время: <span>21:00</span>
                </div>
                <div className={s.this_city}>
                    Город: <span>Минск</span>
                </div>
            </div>
        </div>
    )
}
