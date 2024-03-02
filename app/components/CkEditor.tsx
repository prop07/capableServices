"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./CkEditor.css";

interface Props {
    editorValue: string;
    setEditorValue: (description: string) => void;
}

const CkEditor = (props: Props) => {
    const { editorValue, setEditorValue } = props;
    const editorConfiguration = {
        placeholder: "Enter your description here...",
        className:"p-2"
    };

    return (
        <div >
            <h2 className="py-2">
                Rich Text <span className="text-red-500">*</span>
            </h2>
            <CKEditor
            
                editor={ClassicEditor}
                data=""
                config={editorConfiguration}
                onChange={(event, editor) => {
                    const description = editor.getData();
                    setEditorValue(description);
                }}
            />
            <span className="bg-green-500 p-2">Written details output:</span>
            <div className=" p-6 rendered-form  " dangerouslySetInnerHTML={{ __html: editorValue }} />
        </div>
    );
};

export default CkEditor;
