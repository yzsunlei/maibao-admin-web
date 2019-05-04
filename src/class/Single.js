import {
		GUID,
} from '../common/Fn';
let cache = {},
		slice = Array.prototype.slice,
		guid = GUID();

class Single {
	/**
	 * 构建函数
	 * @param className
	 */
	constructor(className) {
		this[guid] = guid + parseInt(Math.random() * 1000000);
		if (typeof className === 'function') {
			this.$$classConfig = slice.call(arguments);
		} else {
			throw new Error('arguments must be a function');
		}
	}
	/**
	 * 是否新建一个不缓存的实例
	 * @param isNew
	 * @returns {*}
	 */
	getInstance(isNew) {
		let classConfig = this.$$classConfig,
			className = classConfig[0],
			args = classConfig.slice(1),
			keyName = this[guid];
		if (isNew) {
			return new className(...args);
		} else {
			return cache[keyName] = cache[keyName] || new className(...args);
		}
	}

	/**
	 * 请理缓存,从缓存系统中清除掉对像缓存
	 * @returns {boolean}
	 */
	destroy(){
		return delete cache[this[guid]];
	}
}
export default Single;
