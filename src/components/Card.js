import React, { useState } from 'react';
import './Card.css'

function Card(props){

   const [showFullText, setShowFullText] = useState(false)

   function handleContentChange(){
    setShowFullText(showFullText => !showFullText)
   }

   const maxLength = 175

    return(
        <div className='Card'>
            <img src={props.image} alt={`${props.name} city image`}></img>
            <div className='Card-Content'>
                <h4 className='Card-Content-price'>$ {props.price}</h4>
                <h4 className='Card-Content-name'>{props.name}</h4>
                
                <div className='Card-Content-info'>
                    {
                        showFullText ?(
                        <div>
                                {props.info}
                                <button onClick={handleContentChange}className='Card-Content-info-button'>Show Less</button>
                        </div>
                        
                        ):
                        (
                            <div>
                                    {/* {props.info.slice(0,maxlength)} */}
                                    {/* for empty info it also won't show "...." */}
                                    {props.info.length > maxLength && (
                                        <>
                                        {props.info.slice(0, maxLength)}
                                        {"...."}
                                        </>
                                    )}
                                    {maxLength < props.info.length && <button onClick={handleContentChange}className='Card-Content-info-button'>Read More</button>}
                            </div>
                        )
                        
                    
                    }
                </div>

            </div>
            {/* <button className='Card-button' onClick={props.handleItemClick}>Not Interested</button> */}
            <button className='Card-button' onClick={()=>{props.handleItemClick(props.itemId)}}>Not Interested</button>
        </div>
    )
  
}

export default Card