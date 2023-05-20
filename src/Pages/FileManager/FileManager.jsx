import React, { useEffect, useState } from "react";
import "./styles.css";
import Heading from "../../Components/Heading";
import { IoIosSettings } from "react-icons/io";
import Categories from "../../Components/FileManagerComponents/Categories";
import SelectionTable from "../../Components/CustomTable/CustomTable";
import Input from "../../Components/InputFields/Input";
import { BiEdit } from "react-icons/bi";
import { AiTwotoneDelete } from "react-icons/ai";
import DeleteItem from "../../Components/FileManagerComponents/DeleteItemComponent/DeleteItem";
import useFetchData from "../../CustomHooks/UseFetchData";
import { apiRoutes } from "../../Constants/apiRoutes";
import NameContainer from "../../Components/FileManagerComponents/NameContainer";
import sampleImage from "../../Assets/Images/sample.png";
import { LayoutColors } from "../../Constants";
import moment from "moment";
import SingleCheckBox from "../../Components/CheckBox/SingleCheckbox";
import CustomWidthTooltip from "../../Components/ToolTip/ToolTip";

function FileManager() {
  // ------------------- React States ---------------------------------------------
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(null);
  const [data, setData] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [delayedSearch, setDelayedSearch] = useState(null);
  const { data: files, loading, error } = useFetchData(apiRoutes.files);
  const { data: categories, loading: isLoading } = useFetchData(
    apiRoutes.categories
  );
  const [categoriesData, setCategoriesData] = useState([]);

  // ---------------------- Set Categories Data ------------------------------------

  useEffect(() => {
    if (categories?.length > 0) {
      const data = categories?.map((category) => {
        delete category?.checked;
        const updatedLabels = category?.Labels?.map((label) => {
          return {
            ...label,
            checked: false,
          };
        });
        return { ...category, Labels: updatedLabels };
      });
      setCategoriesData(data);
    }
  }, [categories]);

  // --------------------------------------------------------------------------------

  // ---------------------------------------------------------------------------------

  // -------------------- Search functionality ----------------------------------------
  useEffect(() => {
    if (search) {
      if (delayedSearch) {
        delayedSearch.cancel();
      }
      const debounceSearch = setTimeout(async () => {
        // Logic for search
        const filteredData = files.filter((element) =>
          element.Name.toLowerCase().includes(search.toLowerCase())
        );
        setData(filteredData);
      }, 500);
      setDelayedSearch({
        cancel: () => clearTimeout(debounceSearch),
      });
    } else {
      setData(files);
    }
  }, [search, files]);
  // ----------------------------------------------------------------------------------

  // -------------------- Handle Select All ---------------------------------------------
  function handleSelectAll(e) {
    if (e?.target?.checked) {
      const makeSelectAllData = data.map((el) => {
        return {
          ...el,
          checked: true,
        };
      });
      setData(makeSelectAllData);
      setSelectAll(true);
    } else {
      const makeDeselectAllData = data.map((el) => {
        return {
          ...el,
          checked: false,
        };
      });
      setData(makeDeselectAllData);
      setSelectAll(false);
    }
  }
  // -------------------- END -----------------------------------------------------------

  // -------------------- Handle Select Row ---------------------------------------------
  function handleSelectRow(e, row) {
    if (e?.target?.checked) {
      const selectedData = data.map((el) => {
        if (el === row) {
          return {
            ...el,
            checked: true,
          };
        }
        return el;
      });
      setData(selectedData);
      setSelectAll(false);
    } else {
      const selectedData = data.map((el) => {
        if (el === row) {
          return {
            ...el,
            checked: false,
          };
        }
        return el;
      });
      setData(selectedData);
      setSelectAll(false);
    }
  }
  // -------------------- END -----------------------------------------------------------

  // -------------------- Handle Select Categories --------------------------------------
  function handleSelectCategories(e, category) {
    if (e?.target?.checked) {
      const selectedData = categoriesData.map((el) => {
        if (el?.Labels?.includes(category)) {
          const updatedLabel = el?.Labels?.map((label) => {
            if (label === category) {
              return {
                ...label,
                checked: true,
              };
            } else {
              return {
                ...label,
                checked: false,
              };
            }
          });
          return {
            ...el,
            Labels: updatedLabel,
          };
        }
        return el;
      });
      setCategoriesData(selectedData);
    } else {
      const selectedData = categoriesData.map((el) => {
        if (el?.Labels?.includes(category)) {
          const updatedLabel = el?.Labels?.map((label) => {
            if (label === category) {
              return {
                ...label,
                checked: false,
              };
            } else {
              return {
                ...label,
                checked: false,
              };
            }
          });
          return {
            ...el,
            Labels: updatedLabel,
          };
        }
        return el;
      });
      setCategoriesData(selectedData);
    }
  }
  // -------------------- END -----------------------------------------------------------

  // ----------------------------- Delete Item ------------------------------------------
  const deleteItem = (item) => {
    const items = [...data];
    if (items.includes(item)) {
      items.splice(items.indexOf(item), 1);
    }
    setData(items);
  };
  // ------------------------------------------------------------------------------------

  // ----------------------------- Columns ----------------------------------------------
  const columns = [
    {
      name: (
        <SingleCheckBox
          onchange={(e) => handleSelectAll(e)}
          checked={selectAll}
        />
      ),
      reorder: true,
      sortable: false,
      maxWidth: "6%",
      minWidth: "6%",
      selector: (row) => {
        return (
          <SingleCheckBox
            checked={row?.checked}
            onchange={(e) => handleSelectRow(e, row)}
          />
        );
      },
    },
    {
      name: "Name",
      minWidth: "18%",
      selector: (row) => <NameContainer name={row?.Name} src={sampleImage} />,
    },
    {
      name: "OWner",
      center: true,
      selector: (row) => (
        <img
          style={{ height: "40px", width: "40px", borderRadius: "50%" }}
          src={row?.Owner}
          alt="owner"
        />
      ),
    },
    {
      name: "Labels",
      selector: (row) => (
        <Heading
          text={row.Label || "N/A"}
          color={LayoutColors.themeTableText}
          textTransform={"uppercase"}
        />
      ),
    },
    {
      name: "type",
      selector: (row) => (
        <Heading
          text={row.Type || "N/A"}
          color={LayoutColors.themeTableText}
          textTransform={"uppercase"}
        />
      ),
    },
    {
      name: "Modified",
      selector: (row) => (
        <Heading
          text={moment(row?.ModifietAt).format("Do MMM 'YY") || "N/A"}
          color={LayoutColors.themeTableText}
          textTransform={"uppercase"}
        />
      ),
    },
    {
      name: "Action",
      selector: (row) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            position: "relative",
          }}
        >
          <BiEdit style={{ cursor: "pointer" }} color="#a9b4d7" size={25} />
          <CustomWidthTooltip
            className=""
            disableHoverListener={false}
            title={<DeleteItem handleDelete={() => deleteItem(row)} />}
            arrow
            placement="top"
            width={""}
          >
            <div>
              <AiTwotoneDelete
                style={{ cursor: "pointer", marginTop: "3px" }}
                color="#7d8ec2"
                size={25}
              />
            </div>
          </CustomWidthTooltip>
        </div>
      ),
    },
  ];
  // -------------------------------------------------------------------------------------

  return (
    <div className="file_manager">
      <div className="categories">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <Heading text={"CATEGORIES"} size="1.5rem" fontWeight={"600"} />
          <IoIosSettings size={23} />
        </div>
        {categoriesData?.length > 0 &&
          categoriesData?.map((el) => {
            if (el?.Labels?.length > 0) {
              return (
                <Categories
                  key={el?.id}
                  styles={{ marginTop: "1rem" }}
                  options={el?.Labels}
                  text={el?.Name}
                  checked={el?.Labels?.map((label) => label?.checked)}
                  handleOnClick={(e, cat) => handleSelectCategories(e, cat)}
                  isLoading={isLoading}
                />
              );
            }
          })}
      </div>
      <div className="details_table">
        <div className="table_search">
          <Input
            value={search}
            placeholder="Search by name..."
            onchange={(e) => setSearch(e?.target?.value)}
          />
        </div>
        <div className="details_wrapper">
          <Heading text={"All items"} size="1.6rem" fontWeight={"600"} />
          <div style={{ height: "2rem" }} />
          <SelectionTable
            data={data || []}
            columns={columns}
            perPage={10}
            isLoading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default FileManager;
