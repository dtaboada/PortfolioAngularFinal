
export class persona{
    id?: Number;
    nombre: string;
    apellido: string;
    titulo: string;
    acerca: string;
    banner: any;
    foto: any;
    telefono: string;
    mail: string


constructor( nombre: string, apellido: string, titulo: string, acerca: string, banner: string, foto: string,telefono: string, mail: string){
          
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