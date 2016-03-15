function Usuario(container){
	var self = this;
	this.nombre = "";
	this.apellido = "";
	this.init = function(container){
		self.nombre = container.find(".nombre").val();
		self.apellido = container.find(".apellido").val();
	};
	this.setValues=function(){
		container.find(".nombre").val(self.nombre);
		container.find(".apellido").val(self.apellido);
	}
	this.init(container);
return this;
}