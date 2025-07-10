import React from "react";
import { $generateHtmlFromNodes } from "@lexical/html"
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { ParagraphNode, TextNode } from "lexical";
import { $getRoot, $getSelection } from "lexical";
import { UnderlineNode } from "@lexical/rich-text";
import "@/styles/Home.module.css";

import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { CodeNode } from "@lexical/code";
import ToolbarPlugin from "./ToolbarPlugin";

export default function LexicalEditor({ value, onChange }) {
  const initialConfig = {
    namespace: "MyEditor",
    theme: {
      paragraph: "editor-paragraph",
    },
    text: {
      underline: "underline",
    },
    onError: (error) => {
      console.error("Lexical error:", error);
    },
    nodes: [
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      CodeNode,
      ParagraphNode,
      TextNode,
      UnderlineNode,
    ],
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <div
        className="editor-container"
        style={{ border: "1px solid #ccc", padding: 10 }}
      >
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={
            <div className="editor-placeholder">Escribí algo...</div>
          }
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin
          onChange={(editorState, editor) => {
    editorState.read(() => {
      const htmlString = $generateHtmlFromNodes(editor, null);
      onChange(htmlString); // esto guarda HTML en vez de solo texto
    });
  }}
        />
      </div>
    </LexicalComposer>
  );
}
