import MyFramework from './core/framework';
import Component from './core/component';

class HelloWorld extends Component {
  render() {
    return `<h1>Hello, ${this.props.name}!</h1>`;
  }
}

const app = new MyFramework({
  el: '#app',
  render: () => {
    const hello = new HelloWorld({ name: 'Deviang' });
    return hello.render();
  }
});
