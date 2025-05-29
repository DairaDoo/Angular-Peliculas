export function extraerErrores(obj: any): string[] {
    const err = obj.error.errors;

    let mensajesDeError: string[] = [];

    for (let llave in err) {
        let campo = llave;
        const mensajeConCampos = err[llave].map((mensaje: string) => `${campo}: ${mensaje}`);
        mensajesDeError = mensajesDeError.concat(mensajeConCampos);
    }

    return mensajesDeError;
}