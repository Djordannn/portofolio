"use client";

import React from "react";
import Link from "../../node_modules/next/link";
import Image from "../../node_modules/next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

import js from "/public/image/js.png";
import html from "/public/image/html.png";
import css from "/public/image/css.png";
import next from "/public/image/next.png";
import mysql from "/public/image/mysql.png";
import node from "/public/image/node.png";
import react from "/public/image/react.png";

interface ITools {
  img: string;
}

const dataTools: React.FC<ITools> = [
  {
    img: html,
  },
  {
    img: css,
  },
  {
    img: js,
  },
  {
    img: next,
  },
  {
    img: node,
  },
  {
    img: react,
  },
  {
    img: mysql,
  },
];

export default function Home() {
  const newDataTool = dataTools.map((value, index) => {
    return (
      <Card className="bg-transparent border-none shadow-none">
        <CardContent>
          <CardContent>
            <Image src={value.img} alt="img" className="w-[100px]" />
          </CardContent>
        </CardContent>
      </Card>
    );
  });

  return (
    <div className="">
      <div
        id="navbar"
        className="flex items-center fixed w-[100%] z-50 justify-between py-6 bg-[#3c3c3c] px-[9%]"
      >
        <div className="text-2xl">Logo</div>
        <div>
          <ul className="flex gap-6">
            <li>
              <Link
                href="#"
                className="active border-2 border-[#B1D690] py-2 px-4 rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="border-2 border-transparent py-2 px-4 rounded-lg hover:border-[#B1D690]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#myProject"
                className="border-2 border-transparent py-2 px-4 rounded-lg hover:border-[#B1D690] ease-in-out duration-100"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                href="#tools"
                className="border-2 border-transparent py-2 px-4 rounded-lg hover:border-[#b1d690] ease-in-out duration-100"
              >
                Tools
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        id="jumbotron"
        className="flex justify-center items-center h-[600px] bg-[#3c3c3c]"
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-4xl tracking-wide">
            Hello I'am <span className="text-[#B1D690]">Djordan</span>
          </h1>
          <h2 className="text-2xl tracking-wider">Web Developer</h2>
          <p className="w-[70%] mx-auto text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            accusamus commodi ipsa. Facilis, dicta mollitia!
          </p>
          <Button className="block w-[15%] mx-auto mt-3 bg-[#B1D690] text-[#2d2d2d] hover:bg-[#b1d690]">
            More
          </Button>
        </div>
      </div>
      <div
        id="about"
        className="bg-[#B1D690] text-[#2d2d2d] mx-[12%] relative bottom-24 shadow-lg flex items-start gap-4 p-14"
      >
        <div className="w-[30%] ">
          <h1 className="text-5xl">
            About <br />
            Me
          </h1>
        </div>
        <div className="w-[70%]">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex
            perspiciatis expedita modi suscipit maxime quod, est id, mollitia
            quos libero ducimus nesciunt nisi temporibus quasi ad alias commodi
            voluptatibus.
          </p>
        </div>
      </div>
      <div id="myProject" className="px-[9%] h-[400px] py-14">
        <h1 className="text-2xl">My Project</h1>
        <hr className="bg-[#B1D690] h-2 w-[10%] rounded-lg mt-3" />
        <div>
          <Carousel className="grid py-14 gap-6">
            <CarouselContent>
              <CarouselItem className="basis-1/3">
                <Card className="w-[100%] bg-[#3c3c3c] text-[#eeee] border-none shadow-lg border-2 border-[#b1d690]">
                  <CardHeader>
                    <img
                      src="https://i.pinimg.com/564x/d9/85/5f/d9855f2948d7cf5a0b9ae253c52647e6.jpg"
                      alt=""
                    />
                  </CardHeader>
                  <CardContent className="pb-12">
                    <h2 className="text-lg text-[#b1d690]">Name Project</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, numquam.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="w-[100%] bg-[#3c3c3c] text-[#eeee] border-none shadow-lg">
                  <CardHeader>
                    <img
                      src="https://i.pinimg.com/564x/d9/85/5f/d9855f2948d7cf5a0b9ae253c52647e6.jpg"
                      alt=""
                    />
                  </CardHeader>
                  <CardContent className="pb-12">
                    <h2 className="text-lg text-[#b1d690]">Name Project</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, numquam.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="w-[100%] bg-[#3c3c3c] text-[#eeee] border-none shadow-lg">
                  <CardHeader>
                    <img
                      src="https://i.pinimg.com/564x/d9/85/5f/d9855f2948d7cf5a0b9ae253c52647e6.jpg"
                      alt=""
                    />
                  </CardHeader>
                  <CardContent className="pb-12">
                    <h2 className="text-lg text-[#b1d690]">Name Project</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, numquam.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="w-[100%] bg-[#3c3c3c] text-[#eeee] border-none shadow-lg">
                  <CardHeader>
                    <img
                      src="https://i.pinimg.com/564x/d9/85/5f/d9855f2948d7cf5a0b9ae253c52647e6.jpg"
                      alt=""
                    />
                  </CardHeader>
                  <CardContent className="pb-12">
                    <h2 className="text-lg text-[#b1d690]">Name Project</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, numquam.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="w-[100%] bg-[#3c3c3c] text-[#eeee] border-none shadow-lg">
                  <CardHeader>
                    <img
                      src="https://i.pinimg.com/564x/d9/85/5f/d9855f2948d7cf5a0b9ae253c52647e6.jpg"
                      alt=""
                    />
                  </CardHeader>
                  <CardContent className="pb-12">
                    <h2 className="text-lg text-[#b1d690]">Name Project</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, numquam.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="w-[100%] bg-[#3c3c3c] text-[#eeee] border-none shadow-lg">
                  <CardHeader>
                    <img
                      src="https://i.pinimg.com/564x/d9/85/5f/d9855f2948d7cf5a0b9ae253c52647e6.jpg"
                      alt=""
                    />
                  </CardHeader>
                  <CardContent className="pb-12">
                    <h2 className="text-lg text-[#b1d690]">Name Project</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, numquam.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-1/3">
                <Card className="w-[100%] bg-[#3c3c3c] text-[#eeee] border-none shadow-lg">
                  <CardHeader>
                    <img
                      src="https://i.pinimg.com/564x/d9/85/5f/d9855f2948d7cf5a0b9ae253c52647e6.jpg"
                      alt=""
                    />
                  </CardHeader>
                  <CardContent className="pb-12">
                    <h2 className="text-lg text-[#b1d690]">Name Project</h2>
                    <p className="text-sm">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Alias, numquam.
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="text-black" />
            <CarouselNext className="text-black" />
          </Carousel>
        </div>
      </div>
      <div id="tools" className="px-[9%] pt-[16rem]">
        <h1 className="text-2xl">My Tools</h1>
        <hr className="bg-[#B1D690] h-2 w-[10%] rounded-lg mt-3" />
        <div className="py-14 grid grid-cols-4 gap-4">{newDataTool}</div>
      </div>
      <div id="footer" className="py-14 bg-[#3c3c3c]">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl">
            Get in <span className="text-[#b1d690]">Touch</span>
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            dolorum!
          </p>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="#">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Tools</a>
              </li>
            </ul>
          </div>
          <div className="h-2 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
