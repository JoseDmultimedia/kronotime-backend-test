import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Items } from 'src/common/entities/items.entity';
import { ItemsResponseDto } from './dto/response/itemsResponse.dto';
import { CreateItemsDto } from './dto/input/createItems.dto';
import { Producto } from 'src/common/entities/producto.entity';
import { Carrito } from 'src/common/entities/carrito.entity';
import { UpdateItemsDto } from './dto/input/updateItem.dto';

@Injectable()
export class ItemsService {
    constructor(
        @InjectRepository(Items)
        private itemsRepository: Repository<Items>
    ){}

    async findAll() : Promise<ItemsResponseDto[]>{
        const items = await this.itemsRepository.find({relations : ['Producto_idProducto', 'Carrito_idCarrito']});
        return items.map(item => new ItemsResponseDto(item));
    }

    async findById(idItemToSearch : number) : Promise<ItemsResponseDto>{
        const item = await this.itemsRepository.findOne({where: {idItems : idItemToSearch}, relations : ['Producto_idProducto', 'Carrito_idCarrito']});
        return item;
    }

    async create(itemToCreate : CreateItemsDto) : Promise<Items>{
        const item = new Items();

        item.precio_original = itemToCreate.precio_original;
        item.precio_venta = itemToCreate.precio_venta;
        item.descuento = itemToCreate.descuento;
        item.cant = itemToCreate.cant;

        item.Producto_idProducto = new Producto();
        item.Producto_idProducto.idProducto = itemToCreate.Producto_idProducto;

        item.Carrito_idCarrito = new Carrito();
        item.Carrito_idCarrito.idCarrito = itemToCreate.Carrito_idCarrito;

        const itemCreated = await this.itemsRepository.save(item);

        return itemCreated;
    }

    async update(itemToUpdate : UpdateItemsDto) : Promise<Items>{
        const itemToFind = await this.itemsRepository.findOne({ where: { idItems: itemToUpdate.idItems } });
        if (itemToFind === null) {
            throw new HttpException(`No se ha encontrado el item con el id ${itemToUpdate.idItems}`, HttpStatus.NOT_FOUND);
        }

        const update =  await this.itemsRepository.update(itemToUpdate.idItems, {
            precio_original : itemToUpdate.precio_original,
            precio_venta : itemToUpdate.precio_venta,
            descuento : itemToUpdate.descuento,
            cant : itemToUpdate.cant,
            Carrito_idCarrito : itemToUpdate.Carrito_idCarrito,
            Producto_idProducto : itemToUpdate.Producto_idProducto
        });

        const itemUpdated =  await this.itemsRepository.findOne({ where: { idItems: itemToUpdate.idItems } });

        return itemUpdated;
    }

    //Muy probablemente este endppont no funciona en este momento porque se tiene que eliminar el cascada orden, carrito y items
    async delete(itemToDelete : number) : Promise<string>{
        const itemToFind = await this.itemsRepository.findOne({ where: { idItems: itemToDelete } });
        if (itemToFind === null) {
            throw new HttpException(`No se ha encontrado el item con el id ${itemToDelete}`, HttpStatus.NOT_FOUND);
        }
        const itemDeleted =  await this.itemsRepository.delete(itemToDelete);
        return 'Se ha elimiando el item de la base de datos';
    }


}
