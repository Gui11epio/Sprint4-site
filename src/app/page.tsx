"use client"
import Image from "next/image";
import { BotaoEstilizado, CorpoPrincipal, SectionPrincipal,LinkEstilizado } from "../../style";
import propaganda from '../image/helpuPropaganda.png'
 
 
export default function Inicio() {
    return (
        <CorpoPrincipal >
            <Image src={propaganda}  alt="" className="imgHelpy"/>
            <SectionPrincipal>
                <p>Com o HELPY, diagnosticar problemas no seu carro ficou muito mais fácil. Conversando com nosso chatbot, HELPY, você terá um diagnóstico preciso e rápido, sem complicação, é como conversar com um mecânico amigo. <br />
                <br />
               
                O HELPY te ajuda a identificar desde problemas relacionados ao seu carro, como um freio e falhas no motor. E o melhor? Se você é cliente Porto, o nosso diagnóstico também é válido para o seu seguro!
               
                Com o diagnóstico em mãos, você pode solicitar um reboque, encontrar um mecânico de confiança ou entrar em contato com a sua seguradora. Todas as suas informações são tratadas com a mais alta segurança e privacidade. </p>
 
                <BotaoEstilizado>
                    <LinkEstilizado href="/helpy">Vá para HELPY e acesse a nossa solução</LinkEstilizado>
                </BotaoEstilizado>
            </SectionPrincipal>
        </CorpoPrincipal>
    );
}