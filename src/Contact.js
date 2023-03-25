import axios from "axios";
import { useState, useRef } from "react";


function Contact() {
    const [phone, setPhone] = useState("");
    const [mail, setMail] = useState("");
    const [add, setAdd] = useState("");
    const [ans, setAns] = useState("");

    const hPhone = (event) => { setPhone(event.target.value); }
    const hMail = (event) => { setMail(event.target.value); }
    const hAdd = (event) => { setAdd(event.target.value); }

    const confirm = (event) => {
        event.preventDefault();
        let urladd = "http://127.0.0.1:3309/confirm";
        axios.post(urladd, { phone,mail,add })
        .then(res => {
            if (res.data.insertedId){
                alert("order confirmed");
                setAns("YOUR PIZZA WILL BE DELIVERED SOON")
            }
            
         })
        .catch(err => console.log(err));
    }

    return (<>
       <div className="card-container">
            <h1>
     CONTACT INFORMATION
            </h1>
            <br/>
            <form onSubmit={confirm} >
                <input type="number" placeholder="Phone Number" value={phone} onChange={hPhone} />
                <br /><br />
                <input type="email" placeholder="EmailId"value={mail} onChange={hMail} />
                <br /><br />
                <textarea placeholder="Address" row={15} cols={25} value={add} onChange={hAdd}></textarea>
                <br /><br />
                <input className="btn" type="submit" value="Confirm Order"/>

            </form>
            <h1>{ ans}</h1>
            </div>
    </>);
}
export default Contact;