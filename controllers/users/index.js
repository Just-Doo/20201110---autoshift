const { Router } = require('express');
const router = Router();
const ctrl = require('./users.ctrl');

function testMiddleWare( req, res, next ){
    console.log('첫번째 미들웨어');
    next();
}

function testMiddleWare2( req, res, next ){
    console.log('두번째 미들웨어');
    next();
}

router.get('/', testMiddleWare, testMiddleWare2 , (req,res) => {
    res.send('hi!');
});

router.get('./myprofile', ctrl.get_myprofile );

router.get('/myprofile/write', ctrl.get_myprofile_write );

router.post('/myprofile/write', ctrl.post_myprofile_write );

module.exports = router;


