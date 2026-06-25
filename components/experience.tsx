import React from "react";
import { IconBox } from "@/ui/shared";
import { Header, SectionBox } from "@/ui/public";

export const Experience = () => {
  return (
    <Header title="EXPERIENCE">
      <div className="flex flex-col gap-5">
        {/* Experience 1 */}
        <SectionBox
          title="Motif Technology Public Company Limited"
          position="System Engineer Intern"
          timeline="/ November 2025 - February 2026"
          header={
            <div className="flex gap-2 items-center mt-3 ml-3">
              <IconBox
                target="https://angular.org/"
                icon="https://skillicons.dev/icons?i=angular"
                alt="Angular"
              />
              <IconBox
                target="https://spring.com/"
                icon="https://skillicons.dev/icons?i=spring"
                alt="Java Spring"
              />
              <IconBox
                target="https://postman.com/"
                icon="https://skillicons.dev/icons?i=postman"
                alt="Postman"
              />
            </div>
          }
        >
          <li>
            Collaborated within a 5-member development team in the Insurance
            domain
          </li>
          <li>
            Implemented backend services using Java Spring Boot following the
            assigned business workflow.
          </li>
          <li>
            Developed Controller, Service, and Bean components based on project
            architecture.
          </li>
          <li>Designed and documented business workflows using Miro.</li>
          <li>
            Worked closely with mentors to understand business requirements and
            translate them into technical implementations.
          </li>
        </SectionBox>
      </div>
    </Header>
  );
};
