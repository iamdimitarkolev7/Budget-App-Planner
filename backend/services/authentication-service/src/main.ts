import { NestFactory } from '@nestjs/core'
import { AuthenticationModule } from './app.module'

const bootstrap = async () => {
  const app = await NestFactory.create(AuthenticationModule)
  await app.listen(process.env.AUTH_SERVICE_PORT || 3001)
}

bootstrap()
