"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion"; 
import ReactMarkdown from "react-markdown"

import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";
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

  const [chat, setChat] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [conversationHistory, setConversationHistory] = useState<string>('');
  
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    
    event.preventDefault();
    //  runChat(prompt);
    
    try {
      
      const prompt = (event.target as HTMLFormElement)?.prompt?.value || "";

      const context = 'Anda adalah AI yang berspesialisasi dalam kecantikan dan mode. Memberikan respons yang trendi, penuh gaya, dan mengikuti mode. , jangan beri saya pertanyaan kembali ';
      const fullPrompt = `${context} ${prompt} ${input} `;
  
      
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: MODEL_NAME,
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE
          }
        ],
      });
      

      const chatSession = model.startChat({
        history: [],
        generationConfig: {
          temperature: 1,
          topP: 0.95,
          topK: 64,
          maxOutputTokens: 100,
          responseMimeType: "text/plain",
        },
      });

      // let buffer = [];
      // let ad = new Markd
      
      const result = await chatSession.sendMessageStream(fullPrompt);
      const response = await result.response;
      
      
      setOutput(response.text());
      setChat(true)

    } catch (error) {
      return console.log(error)
    }

  };
    



  return (
    <div className="h-full w-full flex flex-col gap-8  items-center ">
      <section className="h-full w-full flex justify-center">
       
        {!chat ?
        
        (
          <ServiceAI/>
        ) : 
        (
          <section className="w-[40em] pt-4 mb-16">
          

         {output ? (
           <div className="chat chat-start w-full">
             <div className="chat-bubble max-w-[20em] text-wrap" >
             <ReactMarkdown>
             {output}
             </ReactMarkdown>
               
             </div>
           </div>
         ) : null}
       </section>
        )}
      </section>

      <section className=" w-full h-max z-10 bottom-0  flex justify-center items-end fixed">
        <div className="w-max px-10 pb-2 h-max bg-[#FFF0F9]">
          <form
            onSubmit={onSubmit}
            className="rounded-full flex items-center h-max w-max border-2 border-black  bg-white"
          >
            <input
              type="text"
              name="prompt"
              placeholder="Search....."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-[35em] focus:outline-none bg-transparent text-xl my-1 focus:bg-transparent h-max text-wrap resize-none mx-2 pl-3 rounded-full"
            ></input>

            <div className="flex gap-3 pr-4">
            <button
              className="  rounded-r-full h-full"
              >
              <i className='bx bx-image-add text-2xl p-1'></i>
            </button>
            {input? (            <button
              type="submit"
              className="  rounded-r-full h-full"
            >
              <i className='bx bx-paper-plane text-2xl p-1'></i>
            </button>)
            : null}
            </div>

          </form>
          <h1 className="text-center my-3">Support by GEMINI AI</h1>
        </div>
      </section>
    </div>
  );
}

export default OutputAiPromt;
