import React from 'react';
import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';

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
  
  const onSearch = (value: string) => console.log(value);
  return (
    <div className="form-container">
      <Space direction="vertical">
        <Search placeholder="What do you want to learn ?" onSearch={onSearch} enterButton size="large" style={{ width: 400 }} />
      </Space>
  </div>
  )
}

export default SearchBar
