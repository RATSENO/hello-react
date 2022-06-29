import {Row, Col} from "antd";
import "antd/dist/antd.css";

const style = {
    background : 'aqua',
    padding : '8px 0'
}

const TestGrid = () =>{
    return (
        <div>
            <Row>
                <Col span={24}><div style={style}>test</div></Col>
            </Row>
            <Row>
                <Col span={12}><div style={style}>test</div></Col>
                <Col span={12}><div style={style}>test</div></Col>
            </Row>
            <Row>
                <Col span={8}><div style={style}>test</div></Col>
                <Col span={8}><div style={style}>test</div></Col>
                <Col span={8}><div style={style}>test</div></Col>
            </Row>
            <Row>
                <Col span={6}><div style={style}>test</div></Col>
                <Col span={6}><div style={style}>test</div></Col>
                <Col span={6}><div style={style}>test</div></Col>
                <Col span={6}><div style={style}>test</div></Col>
            </Row>

        </div>
    );
};

export default TestGrid;