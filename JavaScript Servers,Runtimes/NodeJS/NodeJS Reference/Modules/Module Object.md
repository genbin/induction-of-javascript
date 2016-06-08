Module Object

module.exports
	The module.exports object is created by the Module system. Sometimes this is not acceptable; many want their module to be an instance of some class. To do this, assign the desired export object to module.exports. Note that assigning the desired object to exports will simply rebind the local exports variable, which is probably not what you want to do.

module.require(id)
	id: String
	Return: Object module.exports from the resolved module
	The module.require method provides a way to load a module as if require() was called from the original module.
	Note that in order to do this, you must get a reference to the module object. Since require() returns the module.exports, and the module is typically only available within a specific module's code, it must be explicitly exported in order to be used.

