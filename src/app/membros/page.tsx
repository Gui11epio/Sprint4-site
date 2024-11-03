"use client"
import { BodyMembros } from "../../../style";
import vic from '../../image/Victor.jpg';
import fe from '../../image/fernando.jpg';
import gui from '../../image/guilherme.jpeg';

export default function PaginaMembros() {

    return (
        <BodyMembros>
            <div className="participante">
                <img src= "/image/guilherme.jpeg" alt="Imagem da Pessoa 1" />
                <h2>Nome: Guilherme Camasmie Laiber De Jesus</h2>
                <p>RM: 554894</p>
            </div>

            <div className="participante">
                <img src= "/image/Victor.jpg" alt="Imagem da Pessoa 2" />
                <h2>Nome: Victor Martins do Santos</h2>
                <p>RM: 558182 </p>
            </div>

            <div className="participante" >
                <img src= "/image/fernando.jpg" alt="Imagem da Pessoa 3" />
                <h2>Nome: Fernando Fernandes Prado </h2>
                <p>RM:  557982 </p>
            </div>
        </BodyMembros>
    )

}