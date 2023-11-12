import { BookOutlined, UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Layout, Menu, theme } from 'antd'
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const { Header, Content, Sider } = Layout

const Dashboard: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()
  const navigate = useNavigate()

  return (
    <Layout className="h-full w-full">
      <Header className="bg-primary flex justify-center items-center">
        <div className="demo-logo flex-1" />
        <div className="justify-self-center flex-[2 2 0] text-4xl text-white">
          图书管理系统
        </div>
        <div className="flex-1 justify-end flex gap-2 items-center">
          <Avatar icon={<UserOutlined />} />
          <Button type="text">Logout</Button>
        </div>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
            items={[
              {
                label: '图书管理',
                key: '1',
                icon: <BookOutlined />,
                onClick: () => {
                  navigate('/dashboard/book')
                },
              },
              {
                label: '用户管理',
                icon: <UserOutlined />,
                key: '2',
                onClick: () => {
                  navigate('/dashboard/user')
                },
              },
            ]}
          />
        </Sider>
        <Layout className="px-6 pb-6">
          <Content className="p-6 overflow-auto bg-white">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Dashboard
