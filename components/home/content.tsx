import React, { useState, useEffect } from "react";
import { Text } from "@nextui-org/react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";
import { TableWrapper } from "../table/table";
import { AddUser } from "./../accounts/add-user";
import axios from "axios";

export const Content = () => {
  const [users, setUsers] = useState([]);

  let columns = [
    // { name: "#", uid: "_id" },
    { name: "USER", uid: "user" },
    { name: "INTEREST", uid: "interest" },
    { name: "AGE", uid: "age" },
    { name: "EMAIL", uid: "email" },
    { name: "MOBILE", uid: "mobile" },
  ];

  let [data, setData] = useState([]);

  useEffect(() => {
    console.log("useEffect");
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

    fetchData();
  }, []);

  // Function to add a user dynamically
  const handleUserAdded = (newUser: any) => {
    setUsers((prevUsers: any) => [...prevUsers, newUser]); // Append new user
  };

  return (
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
            <AddUser onUserAdded={handleUserAdded} />
          </Flex>
        </Flex>
        <TableWrapper users={users} />
      </Flex>
    </Box>
  );
};
