import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './config/database/database.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { PartnerModule } from './modules/partner.module';

const dpath = join(process.cwd(), 'src/graphql.schema.ts');

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
    PartnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
