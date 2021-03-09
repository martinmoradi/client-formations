import React from 'react';
import { Card } from 'antd';

const CardDb = () => (
<div className="site-card-border-less-wrapper">
    <Card title="Card title" bordered={false} style={{ width: 500 }}>
      <p>PHP application</p>
      <p>Project Management</p>
      <p>Javascript introduction</p>
    </Card>
    <Card title="Card title" bordered={false} style={{ width: 500 }}>
      <p>PHP application</p>
      <p>Project Management</p>
      <p>Javascript introduction</p>
    </Card>
  </div>
  )


export default CardDb
