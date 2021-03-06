// @ts-nocheck
import { useQuery } from "react-query";
import { List, Avatar } from 'antd';
import { Classroom } from '../../types/models';
import { config } from '../../redux/auth/authMiddleware';


const ClassroomList = () => {

    const getClassrooms = async () => {
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}/v1/classrooms`, config('GET'))
    const batchData = await response.json()
    const classrooms = batchData.data.map(classroom => classroom.attributes)
    return classrooms
  }
  
    const { data, isLoading, error } = useQuery("classrooms", getClassrooms)
    console.log("data -> ", data)
    console.log("isLoading -> ", isLoading)
    console.log("error -> ", error)
    if (error) return <div>Something went wrong...</div>;

  return (
    <>
    {!isLoading && <List
      itemLayout="horizontal"
      dataSource={data}
      loading={isLoading}
      renderItem={(item: Classroom) => (
        <List.Item>
          <List.Item.Meta
            avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.room_location}
          />
        </List.Item>
      )}
    />}
  </>
  )
};

export default ClassroomList;
