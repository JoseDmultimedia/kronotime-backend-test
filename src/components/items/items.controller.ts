import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Public } from 'src/common/utils/publicDecorator';
import { ItemsResponseDto } from './dto/response/itemsResponse.dto';
import { CreateItemsDto } from './dto/input/createItems.dto';
import { Items } from 'src/common/entities/items.entity';
import { UpdateItemsDto } from './dto/input/updateItem.dto';

@Controller('items')
export class ItemsController {
    constructor(
        private readonly itemsService: ItemsService,
    ) { }

    @Public()
    @Get()
    findAll(): Promise<ItemsResponseDto[]> {
        return this.itemsService.findAll()
    }

    @Public()
    @Get(":idItem")
    findById(@Param('idItem') idItem: number): Promise<ItemsResponseDto> {
        return this.itemsService.findById(idItem);
    }

    @Public()
    @Post()
    create(@Body() itemToCreate: CreateItemsDto): Promise<Items> {
        return this.itemsService.create(itemToCreate);
    }

    @Public()
    @Put()
    update(@Body() itemToUpdate: UpdateItemsDto): Promise<Items> {
        return this.itemsService.update(itemToUpdate);
    }

    @Public()
    @Delete(':idItem')
    delete(@Param('idItem') idItem: number): Promise<string> {
        return this.itemsService.delete(idItem);
    }


}
