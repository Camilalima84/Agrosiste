import React from "react";
import { CardDashboard, CardImage } from './style';

export const Card = (props) => {
    const { image, title, color, onClick } = props;

    return (
        <CardDashboard color={color} onClick={onClick}>
            <CardImage src={image} alt={title} />
            <label>{title}</label>
        </CardDashboard>
    )
}