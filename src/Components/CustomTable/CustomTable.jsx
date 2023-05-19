import { CircularProgress } from "@mui/material";
import DataTable from "react-data-table-component";
import { LayoutColors } from "../../Constants";
import SingleCheckBox from "../CheckBox/SingleCheckbox";
import './tableStyle.css'

function SelectionTable({ data, columns }) {
  return (
    <DataTable
      fixedHeader
      columns={columns}
      data={data}
      selectableRows
      fixedHeaderScrollHeight="430px"
      selectableRowsComponent={SingleCheckBox}
      progressComponent={<CircularProgress sx={{ color: "black" }} />}
      customStyles={{
        headRow: {
          style: {
            textTransform: "uppercase",
            borderBottom: `2px solid ${LayoutColors.borderColors}`,
            fontWeight:"800",
            fontSize:"16px",
            color:LayoutColors.HeadingTextColorL
          },
        },
        progress: {
          style: {
            display: "flex",
            height: "100%",
            minHeight: "150px",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor: "transparent",
          },
        },

        noData: {
          style: {
            display: "flex",
            justifyContent: "space-around",
            padding: "10px",
            backgroundColor: "transparent",
          },
        },
      }}
    />
  );
}

export default SelectionTable;
