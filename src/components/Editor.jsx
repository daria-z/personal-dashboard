import { useRef, useEffect } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MarkdownEditor = ({ onContentChange, initialContent = '' }) => {
  const editorEl = useRef(null);
  const editorInstance = useRef(null);
  useEffect(() => {
    if (!editorEl.current) return;

    const editor = new Editor({
      el: editorEl.current,
      hideModeSwitch: true,
      initialValue: initialContent,
      initialEditType: 'markdown',
    });

    editorInstance.current = editor;

    editor.addHook('change', () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });

    return () => {
      editorInstance.current?.destroy();
      editorInstance.current = null;
    };
  }, [initialContent, onContentChange]);

  return <div ref={editorEl} />;
};

export default MarkdownEditor;
