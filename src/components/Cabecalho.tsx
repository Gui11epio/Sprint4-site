"use client"
import icone from '../image/icone.jpg';
import helpy from '../image/HELPY.png'
import { BotaoCliente, BotaoEstilizado, BotoesCabecalho, CabecHeader, ContainerCabecalho, ImagemCabec, ImgCabecalho, LinhaEstilizada, LinkEstilizado } from "../../style";
export default function Cabecalho() {
    return (
        <CabecHeader>
            <ContainerCabecalho>
                <ImgCabecalho src="/image/HELPY.png" alt="" />
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
                        <ImagemCabec src= "/image/icone.jpg"  id='icone' />
                    </LinkEstilizado>
                </BotaoCliente>
            </ContainerCabecalho>
            <LinhaEstilizada />
        </CabecHeader>
    );
}