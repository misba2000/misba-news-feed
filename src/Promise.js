import "./PromiseModule.css"


function Promise(props) {
    console.log("props", props);
return (
    <div >
     <img className="promise" src={props.img} alt="" />
       <p className="p1">{props.name}</p>
        <p className="p2">{props.birthday}</p>
     
        <p className="p3">{props.occupation}</p>
         
    </div>
);
}

export default Promise;