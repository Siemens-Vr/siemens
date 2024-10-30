import CourseDescription from "../../../components/CourseDescription";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function CoursePage({ params }) {
  const courses = {
    1: {
      name: "SMSCP Level 1 (Siemens Certified Mechatronics Systems Assistant)",
      description: (
        <div>
          <p>
            A Siemens Certified Mechatronic Systems Assistant will function as a
            well-grounded machine operator in a complex system, with
            responsibility for efficient operation of the equipment with minimal
            downtimes. Normally, a Siemens Certified Mechatronic Systems
            Assistant would carry out their work at plant assembly sites,
            workshops, or in connection with service operations that utilize
            complex mechatronic systems.
          </p>
          <h2 className="text-black text-2xl font-semibold mb-2">
            He or she will be able to;
          </h2>
          <ol className="mb-2">
            <li>
              1. Localize malfunctions, identify causes and sources of
              malfunctions, correct malfunctions where possible and/or document
              malfunctions to be passed on to the appropriate experts for
              resolution, or (where appropriate) exchange or replace defective
              components.
            </li>
            <li>
              2. Recognize potential or impending malfunctions and contact
              expert assistance to keep the production line functioning and to
              prevent production loss.
            </li>
            <li>3. Perform routine, preventive maintenance.</li>
            <li>
              4. Understand and explain the principal operations of the
              mechatronic subsystems in a complex system.
            </li>
            <li>
              5. Understand and explain how these subsystems work together.
            </li>
            <li>
              6. Read and understand the technical documents, reports, and
              outlines specific to the system and subsystems, and be able to
              consult with experts.
            </li>
            <li>
              7. Work effectively as a team member and coordinate their
              activities with upstream and downstream operations.
            </li>
            <li>
              8. Understand and implement safety regulations required for
              operation of the system.
            </li>
          </ol>
          <p>
            Siemens Certified Mechatronic Systems Assistants understand the full
            system. At this certification level, they view the components or
            devices in terms of their roles within the system, and work to keep
            the system running at maximum capacity. Because the individual
            components or devices are viewed as “black boxes” in this
            certification level, they will not be responsible for carrying out
            repairs of defective devices. However, they will be able to identify
            where malfunctions are occurring and communicate with experts who
            can carry out the required repairs.
          </p>
        </div>
      ),
      entryRequirements: [
        "Diploma in Electrical, Mechanical or Mechatronics Engineering. OR",
        "Ongoing students in Bsc. Electrical, Mechanical or Mechatronics Engineering second year of study and above. OR",
        "Equivalent academic qualification recognized by DeKUT senate.",
      ],
      modeOfStudy: "Full-time and part-time.",
      duration: (
        <ul>
          <li className="font-bold">
            12 days (Nairobi Campus and Main Campus)
          </li>
          <li>8 days: Theory (Nairobi Campus)</li>
          <li>4 days: Practicals (Main Campus)</li>
        </ul>
      ),

      intakes: ["January", "April", "July", "October"],
      pricing:
        "$5,000 for the full course, with flexible payment options available",
    },
    2: {
      name: "SMSCP Level 2 (Siemens Certified Mechatronics Systems Associate)",
      description: (
        <div>
          <p>
            A Siemens Certified Mechatronic Systems Associate will function as a
            highly skilled technician who can work with modules and components
            in complex mechatronic systems as well as be able to assess and
            analyze the system as a whole. A certified Associate can manage,
            investigate, repair and troubleshoot mechatronic systems, with the
            aim of operational efficiency and cost and process control. A
            Siemens Certified Mechatronic Systems Associate would usually carry
            out their work at production facilities, workshops, or in-service
            sites that use complex mechatronic systems.
          </p>
          <h2 className="text-black text-2xl font-semibold mb-2">
            Job skills and activities include;
          </h2>
          <ol className="mb-2">
            <li>
              1. Understanding and analyzing the technical specification of
              mechatronic systems, subsystems, modules, and components.
            </li>
            <li>
              2. Deriving and determining parameters for mechatronic systems and
              system elements.
            </li>
            <li>
              3. Measuring, interpreting, and analyzing electrical,
              PLC/microcontroller, and mechanical values.
            </li>
            <li>4. Assembling and installing tools and hardware systems.</li>
            <li>5. Performing scheduled and preventive maintenance.</li>
            <li>
              6. Installing, implementing, and modifying software tools used in
              mechatronic systems.
            </li>
            <li>
              7. Using troubleshooting skills to identify, foresee, and prevent
              possible problems, conflicts, and failures, and to systematically
              and intelligently make repairs.
            </li>
            <li>
              8. Programming mechatronic modules and systems, especially PLCs.
            </li>
            <li>
              9. Implementing PLC networks, including configuration and data
              transfer using bus systems.
            </li>
            <li>10. Analyzing system logs.</li>
            <li>
              11. Incorporating relevant technical literature into understanding
              of system operation and using this information to propose
              procedural and operational changes.
            </li>
            <li>12. Observing and incorporating safety standards.</li>
            <li>
              13. Applying knowledge of process control technology, including
              all regulator types.
            </li>
            <li>
              14. Observing, following, and influencing cost control and process
              efficiency procedures.
            </li>
            <li>
              15. Executing all of the above as an effective member of a team.
            </li>
          </ol>

          <p>
            Siemens Certified Mechatronic Systems Associates can see the system
            as a whole, but can also dive in and work with particular system
            components. More importantly, they understand how the com- ponents
            work together. Compared to those certified at Level 1 (Siemens
            Certified Mechatronic Sys- tems Assistant), they will be both a
            high- and low-level mechatronic systems expert.
          </p>
        </div>
      ),
      entryRequirements: ["Pass level 1 or SMSCP entry exams."],
      modeOfStudy: "Full-time and part-time",
      duration: "24 days: 6 days theory and 18 days practical.",
      intakes: ["February", "May", "August", "November"],
      pricing: "$6,500 for the full course, early bird discounts available",
    },
    3: {
      name: "SMSCP Level 3 (Siemens Certified Mechatronics Systems Professional)",
      description: (
        <div>
          <p>
            A Siemens Certified Mechatronic Systems Professional (Certified
            Professional) will function as a skilled designer of, and expert on,
            complex mechatronic systems. A Certified Professional will be able
            to apply selected project and system engineering practices, like
            requirements engineering, project management, process management,
            quality assurance & management, etc. in a project, with the goal to
            design or improve a mechatronic system upon customer and user needs.
          </p>
          <h2 className="text-black text-2xl font-semibold mb-2">
            He or she will be able to;
          </h2>
          <ol className="mb-2">
            <li>
              1. Understand and oversee the complete mechatronic system life
              cycle (e.g., impact to and from sales, marketing, production,
              suppliers, maintenance).
            </li>
            <li>2. Apply Project Management methods and tools.</li>
            <li>
              3. Understand the fundamentals of Project Management concepts like
              PMI and CMMI.
            </li>
            <li>4. Understand the principles of Team Management.</li>
            <li>
              5. Define the functional requirements of a mechatronic system with
              ‘use cases’, interviews with customers and users, and systems
              modeling techniques.
            </li>
            <li>6. Communication and documentation skills.</li>
            <li>7. System understanding.</li>
            <li>
              8. Perform high-level design by defining appropriate mechatronic
              systems to perform specific tasks.
            </li>
            <li>9. Utilize design methods and solutions.</li>
            <li>
              10. Transform customer “wish list” into technical mechatronic
              system specifications.
            </li>
            <li>
              11. Validate customer requirements and technical translation.
            </li>
            <li>
              12. Utilize knowledge of machine elements, actuators, pneumatics,
              and electric drives to design particular mechatronic systems.
            </li>
            <li>
              13. Understand and analyze the impact of new/changed mechatronic
              system parts from a technical point of view.
            </li>
            <li>
              14. Select the correct automation technology based on the
              mechanical and electronic composition of the system, while taking
              the functional requirements into account.
            </li>
            <li>
              15. Use CAD tools to create and communicate electrical and
              mechanical design ideas.
            </li>
            <li>
              16. Understand alternative engineering solutions – e.g., priority
              list, cost calculations, etc.
            </li>
            <li>17. Design, program, and troubleshoot PLC networks.</li>
            <li>
              18. Develop specifications for automation system communication
              integration.
            </li>
            <li>
              19. Review past system performance and carry out comprehensive
              system tests, with the aim of locating ways to optimize operations
              for cost, quality, and efficiency.
            </li>
            <li>
              20. Evaluate components/processes by having test concepts and
              strategies to ensure that customer requirements are met and fit
              into the overall mechatronic system lifecycle.
            </li>
            <li>
              21. Apply principles of Claim Management, Knowledge Management,
              and Process Management (e.g., performance measurements).
            </li>
            <li>
              22. Design and implement system optimization techniques in an
              existing mechatronic system.
            </li>
          </ol>

          <p>
            Siemens Certified Mechatronic Systems Professionals understand how
            mechatronic systems function at a high level. In contrast to those
            certified at Levels 1 and 2 (Siemens Certified Mechatronic Systems
            Assistant and Associate), they can understand customer requirements
            and translate them into the technical requirements of complex
            mechatronic systems. In addition to designing and man- aging new
            systems, they will be able to optimize and improve existing systems
            using Project and Process Management methods and tools.
          </p>
        </div>
      ),
      entryRequirements: ["Pass level 2 or SMSCP entry exams"],
      modeOfStudy: "Full time and part-time",
      duration: "30 days: Project implementation and documentation",
      intakes: ["March", "June", "September", "December"],
      pricing: "$4,500 for the full course, installment plans available",
    },
  };

  const course = courses[params.id];

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <CourseDescription course={course} />
      </div>
      <Footer />
    </div>
  );
}
