import fetch from '../../../plugins/util/fetch';

/**
 * 获取测试数据
*/
export const getDemoInfo = () => fetch.get('/app/demo');
