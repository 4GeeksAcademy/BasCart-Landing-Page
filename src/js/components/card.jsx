import React from "react";

export const Card = () =>{
    return(
        <div className="card text-center" style={{ width : "16rem" }}>
            <img src="https://images.pexels.com/photos/922610/pexels-photo-922610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid reprehenderit dignissimos eligendi esse provident illum fugit et molestiae a sit aspernatur, fugiat in, quia harum necessitatibus repellendus dolores saepe aut.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}