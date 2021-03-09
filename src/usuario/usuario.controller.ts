import { Controller, Get, Param, Post, Body, Put, Delete, HttpStatus } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioDTO } from './dto/create-usuario.dto';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';
import { NestResponse } from 'src/core/http/nest-response';
import { NotFoundException } from '@nestjs/common';

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

    @Get('/login/:login')
    public getByLogin(@Param('login') login): UsuarioDTO {
        const usuario = this.usuariosService.buscaPorLogin(login);
        if (!usuario) {
            throw new NotFoundException({
                statusCode: HttpStatus.NOT_FOUND,
                message: 'Usuário não encontrado!!'
            });
        }
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
    public editUsuario(@Body() usuario: UsuarioDTO, @Param('usuarioId') usuarioId: number): NestResponse {
        const usuarioEditado = this.usuariosService.editUsuario(usuario, usuarioId);
        return new NestResponseBuilder()
        .comStatus(HttpStatus.CREATED)
        .comHeaders({
            'Location': `/users/${usuarioEditado.login}`
        })
        .comBody(usuarioEditado)
        .build();
    }

    @Delete(':usuarioId')
    public removeUsuario(@Param('usuarioId') usuarioId: number) {
        this.usuariosService.removeUsuario(usuarioId);
    }
}
