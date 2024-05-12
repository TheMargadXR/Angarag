import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-24 flex items-center min-h-screen justify-center bg-gradient-to-br from-blue-500 to-green-700">
      <div className="mx-auto max-w-[43rem]">
        <div className="text-center">
          <p className="text-lg font-medium leading-8 text-white">
            www.niigem800.mn
          </p>
          <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-white">
            Нийгэм 800 систем
          </h1>
          <p className="mt-3 text-lg leading-relaxed text-white">
            Ерөнхий боловсролын нийгмийн ухааны тестийн сангийн систем
          </p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <Link
            to={"/signup"}
            className="transform rounded-md bg-white bg-opacity-25 px-5 py-3 font-medium text-white transition-colors hover:bg-opacity-50"
          >
            Бүртгүүлэх
          </Link>
          <Link
            to={"/signup"}
            className="transform rounded-md border border-white px-5 py-3 font-medium text-white transition-colors hover:bg-opacity-50"
          >
            апп татах
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
