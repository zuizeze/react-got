import React, { useState } from 'react';

import { Button } from 'antd'

function DashBorder(props) {
  const [title, setTitle] = useState("测试")
  return (
    <div>
      仪表盘{title}
      <Button onClick={() => {
        setTitle(() => {
          return "这是改变后的title"
        })
      }}>改变值</Button>
    </div>
  );
}

export default DashBorder;
