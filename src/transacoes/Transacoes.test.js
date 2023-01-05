import React from "react";
import { render } from "@testing-library/react";
import Transacoes from "./Transacoes";



describe('Componente de transação do extrato', () => {
    it('O snapshot do component deve permanecer sempre o mesmo',
        () => {
            const { container } = render(<Transacoes
                tipo=''
                valor=''
                data=''

            />)
            expect(container.firstChild).toMatchSnapshot();

        })
}); 