import React from 'react';
import { Form, Input, Button, Select } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
  interface OnFinishValue {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role: string;
  }

  interface OnFinishFailed {
    errorFields: Array<object>;
    outOfDate: boolean;
    values: OnFinishValue;
  }

  const onFinish = (values: OnFinishValue) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: OnFinishFailed) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Firstname"
        name="firstName"
        rules={[{ required: true, message: 'Please input your firstname!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="lastName"
        rules={[{ required: true, message: 'Please input your lastname!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: 'Please choose your role!' }]}
      >
        <Select>
          <Select.Option value="student">Student</Select.Option>
          <Select.Option value="teacher">Teacher</Select.Option>
          <Select.Option value="admin">Admin</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Password Confirmation"
        name="passwordConfirmation"
        rules={[{ required: true, message: 'Please input your password confirmation!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;