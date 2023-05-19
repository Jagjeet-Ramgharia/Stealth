import React from "react";
import "./styles.css";
import Heading from "../../Components/Heading";
import { IoIosSettings } from "react-icons/io";
import { categoriesOne, categoriesTwo } from "../../Constants";
import Categories from "../../Components/FileManagerComponents/Categories";
import SelectionTable from "../../Components/CustomTable/CustomTable";
import Input from "../../Components/InputFields/Input";
import {BiEdit} from 'react-icons/bi'
import {AiTwotoneDelete} from 'react-icons/ai'

function FileManager() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.title,
    },
    {
      name: "OWner",
      selector: (row) => <img src={row?.image} alt="owner" />,
    },
    {
      name: "Labels",
      selector: (row) => row.label || "N/A",
    },
    {
      name: "type",
      selector: (row) => row.type || "N/A",
    },
    {
      name: "Modified",
      selector: (row) => row.date || "N/A",
    },
    {
      name: "Action",
      selector: (row) => <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
        <BiEdit style={{cursor:"pointer"}} color="#a9b4d7" size={25}/>
        <AiTwotoneDelete style={{cursor:"pointer"}} color="#7d8ec2" size={25}/>
      </div>,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];
  return (
    <div className="file_manager">
      <div className="categories">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Heading text={"CATEGORIES"} size="1.5rem" fontWeight={"600"} />
          <IoIosSettings size={23} />
        </div>
        <Categories
          styles={{ marginTop: "1rem" }}
          options={categoriesOne}
          text="Category 1"
        />
        <Categories
          styles={{ marginTop: "1rem" }}
          options={categoriesTwo}
          text="Category 2"
        />
      </div>
      <div className="details_table">
        <div
          style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Input />
        </div>
        <div className="details_wrapper">
          <Heading text={"All items"} size="1.6rem" fontWeight={"600"} />
          <div style={{ height: "2rem" }} />
          <SelectionTable data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default FileManager;
