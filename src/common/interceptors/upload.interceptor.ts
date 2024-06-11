import { Injectable, NestInterceptor, ExecutionContext, CallHandler, BadRequestException } from '@nestjs/common';
import { FileInterceptor, MulterModuleOptions } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class FileUploadInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        if(!request){
            throw new BadRequestException('File is not upload')
        }
        return next.handle()
    }
}

export const multerOptionsFactory = (destinationFile: string): MulterModuleOptions => ({
    storage: diskStorage({
        destination: `./public/${destinationFile}`, // Thư mục lưu trữ động
        filename: (req, file, callback) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
    }),
    fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
            return callback(new BadRequestException('Unsupported file type'), false);
        }
        callback(null, true);
    },
    limits: {
        fileSize: 2 * 1024 * 1024,
    },
})

export const createImageUploadInterceptor = (destinationFolder: string) =>
    FileInterceptor('file', multerOptionsFactory(destinationFolder));