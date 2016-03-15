function Dibujante(container){
	var self = this;
	this.table = container;
	this.usuarios=[];
	
	this.dibujarUsuario = function(usuario){
		var usuarioSelected = self.usuarios[usuario.nombre];
		var row = self.getRow(usuario);
		if(usuarioSelected){
			var tr = self.table.find("#"+usuario.nombre);
			tr.html(row);
		}else{
			row = $(["<tr id='",usuario.nombre,"'>", row, "</tr>"].join("")); 
			self.table.append(row);
			self.usuarios[usuario.nombre] = usuario;
			row.click(function(){
				self.usuarios[usuario.nombre].setValues();
			});
		}
	};
	
	this.getRow = function(usuario){
		var html = ["<td class='nombre'>",usuario.nombre,"</td><td class='apellido'>",usuario.apellido,"</td>"].join("");
		return html;
	}
	
	return this;
}