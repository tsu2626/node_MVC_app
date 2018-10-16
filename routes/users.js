'use strict';
//modelの読み込み
const models = require('../models');

//Expressルータの記述
var express = require('express');
var router = express.Router();

// 対象IDのユーザー情報を更新
router.get('/', (req, res, next) => {
  models.User.findAll({
    order: [
      ['id', 'desc']
    ],
    limit: 10
  }).then( (users) => {
    res.render('users', {
      title: 'Node.js/Express入門: CRUD サンプル',
      users: users
    });
  });
});

// 対象IDのユーザー情報を更新
router.post('/create', (req, res) => {
  models.User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email
  }).then( () => {
    res.redirect('/users');
  });
});

// 対象IDのユーザー情報の削除
router.get('/destroy/:id', (req, res) => {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  }).then( () => {
    res.redirect('/users');
  });
});

// 外部から利用する場合の指定
module.exports = router;
