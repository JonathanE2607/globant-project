import { useState } from "react";
import { postCourse } from "../../../../services/courseService";
import TittleUI from "../../../componentsMUI/Typography/Tittle";
import { TYPES_TITTLE } from "../../../utils/typesTittle";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const AddNewClass = () => {
  const [idCourse, setIdCourse] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [idProgress, setIdProgress] = useState("");
  const [titleProgress, setTitleProgress] = useState("");
  const [descriptionProgress, setDescriptionProgress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      id: idCourse,
      title: title,
      content: content,
      image: image,
      videoLink: videoLink,
      teacherName: teacherName,
      numSucces: 0,
      numFinish: 1, 
      progress: [
        {
          id: idProgress,
          title: titleProgress,
          description: descriptionProgress,
          active: true,
        },
      ],
    };

    toast.done("Form send succes")

    setTimeout(() => {
      postCourse(data)
      navigate("/dashboard/shop")
    }, 5000);
  }
  return (
    <div className="">
      <TittleUI variant={TYPES_TITTLE.SECONDARY} content="Create your new class" custom="ml-[12%] mb-6" />
      <form className="max-w-[80%] mx-auto bg-black p-4">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="idCourse"
            id="idCourse"
            className="block mb-6 py-2.5 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={idCourse}
            onChange={(e) => setIdCourse(e.target.value)}
            required
          />
          <label
            htmlFor="idCourse"
            className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
          >
            Add the Id for this course
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="text"
            name="title"
            id="title"
            className="block mb-6 py-2.5 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <label
            htmlFor="title"
            className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
          >
            Add the title
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="content"
            name="content"
            id="content"
            className="block py-2.5 mb-6 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <label
            htmlFor="content"
            className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
          >
            Add the content
          </label>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="image"
              id="image"
              className="block py-2.5 mb-6 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
            <label
              htmlFor="image"
              className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
            >
              Add the image link
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="videoLink"
              id="videoLink"
              className="block py-2.5 mb-6 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
              required
            />
            <label
              htmlFor="videoLink"
              className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
            >
              Add the video link
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="teacherName"
              id="teacherName"
              className="block py-2.5 mb-6 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              required
            />
            <label
              htmlFor="teacherName"
              className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
            >
              Add the teacher name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="IdProgress"
              id="IdProgress"
              className="block py-2.5 mb-6 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={idProgress}
              onChange={(e) => setIdProgress(e.target.value)}
              required
            />
            <label
              htmlFor="IdProgress"
              className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
            >
              Add the id for this progress
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="titleProgress"
              id="titleProgress"
              placeholder=" "
              className="block py-2.5 mb-6 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={titleProgress}
              onChange={(e) => setTitleProgress(e.target.value)}
              required
            />
            <label
              htmlFor="titleProgress"
              className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
            >
              Add the title for progress
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="descriptionProgress"
              id="descriptionProgress"
              className="block py-2.5 mb-6 px-0 w-full text-sm text-white bg-transparent border-2 rounded-lg border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              value={descriptionProgress}
              onChange={(e) => setDescriptionProgress(e.target.value)}
              required
            />
            <label
              htmlFor="descriptionProgress"
              className="peer-focus:font-medium ml-4 absolute text-sm text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-8 scale-85 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-85 peer-focus:-translate-y-8"
            >
              Add the description progress
            </label>
          </div>
        </div>
        <div className="flex justify-center ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="text-white px-24 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
}

export default AddNewClass;
