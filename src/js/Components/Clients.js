import React from "react";
import database from "../../database.json"


const Clients = () => {
    const clients = database.clients.map(item => (
        <a href={item.url} target="_blank"> <img key={item.id} src={item.image} alt={item.title}/></a>
    ))
    return(
        <div className="clients">
            <div className="clients-images container">
                {clients}
            </div>
        </div>
    )
}

export default Clients;