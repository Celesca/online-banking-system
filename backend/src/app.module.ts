import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.sqlite',
      entities: [],
      synchronize: process.env.NODE_ENV != 'production',
    }),
  ],
})
export class AppModule {}
