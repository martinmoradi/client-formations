import React from 'react';
import { Input, Space, Menu, Dropdown, Button, message } from 'antd';
import { AudioOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import { MenuInfo } from 'rc-menu/lib/interface';

const SearchBar = () => {
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

  const onSearch = (value: string) => console.log(value);
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
        <Search placeholder="What do you want to learn ?" onSearch={onSearch} enterButton size="large" style={{ width: 400 }} />
      </Space>
  </div>
  )
}

export default SearchBar
