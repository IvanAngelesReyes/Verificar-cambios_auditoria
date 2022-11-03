/*
SmartSoft
Componente: CInputEditorText
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente...

Numero de metodos: 2
Componentes relacionados: 
*/

import React, { Component } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";


export default class CInputEditorText extends Component {
  constructor(props) {
    super(props);
    var Draft = this.props.value;
    var exist = Draft.includes("<br/>");
    while (exist === true) {
      Draft = Draft.replace("<br/>", "<p>/</p>");
      exist = Draft.includes("<br/>");
    }
    const contentBlock = htmlToDraft(Draft);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    var html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    var exist = html.includes("<p>/</p>");
    while (exist === true) {
      html = html.replace("<p>/</p>", "<br/>");
      exist = html.includes("<p>/</p>");
    }
    this.props.cambiarInfoFormulario(html);
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div className="margen_textEditor pad2">
        {
          //margen_textEditor > ModalForm > ModalForm.css
        }
        <div>
          <p className="tituloCorreo">{this.props.titulo}</p>
          <Editor
            wrapperClassName=""
            toolbarClassName="sombra3 flygps frutiColor"
            editorClassName="sombra3 font_textEditor"
            toolbar={{
              options: [
                "history",
                "fontSize",
                "blockType",
                "remove",
                "inline",
                "list",
                "textAlign",
                "link",
              ],
            }}
            localization={{
              locale: "es",
            }}
            onEditorStateChange={this.onEditorStateChange}
            editorState={editorState}
          />
          <p className="comentarioCorreo">{this.props.comentarios}</p>
        </div>
      </div>
    );
  }
}

