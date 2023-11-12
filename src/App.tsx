import { App as AntdApp, ConfigProvider } from 'antd'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#3CB371',
        },
      }}
    >
      <AntdApp>
        <div className="w-screen h-screen">
          <Outlet />
        </div>
      </AntdApp>
    </ConfigProvider>
  )
}

export default App
