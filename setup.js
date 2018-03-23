'use strict';
const fs = require('fs');
const ncp = require('ncp').ncp;

const folderToCopy = [
  {
    src: './pages/',
    dest: './bin'
  }
];

folderToCopy.forEach(folder => ncp(folder.src, folder.dest));
