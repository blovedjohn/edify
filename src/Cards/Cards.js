function Cards(props){
   return(
       <div className="cards">
            <img src={props.image} className="textbook1-image"/>
            <div className="contacts">
            <h3>{props.name}</h3>
            {props.details}
            <p>{props.rating}</p>
      </div>
</div>
   )

}
export default Cards;