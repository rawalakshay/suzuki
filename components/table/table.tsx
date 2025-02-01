import { Table } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { RenderCell } from "./render-cell";

export const TableWrapper = ({ users, setUsers }) => {
  const columns = [
    { name: "USER", uid: "user" }, // Updated to use actual key from user data
    { name: "INTEREST", uid: "interest" },
    { name: "AGE", uid: "age" },
    { name: "EMAIL", uid: "email" },
    { name: "MOBILE", uid: "mobile" },
  ];

  return (
    <Box css={{ "& .nextui-table-container": { boxShadow: "none" } }}>
      <Table
        aria-label="User table"
        css={{ height: "auto", minWidth: "100%", width: "100%", px: 0 }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.uid} align="start">
              {column.name}
            </Table.Column>
          )}
        </Table.Header>

        <Table.Body items={users}>
          {(item) => (
            <Table.Row key={item.id || item._id || item.email}>
              {(columnKey) => (
                <Table.Cell>
                  {columnKey === "interest"
                    ? Array.isArray(item[columnKey])
                      ? item[columnKey].join(", ")
                      : item[columnKey]
                    : RenderCell({ user: item, columnKey })}
                </Table.Cell>
              )}
            </Table.Row>
          )}
        </Table.Body>

        <Table.Pagination shadow noMargin align="center" rowsPerPage={10} />
      </Table>
    </Box>
  );
};
