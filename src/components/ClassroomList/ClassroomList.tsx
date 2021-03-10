import { List, Avatar } from 'antd';
import { Classroom } from '../../types/models';

type Props = {
  classrooms: Classroom[];
};

const ClassroomList = ({ classrooms }: Props) => (
  <List
    itemLayout="horizontal"
    dataSource={classrooms}
    renderItem={(item: Classroom) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
          title={<a href="https://ant.design">{item.title}</a>}
        />
      </List.Item>
    )}
  />
);

export default ClassroomList;
