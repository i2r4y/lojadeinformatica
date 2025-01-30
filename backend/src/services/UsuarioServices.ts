import prismaClient from "../prisma";
import { hash }from 'bcryptjs'

interface cadUsuarios {
    nome: string,
    email: string,
    password: string
}

interface AlterarUsuarios {
    id: string,
    nome: string,
    email: string
}

class UsuariosServices {
    async cadastrarUsuarios({ nome, email, password }: cadUsuarios) {

        const senhaCrypt = await hash(password, 8)
        await prismaClient.usuario.create({
            data: {
                nome: nome,
                email: email,
                senha: senhaCrypt,
               
            }
        })
        return ({ dados: 'Cadastro Efetuado Com Sucesso' })
    }

    async consultarUsuarios() {
        const resposta = await prismaClient.usuario.findMany({
            select: {
                id: true,
                nome: true,
                email: true,
            }
        })
        return resposta
    }

    async consultarUsuariosUnico(id: string) {
        const resposta = await prismaClient.usuario.findFirst({
            where: {
                id: id
            },
            select: {
                nome: true,
                email: true,
                senha: true
            }
        })
        return resposta
    }

    async alterarDadosUsuarios({ id, nome, email }: AlterarUsuarios) {
        await prismaClient.usuario.update({
            where: {
                id: id
            },
            data: {
                nome: nome,
                email: email,
                
            }
        })
        return ({ dados: 'Cadastro Alterado Com Sucesso' })
    }

    async apagarUsuarios(id: string) {
        await prismaClient.usuario.delete({
            where: {
                id: id
            }
        })
        return ({ dados: 'Registro Apagado com Sucesso' })
    }
}

export { UsuariosServices }