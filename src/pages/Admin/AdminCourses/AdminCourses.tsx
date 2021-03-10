import React from 'react';
import { List, Avatar } from 'antd';
import SearchBar from '../../../components/SearchBar/SearchBar';

const AdminCourses = () => {
  console.log('admin courses');
  const data = [
    {
      title: 'Course Title 1',
    },
    {
      title: 'Course Title 2',
    },
    {
      title: 'Course Title 3',
    },
    {
      title: 'Course Title 4',
    },
  ];
  return (
    <div>
      <h2>Admin Courses</h2>
      <SearchBar />
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
      ,
    </div>
  );
};

export default AdminCourses;
