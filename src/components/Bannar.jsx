import React from "react";
import img from "./img/luxe.jpg"; 

const Bannar = () => {
    return (
        <div className="row" style={{marginBottom:"4rem"}}>
            <div className="col-md-12" style={{ position: "relative", overflow: "hidden" }}>
                <img src={img} alt="Banner" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
                <div className="col-md-6" style={{ display: "flex", flexDirection: "column", justifyContent: "center", position: "absolute", top: 0, bottom: 0, left: 0, right: 0,}}>
                    <div style={{ margin: "0 auto", padding: "5rem" }}>
                        <h1 style={{ color: "white", textTransform: "uppercase", fontSize: "80px",marginBottom:"2rem"}}>luxe watches</h1>
                        <p style={{ color: "white", fontSize: "18px" }}>Luxe Watches specialise in luxury, classic, and contemporary luxury watches from brands such as Rolex, Cartier, Audemars Piguet, and Patek Philippe. They needed an e-commerce site that showed off their products to full effect while offering clients the same luxury experience online as they’d expect in-store.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
