import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule)
  await app.listen(process.env.BUDGET_SERVICE_PORT || 3002)
}

bootstrap()
