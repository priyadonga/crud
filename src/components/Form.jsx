import React, { useState } from "react";

const Form = () => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [number, setnumber] = useState("");
    const [email, setemail] = useState("");
    const [birthday, setbirthday] = useState("");
    const [pass, setpass] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const submit = () => {
        const data = {
            fname,
            lname,
            number,
            birthday,
            email,
            pass
        };
        console.log(data);
        setSubmitted(true);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto",padding: "20px", border: "1px solid #ccc", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Enter Your Details</h1>
            <input type="text" placeholder="First Name" style={{ width: "100%", marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} onChange={(e) => setfname(e.target.value)} />
            <input type="text" placeholder="Last Name" style={{ width: "100%", marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} onChange={(e) => setlname(e.target.value)} />
            <input type="number" placeholder="Phone Number" style={{ width: "100%", marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} onChange={(e) => setnumber(e.target.value)} />
            <input type="date" placeholder="Date of Birth" style={{ width: "100%", marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} onChange={(e) => setbirthday(e.target.value)} />
            <input type="email" placeholder="Email" style={{ width: "100%", marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} onChange={(e) => setemail(e.target.value)} />
            <input type="password" placeholder="Password" style={{ width: "100%", marginBottom: "10px", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }} onChange={(e) => setpass(e.target.value)} />

            <button style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={submit}>Submit</button>

            {submitted && (
                <div style={{ marginTop: "20px", backgroundColor: "#FAFAFA", padding: "20px",borderRadius: "5px",border: "1px solid #ccc", }}>
                    <h2>Submitted Data :</h2>
                    <p>First Name :- {fname}</p>
                    <p>Last Name :- {lname}</p>
                    <p>Phone Number :- {number}</p>
                    <p>Date of Birth :- {birthday}</p>
                    <p>Email :- {email}</p>
                    <p>Password :- {pass}</p>
                </div>
            )}
        </div>
    );
};

export default Form;
