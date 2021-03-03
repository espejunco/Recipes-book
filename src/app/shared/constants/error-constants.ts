export class ErrorConstants {
    // SERVER SIDE MESSAGES
    public static SERVER_ERROR_EMAIL_EXISTS: string = 'EMAIL_EXISTS';
    public static SERVER_ERROR_OPERATION_NOT_ALLOWED: string = 'OPERATION_NOT_ALLOWED';
    public static SERVER_ERROR_TOO_MANY_ATTEMPTS: string = 'TOO_MANY_ATTEMPTS_TRY_LATER';
    public static SERVER_EMAIL_NOT_FOUND: string = 'EMAIL_NOT_FOUND';
    public static SERVER_INVALID_PASSWORD: string = 'INVALID_PASSWORD';
    public static SERVER_USER_DISABLED: string = 'USER_DISABLED';


    // CLIENT SIDE MESSAGES
    public static CLIENT_ERROR_EMAIL_EXISTS: string = '¡Esta cuenta de correo electrónico ya existe!';
    public static CLIENT_ERROR_OPERATION_NOT_ALLOWED: string = 'Operación no permitida!';
    public static CLIENT_ERROR_TOO_MANY_ATTEMPTS: string = '¡Ha sido publicada con éxito!';
    public static CLIENT_ERROR_DEFAULT_MESSAGE: string = 'Ha ocurrido un error desconocido!!';
    public static USERNAME_ANDOR_PASSWORD_IS_INVALID: string = 'El nombre de usuario y / o contraseña que ingresó no es válido';
    public static CLIENT_USER_DISABLED: string = 'El usuario ha sido eliminado';
}
