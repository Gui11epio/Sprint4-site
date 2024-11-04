"use client"

import { BotaoEstilizado, CorpoPrincipal, SecHelpy } from "../../../style";
import helpy from '../../image/menuHelpy-removebg-preview.png';
import Image from "next/image";
import Script from "next/script";

export default function InicioHelpy() {

    return (
        <CorpoPrincipal>
            <h1 className="titulo">OLÁ, SOU O HELPY</h1>
            <SecHelpy>
                <p>O Chatbot feito para te ajudar com os problemas do seu carro. Apenas responda simples perguntas e descubra sobre o problema de seu veículo</p>
                <BotaoEstilizado>
                    <a href="https://t.me/Bothelpy_bot">Acesse pelo Telegram!</a>
                </BotaoEstilizado>
                <div id="idHelpy">
                    <Image src= {helpy} alt="" />
                </div>

                <Script
                    id="watson-chat"
                    strategy="afterInteractive" // Carrega o script depois de a página estar interativa
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.watsonAssistantChatOptions = {
                            integrationID: "bcb93b21-70ba-48cc-8179-4e1b97aeb4f4", // The ID of this integration.
                            region: "us-south", // The region your integration is hosted in.
                            serviceInstanceID: "5e69f4b1-8519-4a83-8a95-e70f90039b4e", // The ID of your service instance.
                            onLoad: async (instance) => { await instance.render(); }
                            };
                            setTimeout(function(){
                            const t=document.createElement('script');
                            t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
                            document.head.appendChild(t);
                            });
                        `,
                    }}
                />
            </SecHelpy>
            
        </CorpoPrincipal>
    )
}