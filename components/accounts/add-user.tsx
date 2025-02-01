import { Button, Divider, Input, Modal, Text } from "@nextui-org/react";
import React, { useState } from "react";
import { Flex } from "../styles/flex";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddUser = ({ onUserAdded }) => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const [formData, setFormData] = useState({
    user: "",
    mobile: "",
    age: "",
    email: "",
    interest: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Simple form validation
    if (
      !formData.user ||
      !formData.mobile ||
      !formData.age ||
      !formData.email ||
      !formData.interest
    ) {
      toast.error("Please fill in all the fields", {
        theme: "dark",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    let addUserStatus = await addUser(formData);
    if (addUserStatus) {
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

      // Call onUserAdded to notify parent component
      onUserAdded(formData);

      setVisible(false);
    } else {
      toast.error("Error adding user!", {
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
  };

  async function addUser(userDetails: any) {
    try {
      const response = await axios.post(
        "http://localhost:3001/addUser",
        userDetails
      );
      return true;
    } catch (error) {
      console.error("Error while adding user:", error);
      return false;
    }
  }

  return (
    <div>
      <Button auto onClick={() => setVisible(true)}>
        Add User
      </Button>
      <Modal open={visible} width="600px">
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
                name="user"
                value={formData.user}
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
          <Button auto onPress={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};
