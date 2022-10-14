db.getCollection('web_home_banner').insert({
  title: 'BIENVENIDO A PATAGONIA NUTRICIÓN!',
  subtitle:
    '¿Estás listo para comenzar tu nuevo giro a 180 grados? Aquí podrás contactarme para comenzar tu tratamiento nutricional personalizado.',
  buttonText: 'Quiero comenzar!',
  imageURL: './public/img/homebanner/image-test.png',
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
