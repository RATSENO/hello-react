import { Fragment, useState } from "react";
import { Checkbox, Button , Divider} from "antd";
const plainOptions = ["사과", "배", "오렌지"];
const CheckboxGroup = Checkbox.Group;

const TestCheckBox = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  const toggleDisable = () => {
    setDisabled(!disabled);
  };

  const onChange = (e) => {
    console.log("checked = ", e.target.checked);
    setChecked(e.target.checked);
  };

  const label = `${checked ? "Checked" : "Unchecked"}-${
    disabled ? "Disabled" : "Enabled"
  }`;

  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChange2 = (list) =>{
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) =>{
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  }

  return (
    <div style={{ borderStyle: "solid" }}>
      <div style={{ borderStyle: "solid", margin: 10 }}>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          <span>
            <b>체크박스 enable, disable</b>
          </span>
        </p>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
            {label}
          </Checkbox>
        </p>
        <p>
          <Button type="primary" size="small" onClick={toggleChecked}>
            {!checked ? "Check" : "Uncheck"}
          </Button>
          <Button
            style={{
              margin: "0 10px",
            }}
            type="primary"
            size="small"
            onClick={toggleDisable}
          >
            {!disabled ? "Disable" : "Enable"}
          </Button>
        </p>
      </div>

      <div style={{ borderStyle: "solid", margin: 10 }}>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
          <span>
            <b>체크박스 전체 체크, 언체크</b>
          </span>
        </p>
        <div>
            <Checkbox /* indeterminate={indeterminate} */ onChange={onCheckAllChange} checked={checkAll}>전체 선택</Checkbox>
            <hr></hr>
            <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange2}></CheckboxGroup>
        </div>
      </div>
    </div>
  );
};

export default TestCheckBox;
