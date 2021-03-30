/**
 * Este archivo es ejecutado antes de la creación de una ventana,
 * de esta forma se puedan exponer al proceso de render la API
 * deseada.
 */
const {contextBridge, ipcRenderer} = require('electron');

/**
 * validChannels es un arreglo que contiene todos los eventos validos
 * para la API
 */
const validChannels = ['get:node', 'send:data'];

/**
 * el modulo contextBridge permite exponer una API personalizada y segura
 * al proceso de render, en este caso la API se registra con el nombre
 * electron, que contendrá los métodos send (para poder solicitar datos al proceso
 * main) y on (para recibir datos del proceso main).
 */
contextBridge.exposeInMainWorld(
    'electron',
    {
        send: (channel, data) => {
            if(validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        on: (channel, callback) => {
            if(validChannels.includes(channel)) {
                ipcRenderer.on(channel, callback);
            }
        },
        removeAllListeners: (channel) => {
            if(validChannels.includes(channel)) {
                ipcRenderer.removeAllListeners(channel);
            }
        }
    }
);