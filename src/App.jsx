import { List, Avatar, Row, Col } from "antd";
import { useState } from "react";
import { GithubBadge, Logo } from "./components";

const data = [
  {
    title: "Github Badge",
    description: "React Component - Github Badge",
    component: <GithubBadge link="https://chat.openai.com/" size={160} />,
  },
  {
    title: "Logo",
    description: "React Component - Logo",
    component: <Logo size={{ width: 160, height: 160 }} />,
  },
  //TODO: Add more components here
];

function App() {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <Row
      gutter={[16, 16]}
      style={{
        padding: "16px",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Col span={6}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => setSelectedComponent(item)}
              style={{
                backgroundColor: selectedComponent === item ? "#1890ff" : "",
                color: selectedComponent === item ? "#fff" : "",
                cursor: "pointer",
              }}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={item.title}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </Col>
      <Col
        span={18}
        style={{
          backgroundColor: "#fff",
          padding: "16px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {selectedComponent && selectedComponent.component}
      </Col>
    </Row>
  );
}

export default App;
