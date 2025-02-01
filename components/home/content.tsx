import React, { useState, useEffect } from "react";
import { Text } from "@nextui-org/react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { TableWrapper } from "../table/table";
import { AddUser } from "./../accounts/add-user";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

export const Content = () => {
  const [users, setUsers] = useState([]);

  // Fetch users on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      let data = response.data.data;
      console.log("users :>>", data);
      setUsers(data);
    } catch (err) {
      console.error("fetchData err :>>", err);
    }
  };

  // Function to add a new user dynamically
  const handleUserAdded = (newUser: any) => {
    setUsers((prevUsers: any) => [...prevUsers, newUser]); // Append new user
  };

  return (
    <>
      <Box css={{ overflow: "hidden", height: "100%" }}>
        <Flex
          direction={"column"}
          justify={"center"}
          css={{
            width: "100%",
            py: "$10",
            px: "$10",
            mt: "$8",
            "@sm": { px: "$20" },
          }}
        >
          <Flex justify={"between"} wrap={"wrap"}>
            <Text
              h3
              css={{
                textAlign: "center",
                "@lg": { textAlign: "inherit" },
              }}
            >
              Latest Users
            </Text>
            <Flex direction={"row"} css={{ gap: "$6" }} wrap={"wrap"}>
              <AddUser onUserAdded={fetchData} />
            </Flex>
          </Flex>
          <TableWrapper users={users} setUsers={setUsers} />
        </Flex>
      </Box>
      <ToastContainer />
    </>
  );
};
