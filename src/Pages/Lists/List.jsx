import React from "react";
import { Link } from "react-router-dom";
import testData from "../../Data/testData.json";

export default function Example() {
  return (
    <div>
      <div role="list" className="divide-y bg-gray-100  p-10 rounded-3xl">
        <h2 className="text-3xl font-bold py-3 text-gray-800 mb-4">
          POWER POINT PRESENTATION
        </h2>
        {testData.map((data) => (
          <div
            key={data.about}
            className="flex justify-between gap-x-6 p-3 mb-5 shadow-md rounded-3xl bg-indigo-50"
          >
            <p className="rounded-2xl bg-indigo-600 p-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              {data.class}-р Англи
            </p>
            <div className="flex min-w-0 gap-x-4 ">
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {data.name}
                </p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  {data.about}
                </p>
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <button className="rounded-2xl bg-indigo-600 p-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                <a href={data.courseUrl}>Үзэх</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
