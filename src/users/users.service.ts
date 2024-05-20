import { Injectable } from '@nestjs/common';
import {CreateUserDto} from "./dto/create-user.dto";
import {PrismaService} from "../prisma.service";



@Injectable()
export class UsersService {

    constructor(private prisma: PrismaService) {}

    getUsers() {
        return this.prisma.user.findMany()
    }

    createUser(user: CreateUserDto) {

        return this.prisma.user.create({data: user})
    }

    updateUser() {
        return 'Updating'
    }

    deleteUser() {
        return 'Deleting'
    }
}
