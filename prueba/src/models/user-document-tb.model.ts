import {Entity, model, property} from '@loopback/repository';

@model()
export class UserDocumentTb extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  UserID: number;

  @property({
    type: 'string',
    required: true,
  })
  Document: string;

  @property({
    type: 'number',
    required: true,
  })
  TypeDocumentID: number;

  @property({
    type: 'string',
    required: true,
  })
  PlaceExpedition: string;

  @property({
    type: 'date',
    required: true,
  })
  DateExpetion: string;


  constructor(data?: Partial<UserDocumentTb>) {
    super(data);
  }
}

export interface UserDocumentTbRelations {
  // describe navigational properties here
}

export type UserDocumentTbWithRelations = UserDocumentTb & UserDocumentTbRelations;
