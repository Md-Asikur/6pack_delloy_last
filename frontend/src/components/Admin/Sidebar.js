import React from "react";
import "./sidebar.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddIcon from "@mui/icons-material/Add";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import RateReviewIcon from "@mui/icons-material/RateReview";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Ecommerce" />
      </Link>
      <Link to="https://asikurrahaman-ecom.onrender.com/admin/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Products">
            <Link to="https://asikurrahaman-ecom.onrender.com/admin/products">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="https://asikurrahaman-ecom.onrender.com/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="https://asikurrahaman-ecom.onrender.com/admin/orders">
        <p>
          <ListAltIcon />
          Orders
        </p>
      </Link>
      <Link to="https://asikurrahaman-ecom.onrender.com/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="https://asikurrahaman-ecom.onrender.com/admin/reviews">
        <p>
          <RateReviewIcon />
          Reviews
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
