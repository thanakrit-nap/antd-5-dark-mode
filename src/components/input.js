import { Button, Radio, Input, Switch, Modal } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import { useState } from "react";
export default function Inputs() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "200px",
        margin: "16px auto",
        gap: "16px"
      }}
    >
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
      <h1>Lorem</h1>
      <Button>Click!</Button>
      <Button type="primary">Primary!</Button>
      <Button disabled>Disabled!</Button>
      <Radio.Group>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
      <Switch />
      <Checkbox.Group>
        <Checkbox value={1}>A</Checkbox>
        <Checkbox value={2}>B</Checkbox>
        <Checkbox value={3}>C</Checkbox>
      </Checkbox.Group>
      <Input placeholder="Username" />
      <Input.Password placeholder="Password" />
    </div>
  );
}
