import { dateFormater } from '../utils/functions';

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

export const aboutMeData = {
  es: {
    about:
      'Me apasiona la música y, por casualidad, terminé estudiando programación web. Hoy trabajo en el desarrollo de aplicaciones, manejando aspectos tanto de backend como de frontend. Poseo una gran adaptabilidad y habilidades de rápido aprendizaje. Me considero una persona proactiva, enfocada al trabajo en equipo, siempre dispuesta a aportar valor y soluciones creativas a los proyectos que emprendo.',
    name: 'David Sebastian Aguiar',
    email: 'sebaaguiar08@gmail.com',
    phone: '+543442536874',
    birthday: dateFormater('August 15, 1997', 'es', options),
    residence: 'Entre Rios, Argentina',
    whatIDo: [
      {
        title: 'Desarrollo Web',
        description:
          'Como desarrollador web full-stack creo sitios web completos, desde el backend hasta el frontend. Tengo la capacidad de adaptarme a las necesidades de los usuarios y brindar soluciones web funcionales, atractivas y accesibles.',
      },
      {
        title: 'Desarrollo Backend',
        description:
          'Como desarrollador web backend, puedo crear API sólidas para conectar varios servicios y aplicaciones. Manejo la lógica, la seguridad y el rendimiento de los sitios web que desarrollo.',
      },
    ],
  },
  en: {
    about:
      'I am passionate about music and, by chance, ended up studying web programming. Today, I work in application development, handling both backend and frontend aspects. I possess strong adaptability and quick learning skills. I consider myself a proactive individual, focused on teamwork, always ready to contribute value and creative solutions to the projects I engage in.',
    name: 'David Sebastian Aguiar',
    email: 'sebaaguiar08@gmail.com',
    phone: '+543442536874',
    birthday: dateFormater('August 15, 1997', 'en', options),
    residence: 'Entre Rios, Argentina',
    whatIDo: [
      {
        title: 'Web Development',
        description:
          'As a full-stack web developer I create complete websites, from their backend to their frontend. I have the ability to adapt to user needs and provide functional, attractive, and accessible web solutions.',
      },
      {
        title: 'Backend web Development',
        description:
          'As a backend web developer I can create robust APIs to connect various services and applications. I handle the logic, security, and performance of the websites I develop.',
      },
    ],
  },
};
