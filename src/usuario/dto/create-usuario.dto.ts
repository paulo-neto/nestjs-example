import { IsEmail, IsNotEmpty } from "class-validator";

export class UsuarioDTO{
    
    id: number;
    
    @IsNotEmpty({
        message: 'login é obrigatório!'
    })
    login: string;
    
    @IsEmail({},{
        message: 'email precisa ser válido!!'
    })
    email: string;
}