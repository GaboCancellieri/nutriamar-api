db.getCollection('web_home_banner').insert({
  title: 'BIENVENIDO A PATAGONIA NUTRICIÓN!',
  subtitle:
    '¿Estás listo para comenzar tu nuevo giro a 180 grados? Aquí podrás contactarme para comenzar tu tratamiento nutricional personalizado.',
  buttonText: 'Quiero comenzar!',
  image: {
    url: './public/img/homebanner/fruits-vegetables.webp',
    width: '100%',
    height: '100%',
    altText: 'Frutas & Vegetales',
  },
});

db.getCollection('web_nutritional_plan').insert({
  section1: {
    title: {
      text: '¿Qué es un',
      size: 21,
      color: '#000000',
    },
    subtitle: {
      text: 'Plan Nutricional?',
      size: 21,
      color: '#B9D41E',
      textTransform: 'uppercase',
      classname: 'mt-05',
    },
    description: {
      text: 'Para elaborar un plan alimenticio individualizado, hay que tener en cuenta varios factores como la edad, sexo, actividad física, problemas de salud, estilo de vida… Entender quién es el paciente, cómo se alimenta, qué ejercicio hace, cuál es su estado mental, identificar factores de riesgo, evitar el desarrollo de patologías y proponer un plan personalizado, potenciando el sistema inmune, el sistema digestivo y controlando el estrés para llevar una vida saludable.',
      size: 14,
      color: '#505050',
      align: 'justify',
      classname: 'mt-1',
    },
    iframe: {
      url: 'https://www.youtube.com/watch?v=MGbjB0eVvko',
      background: 'tablet',
    },
  },
  section2: {
    title: {
      text: '¿En que consta el',
      size: 21,
      color: '#000000',
    },
    subtitle: {
      text: 'seguimiento?',
      size: 21,
      color: '#B9D41E',
      textTransform: 'uppercase',
      classname: 'mt-05',
    },
    description: {
      text: 'Los tratamientos son 100% personalizados, y como nutricionista me encargo personalmente de seguirte en todo tu proceso de cambio de hábitos a la hora de aprender a alimentarse. Mantengo contacto directo, para seguir el registro de tus comidas diarias y hacer una devolución como asi también resolver tus dudas.',
      align: 'justify',
      classname: 'mt-1',
    },
    iframe: {
      url: 'https://www.youtube.com/watch?v=k8hLv6eAeZA',
      background: 'desktop',
    },
  },
});

db.getCollection('users').insert({
  firstName: 'Sofia',
  lastName: 'Perez',
  email: 'sofia.daniela.perez@gmail.com',
  password: '$2b$10$CkD0n0qUdHNlqJ/sACUpv.4cCZnz4l/mgVMkcURr5NJajPXoriBCC',
  role: 'admin',
  isActive: true,
  isAdmin: true,
});
