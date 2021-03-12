import React from 'react';
import { Modal, Button, Form, Input } from 'antd';

const ModalSession = () => {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [modalText, setModalText] = React.useState('Content of the modal');

  const showModal = () => {
    setVisible(true);
  };
  const onFinish = (values: OnFinishValue) => {
    console.log('values:', values);
    setVisible(false);
  };

  const handleOk = () => {
    setModalText('Registration in progress...');
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setVisible(false);
  };

  interface OnFinishValue {
    email: string;
    password: string;
  }

  interface OnFinishFailed {
    errorFields: Array<object>;
    outOfDate: boolean;
    values: OnFinishValue;
  }

  const onFinishFailed = (errorInfo: OnFinishFailed) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Modal
        title="Choose your session"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, type: 'string', message: 'Please input the title!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      <Button type="primary" onClick={showModal}>
        Register to a session
      </Button>
    </>
  );
};

export default ModalSession;
