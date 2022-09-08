import React, { ReactElement } from 'react';
import './Card.scss';

export interface CardInfo {
    icon: ReactElement;
    header: string;
    desc: string;
}

const Card = ({icon, header, desc} :CardInfo) => {
    return (
        <div className="card col l-3 m-5 c-10">
            <div className="card__container">
                <div className="icon">
                    {icon}
                </div>
                <div className="heading">{header}</div>
                <div className="desc">{desc}</div>
            </div>
        </div>
    );
};

export default Card;
