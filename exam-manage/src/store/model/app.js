/*
 * @Author: heinan 
 * @Date: 2020-10-12 09:36:22 
 * @Last Modified by: heinan
 * @Last Modified time: 2020-10-12 13:22:04
 */
import { observable } from 'mobx';

class App {
  namespace = "app";
  @observable todos = []
}


export default new App();