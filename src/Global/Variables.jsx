/*
SmartSoft
Componente: Variales
Fecha de creacion: 19/10/2022, Autorizó: Leandro Gómez Flores, Revisó: Leandro Gómez Flores

Modificaciones:
    Fecha               Folio

Descripcion:
Este componente conttiene todas las variables estaticas, como texto de botones, items de menu...

Numero de metodos: 0
Componentes relacionados: 
*/

export const v_URL_API="https://api.moderadores.tecnologinc.com"
export const v_URL_API2="https://api2.moderadores.tecnologinc.com"

export const v_FRFAMES = {
  login: "login",
  inicio: "inicio",
  moderadores: "moderadores",
  coordinadores: "coordinadores",
  registro:"registro",
};

export const v_MenuCoordinador = {
  item1: "Mi perfil",
  item2: "Apertura y cierre de salas",
  item3: "Moderadores y consejeros",
  item4: "Salas",
  item5: "Configuraciones eventos",
  item6: "Correos",
  item7: "Coordinadores",
};

export const v_TEXTOS = {
  guardar: "Guardar",
  cerrar: "Cerrar",
  cancelar: "Cancelar",
  modificar: "Modificar",
  eliminar: "Eliminar",
  cambiar:"Cambiar Rol",

  abrir_sala:"Abrir",
  agregar_moderador_espontaneo:"Registrar moderador",
  cambiar_moderador_espontaneo:"Cambiar moderador",
  moderador_actual:"Moderador actual",
  cerrar_sala:"Cerrar",

  asignar: "Asignar",
  cargar: "Cargar",
  cargar_csv: "Cargar CSV",

  cerrar_sesion: "Cerrar sesión",
  cargar_salas: "Cargar salas",
  cargar_ponentes: "Cargar ponentes",
  filtrar_por: "Filtrar por:",
  dia: "Día",
  edificio: "Edificio",
  no_salas:"No hay salas cargas.",
  
  salir: "Salir ",
  nombre: "Nombre",
  rol: "Rol",
  consejero: "Consejero",
  moderador: "Moderador",
  institucion: "Institucion",
  institucion_procedencia: "Institucion de procedencia",
  mostrando: "Mostrando 7 consejeros",
  btn_detalles_sala: "Ver detalles de sala",
  grupodewhats: "Grupo de Whatsapp",
  manual: "Consulta el manual de moderadores",
  contactar: "Contacta a tu coordinador mandando mensaje a: coordi@gmail.com",
  unetea: "Unete a nuesto grupo de Whatsapp",
  detalles_sala: {
    titulo: "Detalles de sala",
    texto1: "Sala",
    texto2: "Modalidad",
    texto3: "Institución",
    texto4: "País",
    texto5: "Área",
    texto6: "Fecha",
  },
  home_coordinadores:{
    no_salas:"Por el momento no hay salas agregadas, vaya al apartado Salas y cargue las salas mediante un csv.",
    no_salas_inactivas:"Por el momento no hay salas inactivas.",
    no_salas_activas:"Por el momento no hay salas activas, las salas inactivas las deben abrir.",
  },
  redactar_correos: {
    correo1: {
      titulo: "Correo para el consejero tecnico de un nuevo registro",
      info: "Este correo será enviado al coordinador para darle a conocer que un profesor se acaba de registrar y espera ser aceptado. Acción a realizar: Registro de un nuevo moderador.",
    },
    correo2: {
      titulo: "Correo de aceptación a un nuevo registro",
      info: "Este correo será enviado al profesor que se acaba de registrar, enviando una confirmación que ya puede ingresar a la página de moderación. Acción a realizar: aceptar al nuevo profesor registrado",
    },
    correo3: {
      titulo: "Correo de rechazo a un nuevo registro",
      info: "Este correo será enviado al profesor que se acaba de registrar, enviando una negación que ya puede ingresar a la página de moderación. Acción a realizar: negar al nuevo profesor registrado.",
    },
    correo4: {
      titulo: "Correo cuando un moderador que fue asignado",
      info: "Este correo será enviado cuando un moderador no fue asignado a una sala para moderar. Acción a realizar: asignación de salas a moderadores.",
    },
    correo5: {
      titulo: "",
      info: "",
    },
    correo6: {
      titulo: "",
      info: "",
    },
    correo9: {
      titulo: "Correo para un nuevo registro de un coordinador.",
      comentario:"Para que este correo funcione correctamente debe que ingresar el siguiente parámetro {passwd},este se encargará de proporcionar la contraseña para su inicio de sesión del nuevo coordinador.",
      info: "Este correo será enviado al nuevo coordinador para darle a conocer su contraseña y poder acceder. Acción a realizar: Registro de un nuevo coordinador.",
    },
  },
  busqueda: "Busqueda",
  alta: "Agregar",
  nombre: "Nombre",
  ape_paterno: "Apellido paterno",
  ape_materno: "Apellido materno",
  correo: "Correo electronico",
  contrasenia: "Contraseña",
  registrar: "Registrar",
  alertas: {
    alta_coordinador: "Coordinador registrado",
    modifica_coordinador: "Coordinador modificado",
    correo_guardado: {
      exito: "Correo guardado correctamente.",
      error: "Error al guardar el correo.",
    },
  },
  busqueda_por: "Buscar por:",
  ordenar_por: "Ordenar nombre en:",
  orden: { ascendente: "Ascendente (A-Z)", descendente: "Descendente (Z-A)" },
  ver_perfil: "Ver perfil",
  confirmar_eliminacion: "¿Seguro que desea eliminar al coordinador seleccionado?",
  confirmar_cambio: "¿Seguro que desea cambiarle el rol al usuario?",
  buscador:"Escribe el nombre del moderador o consejero",
};

export const v_MenuModeradores = {
  item1: "Pagina Principal",
  item2: "Mi perfil",
  item3: "Mi salas",
  item4: "Consejeros",
};
