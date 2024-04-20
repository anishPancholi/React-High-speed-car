import Card from "./Card"
import './Tours.css'

function Tours(props){
    const cardElement = props.data.map(item =>(
        
        
//         you should avoid passing key as a prop or attempting to use it within your components. If you need to pass an identifier for your components, you should use a different prop name.

// For example, if you need to identify each Card component by its id, you could pass it as a different prop, such as itemId, id, or any other suitable name:
        <Card key = {item.id}
              itemId ={item.id}
              image = {item.image} 
              name = {item.name}
              price = {item.price}
              info = {item.info}
            //   handleItemClick={()=>props.handleItemClick(item.id)}
              handleItemClick={props.handleItemClick}

        ></Card>
    ))
    console.log(cardElement)
    return (
        <div className="Tours">
            {cardElement}
        </div>
        
    )
}

export default Tours