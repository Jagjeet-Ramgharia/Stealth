import { Checkbox, CircularProgress } from "@mui/material";
import DataTable from "react-data-table-component";
import { LayoutColors } from "../../Constants";
import "./tableStyle.css";
import "../CheckBox/styles.css";

function SelectionTable({ data, columns, perPage, isLoading }) {
  const tableColumns = [...columns];

  return (
    <DataTable
      fixedHeader
      columns={tableColumns}
      data={data || []}
      rows
      fixedHeaderScrollHeight="430px"
      progressPending={isLoading}
      progressComponent={<CircularProgress sx={{ color: "black" }} />}
      customStyles={{
        headRow: {
          style: {
            textTransform: "uppercase",
            borderBottom: `2px solid ${LayoutColors.borderColors}`,
            fontWeight: "800",
            fontSize: "16px",
            color: LayoutColors.HeadingTextColorL,
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
