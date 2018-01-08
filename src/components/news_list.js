import React from 'react';

import NewsItems from './news_list_items';


const NewsList = (props) =>{

    const items = props.news.map((item)=>{
        return(
            <NewsItems key ={item.id} item={item}/>
        )
    })
    return(
       <div>
           {items}
       </div>
    )
        
}
export default NewsList;

