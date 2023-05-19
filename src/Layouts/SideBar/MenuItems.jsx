import React from "react";
import Tab from "./Tab";
import FileManagerIcon from '../../Assets/Images/fileManager.ico'

function MenuItems() {
  const Tabs = [{ id: 1, label: "File Manager", link: "", icon:FileManagerIcon }];
  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center", paddingTop:"1rem"}}>
      {Tabs.map((el) => {
        return <Tab key={el.id} text={el.label} icon={el.icon} />;
      })}
    </div>
  );
}

export default MenuItems;
