"use client";

import React from "react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import js from "/public/image/js.png";
import html from "/public/image/html.png";
import css from "/public/image/css.png";
import next from "/public/image/next.png";
import mysql from "/public/image/mysql.png";
import node from "/public/image/node.png";
import react from "/public/image/react.png";
import project from "/public/image/project.jpg";

const dataProject = [
  {
    name: "Name Project",
    teks: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, numquam",
    imgUrl: project,
  },
  {
    name: "Name Project",
    teks: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, numquam",
    imgUrl: project,
  },
  {
    name: "Name Project",
    teks: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, numquam",
    imgUrl: project,
  },
  {
    name: "Name Project",
    teks: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, numquam",
    imgUrl: project,
  },
  {
    name: "Name Project",
    teks: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, numquam",
    imgUrl: project,
  },
];

const dataTools = [
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
  const newDataProject = dataProject.map((value, index) => {
    return (
      <CarouselItem key={index} className="md:basis-1/3">
        <Card className="w-[100%] bg-[#3c3c3c] text-[#eeee] border-none shadow-lg border-2 border-[#b1d690]">
          <CardHeader>
            <Image src={value.imgUrl} alt="" />
          </CardHeader>
          <CardContent className="pb-12">
            <h2 className="text-lg text-[#b1d690]">{value.name}</h2>
            <p className="text-sm">{value.teks}</p>
          </CardContent>
        </Card>
      </CarouselItem>
    );
  });

  const newDataTool = dataTools.map((value, index) => {
    return (
      <Card key={index} className="bg-transparent border-none shadow-none">
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
        <div className="flex gap-8 items-center">
          <div className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <a href="#jumbotron" className="text-[#b1d690]">
                  Home
                </a>
              </li>
              <li>
                <a href="#myProject" className="hover:text-[#b1d690]">
                  Project
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#b1d690]">
                  Tools
                </a>
              </li>
              <li>
                <a href="https://github.com/Djordannn">
                  <h2 className="bg-[#b1d690] p-3 rounded-lg text-black text-lg">
                    <FaGithub />
                  </h2>
                </a>
              </li>
            </ul>
          </div>
          <div className="block md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-2xl hover:text-[#b1d690]">
                <FaBars />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="h-28 mt-8">
                <DropdownMenuSeparator>
                  <DropdownMenuItem>
                    <a href="#home">Home</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#myProject">Project</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#tools">Tools</a>
                  </DropdownMenuItem>
                </DropdownMenuSeparator>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <div
        id="jumbotron"
        className="flex justify-center items-center h-[600px] bg-[#3c3c3c]"
      >
        <div className="text-center flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl tracking-wide">
            Hello I&apos;am <span className="text-[#B1D690]">Djordan</span>
          </h1>
          <h2 className="text-xl md:text-2xl tracking-wider">Web Developer</h2>
          <p className="w-[70%] mx-auto text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            accusamus commodi ipsa. Facilis, dicta mollitia!
          </p>
          <Button className="block w-[20%] md:w-[15%] mx-auto mt-3 bg-[#B1D690] text-[#2d2d2d] hover:bg-[#b1d690]">
            <a href="#myProject">More</a>
          </Button>
        </div>
      </div>
      <div
        id="about"
        className="bg-[#B1D690] text-[#2d2d2d] mx-[6%] md:mx-[12%] relative bottom-24 shadow-lg flex flex-col md:flex-row md:items-start gap-4 p-8 md:p-14"
      >
        <div className="md:w-[30%] ">
          <h1 className="text-center md:text-left text-4xl md:text-5xl">
            About <br />
            Me
          </h1>
        </div>
        <div className="md:w-[70%]">
          <p className="text-justify text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex
            perspiciatis expedita modi suscipit maxime quod, est id, mollitia
            quos libero ducimus nesciunt nisi temporibus quasi ad alias commodi
            voluptatibus.
          </p>
        </div>
      </div>
      <div id="myProject">
        <div className="px-[9%] h-[400px] -mt-[7rem] md:-mt-[5rem] pt-[7rem] pb-14">
          <h1 className="text-2xl">My Project</h1>
          <hr className="bg-[#B1D690] h-2 w-[20%] md:w-[10%] rounded-lg mt-3" />
          <div className="p-6 md:p-[2]">
            <Carousel className="grid py-14 gap-6">
              <CarouselContent>{newDataProject}</CarouselContent>
              <CarouselPrevious className="text-black" />
              <CarouselNext className="text-black" />
            </Carousel>
          </div>
        </div>
      </div>
      <div id="tools" className="px-[9%] mt-[15rem] md:mt-[18rem] pt-[7rem]">
        <h1 className="text-2xl">My Tools</h1>
        <hr className="bg-[#B1D690] h-2 w-[20%] md:w-[10%] rounded-lg mt-3" />
        <div className="py-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {newDataTool}
        </div>
      </div>
      <div id="footer" className="py-14 bg-[#3c3c3c]">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl">
            Get in <span className="text-[#b1d690]">Touch</span>
          </h1>
          <p className="w-[90%] mx-auto text-center text-sm">
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
