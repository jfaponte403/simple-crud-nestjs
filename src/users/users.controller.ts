import {Body, Controller, Delete, Get, Post, Put} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiTags} from "@nestjs/swagger";

@Controller('users')
export class UsersController {

    usersService: UsersService

    constructor(usersService: UsersService) {
        this.usersService = usersService
    }

    @ApiTags('users')
    @Get()
    getUsers() {
        return this.usersService.getUsers()
    }

    @ApiTags('users')
    @Post()
    createUser(@Body() user: CreateUserDto){
        return this.usersService.createUser(user)
    }

    @ApiTags('users')
    @Put()
    updateUser(){
        return this.usersService.updateUser()
    }

    @ApiTags('users')
    @Delete()
    deleteUser(){
        return this.usersService.deleteUser()
    }
}

