import componentsImg from "./assets/components.png";
import propsImg from "./assets/jsx-ui.png";
import jsxImg from "./assets/config.png";
import stateImg from "./assets/state-mgmt.png";
export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: "Components",
    description: "Reusable UI parts",
  },
  {
    image: propsImg,
    title: "JSX",
    description: "Write HTML in Javascript",
  },
  {
    image: jsxImg,
    title: "Props",
    description: "Pass data to components",
  },
  {
    image: stateImg,
    title: "State",
    description: "Manage dyanamic data",
  },
];
export const EXAMPLES = {
  components: {
    title: "Components",
    description:
      "Components are the building blocks of a React app. They help you split the UI into reusable pieces.",
    code: `Function Welcome(){
          return <h1>Hello World!</h1>
    }`,
  },
  jsx: {
    title: "JSX",
    description:
      "JSX is a syntax extension for JavaScript that lets you write HTML-like code inside JavaScript.",

    code: `function Welcome() {
    return <h1>Welcome to React using JSX!</h1>;
}`,
  },
  props: {
    title: "props",
    description:
      "Props allow you to pass data from one component to another as function arguments.",
    code: `function Welcome(props) {
        return <h1>Hello, {props.name}!</h1>;
      }`,

    // Usage: <Welcome name="Jhansi" />
  },
  state: {
    title: "state",
    description:
      "State is used to manage data that changes over time in a component.",
    code: `import { useState } from 'react';
function Counter() {
const [count, setCount] = useState(0);
return (
     <div>
       <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
      </div>
      );
    }`,
  },
};
