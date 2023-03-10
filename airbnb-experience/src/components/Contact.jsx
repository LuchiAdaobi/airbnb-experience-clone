import React from "react";

export default function contact({img,name,phone, email}){
    return(
        <section className="cat-card">
            <img src={img} alt="person" className="person" />
            <h3>{name}</h3>
            <div className="phone">
            <span> <img src="\src\assets\Star 1.png" alt="star" className="star"/> </span><span>{phone}</span> </div>
            <div className="email">
            <img src="\src\assets\Star 1.png" alt="star" className="star" /><span>{email}</span> </div>
        </section>
    )
}