import { Table } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
// import { columns, users } from "./data";
import { RenderCell } from "./render-cell";
import axios from "axios";
import { useState, useEffect } from "react";

export const TableWrapper = () => {
  let columns = [
    // { name: "#", uid: "_id" },
    { name: "USER", uid: "user" },
    { name: "INTEREST", uid: "interest" },
    { name: "AGE", uid: "age" },
    { name: "EMAIL", uid: "email" },
    { name: "MOBILE", uid: "mobile" },
  ];

  // let [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/users");
  //       let data = response.data.data;
  //       setData(data);
  //     } catch (err) {
  //       console.error("fetchData err :>>", err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Box
      css={{
        "& .nextui-table-container": {
          boxShadow: "none",
        },
      }}
    >
      {/* <Table
        aria-label="Example table with custom cells"
        css={{
          height: "auto",
          minWidth: "100%",
          boxShadow: "none",
          width: "100%",
          px: 0,
        }}
        // selectionMode="multiple"
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column
              key={column.uid}
              hideHeader={column.uid === "actions"}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </Table.Column>
          )}
        </Table.Header>

        <Table.Body items={data}>
          {(item: any) => (
            <Table.Row  key={item.id || item._id || item.email}>
              {(columnKey: any) => (
                <Table.Cell>
                  {columnKey === "interest"
                    ? item[columnKey].join(", ")
                    : RenderCell({ user: item, columnKey: columnKey })}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>

        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={10}
          onPageChange={(page) => console.log({ page })}
        />
      </Table> */}
    </Box>
  );
};
