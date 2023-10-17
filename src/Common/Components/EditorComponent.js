import React from "react";
import TuiImageEditor from "tui-image-editor";

import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "./component.style.css";

class ImageEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorInstance: null,
    };
  }

  rootEl = React.createRef();
  imageEditorInst = null;

  componentDidMount() {
    this.imageEditorInst = new TuiImageEditor(this.rootEl.current, {
      ...this.props,
    });
    this.setState({ editorInstance: this.imageEditorInst });
  }

  componentWillUnmount() {
    this.imageEditorInst.destroy();
    this.imageEditorInst = null;
  }

  handleOnClick = () => {
    const editedImageData = this.state.editorInstance.toDataURL();
    console.log("editedImageData", editedImageData);
    this.props.handleSave(editedImageData);
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.handleOnClick();
    }
  }

  render() {
    return <div ref={this.rootEl} />;
  }
}

export default function EditorComponent({ onSave, isClickedState }) {
  const props = {
    includeUI: {
      menu: ["text", "icon"],
      initMenu: "text",
      loadImage: {
        path: "https://images.unsplash.com/photo-1544003484-3cd181d17917?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
        name: "SampleImage",
      },
      uiSize: {
        width: "100%",
        height: "700px",
      },
      menuBarPosition: "bottom",
    },
    cssMaxWidth: 700,
    cssMaxHeight: 500,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70,
    },
  };

  return (
    <div className="w-[100%] min-w-[400px] mx-auto justify-center items-center overflow-[hidden] p-10">
      <ImageEditor
        {...props}
        handleSave={onSave}
        isClickedState={isClickedState}
      />
    </div>
  );
}
