import React from "react";
import ProTypes from 'prop-types'

const MyComponent = ({name, children}) =>{
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다.<br/>
            childer 값은 {children}
        </div>
    )
};

MyComponent.defaultProps = {
    name : '기본 이름'
}

MyComponent.propTypes ={
    name: ProTypes.string
}

export default MyComponent;
