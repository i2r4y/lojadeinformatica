import { Router } from 'express'

import { UsuariosControllers } from './controllers/UsuarioControllers'
import { estaAutenticado } from './middleware/estaAutenticado'
import { VendasControllers } from './controllers/VendasControllers'
import { ProdutosControllers } from './controllers/ProdutosControllers'
import { EstoqueControllers } from './controllers/EstoqueControllers'
import { CategoriaControllers } from './controllers/CategoriaControllers'
import { CarrinhoControllers } from './controllers/CarrinhoControllers'
const router = Router()

