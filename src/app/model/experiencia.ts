
export class experiencia{
    id?: Number;
    puesto: String;
    empresa: String;
    anioInicio: String;
    anioFin: String;
    descripcion: String;
    logo: String;
     


constructor( puesto: String, empresa: String, anioInicio: String, anioFin: String, descripcion: String,logo:String){
          
            this.puesto=puesto;
            this.empresa=empresa;
            this.anioInicio=anioInicio;
            this.anioFin=anioFin;
            this.descripcion=descripcion;
            this.logo=logo;
            
    }
}



