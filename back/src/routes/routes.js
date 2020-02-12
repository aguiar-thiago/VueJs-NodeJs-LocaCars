import {Router} from 'express'
import controllerLocadora from '../controller/controllerLocadora'

const routes = new Router()

routes.post('/Cadastrar', controllerLocadora.insert)
routes.get('/Deletar', controllerLocadora.delete)
routes.put('/Atualizar', controllerLocadora.update)
routes.post('/Pesquisar', controllerLocadora.filter)

export default routes