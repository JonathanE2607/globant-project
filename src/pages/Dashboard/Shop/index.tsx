import { Link } from "react-router-dom";


const Shop = () => {

    return (
      <div className="bg-black">
        <div className="ml-14 py-8">
          <div className="w-full max-w-sm bg-gray-800 rounded-2xl border-2 border-cyan-400 shadow-lg shadow-cyan-400/20 overflow-hidden">
            <div className="relative w-auto h-auto p-4 border-radius-2xl">
              <img
                src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*C4yGTDSLSz86TCakrza2HQ.jpeg"
                alt=""
                className=""
              />
            </div>
            <Link to={"/dashboard/catalog"}>
              <div className="p-6 space-y-4">
                <h2 className="text-white text-xl font-semibold leading-tight">
                  {"Introduction in React"}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  This is an introductory course to React in which you can learn
                  and not only that, you can also practice with our tests.
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden">
                      <img
                        src=""
                        alt=""
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                      <span className="text-white text-sm font-medium"></span>
                    </div>
                    <span className="text-white font-medium">Lina Linares</span>
                  </div>
                  <div className="flex border rounded-xl border-cyan-400 px-4 py-2 items-center gap-2">
                    <span className="text-cyan-400 text-xl font-bold">$80</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default Shop