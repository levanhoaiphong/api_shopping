import { Injectable } from '@nestjs/common';
// import * as admin from 'firebase-admin';
// import * as serviceAccount from '../../config/send-otp-2ba91-firebase-adminsdk-cibgl-fed41206a5.json';

@Injectable()
export class FirebaseService {
    // constructor(private readonly app: admin.app.App) {
    //     this.app = admin.initializeApp({
    //         credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    //     });
    // }
    // async sendOtp(phoneNumber: string): Promise<string> {
    //     const verificationId = await this.app.auth().createCustomToken(phoneNumber);
    //     // Đây chỉ là ví dụ, bạn cần tích hợp Firebase Functions hoặc một dịch vụ SMS để gửi OTP
    //     return verificationId;
    // }

    // async verifyOtp(phoneNumber: string, code: string): Promise<boolean> {
    //     // Logic để xác minh OTP với Firebase
    //     // Có thể sử dụng admin.auth().verifyIdToken(token) nếu sử dụng Firebase Custom Authentication
    //     return true; // Ví dụ đơn giản
    // }
}
