import React from "react";
import Sidebar from "../components/sidebar";
import UmaImage from "../assets/uma.jpg"; // Adjust path based on your folder structure
import ShwetaImage from "../assets/shweta.jpg";
import PriyankaImage from "../assets/priyanka.jpg";
import KhillyImage from "../assets/khilly.jpg";
import GagandeepImage from "../assets/gagandeep.jpg";

function Contacts() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 p-8 bg-white">
        <h1 className="text-3xl font-bold text-black mb-8">Online availability</h1>
       

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card for Uma Sharma */}
          <div className="bg-[#FFEFF0] p-4 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300"> {/* Added hover effects */}
            <img
              src={UmaImage}
              alt="Uma Sharma"
              className="w-20 h-20 mx-auto rounded-full"
            />
            <div className="mt-3 text-lg font-bold text-black">Uma Sharma</div>
            <div className="mt-1 text-gray-700">Experience: 21 years</div>
            <div className="mt-1 text-gray-600">
              MA in Psychology, Diploma in Behavioural Development <br />
              Clinical Psychologist
            </div>
          </div>

          {/* Card for Shweta Anand */}
          <div className="bg-[#FFEFF0] p-4 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <img
              src={ShwetaImage}
              alt="Shweta Anand"
              className="w-20 h-20 mx-auto rounded-full"
            />
            <div className="mt-3 text-lg font-bold text-black">Shweta Anand</div>
            <div className="mt-1 text-gray-700">Experience: 12 years</div>
            <div className="mt-1 text-gray-600">
              MPhil in Psychology & B.Sc.(Hons) <br />
              Clinical Psychologist
            </div>
          </div>

          {/* Card for Priyanka Rao */}
          <div className="bg-[#FFEFF0] p-4 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <img
              src={PriyankaImage}
              alt="Priyanka Rao"
              className="w-20 h-20 mx-auto rounded-full"
            />
            <div className="mt-3 text-lg font-bold text-black">Priyanka Rao</div>
            <div className="mt-1 text-gray-700">Experience: 3.5 years</div>
            <div className="mt-1 text-gray-600">
              MSc. In Human Development and Childhood Studies <br />
              Child Psychologist
            </div>
          </div>

          {/* Card for Khilly Marwaha */}
          <div className="bg-[#FFEFF0] p-4 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <img
              src={KhillyImage}
              alt="Khilly Marwaha"
              className="w-20 h-20 mx-auto rounded-full"
            />
            <div className="mt-3 text-lg font-bold text-black">Khilly Marwaha</div>
            <div className="mt-1 text-gray-700">Experience: 7 years</div>
            <div className="mt-1 text-gray-600">
              Clinical Psychology <br />
              Psychologist and Lactation Counselor
            </div>
          </div>

          {/* Card for Gagandeep Kaur */}
          <div className="bg-[#FFEFF0] p-4 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
            <img
              src={GagandeepImage}
              alt="Gagandeep Kaur"
              className="w-20 h-20 mx-auto rounded-full"
            />
            <div className="mt-3 text-lg font-bold text-black">Gagandeep Kaur</div>
            <div className="mt-1 text-gray-700">Experience: 5 years</div>
            <div className="mt-1 text-gray-600">
              MA in Psychology, Diploma in Behavioural Development <br />
              Clinical Psychologist
            </div>
          </div>

          {/* More Button */}
          <div className="flex justify-center items-center">
            <button className="bg-[#F38FB1] text-white text-lg px-6 py-3 rounded-lg hover:bg-[#E07AA4] transition-colors duration-300">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
