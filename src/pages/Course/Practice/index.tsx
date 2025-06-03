import { useRef } from "react";
import TittleUI from "../../../componentsMUI/Typography/Tittle";
import { TYPES_TITTLE } from "../../../utils/typesTittle";
import SideProgressBar from "../../../componentsMUI/Data display/SideProgress";
import ButtonUI from "../../../componentsMUI/Forms/Button";
import { TYPES_BUTTON } from "../../../utils/typesButton";
import { Editor } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { courseData } from "../../../../public/coursesData/courseOne/CourseOneData";
import { useParams } from "react-router-dom";

const Practice = () => {

  const { id } = useParams();
  const test = courseData.find((course) => course.id === id);
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const handleEditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor
  ) => {
    editorRef.current = editor;
  };

  const getEditorValue = () => {
    if (editorRef.current?.getValue() === test?.correctFunction) {
      alert('Felicidades! Tu código es correcto');

    } else {
      alert("Lo siento, tu código no es correcto. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="grid grid-cols-3 gap-2 bg-black">
      <div className="bg-black col-span-2">
        <TittleUI
          variant={TYPES_TITTLE.ABOUT}
          content={test?.title}
          custom="ml-16 text-3xl text-white font-bold"
        />
        <p className="font-roboto text-2xl ml-16 mb-8 mt-8 text-slate-300 leading-[2] max-w-3xl">
          {test?.content}
        </p>
        <div className="ml-16 mt-12 w-full">
          <Editor
            height="70vh"
            width="90%"
            theme="vs-dark"
            defaultLanguage="javascript"
            defaultValue={test?.testFunction}
            onMount={handleEditorDidMount}
          />
        </div>
        <div className="flex justify-between max-w-3xl ml-16 mb-16 mt-14">
          <ButtonUI
            content="Back"
            variant={TYPES_BUTTON.CUSTOM}
            custom="px-20 py-3 rounded-full border border-2 p-white font-medium text-white font-xl hover:bg-cyan-white/10 transition-colors"
          />
          <ButtonUI
            content="Test"
            variant={TYPES_BUTTON.CUSTOM_ON_CLICK}
            custom="px-20 py-3 rounded-full border border-2 p-primary-blue font-medium text-cyan-400 font-xl hover:bg-cyan-400/10 transition-colors"
            onClick={getEditorValue}
          />
        </div>
      </div>
      <div>
        <SideProgressBar />
      </div>
    </div>
  );
};

export default Practice;
