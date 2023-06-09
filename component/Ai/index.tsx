import { IAiData } from "@lib/types";
import { FC, useState, useEffect } from "react";

const API_KEY = "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";

export const AiChatBot: FC = () => {
    const [aiData, setAiData] = useState<IAiData | null>(
        null
    );

    useEffect(() => {
       fetchAiData();
    }, []);

    const fetchAiData = async () => {
        try { 
         const apiKey = "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";
         const url = `https://api.openai.com/v1/chat/completions`;  //.json?key=${apiKey}
 
         const headers = {
             "Content-Type": "application/json",
             Authorization: `Bearer ${apiKey}`
           };
     
           const payload = {
             model: "gpt-3.5-turbo",
             messages: [
               {
                 role: "system",
                 content: "Welcome to the Health Chat! How can I assist you today?"
               },
               {
                 role: "user",
                 content: "How can I improve my sleep?"
               }
             ]
           };
     
           const response = await fetch(url, {
             method: "POST",
             headers: headers,
             body: JSON.stringify(payload)
           });
 
         if (!response.ok) {
             throw new Error("Error fetching data");
         }
 
         const data = await response.json();
         console.log(data);
         setAiData(data as IAiData);
     } catch (error) {
         console.error("Error fetching data", error);
     }
    };

return (
    <>
  <section className="side-bar">
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      + New Chat
    </button>
  </section>
    </>
);
};
