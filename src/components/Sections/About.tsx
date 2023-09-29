import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', {'md:grid-cols-4': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32">
              <Image alt="about-me-image" className="h-full w-full object-cover" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-2xl font-bold text-white">About me</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
            <br/>
            <h2 className="text-2xl font-bold text-white">KEY ACCOMPLISHMENTS</h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">
              <ul>
                <li>
                  Successfully designed and implemented responsive and dynamic user interfaces using ReactJS and MaterialUI, resulting in improved user engagement and satisfaction for a range of clients and projects.
                </li>
                <li>
                  Consistently collaborated with cross-functional teams, including UX/UI designers and QA testers, to ensure high-quality delivery of features and functionality, resulting in improved project outcomes and customer satisfaction.
                </li>
                <li>
                  Effectively managed and prioritized project tasks and deliverables using SCRUM methodologies, resulting in timely delivery of project milestones and improved team efficiency.
                </li>
                <li>
                  Demonstrated expertise in developing RESTful APIs using NodeJS frameworks, including Nest and ExpressJS, resulting in improved data access and storage capabilities for complex web applications.
                </li>
                <li>
                  Applied best practices in code development and testing to ensure high-quality, reliable code across projects, resulting in fewer errors and reduced maintenance overhead.
                </li>
                <li>
                  Proven ability to adapt and learn new technologies and frameworks quickly, resulting in expanded technical expertise and the ability to contribute to a diverse range of projects and industries.
                </li>
              </ul>
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-gray-300">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
