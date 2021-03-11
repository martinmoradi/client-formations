// @ts-nocheck
import { Input, Space, Menu, Dropdown, Button } from 'antd';
import { AudioOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { SetStateAction, useState } from 'react';

const SearchBar = () => {
  const [keyword, SetKeyword] = useState();

  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#3B91DA',
      }}
    />
  );

  const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        3rd menu item
      </Menu.Item>
    </Menu>
  );

  const onSearch = (value: SetStateAction<undefined>) => {
    SetKeyword(value);
    search(value);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar-categories">
        <Dropdown overlay={menu}>
          <Button>
            Categories <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <Space direction="vertical">
        <Search
          placeholder="What do you want to learn ?"
          onSearch={(e) => onSearch(e.currentTager.value)}
          value = {keyword}
          enterButton
          size="large"
          style={{ width: 400 }}
        />
      </Space>
    </div>
  );
};

export default SearchBar;
