import { Table, Button } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { RenderCell } from "./render-cell";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const TableWrapper = ({ users, setUsers }) => {
  const columns = [
    { name: "USER", uid: "user" }, // Updated to use actual key from user data
    { name: "INTEREST", uid: "interest" },
    { name: "AGE", uid: "age" },
    { name: "EMAIL", uid: "email" },
    { name: "MOBILE", uid: "mobile" },
    { name: "DELETE", uid: "delete" }, // Add DELETE column
  ];

  const handleDelete = async (userId: any) => {
    console.log("handledelte :>>", userId);
    try {
      const response = await axios.delete(
        `http://localhost:3001/deleteUser/${userId}`
      );
      if (response.status === 200) {
        setUsers((prevUsers) =>
          prevUsers.filter((user) => user._id !== userId)
        );
        toast.success("User deleted successfully!", {
                theme: "dark",
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <>
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
                    {columnKey === "interest" ? (
                      Array.isArray(item[columnKey]) ? (
                        item[columnKey].join(", ")
                      ) : (
                        item[columnKey]
                      )
                    ) : columnKey === "delete" ? (
                      <Button
                        auto
                        color="error"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </Button>
                    ) : (
                      RenderCell({ user: item, columnKey })
                    )}
                  </Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>

          <Table.Pagination shadow noMargin align="center" rowsPerPage={10} />
        </Table>
      </Box>
      {/* <ToastContainer /> */}
    </>
  );
};
