const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');

const nuxtConfig = require('./nuxt.config.js');

const config = {
    ...nuxtConfig,
    dev: false,
    debug: false,
    buildDir: ".nuxt",
    publicPath: "public"
};

const nuxtapp = new Nuxt(config);

let isReady = false;

async function handleRequest(req, res){
    if(!isReady){
        try{
            isReady = await nuxtapp.ready();
        }catch(err){
            process.exit(1);
        }
    }

    await nuxtapp.render(req, res)
}

exports.ssrapp = functions.https.onRequest(handleRequest);