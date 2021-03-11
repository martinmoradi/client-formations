// @ts-nocheck
import { Table, Space, Button } from 'antd';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

import { fetchUsersToValidate, validateUser, deleteUser } from './api';

const AdminUsers = () => {
  const queryClient = useQueryClient();
  const { data: users, isLoading, error } = useQuery('users', fetchUsersToValidate);

  const setUserValid = useMutation(payload => validateUser(payload), {
    onSuccess: () => {
      queryClient.fetchQuery('users');
    },
  });

  const removeUser = useMutation(payload => deleteUser(payload), {
    onSuccess: () => {
      queryClient.fetchQuery('users');
    },
  });

  const handleValidateUser = (id, e) => {
    e.preventDefault();
    setUserValid.mutate(id);
  };

  const handleRemoveUser = (id, e) => {
    e.preventDefault();
    removeUser.mutate(id);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'full_name',
      key: 'first_name, last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Action',
      key: 'action',
      render: record => (
        <>
          <Space size="middle">
            <Button type="primary" onClick={e => handleValidateUser(record.id, e)}>
              Validate
            </Button>
            <Button danger onClick={e => handleRemoveUser(record.id, e)}>
              Delete
            </Button>
          </Space>
        </>
      ),
    },
  ];

  if (isLoading) {
    return <ClipLoader color="#40A9FF" />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <>{!isLoading && <Table dataSource={users} columns={columns} />}</>;
};
export default AdminUsers;
