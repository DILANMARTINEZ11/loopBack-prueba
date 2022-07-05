import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {ContacInfoTb} from '../models';
import {ContacInfoTbRepository} from '../repositories';

export class ContacController {
  constructor(
    @repository(ContacInfoTbRepository)
    public contacInfoTbRepository : ContacInfoTbRepository,
  ) {}

  @post('/contac-info-tbs')
  @response(200, {
    description: 'ContacInfoTb model instance',
    content: {'application/json': {schema: getModelSchemaRef(ContacInfoTb)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContacInfoTb, {
            title: 'NewContacInfoTb',
            
          }),
        },
      },
    })
    contacInfoTb: ContacInfoTb,
  ): Promise<ContacInfoTb> {
    return this.contacInfoTbRepository.create(contacInfoTb);
  }

  @get('/contac-info-tbs/count')
  @response(200, {
    description: 'ContacInfoTb model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ContacInfoTb) where?: Where<ContacInfoTb>,
  ): Promise<Count> {
    return this.contacInfoTbRepository.count(where);
  }

  @get('/contac-info-tbs')
  @response(200, {
    description: 'Array of ContacInfoTb model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ContacInfoTb, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ContacInfoTb) filter?: Filter<ContacInfoTb>,
  ): Promise<ContacInfoTb[]> {
    return this.contacInfoTbRepository.find(filter);
  }

  @patch('/contac-info-tbs')
  @response(200, {
    description: 'ContacInfoTb PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContacInfoTb, {partial: true}),
        },
      },
    })
    contacInfoTb: ContacInfoTb,
    @param.where(ContacInfoTb) where?: Where<ContacInfoTb>,
  ): Promise<Count> {
    return this.contacInfoTbRepository.updateAll(contacInfoTb, where);
  }

  @get('/contac-info-tbs/{id}')
  @response(200, {
    description: 'ContacInfoTb model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ContacInfoTb, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(ContacInfoTb, {exclude: 'where'}) filter?: FilterExcludingWhere<ContacInfoTb>
  ): Promise<ContacInfoTb> {
    return this.contacInfoTbRepository.findById(id, filter);
  }

  @patch('/contac-info-tbs/{id}')
  @response(204, {
    description: 'ContacInfoTb PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ContacInfoTb, {partial: true}),
        },
      },
    })
    contacInfoTb: ContacInfoTb,
  ): Promise<void> {
    await this.contacInfoTbRepository.updateById(id, contacInfoTb);
  }

  @put('/contac-info-tbs/{id}')
  @response(204, {
    description: 'ContacInfoTb PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() contacInfoTb: ContacInfoTb,
  ): Promise<void> {
    await this.contacInfoTbRepository.replaceById(id, contacInfoTb);
  }

  @del('/contac-info-tbs/{id}')
  @response(204, {
    description: 'ContacInfoTb DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.contacInfoTbRepository.deleteById(id);
  }
}
