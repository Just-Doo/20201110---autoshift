const { Router } = require('express');
const router = Router();
const ctrl = require('./home.ctrl');

function testMiddleWare( req, res, next ){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2( req, res, next ){
    console.log('두번째 미들웨어');
    next();
}

router.get('/', ctrl.get_home );

module.exports = router;


