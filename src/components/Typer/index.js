import React, { Component } from 'react';
import Typed from 'typed.js';

class Typer extends Component {

  componentDidMount() {
    const { strings } = this.props;
    const options = {
      strings,
      typeSpeed: 200,
      //属性 {number} 后退速度（毫秒）
      backSpeed: 20,
      //属性 {boolean} 智能退格，仅退格与前一个字符串不匹配的内容
      smartBackspace: true,
      //属性 {boolean} 随机输出
      shuffle: false,
      //属性 {number} 退格前的延迟时间（毫秒）
      backDelay: 800,
      //属性 {boolean} 淡入淡出而不是退格
      fadeOut: false,
      //属性 {string} 淡入动画css类
      fadeOutClass: 'typed-fade-out',
      //属性 {boolean} 淡出延迟淡出延迟（毫秒）
      fadeOutDelay: 800,
      //属性 {boolean} 循环所有字符串
      loop: true,
      //属性 {number} 循环次数
      loopCount: 1,
      //属性 {boolean} 显示光标
      showCursor: true,
      //属性 {string} 光标
      cursorChar: '|',
      //属性 {boolean} 为光标插入淡入淡出CSS到HTML<head>
      autoInsertCss: true,
      //属性 {string} attr属性用于键入
      attr: null,
      //属性 {boolean} 如果el是文本输入，绑定输入焦点事件
      bindInputFocusEvents: false,
      //属性 {string} “html”或“zero”表示纯文本
      contentType: 'html',
      //在它开始打字之前
      onBegin: (self) => {},
      //所有的打字完成后
      onComplete: (self) => {},
      //在键入每个字符串之前
      preStringTyped: (arrayPos, self) => {},
      //键入每个字符串后
      onStringTyped: (arrayPos, self) => {},
      //在循环期间，在键入最后一个字符串之后
      onLastStringBackspaced: (self) => {},
      //打字已停止
      onTypingPaused: (arrayPos, self) => {},
      //停止后已开始键入
      onTypingResumed: (arrayPos, self) => {},
      //复位后
      onReset: (self) => {},
      //停止后
      onStop: (arrayPos, self) => {},
      //开始后
      onStart: (arrayPos, self) => {},
      //销毁后
      onDestroy: (self) => {}

    };
    this.typed = new Typed(this.el, options);
  }
  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    return (
      <span
        ref={(el) => { this.el = el; }}
      />
    );
  }
}
export default Typer;