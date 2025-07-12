import React from "react";
import { IconBox } from "@/ui/shared";
import { Header, SectionBox } from "@/ui/public";

export const Info = () => {
  return (
    <Header title="PROJECTS">
        <div className="flex flex-col gap-5">
          {/* Experience 1 */}
          <SectionBox
            title="Dental Clinic Management System"
            timeline="/ March 2025 - Present"
            header={
              <div className="flex gap-2 items-center mt-3 ml-3">
                <IconBox
                  target="https://nextjs.org/"
                  icon="https://skillicons.dev/icons?i=next"
                  alt="Next.js"
                />
                <IconBox
                  target="https://prisma.com/"
                  icon="https://skillicons.dev/icons?i=prisma"
                  alt="Prisma"
                />
                <IconBox
                  target="https://postgresql.com/"
                  icon="https://skillicons.dev/icons?i=postgresql"
                  alt="PostgreSQL"
                />
              </div>
            }
            websiteLink="https://clinicdentos.vercel.app"
            githubLink="https://github.com/Poraparint/dental-clinic-system"
          >
            <li>
              Developed a full-stack dental clinic management system for small
              clinics with easy-to-use design. Main features include patient
              information storage, appointment booking, dental treatment
              records, money tracking, staff permission control, and data
              reports. I did all parts of the project including UXUI design,
              Frontend, Backend, and Testing.
            </li>
          </SectionBox>

          {/* Experience 2 */}
          <SectionBox
            title="Team Project: Job Finder System"
            timeline="/ June 2024 - October 2024"
            header={
              <div className="flex gap-2 items-center mt-3 ml-3">
                <IconBox
                  target="https://nextjs.org/"
                  icon="https://skillicons.dev/icons?i=next"
                  alt="Next.js"
                />
                <IconBox
                  target="https://supabase.com/"
                  icon="https://skillicons.dev/icons?i=supabase"
                  alt="Supabase"
                />
              </div>
            }
            websiteLink="https://jobhouse-supabase.vercel.app"
            githubLink="https://github.com/Poraparint/Jobhouse_Supabase"
          >
            <li>
              Collaborated in a team of 4 members to create a system for
              connecting employers and freelancers.
            </li>
            <li>
              Focused on implementing features to allow users to add their own
              job postings.
            </li>
            <li>Built using Next.js and Supabase as the database.</li>
          </SectionBox>
          {/* Experience 3 */}
          <SectionBox
            title="Patient Management and Revenue Calculation System for a Clinic"
            timeline="/ March 2024 - April 2024"
            header={
              <div className="flex gap-2 items-center mt-3 ml-3">
                <IconBox
                  target="https://react.dev/"
                  icon="https://skillicons.dev/icons?i=react"
                  alt="React"
                />
                <IconBox
                  target="https://laravel.com/"
                  icon="https://skillicons.dev/icons?i=laravel"
                  alt="Laravel"
                />
                <IconBox
                  target="https://www.mysql.com/"
                  icon="https://skillicons.dev/icons?i=mysql"
                  alt="MySQL"
                />
              </div>
            }
            githubLink="https://github.com/Poraparint/Patient-Management-public"
          >
            <li>
              Developed a system for managing patient records and calculating
              clinic revenue.
            </li>
            <li>
              Utilized React framework for the front-end and Laravel for the
              back-end, integrated with a MySQL database.
            </li>
          </SectionBox>
        </div>
    </Header>
  );
};
