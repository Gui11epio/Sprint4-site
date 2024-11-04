"use client"
import Image from "next/image";
import { BodyMembros } from "../../../style";
import vic from '../../image/Victor.jpg';
import fe from '../../image/fernando.jpg';
import gui from '../../image/guilherme.jpeg';

export default function PaginaMembros() {
    return (
        <BodyMembros>
         <div className="princ">
            <div className="participante">
                <Image src= {gui} alt="Imagem da Pessoa 1" className="participanteimg" />
                <h2>Nome: Guilherme Camasmie Laiber De Jesus</h2>
                <p>RM: 554894</p>
            </div>

            <div className="participante">
                <Image src= {vic} alt="Imagem da Pessoa 2" className="participanteimg" />
                <h2>Nome: Victor Martins do Santos</h2>
                <p>RM: 558182 </p>
            </div>

            <div className="participante" >
                <Image src= {fe} alt="Imagem da Pessoa 3" className="participanteimg" />
                <h2>Nome: Fernando Fernandes Prado </h2>
                <p>RM:  557982 </p>
            </div>
         </div>
        </BodyMembros>
    );
 
}