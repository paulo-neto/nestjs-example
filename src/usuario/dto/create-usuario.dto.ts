import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUsuarioDTO{
    
    readonly id: number;
    
    @IsNotEmpty({
        message: 'login é obrigatório!'
    })
    readonly login: string;
    
    @IsEmail({},{
        message: 'email precisa ser válido!!'
    })
    readonly email: string;
}