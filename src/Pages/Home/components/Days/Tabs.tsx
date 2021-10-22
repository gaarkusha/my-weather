import React from "react";
import s from './Days.module.scss'

type TabsProps = {

}

export const Tabs = (props: TabsProps) => {

    const tabs = [
        {
            value: 'На неделю',
        },
        {
            value: 'На 10 дней',
        },
        {
            value: 'На месяц',
        },
    ];

    return(
        <div className={s.tabs}>
            <div className={s.wrapper}>
                {tabs.map(tab => (
                    <div className={s.tab + ' ' + s.active} key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    )
}