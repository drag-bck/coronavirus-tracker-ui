import React from "react";
import { Table, Tag, Space } from "antd";
import "./DataTable.scss";

const columns = [
  {
    title: "State/UT",
    dataIndex: "stateName",
    key: "stateName",
  },
  {
    title: "Confirmed",
    dataIndex: "confirmed",
    key: "confirmed",
  },
  {
    title: "Active",
    dataIndex: "active",
    key: "active",
  },
  {
    title: "Recovered",
    dataIndex: "recovered",
    key: "recovered",
  },
  {
    title: "Deceased",
    dataIndex: "deceased",
    key: "deceased",
  },
];

const DataTable = (props) => {
  return (
    <div className="table">
      <Table columns={columns} dataSource={props.data} pagination={false} />
    </div>
  );
};

export default DataTable;
