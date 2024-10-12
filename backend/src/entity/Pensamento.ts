import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Pensamento {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    mensagem: string

    @Column()
    autor: string

    @Column()
    modelo: number

    @Column({ default: false })
    favoritado: boolean

}
