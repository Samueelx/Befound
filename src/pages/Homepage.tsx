import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

function Homepage() {
  return (
    <>
      <div className="flex flex-wrap justify-between mt-8 font-mono md:mt-16">
        <div className="m-4 p-4 pt-16 md:flex-1 md:mx-16">
          <h2 className=" text-4xl font-bold mb-4 pb-4">
            Find Your Best Match
          </h2>
          <p className="text-lg text-justify text-slate-600">
            Looking for that someone special? Join thousands and get ready to
            fill in the pages of your great love story!
          </p>
        </div>
        <div className="md:flex-1 md:ml-10">
          <img
            src="/dating-img-2.jpg"
            alt="Dating Image"
            className="w-3/4 rounded-b-full rounded-t-full mx-auto"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:justify-evenly my-32 py-8 relative">
        <div className="">
          <div className="md:h-20 md:w-96 h-16 w-60 bg-white text-center rounded-l-full rounded-tr-full absolute z-50 top-12 right-40 md:left-1 md:top-8 shadow-md">
            <p className="align-text-bottom py-2 font-extralight">
              We have more than <span className="font-bold">1500+</span> five star reviews
            </p>
          </div>
          <img
            src="dating-img-1.jpg"
            alt="Dating Image"
            className=" md:w-2/3 md:h-80 w-2/4 h-72 rounded-t-full mx-auto opacity-90"
          />
        </div>
        <div className="">
          <div>
            <p className="text-sm text-center text-slate-600 md:mb-32 sm:mb-8">
              We are also available on both platforms!
            </p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <button className="bg-white hover:bg-gray-200 text-gray-800 font-extralight py-3 px-6 rounded border-solid border-black border mx-4 my-4 flex-1 md:flex-none w-64">
              <div className="flex">
                <div className="mr-3">
                  <FaApple className="block ml-1 text-4xl md:text-5xl" />
                </div>
                <div>
                  Download from <br />
                  <span className="font-bold">Apple Store</span>
                </div>
              </div>
            </button>

            <button className="bg-white hover:bg-gray-200 text-gray-800 font-extralight py-3 px-6 rounded border-solid border-black border mx-4 my-4 flex-1 md:flex-none w-64">
              <div className="flex">
                <div className="mr-3">
                  <FaGooglePlay className="block ml-1 text-4xl md:text-5xl" />
                </div>
                <div>
                  Download from <br />
                  <span className="font-bold">Play Store</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
