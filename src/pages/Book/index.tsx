import { Table, Space, Button, Input } from "antd";
import { FC, useState } from "react";

import Column from "antd/es/table/Column";

interface DataType {
  key: React.Key;
  bId: number;
  bookName: string;
  price: number;
  number: number;
  date: any;
  pubHouse: string;
  mId: number;
}
const data: DataType[] = [
  {
    key: "1",
    bId: 12,
    bookName: "鲁滨逊漂流记",
    price: 200,
    number: 6,
    date: "20213211",
    pubHouse: "zjnu",
    mId: 12323,
  },
  {
    key: "2",
    bId: 16,
    bookName: "爱丽丝",
    price: 217,
    number: 5,
    date: "2021321111",
    pubHouse: "zjnu1",
    mId: 123232,
  },
  {
    key: "3",
    bId: 17,
    bookName: "长袜子皮皮",
    price: 210,
    number: 8,
    date: "2021",
    pubHouse: "zjnu2",
    mId: 1232311,
  },
];

const Book: FC = () => {
  const [searchText, setSearchText] = useState(""); // 状态变量

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  return (
    <div>
      <Input.Search
        placeholder="Search book name"
        allowClear
        onSearch={handleSearch}
        style={{ width: 200, marginBottom: 16 }}
      />

      <Table
        dataSource={data.filter((item) =>
          item.bookName.toLowerCase().includes(searchText.toLowerCase())
        )}
      >
        <Column title="bookName" dataIndex="bookName" key="bookName" />
        <Column title="price" dataIndex="price" key="price" />
        <Column title="number" dataIndex="number" key="number" />
        <Column title="date" dataIndex="date" key="date" />
        <Column title="pubHouse" dataIndex="pubHouse" key="pubHouse" />

        <Column
          title="Action"
          key="action"
          render={(_: any) => (
            <Space size="middle">
              <Button type="primary">borrow</Button>
              <Button type="primary">check</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Book;
