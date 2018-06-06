import React, { Fragment } from "react";

export default ({ match, id, name, description, image, born, deceased }) => (
    <Fragment>
        <img src={image} alt={name}  style={{maxWidth: 300}}/>

        <h1>{name}</h1>

        <h3>
            {born} &mdash; {deceased}
        </h3>

        <p>{description}</p>

        <p>
            the id is:
            {id}
        </p>
    </Fragment>
);
