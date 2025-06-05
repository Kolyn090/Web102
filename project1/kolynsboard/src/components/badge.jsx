import React from "react"

function Badge(props) {
    return (
        <div style={{margin: 20}}>
            <img className="badge-image" src={props.img_path}></img>
            <h3 style={{height: 60, overflow: 'hidden'}}>{props.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0px', height: 60}}>
                <h4 style={{margin: 0, whiteSpace: 'nowrap'}}>Learning difficulty</h4>
                <h3 style={{margin: 0}}>{props.hardness}</h3>
            </div>
            <p style={{height: 150, overflow: 'hidden'}}>{props.description}</p>
            <a href={props.link} class="button-link">Go there</a>
        </div>
    )
}

export default Badge
