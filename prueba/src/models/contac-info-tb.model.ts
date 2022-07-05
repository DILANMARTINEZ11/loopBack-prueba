import {Entity, model, property} from '@loopback/repository';

@model()
export class ContacInfoTb extends Entity {
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
  Address: string;

  @property({
    type: 'number',
    required: true,
  })
  CountryID: number;

  @property({
    type: 'string',
    required: true,
  })
  City: string;

  @property({
    type: 'string',
    required: true,
  })
  Phone: string;

  @property({
    type: 'string',
    required: true,
  })
  CellPhone: string;

  @property({
    type: 'string',
    required: true,
  })
  EmergencyName: string;

  @property({
    type: 'string',
    required: true,
  })
  EmergencyPhone: string;


  constructor(data?: Partial<ContacInfoTb>) {
    super(data);
  }
}

export interface ContacInfoTbRelations {
  // describe navigational properties here
}

export type ContacInfoTbWithRelations = ContacInfoTb & ContacInfoTbRelations;
