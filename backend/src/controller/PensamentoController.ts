import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Pensamento } from "../entity/Pensamento"

export class PensamentoController {

    private pensamentoRepository = AppDataSource.getRepository(Pensamento)

    async all(request: Request, response: Response, next: NextFunction) {
        return this.pensamentoRepository.find()
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
}
    // async one(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)


    //     const user = await this.userRepository.findOne({
    //         where: { id }
    //     })

    //     if (!user) {
    //         return "unregistered user"
    //     }
    //     return user
    // }

    

    // async remove(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)

    //     let userToRemove = await this.userRepository.findOneBy({ id })

    //     if (!userToRemove) {
    //         return "this user not exist"
    //     }

    //     await this.userRepository.remove(userToRemove)

    //     return "user has been removed"
    // }

    // async update(request: Request, response: Response, next: NextFunction) {
    //     const id = parseInt(request.params.id)

    //     let userToUpdate = await this.userRepository.findOneBy({ id })

    //     if (!userToUpdate) {
    //         return "this user not exist"
    //     }

    //     await this.userRepository.update(userToUpdate, request.body)

    //     return "user has been updated"
    // }
