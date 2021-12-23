import "./PromiseModule.css"


function Promise(props) {
    console.log("props", props);
return (
    <div>
        <div>
            <h3 className="heading">BREAKING BAD CHARACTER</h3>
        </div>
    <div className="promise">
     <img className="img1" src={props.img} alt="" />
       <p className="p1">{props.name}</p>
        <p className="p2">{props.birthday}</p>
     
        <p className="p3">{props.occupation}</p>
         
    </div>
    </div>
);
}

export default Promise;