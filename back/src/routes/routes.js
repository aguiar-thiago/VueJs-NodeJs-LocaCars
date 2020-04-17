import {Router} from 'express'
import controllerLocadora from '../controller/controllerLocadora'

const routes = new Router()

routes.post('/Cadastrar', controllerLocadora.insert)
routes.put('/Deletar', controllerLocadora.delete)
routes.put('/Atualizar', controllerLocadora.update)
routes.post('/Pesquisar', controllerLocadora.filter)
routes.post('/PesquisarWhereFixo', controllerLocadora.filterWhereFixo)

export default routes
