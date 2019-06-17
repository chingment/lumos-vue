export const mutations = {
	//更新信用中心资料状态
	updateTestStatus(state, param) {
		state.testStatus[param.name] = param.val;
	}

}