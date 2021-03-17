const {contextBridge, ipcRenderer} = require('electron');

const validChannels = ['get:node', 'send:data'];

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
        }
    }
);