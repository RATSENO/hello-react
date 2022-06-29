import { useState } from "react";
import { Radio, Button } from "antd";

const optionsWithDisabled = [
  {
    label: "사과",
    value: "A",
    disabled: false,
  },
  {
    label: "배",
    value: "B",
    disabled: false,
  },
  {
    label: "오렌지",
    value: "C",
    disabled: true,
  },
];

const TestRadio = () => {
  const [value, setValue] = useState(1);
  const [value2, setValue2] = useState("A");
  const [disabled, setDisabled] = useState(true);

  const onChange = (e) => {
    console.log("radio checked : ", e.target.value);
    setValue(e.target.value);
  };

  const onChange2 = (e) => {
    console.log("radio checked : ", e.target.value);
    setValue2(e.target.value);
  };

  const toggleDisabled = () => {
    setDisabled(!disabled);
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
            <b>라디오</b>
          </span>
        </p>
        <Radio>Radio</Radio>
      </div>
      <div style={{ borderStyle: "dotted", marginBottom: "20px" }}>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          <span>
            <b>라디오 그룹</b>
          </span>
        </p>
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>1</Radio>
          <Radio value={2}>2</Radio>
          <Radio value={3}>3</Radio>
          <Radio value={4}>4</Radio>
        </Radio.Group>
      </div>
      <div style={{ borderStyle: "dotted", marginBottom: "20px" }}>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          <span>
            <b>라디오 그룹 옵션으로 생성</b>
          </span>
        </p>
        <Button
          type="primary"
          onClick={toggleDisabled}
          style={{ marginBottom: "20px" }}
        >
          Toggle disabled
        </Button>
        <br />
        <Radio.Group
          options={optionsWithDisabled}
          onChange={onChange2}
          value={value2}
          buttonStyle="solid"
          optionType="button"
          name="testOptionsRadio"
          disabled={disabled}
        ></Radio.Group>
      </div>
    </div>
  );
};

export default TestRadio;
