import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';
import { join } from 'path';

@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    const host = this.configService.get('DB_HOST') || 'localhost';
    const port = this.configService.get('DB_PORT') || '3306';
    const username = this.configService.get('DB_USER_NAME') || 'service';
    const password = this.configService.get('DB_USER_PASSWORD') || 'admin';
    const database = this.configService.get('DB_NAME') || 'test';
    const synchronize = this.configService.get('DB_SYNCHRONIZE') || 'false';
    const path = join(__dirname, '../../**/*.entity{.ts,.js}');

    return {
      type: 'mysql',
      host,
      port,
      username,
      password,
      database,
      entities: [path],
      // 테이블명, 필드명을 어떤 형식으로 생성할지 알려줍니다.
      namingStrategy: new SnakeNamingStrategy(),
      synchronize,
    };
  }
}
