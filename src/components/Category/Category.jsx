import React from "react";

import class_card from "../assets/class_card.png";
import class_yesh from "../assets/Card.png";
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: class_yesh,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: class_yesh,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: class_yesh,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: class_yesh,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
];
const products2 = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: class_card,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: class_card,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: class_card,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: class_card,
    imageAlt: "yeshiin category zurag",
    price: "$35",
    color: "Black",
  },
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">ЭЕШ</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
        <br></br>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Анги
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products2.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
