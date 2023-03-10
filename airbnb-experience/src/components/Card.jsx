import React from "react";

export default function Card(props ){
    let badgeText
    if(props.data.openSpots === 0){
        badgeText = 'Sold out'
    }else if(props.data.location === 'Online'){
        badgeText = 'Online'
    }else{
        badgeText = ''
    }
    return(
        <section className="card">
            <img src={props.data.coverImg} alt="image of renter" className="card-image"/>
            {badgeText && <p className="badge">{badgeText}</p>}
            <div className="rating">
                <img src="\src\assets\Star 1.png" alt="star" className="star"/>
                <p>{props.data.stats.rating} </p>
                <p className="gray"> {props.data.stats.reviewCount} <span> . </span> {props.data.location}</p>
            </div>
            <p className="title">{props.data.title}
            </p>
            <p><span className="bold">{props.data.price}
                </span> / person</p>
        </section>
    )
}