import React, { useState } from 'react';

// WYSIWYGEditor essential's
import { Editor } from 'react-draft-wysiwyg';
import { convertToRaw, EditorState } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';

const WYSIWYGEditor = (props) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const onEditorStateChange = (editorState) => {
        setEditorState(editorState);
        console.log(props);
        return props.onChange(draftToHtml(convertToRaw(editorState.getCurrentContent())));
    };

    return (
        <div>
            <Editor editorState={editorState} wrapperClassName='demo-wrapper' editorClassName='demo-editor' onEditorStateChange={onEditorStateChange} />
        </div>
    );
};

export default WYSIWYGEditor;
