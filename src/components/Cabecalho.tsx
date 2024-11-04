"use client"
import icone from '../image/icone.jpg';
import helpy from '../image/HELPY.png'
import { BotaoCliente, BotaoEstilizado, BotoesCabecalho, CabecHeader, ContainerCabecalho, LinhaEstilizada, LinkEstilizado } from "../../style";
import Image from 'next/image';
export default function Cabecalho() {
    return (
        <CabecHeader>
            <ContainerCabecalho>
                <Image src={helpy} alt="" className='logoHelpy'/>
                <BotoesCabecalho className="botao">
                    <BotaoEstilizado>
                        <LinkEstilizado href="/">Página Principal</LinkEstilizado>
                    </BotaoEstilizado>
                    <BotaoEstilizado>
                        <LinkEstilizado href="/helpy">HELPY</LinkEstilizado>
                    </BotaoEstilizado>
                    <BotaoEstilizado>
                        <LinkEstilizado href="/membros">Página dos Membros</LinkEstilizado>
                    </BotaoEstilizado>
                </BotoesCabecalho>
                <BotaoCliente>
                    <LinkEstilizado href="/cadastro">
                        <Image src={icone} alt="" className='logoHelpy'/>
                    </LinkEstilizado>
                </BotaoCliente>
            </ContainerCabecalho>
            <LinhaEstilizada />
        </CabecHeader>
    );
}