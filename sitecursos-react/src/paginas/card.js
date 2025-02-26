import React from "react";
import { Link } from "react-router-dom";

function Card({ titulo, icone, link}) {
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Link to={link} style={linkStyle}>
      <div className="card p-1" style={{ boxShadow:'0px 5px 15px #000000', width: "350px", borderRadius:'1px', border:'none', height:'120px', display: 'flex', alignItems: 'center', justifyContent:'center', backgroundColor:'#E7ECEF'}}>
        <div className="row d-flex align-items-center" style={{ width: "100%" }}>
          <div className="col-4 d-flex justify-content-center px-3">
          <div className="card-body">
            {icone}
          </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="card-body">
            <h5 className="card-title" style={{ color: '#274C77', backgroundColor: '#E7ECEF' }}>
              {titulo}
            </h5>
            </div>
          </div>
        </div>
        </div>
    </Link>
  );
}

export default Card;