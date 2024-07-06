import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { SuccessException } from 'src/config/response';

@Injectable()
export class AuthService {
    constructor(private JwtService: JwtService) { }
    prisma = new PrismaClient()
    async singInCustomer(model) {
        let { email, password } = model
        let checkEmail = await this.prisma.customers.findFirst({
            where: {
                email: email
            }
        })
        if (checkEmail) {
            if (bcrypt.compareSync(password, checkEmail.password)) {
                let token = this.JwtService.sign({ data: { id: checkEmail.cus_id } }, { expiresIn: "5d", algorithm: "HS256", secret: "BI_MAT" })
                throw new SuccessException(HttpStatus.OK, token, "Login Success", new Date().toISOString())
            } else {
                throw new HttpException("Mật khẩu không đúng", HttpStatus.BAD_REQUEST)
            }
        } else {
            throw new HttpException("Email không đúng", HttpStatus.BAD_REQUEST)
        }
    }
    async singUpCustomer(model) {
        let { email, password } = model
        let newUser = {
            email,
            password: bcrypt.hashSync(password, 10),
        }
        let checkEmail = await this.prisma.customers.findFirst({
            where: {
                email: email
            }
        })
        if (checkEmail) {
            throw new HttpException("Email đã tồn tại", HttpStatus.BAD_REQUEST)
        }
        let data = await this.prisma.customers.create({ data: newUser })
        throw new SuccessException(HttpStatus.CREATED, data, "Sign Success", new Date().toISOString())
    }
}
