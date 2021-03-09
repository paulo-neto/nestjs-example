import { Injectable, HttpException } from '@nestjs/common';
import { USUARIOS } from '../mock/usuarios.mock';
import { resolve, promises } from 'dns';
import { UsuarioDTO } from './dto/create-usuario.dto';

@Injectable()
export class UsuarioService {
    usuarios = USUARIOS;


    public getAll(): Array<UsuarioDTO> {
        return this.usuarios;
    }

    public getById(usuarioId: number): UsuarioDTO {
        const usuario = this.usuarios.find(usu => usu.id === usuarioId);
        if (!usuario) {
            throw new HttpException('Usuário não encontrado!!', 404);
        }
        return usuario;
    }

    public addUsuario(usuario: UsuarioDTO): UsuarioDTO {
        this.usuarios.push(usuario);
        return usuario;
    }

    public editUsuario(usuario: UsuarioDTO, usuarioId: number): UsuarioDTO {
        const index = this.usuarios.findIndex(usu => usu.id === usuarioId);
        if (index === -1) {
            throw new HttpException('Usuário não encontrado!!', 404);
        }
        this.usuarios.splice(index, 1);
        usuario.id = usuarioId;
        this.usuarios.push(usuario);
        return usuario;
    }

    public removeUsuario(usuarioId: number) {
        let id = Number(usuarioId);
        const index = this.usuarios.findIndex(usu => usu.id === usuarioId);
        if (index === -1) {
            throw new HttpException('Usuário não encontrado!!', 404);
        }
        this.usuarios.splice(index, 1);
    }
}
