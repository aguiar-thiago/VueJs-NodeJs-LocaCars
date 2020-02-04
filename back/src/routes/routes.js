import {Router} from 'express'
import controllerLocadora from '../controller/controllerLocadora'

const routes = new Router()

routes.get('/Cadastrar', controllerLocadora.insert)
routes.get('/Deletar', controllerLocadora.delete)
routes.get('/Atualizar', controllerLocadora.update)
routes.get('/Pesquisar', controllerLocadora.filter)

export default routes