import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatabaseDataSource} from '../datasources';
import {ContacInfoTb, ContacInfoTbRelations} from '../models';

export class ContacInfoTbRepository extends DefaultCrudRepository<
  ContacInfoTb,
  typeof ContacInfoTb.prototype.id,
  ContacInfoTbRelations
> {
  constructor(
    @inject('datasources.database') dataSource: DatabaseDataSource,
  ) {
    super(ContacInfoTb, dataSource);
  }
}
