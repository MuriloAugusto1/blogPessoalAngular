import { TemaModel } from "./TemaModel"
import { UsuarioModel } from "./UsuarioModel"

export class PostagemModel{
    public id: number
    public titulo: string
    public texto: string
    public date: Date
    public usuario: UsuarioModel
    public tema: TemaModel
}