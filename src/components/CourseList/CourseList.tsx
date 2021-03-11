 // @ts-nocheck
import { useQuery } from "react-query";
import { List, Avatar } from 'antd';
import { Course } from '../../types/models';

type Props = {
  courses: Course[];
}


const CourseList = () => {

  const getCourses = async () => {
  const response = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/courses`)
  const data = await response.json()
  return data
}

  const { data, isLoading, error } = useQuery("courses", getCourses)

  if (error) return <div>Something went wrong...</div>;

  return (
  <>
    {!isLoading && <List
    itemLayout="horizontal"
    dataSource={data.data}
    loading={isLoading}
    renderItem={(item: Course) => (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.attributes.title}
        />
      </List.Item>
    )}
    />}

  </>
  )
}


export default CourseList
