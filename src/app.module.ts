import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { InterfaceModule } from './interfaces/interface.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

const dpath = join(process.cwd(), 'src/graphql.ts');

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: dpath,
        outputAs: 'class',
      },
    }),
    DatabaseModule,
    DomainModule,
    ApplicationModule,
    InterfaceModule,
    InfrastructureModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
