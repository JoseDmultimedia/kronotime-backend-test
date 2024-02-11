import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Producto } from 'src/common/entities/producto.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductoResponseDto } from './dto/response/productoResponse.dto';
import { CreateProductoDto } from './dto/input/createProducto.dto';
import { UpdateProductoInventarioDto } from './dto/input/updateProductoInventario.dto';
import { UpdateProductoDto } from './dto/input/updateProducto.dto';

@Injectable()
export class ProductoService {
    constructor(
        @InjectRepository(Producto)
        private productoRepository: Repository<Producto>
    ) { }

    async findAll(): Promise<ProductoResponseDto[]> {
        const productos = await this.productoRepository.find();
        return productos.map(producto => new ProductoResponseDto(producto));
    }

    async findById(idProductoToSearch: number): Promise<ProductoResponseDto> {
        const producto = await this.productoRepository.findOne({ where: { idProducto: idProductoToSearch } })
        return producto;
    }

    async create(productoToCreate: CreateProductoDto): Promise<Producto> {
        const producto = new Producto();

        producto.idProducto = productoToCreate.idProducto;
        producto.nombre = productoToCreate.nombre;
        producto.precio = productoToCreate.precio;
        producto.sku = productoToCreate.sku;
        producto.compare_precio = productoToCreate.compare_precio;
        producto.cant = productoToCreate?.cant || 0;
        producto.imagen = productoToCreate.imagen;

        const productoCreated = await this.productoRepository.save(producto);

        return productoCreated;
    }

    async updateCant(productoToUpdate: UpdateProductoInventarioDto): Promise<Producto> {
        const productoToFind = await this.productoRepository.findOne({ where: { idProducto: productoToUpdate.idProducto } });
        if (productoToFind === null) {
            throw new HttpException(`No se ha encontrado el producto con el id ${productoToUpdate.idProducto}`, HttpStatus.NOT_FOUND);
        }
        const update = await this.productoRepository.update(productoToUpdate.idProducto, { cant: productoToUpdate.cant });

        const updatedProducto = await this.productoRepository.findOne({ where: { idProducto: productoToUpdate.idProducto } });
        return updatedProducto;
    }

    async update(productoToUpdate : UpdateProductoDto) : Promise<Producto>{
        const productoToFind = await this.productoRepository.findOne({ where: { idProducto: productoToUpdate.idProducto } });
        if (productoToFind === null) {
            throw new HttpException(`No se ha encontrado el producto con el id ${productoToUpdate.idProducto}`, HttpStatus.NOT_FOUND);
        }

        const update = await this.productoRepository.update(productoToUpdate.idProducto, {
            nombre : productoToUpdate.nombre,
            precio : productoToUpdate.precio,
            sku : productoToUpdate.sku,
            compare_precio : productoToUpdate.compare_precio,
            cant : productoToUpdate.cant,
            imagen : productoToUpdate.imagen
        })

        const updatedProducto = await this.productoRepository.findOne({ where: { idProducto: productoToUpdate.idProducto } });
        return updatedProducto;
    }

    async delete(idProductoToDelete: number): Promise<string> {
        const productoToFind = await this.productoRepository.findOne({ where: { idProducto: idProductoToDelete } });
        if (productoToFind === null) {
            throw new HttpException(`No se ha encontrado el producto con el id ${idProductoToDelete}`, HttpStatus.NOT_FOUND);
        }
        const deleteProducto = await this.productoRepository.delete(idProductoToDelete);
        return 'Producto Eliminado de la base de datos';
    }

}
