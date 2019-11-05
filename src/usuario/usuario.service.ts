import { Injectable, HttpException } from '@nestjs/common';
import { USUARIOS }     from '../mock/usuarios.mock';
import { resolve, promises } from 'dns';

@Injectable()
export class UsuarioService {
    usuarios = USUARIOS;


    getAll(): Promise<any>{
        return new Promise(resolve => {
            resolve(this.usuarios);
        });
    }

    getById(usuarioId): Promise<any>{
        let id = Number(usuarioId);
        return new Promise(resolve =>{
            const usuario = this.usuarios.find(usu => usu.id === id);
            if(!usuario){
                throw new HttpException('Usuário não encontrado!!',404);
            }
            resolve(usuario);
        });
    }

    addUsuario(usuario): Promise<any>{
        return new Promise(resolve => {
            this.usuarios.push(usuario);
            resolve(this.usuarios);
        })
    }

    editUsuario(usuario, usuarioId): Promise<any>{
        let id = Number(usuarioId);
        return new Promise(resolve => {
            const index = this.usuarios.findIndex(usu => usu.id === id);
            if(index === -1){
                throw new HttpException('Usuário não encontrado!!',404);
            }
            this.usuarios.splice(index,1);
            usuario.id = id;
            this.usuarios.push(usuario);
            resolve(this.usuarios);
        });
    }

    removeUsuario(usuarioId): Promise<any>{
        let id = Number(usuarioId);
        return new Promise(resolve => {
            const index = this.usuarios.findIndex(usu => usu.id === id);
            if(index === -1){
                throw new HttpException('Usuário não encontrado!!',404);
            }
            this.usuarios.splice(index,1);
            resolve(this.usuarios);
        });
    }
}
