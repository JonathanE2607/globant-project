import { useParams } from "react-router-dom"
import useCourses from "../../utils/fetchAllCourses";

export default function SideBarProgreess() {

  const {id} = useParams();
  const progress = useCourses().progress
  const hola = useCourses().progress.find((item) => item.id === id)
  return (
    <div className="bg-black text-white p-6 rounded-lg w-full max-w-md">
      <h2 className="text-4xl font-bold mb-6">Progress</h2>
      <div className="space-y-1">
        {[hola].map((item, index) => (
          <div key={index} className="relative">
            <div className="flex items-start">
              <div className="flex flex-col items-center mr-4">
                 <div
                  className={`rounded-full w-5 h-5 z-10 ${
                    item?.active ? "bg-green-500" : "bg-gray-500"
                  }`}
                />
                {index < progress.length - 1 && (
                  <div className="w-0.5 bg-gray-600 h-full absolute top-5 left-2.5 -z-10" />
                )}
              </div>
              <div className="pb-6">
                <p className="font-medium text-white">{item?.title}</p>
                <p className="text-gray-400 text-sm">{item?.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}