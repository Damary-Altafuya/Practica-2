import { createSecureServer } from 'http2';
//import {envs} from './config/plugins/envs.plugins'
import { PrismaClient } from '@Prisma/client';

const prisma = new PrismaClient();
 

import { Productos } from '@prisma/client';
import { Producto } from 'domain';

const prisma = new Productos();


// Crear una nueva entidad transaccional
const createProducto = await prisma.Producto.create({
  data: {
    Nombre_Producto: 'Sombrero',
    Descripcion_Producto: 'Hecho con material de paja toquilla',
    Precio_Producto: 54.99,
  },
});

// Leer una entidad transaccional
const Productos = await prisma.Producto.findUnique({
  where: {
    ID_Producto: 1,
  },
});

// Actualizar una entidad transaccional
const actualizarProducto = await prisma.Producto.update({
  where: {
    ID_Producto: 1,
  },
  data: {
    Nombre_Producto: 'Nuevos productos',
  },
});

// Eliminar una entidad transaccional
const eliminarProducto = await prisma.Producto.delete({
  where: {
    ID_Producto: 1,
  },
});

// CRUD


model Producto {
    ID_Producto     Int @id @default(autoincrement())
    ID_Artesano     Int
    ID_Categoria    Int
    Nombre_Producto     String
    Descripcion_Producto    String
    Precio_Producto     Float
    Categoria   Categoria @relation(fields: [ID_Categoria], references: [ID_Categoria])
    Artesano Artesano   @relation(fields: [ID_Artesano], references: [ID_Artesano])
    // Otros campos de la entidad transaccional
    }
    
    model Artesano {
    ID_Artesano     Int @id @default(autoincrement())
    ID_Usuario  String
    Descripcion_Art     String
    Ubicacion_Art   String
    Telefono_Art    Int @unique
    
    Productos Producto[]
    // Otros campos de la entidad de relación 1
    }
    
    model Categoria {
    ID_Categoria    Int @id @default(autoincrement())
    Nombre_Cat  String
    Descripcion_Cat     String
    
    Productos Producto[]
    // Otros campos de la entidad de relación 2
    }