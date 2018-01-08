import React from 'react';


const newsItems=(props)=>{

    return(
        <div className="newsitem" key={props.item.id}>
                <h3>{props.item.title}</h3>
                    <div>
                          {props.item.feed}
                    </div>
        </div>
    )
} 

export default newsItems;