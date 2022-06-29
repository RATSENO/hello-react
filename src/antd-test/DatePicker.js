import { useState } from "react";
import { DatePicker, message, Alert } from "antd";
import "antd/dist/antd.css";

const Test = () => {
  const [date, setDate] = useState(null);
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };
  return (
    <div style={{ width: 400, margin: "100px auto" }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        <Alert message="Selected Date" description={date ? date.format("YYYY-MM-DD") : "None"}></Alert>
      </div>
    </div>
  );
};

export default Test;
