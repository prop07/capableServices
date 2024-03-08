"use client";
import { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./Tiny.css";

interface Props {
    editorValue: string;
    setEditorValue: (description: string) => void;
}

const TinyEditor = (props: Props) => {
    const editorRef = useRef(null);
    const { editorValue, setEditorValue } = props;

    const logData = () => {
        if (editorRef.current) {
            setEditorValue(editorRef.current.getContent());
        }
    };

    return (
        <div>
            <h2 className="py-2">
                Rich Text <span className="text-red-500">*</span>
            </h2>
            <Editor
                apiKey="w8u3nqhi9ciitwglvtrpusgn40ai61xbycajck1mhh4oc1ul"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                    tinycomments_mode: "embedded",
                    tinycomments_author: "Author name",
                    mergetags_list: [
                        { value: "First.Name", title: "First Name" },
                        { value: "Email", title: "Email" },
                    ],
                    ai_request: (request, respondWith) =>
                        respondWith.string(() =>
                            Promise.reject("See docs to implement AI Assistant")
                        ),
                }}
            />
            <button className="mt-4 cursor-pointer  bg-primary py-4 lg:px-8 px-4 text-white md:text-base text-sm  text-center font-extrabold rounded-md" onClick={logData}>View Demo</button>
        </div>
    );
};

export default TinyEditor;
