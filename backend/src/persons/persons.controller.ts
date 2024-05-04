import { Controller, Get, Body, Param, Delete } from '@nestjs/common';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get()
  findAll() {
    return this.personsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personsService.findOne(+id);
  }

  @Get()
  findByName(@Body() body) {
    const firstname = body.firstname;
    const lastname = body.lastname;
    return this.personsService.findByName(firstname, lastname);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.personsService.remove(+id);
  }
}
