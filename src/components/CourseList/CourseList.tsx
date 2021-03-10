import React from 'react';
import { List, Avatar } from 'antd';
import { Course } from '../../types/models';

type Props = {
  courses: Course[];
}

const CourseList = ({ courses }: Props) => (
  <>
    <List
    itemLayout="horizontal"
    dataSource={courses}
    renderItem={(item: Course) => (
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
  </>
  )


export default CourseList
