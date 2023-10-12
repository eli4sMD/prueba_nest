import { Injectable } from '@nestjs/common';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  private products: Product[] = [
    { id: 1, nombre: 'Producto 1', detalle: 'Detalle del Producto 1', precio: 100, stock: 10 },
    { id: 2, nombre: 'Producto 2', detalle: 'Detalle del Producto 2', precio: 200, stock: 20 },
    { id: 3, nombre: 'Producto 3', detalle: 'Detalle del Producto 3', precio: 300, stock: 30 },
  ];

  create(product) {
    this.products.push(product);
    return product;
  }

  findAll(){
    return this.products;
  }

  findOne(id: number){
    return this.products.find(product => product.id === id);
  }

  update(id: number, updatedProduct) {
    let product = this.products.find(product => product.id === id);
    if (product) {
      product = { ...product, ...updatedProduct };
      this.products = this.products.map(p => p.id === id ? product : p);
      return product;
    }
    return null;
  }

  remove(id: number) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }
    return false;
  }
}
