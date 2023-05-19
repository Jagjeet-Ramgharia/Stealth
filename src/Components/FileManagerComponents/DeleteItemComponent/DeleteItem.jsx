import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { BsFillCheckCircleFill, BsFillXCircleFill } from "react-icons/bs";
import './style.css'

const DeleteItem = () => {
  return (
        <div className="delete_item_component">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f2f2f7",
            width: "100%",
            gap: "6px",
            padding:"3px",
            borderRadius:"10px"
          }}
        >
          <AiTwotoneDelete
            style={{ cursor: "pointer" }}
            color="#7d8ec2"
            size={15}
          />
          <span style={{ color: "#7d8ec2" }}>Remove</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding:"8px",
            background:"#ffffff",
            overflow:"hidden",
          }}
        >
          <span style={{ color: "#7d8ec2" }}>Are you sure</span>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <BsFillXCircleFill
              color="#f43d5e"
              style={{ cursor: "pointer" }}
              size={15}
            />
            <BsFillCheckCircleFill
              color="#59d1a6"
              style={{ cursor: "pointer" }}
              size={15}
            />
          </div>
        </div>
        <div className="arrows">
        <div className="size down"></div>
        <div className="size up"></div>
        <div className="size left"></div>
        <div className="size right"></div>
        </div>
      </div>
  )
}

export default DeleteItem