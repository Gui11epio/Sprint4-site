"use client"
import { CorpoPrincipal, FormCadastro } from "../../../style";

export default function PaginaCadastro() {
    return (
        <CorpoPrincipal>
            <br/><br />
            <FormCadastro>
                <div className="conteiner">

                    <fieldset className="field">

                        <h2>CADASTRO DO USUÁRIO</h2>
                        <hr />
                        <br />
                        <label className="label">Seu CPF</label>
                        <br />
                        <input type="text" className="input" required placeholder="xxx-xxx-xxx-yy" />
                        <br />
                        <label className="label">Seu Nome</label>
                        <br />
                        <input type="text" className="input" required placeholder="Nome Completo" />
                        <br />
                        <label className="label">Seu Email</label>
                        <br />
                        <input type="email" className="input" required placeholder="seuemail@dominio.com" />
                        <br />
                        <label className="label">Sua Senha</label>
                        <br />
                        <input type="password" className="input" required placeholder=" Apenas 5 dígitos" />
                        <br />
                        <label className="label">Seu Endereço</label>
                        <br />
                        <input type="text" className="input" required placeholder="Rua, numero estado" />

                    </fieldset>

                    <fieldset className="field2">
                        <h2>CADASTRO VEICULO</h2>
                        <hr />
                        <br />
                        <label className="label">Marca do Carro</label>
                        <br />
                        <input type="text" className="input" required placeholder="Marca do Carro" />
                        <br />
                        <label className="label">Modelo do Carro</label>
                        <br />
                        <input type="text" className="input" required placeholder="Modelo do Carro" />
                        <br />
                        <label className="label">Placa</label>
                        <br />
                        <input type="text" className="input" required placeholder="ex: abc123" />
                    </fieldset>
                </div>

                <div className="botoes">
                    <br /> <br />
                    <input type="submit" value="Enviar" className="botao" /> | <input type="reset" value="Apagar" className="botao" />
                </div>
            </FormCadastro>
        </CorpoPrincipal>
    )
}