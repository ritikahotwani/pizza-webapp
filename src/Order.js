import { useState, useRef } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Order() {
    const nav=useNavigate();

    const [name, setName] = useState("");
    const [size, setSize] = useState("");
    const [mush, setMush] = useState(false);
    const [cheese, setCheese] = useState(false);
    const [tom, setTom] = useState(false);
    const [quantity, setQuantity] = useState("");
    const hName = (event) => { setName(event.target.value); }
    const hSize = (event) => { setSize(event.target.value); }
    const hMush = (event) => { setMush(!mush); }
    const hTom = (event) => { setTom(!tom); }
    const hCheese = (event) => { setCheese(!cheese); }
    const hQuantity = (event) => { setQuantity(event.target.value); }
    const rName = useRef();

    const place = (event) => {
        event.preventDefault();
        let toppings = "";
        if (mush) {
            toppings +="mushrooms ";
        }if (cheese) {
            toppings +=" cheese ";
        }
        if (tom) {
            toppings  +=" tomatoes ";

        }
        let msg=name+" "+toppings+" "+size+" "+quantity
        console.log(msg);
        // alert("order placed");
        let urladd = "http://127.0.0.1:3309/place";
        axios.post(urladd, { name, toppings, size, quantity })
            .then(res => {
                if (res.data.insertedId){
                    nav("/contact",{state:{res:msg}});                }
                setName("");
                setCheese("");
                setMush("");
                setQuantity("");
                setSize("");
                setTom("");
                rName.current.focus();
             })
            .catch(err => console.log(err));
    }
    return (<>
     
            <div className="card-container">
            <h1>PIZZA APP</h1>
            <h2>Order Here!!</h2>
            <form onSubmit={place}>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={hName} ref={rName} />
                <br /><br />
                <h2>Size</h2>
                <input type="radio" name="s" value="small" onChange={hSize}/>Small
                <input type="radio" name="s" value="medium" onChange={hSize}/>Medium
                <input type="radio" name="s" value="large" onChange={hSize}/>Large
                <br /><br />
                <h2>Choose your favourite Toppings!</h2>
                <input type="checkbox" value="mushrooms" onChange={hMush} />Mushrooms
               <br/> <input type="checkbox" value="cheese" onChange={hCheese} />Cheese
              <br/>  <input type="checkbox" value="tom" onChange={hTom} />Tomatoes
                <br /><br />
                <input type="number" placeholder="Quantity?" value={quantity} onChange={hQuantity} />
                <br /><br />
                <input className="btn" type="submit" value="Order"/>
                </form>
                </div>

    </>);
}

export default Order;