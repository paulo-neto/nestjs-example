import { registerDecorator, ValidationOptions, ValidatorConstraintInterface, ValidationArguments, ValidatorConstraint } from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from './usuario.service';

@Injectable()
@ValidatorConstraint()
export class IsLoginDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

    constructor(private usuarioService: UsuarioService) {}

    validate(login: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
        return !!!this.usuarioService.buscaPorLogin(login);
    }
}

export function IsLoginDeUsuarioUnico(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsLoginDeUsuarioUnicoConstraint,
        });
    };
}
  