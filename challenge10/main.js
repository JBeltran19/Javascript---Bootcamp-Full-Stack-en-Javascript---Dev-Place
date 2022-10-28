class Persona{
   
    constructor(nombre,apellido,dni,estadoCivil){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.estadoCivil=estadoCivil;
    }

    verInfo(){
        alert("nombre: "+this.nombre+" apellido: "+this.apellido+" dni: "+this.dni+" estado civil: "+this.estadoCivil );
    }

}



class Estudiante extends Persona {
    constructor(nombre,apellido,dni,estadoCivil,cursos){
        super(nombre,apellido,dni,estadoCivil);
        this.cursos=cursos;
    }
}



class Empleado extends Persona{
    constructor(nombre,apellido,dni,estadoCivil,fechaIngreso,numDespacho){
        super(nombre,apellido,dni,estadoCivil);
        this.fechaIngreso=fechaIngreso;
        this.numDespacho=numDespacho;
    }
}


class Profesor extends Empleado{
    constructor(nombre,apellido,dni,estadoCivil,fechaIngreso,numDespacho,departamento){
    super(nombre,apellido,dni,estadoCivil,fechaIngreso,numDespacho);
    this.departamento=departamento;
    }
}

class PersonalServicio extends Empleado{
    constructor(nombre,apellido,dni,estadoCivil,fechaIngreso,numDespacho,seccion){
        super(nombre,apellido,dni,estadoCivil,fechaIngreso,numDespacho);
        this.seccion=seccion;
    }
}