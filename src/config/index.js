import loader from '../config.loader';

export default {
  VUE_APP_MY_VAR1: loader.getConfigValue('VUE_APP_MY_VAR1'),
  VUE_APP_MY_VAR2: loader.getConfigValue('VUE_APP_MY_VAR2'),
  BASE_URL: loader.getConfigValue('BASE_URL'),
};
