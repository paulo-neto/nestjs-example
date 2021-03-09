import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import {IsLoginDeUsuarioUnicoConstraint} from './is-nome-de-usuario-unico.validator'

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, IsLoginDeUsuarioUnicoConstraint]
})
export class UsuarioModule {}
