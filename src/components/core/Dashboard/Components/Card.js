/*import './Card.css'

function Card(props){
    return <div className="card">
        {props.children}
    </div>;
}

export default Card;*/
import { useState } from "react";



function Card({id,image,info,price,name,removeTour}){
    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,100)}....`;

    function readmoreHandler(){
        setReadmore(!readmore);
    }


    return(
        <div className="card">

        <img src={image} className="image"></img>
        <div className="tour-info">
        <div className="tour-details">
          <h4 className="tour-price">₹ {price}</h4>
          <h4 className="tour-name">{name}</h4>
        </div>

        <div className="description">
            {description}
            <span className="read-more" onClick={readmoreHandler}>
                {readmore ? `Showless`:`Read More`}
            </span>
        </div>
        </div>
        <button className="btn-red" onClick={() => removeTour(id)}>
            Not Interested
        </button>
        </div>
    );
}
//readmore true h mtlb purra khulla hua h
//purra pdh lia so showless krdo
//wrna false h mtbl or pdhega to false p readmore krrdo

export default Card;
