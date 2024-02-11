import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/input/signIn.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService : AuthService,
    ){}

    @Post('login')
    SignIn(@Body() dataToLogin : SignInDto) : Promise<{ access_token: string }>{
        return this.authService.SignIn(dataToLogin);
    }


}
