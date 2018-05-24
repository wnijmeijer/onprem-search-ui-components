'use strict';
const fs = require('fs');
const ncp = require('ncp').ncp;

const folderToCopy = [
  {
    src: './views/',
    dest: './bin'
  }
];

folderToCopy.forEach(folder => ncp(folder.src, folder.dest));
