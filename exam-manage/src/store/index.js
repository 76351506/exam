/*
 * @Author: heinan 
 * @Date: 2020-10-12 09:36:42 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-10-12 13:02:12
 */

const context = require['context']('./model', false, /\.(js|ts)$/);
const getModel = context.keys().map(key => context(key));
const Store = {};

getModel.forEach(model => {
  Store[model.default.namespace] = model.default;
});

export default Store;