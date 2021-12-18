export const registerInputs = [
  {
    name: 'firstname',
    type: 'text',
    label: 'Nombres',
    placeholder: 'Ingrese sus nombres...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Los nombres son obligatorios. Máximo 50 caracteres',
    maxLength: 50,
    minLength: 1,
  },
  {
    name: 'lastname',
    type: 'text',
    label: 'Apellidos',
    placeholder: 'Ingrese sus apellidos...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Los apellidos son obligatorios. Máximo 50 caracteres',
    maxLength: 50,
    minLength: 1,
  },
  {
    name: 'email',
    type: 'email',
    label: 'Correo',
    placeholder: 'Ingrese su correo...',
    required: true,
    validFeedback: '',
    invalidFeedback:
      'El correo es obligatorio y debe poseer el formato de email. Máximo 50 caracteres',
    maxLength: 50,
    minLength: 1,
  },
  {
    name: 'password',
    type: 'password',
    label: 'Contraseña',
    placeholder: 'Ingrese su contraseña...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'La contraseña es obligatoria. De 8 a 30 caracteres',
    maxLength: 30,
    minLength: 8,
  },
  {
    name: 'cpassword',
    type: 'password',
    label: 'Confirmar contraseña',
    placeholder: 'Vuelva a ingresar su contraseña...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'La contraseña es obligatoria. De 8 a 30 caracteres',
    maxLength: 30,
    minLength: 8,
  },
];

export const loginInputs = [
  {
    name: 'email',
    type: 'email',
    label: 'Correo',
    placeholder: 'Ingrese su correo...',
    required: true,
    validFeedback: '',
    invalidFeedback:
      'El correo es obligatorio y debe poseer el formato de email. Máximo 50 caracteres',
    maxLength: 50,
    minLength: 1,
  },
  {
    name: 'password',
    type: 'password',
    label: 'Contraseña',
    placeholder: 'Ingrese su contraseña...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'La contraseña es obligatoria. De 8 a 30 caracteres',
    maxLength: 30,
    minLength: 8,
  },
];

export const courseCreationInputs = [
  {
    name: 'time_start',
    type: 'time',
    label: 'Hora de Inicio',
    placeholder: '',
    required: true,
    validFeedback: '',
    invalidFeedback: 'El horario de inicio es obligatorio',
    maxLength: 250,
    minLength: 1,
  },
  {
    name: 'time_end',
    type: 'time',
    label: 'Hora de Fin',
    placeholder: '',
    required: true,
    validFeedback: '',
    invalidFeedback: 'El horario de fin es obligatorio',
    maxLength: 250,
    minLength: 1,
  },
  {
    name: 'imagen',
    type: 'file',
    label: 'Imagen',
    placeholder: 'Añadir imagen...',
    required: false,
    validFeedback: '',
    invalidFeedback: 'El archivo debe ser png o jpg y pesar como máximo 1 MB',
    maxLength: 30,
    minLength: 8,
  },
  {
    name: 'title',
    type: 'text',
    label: 'Nombre del curso',
    placeholder: 'Añadir nombre del curso...',
    required: true,
    validFeedback: '',
    invalidFeedback: 'El nombre es obligatorio. De 1 a 100 caracteres',
    maxLength: 100,
    minLength: 1,
  },
];

export const courseCreationTextAreas = [
  {
    name: 'description',
    type: 'textarea',
    label: 'Descripción',
    placeholder: 'Añadir descripción del curso...',
    required: false,
    validFeedback: '',
    invalidFeedback: 'De 1 a 250 caracteres',
    maxLength: 250,
    minLength: 1,
    rows: 3,
  },
];

export const courseCreationSelects = [
  {
    name: 'day',
    label: 'Día',
    placeholder: 'Seleccione el día',
    required: true,
    validFeedback: '',
    invalidFeedback: 'Todo curso debe tener un día seleccionado',
    options: [
      {
        id: '1',
        name: 'Lunes',
      },
      {
        id: '2',
        name: 'Martes',
      },
      {
        id: '3',
        name: 'Miércoles',
      },
      {
        id: '4',
        name: 'Jueves',
      },
      {
        id: '5',
        name: 'Viernes',
      },
      {
        id: '6',
        name: 'Sábado',
      },
      {
        id: '7',
        name: 'Domingo',
      },
    ],
  },
];
