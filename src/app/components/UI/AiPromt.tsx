"use client";
import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
import OutputAI from "./outputAI";
import ServiceAI from "../layouts/serviceAI";



const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY as string;



// export async function runChat(prompt: string) {

//   const genAI = new GoogleGenerativeAI(API_KEY);
//   const model = genAI.getGenerativeModel({
//     model: MODEL_NAME
//   });

//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 64,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };

//   const safetySettings = [
//     {
//       category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//       threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//     },
//     {
//       category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//       threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//     },
//   ];

//   const chatSession = model.startChat({
//     generationConfig,
//     safetySettings,
//     history: [
//     ],
//   });

//   const result = await chatSession.sendMessage(prompt);
//   const response = result.response;

//   console.log(response.text());
// }

function OutputAiPromt() {

  const data = fetch('/api/gemini')
  const [chat, setChat] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const prompt = (event.target as HTMLFormElement)?.prompt?.value || "";
    //  runChat(prompt);

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: MODEL_NAME,
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 100,
      responseMimeType: "text/plain",
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
      },
    ];

    const chatSession = model.startChat({
      generationConfig,
      safetySettings,
      history: [],
    });

    const result = await chatSession.sendMessageStream(prompt);
    const response = await result.response;

    setOutput(response.text());
    setChat(output == "")
  };



  return (
    <main className="h-full w-full flex flex-col gap-8  items-center ">
      <section className="h-full w-full flex justify-center">
       
        {!chat ?
        
        (
          <ServiceAI/>
        ) : 
        (
          <section className="w-[40em] pt-4">
          {input ? (
         <div className="chat chat-end">
         <div className="chat-bubble">{}</div>
       </div>
         ): null}

         {output ? (
           <div className="chat chat-start w-full">
             <div className="chat-bubble max-w-[20em] text-wrap">
               {output }
             </div>
           </div>
         ) : null}
       </section>
        )}
      </section>

      <section className=" w-full h-full flex justify-center items-end fixed">
        <div className="w-max px-10 pb-12 h-max bg-[#FFF0F9]">
          <form
            onSubmit={onSubmit}
            className="rounded-full flex items-center h-max w-max border-2 border-black bg-white"
          >
            <input
              type="text"
              name="prompt"
              placeholder="Search....."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-[35em] focus:outline-none bg-transparent focus:bg-transparent h-max text-wrap resize-none px-6"
            ></input>
            <button
              type="submit"
              className=" bg-btnNavbar rounded-r-full h-full"
            >
              <i className="bx bx-right-arrow-alt text-2xl py-1 px-3 "></i>
            </button>
          </form>
          <h1 className="text-center my-3">Support by GEMINI AI</h1>
        </div>
      </section>
    </main>
  );
}

export default OutputAiPromt;
