/****************************************************************************************************************************************************
 * * IMPORTS
 ****************************************************************************************************************************************************/
import { certificatesData } from '@/content/certificates';
import React from 'react';
import Experience from '../Experience';
import Header2 from '../Header2';
import CertificateCard from '../CertificateCard';
import OtherCertificates from '../OtherCertificates';
import { workExpData } from '@/content/work-exp';
import { formationData } from '@/content/formation';
import { TLang } from '@/types';
import Skill from '../Skill';
import { skillsData } from '@/content/skill';
import Header1 from '../Header1';

/****************************************************************************************************************************************************
 * * TYPES - INTERFACES - CLASES
 ****************************************************************************************************************************************************/
interface IResumeContainerProps {
  // eslint-disable-next-line no-unused-vars
  t: (lang: string) => string;
}
type TSkillName =
  | 'database'
  | 'programming'
  | 'backend'
  | 'frontend'
  | 'styling'
  | 'tool';
/****************************************************************************************************************************************************
 * * DECLARATIONS
 ****************************************************************************************************************************************************/

/****************************************************************************************************************************************************
 * * FUNCTIONS
 ****************************************************************************************************************************************************/
const ResumeContainer: React.FC<IResumeContainerProps> = ({ t }) => {
  const lang: TLang = t('lang') as TLang;
  const skillNames: TSkillName[] = [
    'database',
    'programming',
    'backend',
    'frontend',
    'styling',
    'tool',
  ];
  const firstFour = certificatesData.slice(0, 4);
  const theRest = certificatesData.slice(4);
  return (
    <>
      <main className='overflow-auto scrollbar-thin scrollbar-thumb-my-green scrollbar-track-my-side-gray h-full text-my-white w-full'>
        <Header1>{t('resume.title')}</Header1>
        <Experience
          title={t('resume.work.title')}
          lang={lang}
          experience={workExpData[lang]}
        />
        <Experience
          title={t('resume.formation.title')}
          lang={lang}
          experience={formationData[lang]}
        />
        <div className='w-full'>
          <Header2>{t('resume.skill.title')}</Header2>
          <section className='flex w-full flex-col'>
            <div className='mt-2 flex w-full flex-row flex-wrap items-center justify-center text-center'>
              {skillNames.map((skill, index) => (
                <Skill key={index} skills={skillsData[skill]} />
              ))}
            </div>
          </section>
        </div>
        <div className='h-max w-full'>
          <Header2>{t('resume.certificate.title')}</Header2>
          <CertificateCard certificates={firstFour} />
        </div>
        <div className='h-max w-full'>
          <Header2>{t('resume.otherCertificate.title')}</Header2>
          <OtherCertificates certificates={theRest} />
        </div>
      </main>
    </>
  );
};

/****************************************************************************************************************************************************
 * * EXPORTS
 ****************************************************************************************************************************************************/
export default ResumeContainer;
