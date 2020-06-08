'use strict';

exports.isBasicType = function (type){
  const basicType = [
    'void', 'string', 'number', 'integer',
    'int8', 'int16', 'int32', 'int64',
    'long', 'ulong', 'uint8', 'uint16',
    'uint32', 'uint64', 'float', 'double',
    'boolean', 'bytes', 'any', 'map',
    'object', 'writable', 'readable'
  ];
  return basicType.indexOf(type) !== -1;
};