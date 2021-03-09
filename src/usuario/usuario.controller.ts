import { Controller, Get, Param, Post, Body, Put, Delete, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './dto/create-usuario.dto';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { NestResponse } from 'src/core/http/nest-response';

@Controller('usuario')
export class UsuarioController {

    constructor(private usuariosService: UsuarioService) { }

    @Get()
    public getAll(): Array<UsuarioDTO> {
        const retorno = this.usuariosService.getAll();
        return retorno;
    }

    @Get(':usuarioId')
    public getById(@Param('usuarioId') usuarioId): UsuarioDTO {
        const usuario = this.usuariosService.getById(usuarioId);
        return usuario;
    }

    @Post()
    public addUsuario(@Body() usuarioNovo: UsuarioDTO): NestResponse {
        const usuarioCriado = this.usuariosService.addUsuario(usuarioNovo);
        return new NestResponseBuilder()
            .comStatus(HttpStatus.CREATED)
            .comHeaders({
                'Location': `/users/${usuarioCriado.login}`
            })
            .comBody(usuarioCriado)
            .build();
    }

    @Put(':usuarioId')
    public editUsuario(@Body() usuario: UsuarioDTO, @Param('usuarioId') idUsuario: number) {
        const retorno = this.usuariosService.editUsuario(usuario, idUsuario);
        return retorno;
    }

    @Delete(':usuarioId')
    public removeUsuario(@Param('usuarioId') usuarioId: number) {
        this.usuariosService.removeUsuario(usuarioId);
    }
}
