export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["data.json","favicon.png"]),
	mimeTypes: {".json":"application/json",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.79e4a189.js","app":"_app/immutable/entry/app.7ac11dd6.js","imports":["_app/immutable/entry/start.79e4a189.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/singletons.304dc1a6.js","_app/immutable/chunks/index.0378bb41.js","_app/immutable/entry/app.7ac11dd6.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.07875641.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
