const express = require('express');
const router = express.Router();

const ctrl = require('../controllers/resourceController');
const auth = require('../middlewares/auth');
const authorize = require('../middlewares/authorize');

// listar todos (qualquer usuário autenticado)
router.get('/', auth, ctrl.list);
router.get('/:id', auth, ctrl.getById);

// apenas MANAGER ou ADMIN podem criar/editar/excluir
router.post('/', auth, authorize(['MANAGER', 'ADMIN']), ctrl.create);
router.put('/:id', auth, authorize(['MANAGER', 'ADMIN']), ctrl.update);
router.delete('/:id', auth, authorize(['ADMIN']), ctrl.remove);

module.exports = router;
