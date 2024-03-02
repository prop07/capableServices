"use client";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

interface Props {
    editorValue: string;
    setEditorValue: () => void;
}

const CkEditor = (props: Props) => {
    const { editorValue, setEditorValue } = props;

    return (
        <div className="App">
            <h2 className="py-2">Rich Text <span className="text-red-500">*</span></h2>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Enter Description Here</p>"
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorValue(data);
                }}
            />
            <span className="bg-green-500 p-2">
                Written details output:
            </span>
            <div
                className=" p-6"
                dangerouslySetInnerHTML={{ __html: editorValue }}
            />
        </div>
    );
};

export default CkEditor;
