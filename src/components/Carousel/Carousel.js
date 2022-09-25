import React from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { image } from "./images/images";
import {image as logo}  from '../../public/images/images'



function CarouselWork() {
 
  return (
    <>
      <div className="w-full h-full ">
        <Carousel
          className="h-screen"
          arrows={true}
          prevArrow={<LeftOutlined />}
          nextArrow={<RightOutlined />}
        >
          <div className="w-full  p-12">
            <div className="relative">
              <img alt="gambar" className="rounded-md" src={image.grands} />
              <div className="flex flex-col justify-center items-center rounded-md h-full w-full absolute bottom-0 bg-gray-800 hover:opacity-90 transition ease-out duration-500 opacity-0">
                <h1 className="text-cyan text-3xl font-bold ">Grand's Recipes</h1>
                <span className="text-cyan text-lg opacity-50 font-semibold">Grand's Recipe React Web Based,In This Website You Can Share Your Special Recipe With People Around The Globe</span>
                <div className="flex gap-4 my-4 bg-gray-500 p-4 rounded-md">
                <div className="w-12 h-12">
              {logo.reactjs}
              </div>
              <div className="w-12 h-12">
              {logo.nodejs}
              </div>
                </div>
            <a href="https://grands-recipe.vercel.app/" className="w-full flex justify-center items-center">
                <button className="w-1/5 mt-4 border-cyan border-4 rounded-lg text-cyan p-1 font-bold text-lg hover:text-navy hover:bg-cyan transition ease-out duration-300">

                  Visit!
                </button>
                </a>
              </div>
            </div>
            
          </div>
          <div className="w-full  p-12">
          <div className="relative">
              <img className="rounded-md" src={image.grands} />
              <div className="flex flex-col justify-center items-center rounded-md h-full w-full absolute bottom-0 bg-gray-800 hover:opacity-90 transition ease-out duration-500 opacity-0">
                <h1 className="text-cyan text-3xl font-bold ">Grand's Recipes</h1>
                <span className="text-cyan text-lg opacity-50 font-semibold">Grand's Recipe React Web Based,In This Website You Can Share Your Special Recipe With People Around The Globe</span>
                <div className="flex gap-4 my-4 bg-gray-500 p-4 rounded-md">
                <div className="w-12 h-12">
              {logo.reactjs}
              </div>
              <div className="w-12 h-12">
              {logo.nodejs}
              </div>
                </div>
            <a href="https://grands-recipe.vercel.app/" className="w-full flex justify-center items-center">
                <button className="w-1/5 mt-4 border-cyan border-4 rounded-lg text-cyan p-1 font-bold text-lg hover:text-navy hover:bg-cyan transition ease-out duration-300">

                  Visit!
                </button>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full p-12">
          <div className="relative">
              <img className="rounded-md" src={image.binar} />
              <div className="flex flex-col justify-center items-center rounded-md h-full w-full absolute bottom-0 bg-gray-800 hover:opacity-90 transition ease-out duration-500 opacity-0">
                <h1 className="text-cyan md:text-3xl font-bold ">Binar Academy Challenge Chapter 11</h1>
                <span className="text-cyan md:text-lg opacity-50 font-semibold">NextJS Web Based,In This Website You Can Play Rock,Paper,Scissors and Reach the Highest Score</span>
                <div className="flex gap-4 my-4 bg-gray-500 p-4 rounded-md">
                <div className="carousel-item-slide">

              {logo.reactjs}
              </div>
              <div className="carousel-item-slide">

              {logo.nodejs}
              </div>
                </div>
            <a href="https://frontend-binarch11.herokuapp.com/" className="w-full flex justify-center items-center">
                <button className="w-1/5 mt-4 border-cyan border-4 rounded-lg text-cyan p-1 font-bold text-lg hover:text-navy hover:bg-cyan transition ease-out duration-300">

                  Visit!
                </button>
                </a>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default CarouselWork;
