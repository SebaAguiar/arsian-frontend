import { dateFormater } from '../utils/functions';

const options = {
  year: 'numeric',
  month: 'short',
};
export const workExpData = {
  en: [
    {
      from: dateFormater('June, 2023', 'en', options),
      to: dateFormater('January, 2024', 'en', options),
      title: 'Full Stack Developer',
      company: '14x tech',
      companyUrl: 'https://14xtech.com',
      description:
        'Worked on the migration of a project developed in Visual Basic and SQL Server to a modern environment based on Node.js with MongoDB, seeking to improve the scalability, performance, and maintainability of the system.',
    },
    {
      from: dateFormater('March, 2023', 'en', options),
      to: dateFormater('June, 2023', 'en', options),
      title: 'Backend Developer',
      company: 'Trabajo en Digital',
      companyUrl: 'https://www.trabajoendigital.com',
      description:
        'Collaboration in the relaunch of the web platform. Developing key skills  in teamwork, project documentation, effective communication, and  Scrum methodology.',
    },
  ],
  es: [
    {
      from: dateFormater('June, 2023', 'es', options),
      to: dateFormater('January, 2024', 'es', options),
      title: 'Full Stack Developer',
      company: '14x tech',
      companyUrl: 'https://14xtech.com',
      description:
        'Trabajé en la migración de un proyecto desarrollado en Visual Basic y SQL Server a un entorno moderno basado en Node.js con MongoDB, buscando mejorar la escalabilidad, rendimiento y mantenibilidad del sistema.',
    },
    {
      from: dateFormater('March, 2023', 'es', options),
      to: dateFormater('June, 2023', 'es', options),
      title: 'Backend Developer',
      company: 'Trabajo en Digital',
      companyUrl: 'https://www.trabajoendigital.com',
      description:
        'Colaboración en el relanzamiento de la plataforma web. Desarrollar habilidades clave en trabajo en equipo, documentación de proyectos, comunicación efectiva y metodología Scrum.  ',
    },
  ],
};
