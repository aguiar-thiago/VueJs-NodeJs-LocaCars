import {Router} from 'express'
import controllerLocadora from '../controller/controllerLocadora'

const routes = new Router()

routes.get('/Cadastrar', controllerLocadora.Insert)
routes.get('/Deletar', controllerLocadora.Delete)
routes.get('/Atualizar', controllerLocadora.Update)
routes.get('/Pesquisar', controllerLocadora.Filter)
routes.get('/Home', controllerLocadora.Home)

export default routes