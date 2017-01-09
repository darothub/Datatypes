'use strict'

function dataTypes(arg){
	if ( arg.constructor === String ){
		return arg.length
	}
	if(typeof(arg) === "object"){
		return "no value"
	}
	if (typeof arg === "boolean"){
		return arg.valueOf()
	}
	if(arg.constructor === Number){
		if(arg < 100){
			return "less than 100"
		}
		if(arg > 100){
			return "more than 100"
		}
		return "equal to 100"
	}
	if (arg.constructor === Array){
		if(!arg[2]){
			return "undefined"
		}
		return arg[2]
	}
	if(typeof(arg) === "function"){
		return arg(true)
	}
	if(arg === ''){
		return 0
	}
	
}

module.exports = {
	dataTypes : dataTypes
};
//to be ccontinue