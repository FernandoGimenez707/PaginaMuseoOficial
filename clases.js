class Museo{
    constructor(nombre, direccion, telefono){
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }
}

class Evento{
    constructor(nombre, descripcion, fechaPublicacion, ubicacion, img, horario){
        this. nombre = nombre;
        this.descripcion = descripcion;
        this.fechaPublicacion = fechaPublicacion;
        this.ubicacion = ubicacion;
        this.img = img;
        this.horario = horario;
    }
}

class Noticia{
    constructor(nombre, fechaPublicacion, descripcion, img){
        this.nombre = nombre;
        this.fechaPublicacion = fechaPublicacion;
        this.descripcion = descripcion;
        this.img = img;
    }
}

class FormDonacion{
    constructor(donador, telefono, ubicacion, descripcion, img){
        this.donador = donador;
        this.telefono = telefono;
        this.ubicacion = ubicacion;
        this.descripcion = descripcion ;
        this.img = img;
    }
}

class Pagina{
    
}
/*class Usuario{
    constructor(nombre, usuario, pass, token, perfil){
        this.nombre = nombre;
        this.usuario = usuario;
        this.pass = pass;
        this.token = token;
        this.perfil = perfil;
        this.class = "Usuario";
    }

    static fromJSON(json){
        if(json.class == "Usuario"){
            let nuevoUsuario = new Usuario();
            nuevoUsuario.nombre = json.nombre;
            nuevoUsuario.usuario = json.usuario;
            nuevoUsuario.pass = json.pass;
            nuevoUsuario.token = json.token;
            nuevoUsuario.perfil = json.perfil;
            nuevoUsuario.class = json.class;
            
            return nuevoUsuario;
        }

    }
}

class Perfil {
    constructor(){
        this.cuso = []
    }

    addCasoUso(cu){
        this.cuso.push(cu);
    }

    delCasoUso(cu){
        if(this.cuso.includes(cu)){
            let tmpCuso = this.cuso.filter(x=>x != cu)
            this.cuso = tmpCuso;
        }
    }
}*/

module.exports = {Mercaderia, Usuario, Perfil}