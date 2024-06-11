import { Inject, Injectable } from '@nestjs/common';
import { FirebaseService } from '../firebase/firebase.service';


@Injectable()
export class AuthService {
    // constructor(@Inject(FirebaseService)  private readonly firebaseService: FirebaseService){}
    async singInCustomer (body) {
        const {phone} = body
        console.log("🚀 ~ AuthService ~ singInCustomer ~ phone:", phone);
        // await this.firebaseService.sendOtp(phone)
    }
    async singUpCustomer(body) {

    }
}
