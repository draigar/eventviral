const Router = require('koa-router');
const router = new Router();
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');

// import the controllers
const usersController = require('../controllers/users');

module.exports = (app) => {
    app.use(logger());
    app.use(bodyParser());

    app.use(router.routes());
    app.use(router.allowedMethods());

    // app.use(ctx => {
    //     ctx.body = `Request Body: ${JSON.stringify(ctx.request.body)}`;
    // });

    router.get('/api', async (ctx, next) => {
        try {
            ctx.body = 'Welcome to Event Viral Server!';
            console.log('Request Received: ', new Date());
            await next() // next is now a function
        } catch (err) {
            // ctx.body = { message: err.message }
            ctx.body = 'An error occurred ' + err;
            ctx.status = err.status || 500
        }
    });

    router.get('/api/users', async (ctx, next) => {
        try {
            ctx.body = 'Loaded Users Data! ';
            ctx.response.body = JSON.stringify(usersController.list);
            await next() // next is now a function
        } catch (err) {
            // ctx.body = { message: err.message }
            ctx.body = 'An error occurred ' + err;
            ctx.status = err.status || 500
        }
    });

};