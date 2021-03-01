import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDTO } from './dto/create-usuario.dto';

@Controller('usuario')
export class UsuarioController {
    
    constructor(private usuariosService: UsuarioService){}

    @Get()
    async getAll(){
        const retorno = await this.usuariosService.getAll();
        return retorno;
    }

    @Get(':usuarioId')
    async getById(@Param('usuarioId') usuarioId){
        const usuario = await this.usuariosService.getById(usuarioId);
        return usuario;
    }

    @Post()
    async addUsuario(@Body() usuarioNovo:CreateUsuarioDTO){
        const retorno = await this.usuariosService.addUsuario(usuarioNovo);
        return retorno;
    }

    @Put(':usuarioId')
    async editUsuario(@Body() usuario: CreateUsuarioDTO, @Param('usuarioId')idUsuario:number){
        const retorno = this.usuariosService.editUsuario(usuario,idUsuario);
        return retorno;
    }

    @Delete(':usuarioId')
    async removeUsuario(@Param('usuarioId') usuarioId: number){
        const retorno = await this.usuariosService.removeUsuario(usuarioId);
        return retorno;
    }
}
