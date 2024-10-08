import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Pensamento } from "../entity/Pensamento"

export class PensamentoController {

    private pensamentoRepository = AppDataSource.getRepository(Pensamento)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.pensamentoRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        const user = await this.pensamentoRepository.findOne({
            where: { id }
        })

        if (!user) {
            return "Pensamento não encontrado"
        }
        return user
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { mensagem, autor, modelo } = request.body;
        const pensamento = Object.assign(new Pensamento(), {
            mensagem,
            autor,
            modelo
        })

        return this.pensamentoRepository.save(pensamento)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let pensamentoDeletado = await this.pensamentoRepository.findOneBy({ id })

        if (!pensamentoDeletado) {
            return "Pensamento não encontrado"
        }

        await this.pensamentoRepository.remove(pensamentoDeletado)

        return "Pensamento removido"
    }

    async update(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let pensamentoAtualizado = await this.pensamentoRepository.findOneBy({ id })

        if (!pensamentoAtualizado) {
            return "Pensamento não encontrado"
        }

        await this.pensamentoRepository.update(pensamentoAtualizado, request.body)

        return "Pensamento atualizado"
    }
}





