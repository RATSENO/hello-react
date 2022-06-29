import { useState } from "react";
import { Select, Button } from "antd";

const { Option } = Select;
const depth1 = ["1", "2"];
const depth2 = {
  1: ["1-1", "1-2", "1-3", "1-4", "1-5"],
  2: ["2-1", "2-2", "2-3"],
};

const TestSelect = () => {
  const [depth2List, setDepth2List] = useState(depth2[depth1[0]]);
  const [depth2Data, setDepth2Data] = useState(depth2[depth1[0]][0]);

  const handleDepth1Change = (value) => {
    setDepth2List(depth2[value]);
    setDepth2Data(depth2[value][0]);
  };

  const onDepth2Change = (value) => {
    setDepth2Data(value);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div style={{ borderStyle: "solid", padding: "10px" }}>
      <div style={{ borderStyle: "dotted", marginBottom: "20px" }}>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          <span>
            <b>셀렉트</b>
          </span>
        </p>
        <div>
          <Select
            defaultValue="1"
            style={{ width: 120, marginBottom: "20px" }}
            onChange={handleChange}
          >
            {/* 
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
                <Select.Option value="4" disabled>4</Select.Option>
                */}
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4" disabled>
              4
            </Option>
          </Select>
          <br />
          <Select
            defaultValue="1"
            style={{ width: 120, marginBottom: "20px" }}
            loading
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4" disabled>
              4
            </Option>
          </Select>
          <br />
          <Select
            defaultValue="1"
            style={{ width: 120, marginBottom: "20px" }}
            allowClear
          >
            <Option value="1">1</Option>
            <Option value="2">2</Option>
            <Option value="3">3</Option>
            <Option value="4" disabled>
              4
            </Option>
          </Select>
        </div>
      </div>
      <div style={{ borderStyle: "dotted", marginBottom: "20px" }}>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          <span>
            <b>계층형 셀렉트</b>
          </span>
        </p>
        <div style={{ marginBottom: "20px" }}>
          <Select
            defaultValue={depth1[0]}
            style={{ width: 120 }}
            onChange={handleDepth1Change}
          >
            {depth1.map((v) => {
              return <Option key={v}>{v}</Option>;
            })}
          </Select>
          <Select
            style={{ width: 120 }}
            value={depth2Data}
            onChange={onDepth2Change}
          >
            {depth2List.map((v) => {
              return <Option key={v}>{v}</Option>;
            })}
          </Select>
        </div>
      </div>
    </div>
  );
};

export default TestSelect;
