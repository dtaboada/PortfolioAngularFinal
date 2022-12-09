
export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    titulo: String;
    acerca: String;
    banner: String;
    foto: String;
    telefono: String;
    mail: String


constructor(nombre: String, apellido: String, titulo: String, acerca: String, banner: String, foto: String,telefono: String, mail: String){
            this.nombre=nombre;
            this.apellido=apellido;
            this.titulo=titulo;
            this.acerca=acerca;
            this.banner=banner;
            this.foto=foto;
            this.telefono=telefono;
            this.mail=mail 
    }
}