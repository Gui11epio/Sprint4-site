import styled from "styled-components";
 
export const CabecHeader = styled.header`
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    color: #42BCEC;
`;
 
export const ContainerCabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
 
export const TituloCabecalho = styled.h1`
    font-family: 'Courier New', Courier, monospace;
    font-size: 35px;
    margin-left: 20px;
    margin-right: 20px;
`;
 
export const ImgCabecalho = styled.img`
    width: 100px;
    height: 100px;
`
 
export const BotoesCabecalho = styled.li`
    display: flex;
    gap: 10px;
    margin-right: auto;
    margin-left: 20px;
`;
 
export const BotaoCliente = styled.div`
`;
 
export const LinhaEstilizada = styled.hr`
    border: 2px solid #42BCEC;
    margin-top: 20px;
`;
 
export const LinkEstilizado = styled.a`
    text-decoration: none;
    color: #000;
 
    &:visited {
        color: #000;
    }
`;
 
export const BotaoEstilizado = styled.button`
    text-decoration: none;
    color: #000;
    background-color: #f0f0f0;
    border: 3px solid #42BCEC;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s;
`;
 
export const CorpoPrincipal = styled.div`
    background-color: #42BCEC;
    height: 100vh;
    width: 100%;
    flex-grow: 1;
 
   
 
    h1{
        color: black;
        font-family: 'Times New Roman', Times, serif;
        justify-content: center;
        text-align: center;
        padding: 20px;
 
    }
   
 
`
 
export const SectionPrincipal = styled.section`
 
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    background-color: white;
 
    h2{
        color: black;
        text-align: left;
        justify-content: left;
        margin: 10px;
        font-family: 'Times New Roman', Times, serif;
    }
 
    p{
        color: black;
        text-align: left;
        justify-content: left;
        margin: 10px;
        font-family: 'Times New Roman', Times, serif;
    }
 
`
 
export const Rodape = styled.footer`
 
    width: 100%;
    min-height: 5vh;
    background-color: white;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
 
    p{
        color: #00008B;
        text-align: center;
    }
 
`
 
export const BodyMembros = styled.body`
 
div{
    height: 171;
    width: 1440;
}
 
.sec{
    grid-area: 'sec';
    background-color: white;
}  
 
 
h2{
    text-align: center;
}
 
p{
    text-align: center;
}
 
 
input{
    align-self:center ;
}
 
legend{
    text-align: center;
}
#participante h2, .participante p {
    color: #FFFFFF;
 
   
}
 
#participante img {
    width: 250px;
    height: 100px;
    justify-content: center;
    align-items: center;
    /* width: 50%; */
    min-height: 350px;
    border: 2px solid blue;
    background-color: white;
 
    padding: 10px;
}
 
`
 
 
 
export const ImagemCabec = styled.img`
    width:50px;
    height: 50px;
 
`
 
export const FormCadastro = styled.form`
 
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    background-color: white;
    padding: 20px;
    margin: 0 auto;
    max-height: 100vh;
    overflow-y: auto;
 
 
    .conteiner{
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }
 
    .field, .field2 {
        width: 45%;
        min-height: 350px;
        padding: 10px;
        background-color: #f0f0f0;
    }
 
    .label {
        display: block;
        font-size: 20px;
        padding: 10px;
    }
 
    .input {
        border-radius: 15px;
        display: block;
        margin: 0 0 20px;
        padding: 10px 25px;
        justify-content: center;
        align-items: center;
    }
 
    hr {
        color: white;
    }
 
    h2 {
        padding: 30px;
    }
 
    .botoes{
        display: flex;
        justify-content: center;
        margin-top: 20px;
        gap: 10px;
    }
 
    .botao {
        text-decoration: none;
        color: #000;
        background-color: #f0f0f0;
        border: 3px solid #42BCEC;
        padding: 10px 20px;
        border-radius: 5px;
        transition: background-color 0.3s;
    }
 
    /* Estilos para telas maiores (Desktop) */
    @media (min-width: 1024px) {
        width: 50%;
        max-height: 85vh;
        overflow-y: auto;
 
        .conteiner {
            flex-direction: row;
        }
 
        .field, .field2 {
            width: 48%;
        }
    }
 
    /* Estilos para tablets */
    @media (max-width: 1023px) and (min-width: 768px) {
        width: 70%;
        max-height: 90vh;
 
        .conteiner {
            flex-direction: column;
        }
 
        .field, .field2 {
            width: 100%;
        }
    }
 
    /* Estilos para dispositivos móveis */
    @media (max-width: 767px) {
        width: 90%;
        max-height: 95vh;
        overflow-y: auto;
 
        .conteiner {
            flex-direction: column;
            flex-grow: 1;
        }
 
        .field, .field2 {
            width: 100%;
        }
 
        .label {
            font-size: 18px;
        }
 
        .input {
            padding: 8px 20px;
        }
 
        .botoes {
            flex-direction: column;
        }
 
        .botao {
            width: 100%;
            padding: 12px;
        }
    }
`;
   
 
export const SecHelpy = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: white;
    margin: 0 auto;
 
    p{
        font-size: 18px;
        color: black;
        max-width: 50%;
    }
 
    div{
        max-width: 400px;
        height: auto;
    }
 
    .titulo{
        background-color: white;
    }
 
`
 
export const DivErro = styled.div`
 
    border: 2px solid #42BCEC;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    padding: 20px;
    margin: 0 auto;
    gap: 50px;
`