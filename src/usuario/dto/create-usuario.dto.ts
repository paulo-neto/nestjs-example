import { IsEmail, IsNotEmpty } from "class-validator";
import {IsLoginDeUsuarioUnico} from '../is-nome-de-usuario-unico.validator';


export class UsuarioDTO{
    
    id: number;
    
    @IsLoginDeUsuarioUnico({
        message: 'login precisa ser único!'
    })
    @IsNotEmpty({
        message: 'login é obrigatório!'
    })
    login: string;
    
    @IsEmail({},{
        message: 'email precisa ser válido!!'
    })
    email: string;
}