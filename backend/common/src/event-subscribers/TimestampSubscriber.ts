import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm'
import { EntityType } from '../models/EntityType'

@EventSubscriber()
export class TimestampSubscriber implements EntitySubscriberInterface {
  beforeInsert(event: InsertEvent<EntityType>): void {
    if ('createdAt' in event.entity) {
      event.entity.createdAt = new Date();
    }
    if ('updatedAt' in event.entity) {
      event.entity.updatedAt = new Date();
    }
  }

  beforeUpdate(event: UpdateEvent<EntityType>): void {
    if ('updatedAt' in event.entity) {
      event.entity.updatedAt = new Date();
    }
  }
}