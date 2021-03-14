import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, Select } from 'antd';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../../redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  // test rebase
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Register = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  interface OnFinishValue {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
    role: string;
  }

  interface OnFinishFailed {
    errorFields: Array<object>;
    outOfDate: boolean;
    values: OnFinishValue;
  }

  const onFinish = (values: OnFinishValue) => {
    const user = { user: { ...values } };
    dispatch(registerUser(user));
    history.push('/');
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
        name="first_name"
        rules={[{ required: true, message: 'Please input your firstname!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Lastname"
        name="last_name"
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
        name="password_confirmation"
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
