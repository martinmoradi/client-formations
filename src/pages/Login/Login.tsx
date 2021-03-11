import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input, Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { loginUser } from '../../redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  interface OnFinishValue {
    email: string;
    password: string;
  }

  interface OnFinishFailed {
    errorFields: Array<object>;
    outOfDate: boolean;
    values: OnFinishValue;
  }

  const onFinish = (values: OnFinishValue) => {
    const user = { user: { ...values } };
    dispatch(loginUser(user));
    console.log('Success:', values);
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
        label="Email"
        name="email"
        rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
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

export default Login;
