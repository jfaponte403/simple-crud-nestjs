import {Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, UseGuards} from '@nestjs/common';
import { AppService } from './app.service';
import {ValidateUserPipe} from "./app/pipes/validateuser/validateuser.pipe";
import {AuthGuard} from "./app/guards/auth/auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('notfound')
  @HttpCode(404)
  notFoundPage(){
    return '404 not found'
  }

  @Get('error')
  @HttpCode(500)
  errorPage(){
    return 'Error route'
  }

  @Get('new')
  @HttpCode(201)
  someNew(){
    return 'Some new'
  }

  @Get('ticket/:num')
  @HttpCode(200)
  getNumber(@Param('num', ParseIntPipe) num: number){
    console.log(typeof(num))
    return num + 10
  }

  @Get('active/:status')
  @HttpCode(200)
  @UseGuards(AuthGuard)
  isUserActive(@Param('status', ParseBoolPipe) status: boolean){
    console.log(typeof(status))
    return status
  }

  @Get('greet')
  @UseGuards(AuthGuard)
  greet(@Query(ValidateUserPipe) query: {name: string, age: number}){
    console.log(typeof(query.name))
    console.log(typeof(query.age))
    return `Hello ${query.name} you are ${query.age} years old`
  }
}
