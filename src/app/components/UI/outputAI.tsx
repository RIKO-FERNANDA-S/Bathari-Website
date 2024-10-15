"use client";
import { GoogleGenerativeAI } from "@google/generative-ai";
import React from "react";
import { useState } from "react";

const API_KEY = process.env.GEMINI_API_KEY as string;
const genAI = new GoogleGenerativeAI(API_KEY);
const MODEL_NAME = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



function OutputAI() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

 

  return (
    <main className="h-max w-full flex justify-center">
      <section className="w-[40em] pt-4">
        
        {output ? (
          <div className="chat chat-start w-full">
            <div className="chat-bubble max-w-[20em] text-wrap">{output}</div>
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default OutputAI;
