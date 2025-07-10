import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
} from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $patchStyleText } from "@lexical/selection";

export default function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();

  return (
    <div className="toolbar" style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: 10 }}>
      {/* Negrita */}
      <button  type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}>
        Bold
      </button>

      {/* Cursiva */}
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}>
        Italic
      </button>

      {/* Subrayado */}
      {/* <button type="button" onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}>
        Underline
      </button> */}

      {/* Alineación */}
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")}>
        Left
      </button>
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")}>
        Center
      </button>
      <button type="button" onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")}>
        Right
      </button>

      {/* Tamaño de fuente */}
      <select
        defaultValue=""
        onChange={(e) => {
          const size = e.target.value;
          editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
              $patchStyleText(selection, { fontSize: size });
            }
          });
        }}
      >
        <option value="">Font size</option>
        <option value="12px">12</option>
        <option value="14px">14</option>
        <option value="16px">16</option>
        <option value="20px">20</option>
        <option value="24px">24</option>
        <option value="32px">32</option>
      </select>

      {/* Color de fuente */}
      <input
        type="color"
        onChange={(e) => {
          const color = e.target.value;
          editor.update(() => {
            const selection = $getSelection();
            if ($isRangeSelection(selection)) {
              $patchStyleText(selection, { color });
            }
          });
        }}
        title="Font color"
      />
    </div>
  );
}

