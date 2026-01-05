import { Component } from 'react';

//Props의 타입 정의
interface ClickMeProps {
  level: number;
}

interface ClickMeState {
  count: number;
}

//클랙스 컴포넌트를 만드는 방법
//1. Component를 상속 받는다.
class ClickMe extends Component<ClickMeProps, ClickMeState> {
  
  //state/setState()는 부모(Component)에 미리 정의되어 있음
  //state 변수 하나만 사용 가능
  //만약, 여러개의 상태를 관리해야 한다면 state를 객체로 만들어야 함
  state = { count: 0 }; //상태를 초기화
  
  increment = () => {
    this.setState({count: this.state.count + 1});
  }

//2. render() 메서드를 작성한다.
  render() {
    const result = this.state.count * this.props.level;
    return (
      <div>
      <h1>01 클래스 컴포넌트</h1>
      <div>
          {this.state.count} X {this.props.level}: {result}
        <button onClick={this.increment}>클릭</button>
      </div>
    </div>
    );
  }
} 

export default ClickMe;
