import { Button, Divider, Input, Modal, Text } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddUser = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const [formData, setFormData] = useState({
    userName: "",
    mobile: "",
    age: "",
    email: "",
    interest: "",
  });

  const handleChange = (e: any) => {
    console.log("form e :>>", e.target.name, e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const closeHandler = () => {
    addUser(formData);
    setVisible(false);
    console.log("closed");
  };

  async function addUser(userDetails: any) {
    console.log("userDetails :>>", userDetails);
    try {
      const response = await axios.post(
        "http://localhost:3001/addUser",
        userDetails
      );
      toast.success("User added successfully!", {
        theme: "dark",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log("User added successfully:", response.data);
    } catch (error) {
      console.error("Error while adding user:", error);
    }
  }

  return (
    <div>
      <Button auto onClick={handler}>
        Add User
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        width="600px"
        open={visible}
        // onClose={closeHandler}
      >
        <Modal.Header css={{ justifyContent: "start" }}>
          <Text id="modal-title" h4>
            Add new user
          </Text>
        </Modal.Header>
        <Divider css={{ my: "$5" }} />
        <Modal.Body css={{ py: "$10" }}>
          <Flex
            direction={"column"}
            css={{
              flexWrap: "wrap",
              gap: "$8",
              "@lg": { flexWrap: "nowrap", gap: "$12" },
            }}
          >
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="User Name"
                bordered
                clearable
                fullWidth
                size="lg"
                placeholder="User Name"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
              />
              <Input
                label="Mobile"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Flex>

            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Age"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <Input
                label="Email"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Flex>
            <Flex
              css={{
                gap: "$10",
                flexWrap: "wrap",
                "@lg": { flexWrap: "nowrap" },
              }}
            >
              <Input
                label="Interests"
                clearable
                bordered
                fullWidth
                size="lg"
                placeholder="Interests (comma separated)"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
              />
            </Flex>
          </Flex>
        </Modal.Body>
        <Divider css={{ my: "$5" }} />
        <Modal.Footer>
          <Button auto onPress={closeHandler}>
            Add User
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};
