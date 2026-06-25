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
          position="Fullstack Developer"
          timeline="/ March 2025 - October 2025"
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
            Designed the complete UX/UI in Figma and developed the application
            using Next.js, Auth.js, Prisma ORM, Supabase, and shadcn/ui
          </li>
          <li>
            Built a clinic management system for small dental clinics covering
            patient records, appointment scheduling, treatment plans, re-check
            appointments, installment payments, revenue & expense tracking, and
            dashboard reporting.
          </li>
          <li>
            Implemented email verification authentication and role-based access
            control (RBAC) with Manager, Co-manager, Dentist, and Assistant
            permissions
          </li>
          <li>
            Designed database schema and integrated backend services using
            Prisma and Supabase.
          </li>
        </SectionBox>

        {/* Experience 2 */}
        <SectionBox
          title="POS Buddy"
          position="Frontend"
          timeline="/ November 2024 - January 2025"
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
        >
          <li>
            Collaborated with a team of three developers to build a
            Point-of-Sale (POS) system over a three-month development cycle.
          </li>
          <li>
            Developed responsive user interfaces using Next.js and shadcn/ui,
            connected with a Neon PostgreSQL database.
          </li>
          <li>
            Worked closely with the backend developer and expanded knowledge of
            backend architecture and API integration during development.
          </li>
        </SectionBox>

        {/* Experience 3 */}
        <SectionBox
          title="Patient Management and Revenue Calculation System for a Clinic"
          position="Fullstack Developer"
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
            Built a web application for managing patient records and clinic
            transactions.
          </li>
          <li>
            Implemented CRUD operations, revenue calculation, and reporting
            features.
          </li>
          <li>
            Developed the frontend using React and backend APIs using Laravel
            with MYSQL.
          </li>
        </SectionBox>
      </div>
    </Header>
  );
};
