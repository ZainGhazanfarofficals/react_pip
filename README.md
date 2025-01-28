<<<<<<< HEAD
# reactpip
=======
# React Picture-in-Picture Library (react-pip-doc)


> A lightweight React library for creating and managing Picture-in-Picture (PiP) windows with custom content. This library allows you to easily open a PiP window and render any React component within it.

[![NPM](https://img.shields.io/npm/v/react_pip.svg)](https://www.npmjs.com/package/react_pip) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

--- 

### Features
- Render any React component inside a PiP window.
- Fully customizable open and close buttons with your own styles.
- Configurable window dimensions (width, height).
- Customizable PiP window title.
- Easy integration into React projects.

---

## Installation

Install the library using npm or yarn:

```bash
npm install react-pip-doc
# or
yarn add react-pip-doc
```
---

## Usage

Here is an example of how to use the ReactPiP component:

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ReactPiP } from "react-pip-doc";

const MyCustomComponent = () => <p>This is rendered inside the PiP window!</p>;

const App = () => {
  return (
    <div>
      <h1>React PiP Library Test</h1>
      <ReactPiP
        Component={<MyCustomComponent />}
        title="Test PiP Window"
        width={400}
        height={200}
        openButton={
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007AFF",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              marginRight: "10px",
            }}
          >
            Open PiP
          </button>
        }
        closeButton={
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#E05242",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Close PiP
          </button>
        }
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);

```
---
### Props
`ReactPiP` Props
| Prop Name | Type | Default Value | Description |
| --- | --- | --- | --- |
| **Component** | `React.ReactNode` | **Required** | The React component to render inside the PiP window. |
| **title** | `string` | `"My PiP Library"` | The title for the PiP window. |
| **width** | `number` | `500` | The width of the PiP window. |
| **height** | `number` | `100` | The height of the PiP window. |
| **openButton** | `React.ReactNode` | Default styled button | Custom React node for the button to open the PiP window. |
| **closeButton** | `React.ReactNode` | Default styled button | Custom React node for the button to close the PiP window. |

---
### Example
With Custom Buttons  
```tsx
<ReactPiP
  Component={<MyCustomComponent />}
  title="Custom PiP"
  width={600}
  height={400}
  openButton={
    <button style={{ padding: "10px 15px", backgroundColor: "green", color: "white" }}>
      Launch PiP
    </button>
  }
  closeButton={
    <button style={{ padding: "10px 15px", backgroundColor: "red", color: "white" }}>
      Close PiP
    </button>
  }
/>

```
---

### Default Behavior
If you don't provide custom buttons, the library will use default styled buttons for opening and closing the PiP window:

- Open Button: Blue button with the text "Open PiP".
- Close Button: Red button with the text "Close PiP".

---

## License

MIT © [ZainGhazanfarofficals](https://github.com/ZainGhazanfarofficals)
>>>>>>> master
