

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e1ff19c7.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.07875641.js","_app/immutable/chunks/singletons.304dc1a6.js","_app/immutable/chunks/index.0378bb41.js"];
export const stylesheets = [];
export const fonts = [];
