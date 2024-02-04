// PricingComponent.js
import React from "react";
// import page from "./Lists/List"

const PricingComponent = () => {
  return (
    <div className="bg-gray-100  p-10 rounded-3xl">
      <p className="text-4xl font-bold p-5 text-gray-800 mb-4">Агуулга</p>
      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pricing Card 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="p-1 bg-indigo-500"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">PPT</h2>
              <ul className="text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Нийт 28 ширхэг
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Англи хэл дээр
                </li>
              </ul>
            </div>
            <div className="p-4">
              <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                <a href="/#label">Үзэх</a>
              </button>
            </div>
          </div>

          {/* Pricing Card 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="p-1 bg-indigo-500"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ТЕСТИЙН САН
              </h2>
              <ul className="text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Нийт 8 ширхэг
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Англи хэл дээр
                </li>
              </ul>
            </div>
            <div className="p-4">
              <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-indigo-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                <a href="#/Label" className="block w-full h-full">
                  Үзэх
                </a>
              </button>
            </div>
          </div>

          {/* Card3 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="p-1 bg-indigo-500"></div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                ЭЕШ-ийн материал
              </h2>
              <ul className="text-sm text-gray-600 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Нийт 0 ширхэг
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Монгол хэл дээр
                </li>
              </ul>
            </div>
            <div className="p-4">
              <button className="w-full bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-indigo-500  focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
                <a href="./Lists/list">Үзэх</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
