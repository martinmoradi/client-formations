// @ts-nocheck
import { Table, Space, Button } from 'antd';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import ClipLoader from 'react-spinners/ClipLoader';

import { fetchSessions, deleteSession } from './api';

const SessionList = () => {
  const queryClient = useQueryClient();
  const { data: sessions, isLoading, error } = useQuery('sessions', fetchSessions);

  const removeSession = useMutation(payload => deleteSession(payload), {
    onSuccess: () => {
      queryClient.fetchQuery('sessions');
    },
  });

  const handleRemoveSession = (id, e) => {
    e.preventDefault();
    removeSession.mutate(id);
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'course_title',
      key: 'course_title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Remaining seats',
      dataIndex: 'remaining_seats',
      key: 'remaining_seats',
    },
    {
      title: 'Classroom',
      dataIndex: 'room_location',
      key: 'room_location',
    },
    {
      title: 'Action',
      key: 'action',
      render: record => (
        <>
          <Space size="middle">
            <Button danger onClick={e => handleRemoveSession(record.id, e)}>
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

  return <>{!isLoading && <Table dataSource={sessions} columns={columns} />}</>;
};
export default SessionList;
