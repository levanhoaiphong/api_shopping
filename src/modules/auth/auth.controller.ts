import { Body, Controller, HttpException, InternalServerErrorException, Post } from '@nestjs/common';
import { AuthService } from './auth.service';



@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/sign-in")
  async singInCustomer(@Body() body) {
    try{
      return this.authService.singInCustomer(body)
    } catch (exception){
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)

      throw new InternalServerErrorException("Internal Server Error ")
    }
  }

  @Post("/sign-in")
  async singUpCustomer(@Body() body) {
    try {
      return this.authService.singUpCustomer(body)
    } catch (exception) {
      if (exception.status != 500)
        throw new HttpException(exception.response, exception.status)

      throw new InternalServerErrorException("Internal Server Error ")
    }
  }
}
