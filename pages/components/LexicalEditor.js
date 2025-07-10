import React, { useEffect } from "react";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HeadingNode } from '@lexical/rich-text';
import { QuoteNode } from '@lexical/rich-text';
import { ListNode, ListItemNode } from '@lexical/list';
import { CodeNode } from '@lexical/code';
import { TextNode, ParagraphNode } from 'lexical';
import { UnderlineNode } from '@lexical/format';
import "@/styles/Home.module.css";
import ToolbarPlugin from "./ToolbarPlugin";
import { $getRoot } from "lexical";

function PreloadHTMLPlugin({ value }) {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    if (!value) return;

    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(value, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      const root = $getRoot();
      root.clear();
      root.append(...nodes);
    });
  }, [value, editor]);

  return null;
}

export default function LexicalEditor({ value, onChange }) {
  const initialConfig = {
    namespace: "MyEditor",
    theme: {
      paragraph: "editor-paragraph",
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
          placeholder={<div className="editor-placeholder">Escribí algo...</div>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <PreloadHTMLPlugin value={value} />
        <HistoryPlugin />
        <OnChangePlugin
          onChange={(editorState, editor) => {
            editorState.read(() => {
              const htmlString = $generateHtmlFromNodes(editor, null);
              onChange(htmlString);
            });
          }}
        />
      </div>
    </LexicalComposer>
  );
}

