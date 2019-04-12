import React from "react";

const Travels = props => (
    <figure>
        <cite>{props.country}</cite>
        
        <figcaption>
            <blockdestination>{props.destination}</blockdestination>
        </figcaption>
        <figcaption>
            <img src={props.photo} alt={props.destination}/>
        </figcaption>
        <figcaption>
            <blockdistance>{props.distance}</blockdistance>
        </figcaption>

    </figure>
);


export default Travels;