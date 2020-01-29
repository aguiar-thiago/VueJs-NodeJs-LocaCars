import {Router} from 'express'
import controllerMercado from '../controller/controllerMercado'

const routes = new Router()

routes.get('/Cadastrar', controllerMercado.InsertUser)
routes.get('/Deletar', controllerMercado.DeleteUser)
routes.get('/Atualizar', controllerMercado.UpdateUser)


export default routes