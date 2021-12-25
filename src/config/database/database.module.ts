import { Module } from '@nestjs/common';
import { DatabaseConfigService } from './database.config.serivce';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService,
    }),
  ],
  providers: [DatabaseConfigService],
})
export class DatabaseModule {}
