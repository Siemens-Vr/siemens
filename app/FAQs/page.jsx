import FAQSection from "../../components/FAQSection";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GeneralFAQs from "../../components/GeneralFAQs";

const faqData = [
  {
    question:
      "Why is Siemens offering a certification programme in Mechatronics?",
    answer:
      "Due to the increased use of Mechatronic technology in a variety of industries (Job Opportunities), there is a clear need for a comprehensive Mechatronic Systems certification that incorporates international industry standards, Siemens is one of the world'’s leading manufacturers of mechatronic and automated systems, and has over 20 years of experience in Mechatronics education and over 100 years in technical education in general thanks to the history and traditions of the German vocational and technical education system. This combination of both industrial and educational expertise makes Siemens an ideal provider/partner and competent authority to offer a certification program in Mechatronic Systems to your school or institution. ",
  },
  {
    question:
      "Why is ‘System Approach’ teaching paradigm the foundation of SMSCP? ",
    answer:
      "Mechatronics is not only the marriage of electrical, mechanical and computer technologies; it is also a philosophy for looking at the entire system. Under traditional methods of teaching Mechatronics, students learn about each of these fields separately from one another. This system of isolated teaching oftentimes results in the student having little appreciation or understanding regarding the inter-relationships between the different technical subsystems found in most modern production or manufacturing systems. Under the System Approach, students learn about the complexities of the system in a holistic fashion. Starting at the macro level, students first see the full system and learn about its overall function. From there, they study the mechanical, electrical, and controller subsystems. They learn about the components contained within each subsystem, their interrelationships to one another, and how these interrelationships drive the overall operation of the complete system. So from day one, students are continually working with a complete mechatronic system. This ‘system approach’ teaching ensures that they always keep the “big picture” of mechatronic systems in view. Here at the Technik Akademie Berlin, we have been developing and using this approach successfully for several years to train Siemens employees and thus know from firsthand experience its high level of effectiveness. ",
  },
  {
    question:
      "Is the Siemens Mechatronic Systems Certification Program recognized throughout industry?  ",
    answer: (
      <div>
        <p>
          Large and small companies, industrial organizations and associations,
          schools and government agencies have all recognized the SMSCP as being
          essential for the future idea of manufacturing and mechatronic systems
          education and operation. Companies from major automotive manufacturers
          to steelmakers have started to demand SMSCP certifications for their
          employees and applicants. How is the Siemens Mechatronic Systems
          Certification Program structured?
        </p>
        <h2 className="font-bold">SMSCP offers 3 certification levels:</h2>
        <p>
          <ul>
            <li>
              Level I: Mechatronic Systems Assistant- the ‘intelligent Machine
              Operator’
            </li>{" "}
            <li>
              Level II: Mechatronic Systems Associate- the ‘skilled Systems
              Technician’
            </li>{" "}
            <li>
              {" "}
              Level IIl: Mechatronic Systems Professional- the ‘university-level
              Systems Engineer’
            </li>{" "}
          </ul>
          <p>
            The content for each certification level is based on specific job
            profiles that details core competencies and skills that successful
            candidates should be able to apply ‘on-the-job’ upon certification.
            While these levels are certainly ‘stackable’, they can also stand
            alone. It is not necessary for a student to complete a lower Level
            certification to advance on to a higher Level certification. Partner
            schools have the discretion to determine which approach to use and
            how to define eligibility criteria for each level.
          </p>
        </p>
        ,
      </div>
    ),
  },
  {
    question:
      "How does my educational institution become a Siemens-certified Partner School?",
    answer: (
      <div>
        <p>
          Only a selected number of schools and institutions engaging with SMSCP
          become Partner Schools. These schools and institutions demonstrate a
          commitment to advancing Mechatronic Systems knowledge and providing
          quality technical education programs to their local communities. To
          become SMSCP Partner School, your school or institution must have the
          following:
        </p>
        <ul>
          <li>
            - At least 2 Siemens-certified SMSCP Instructors on staff at the
            time of the partnership agreement.
          </li>
          <li>
            - An on-site, fully operational Mechatronic Training System which
            meets the hardware requirements of the SMSCP for the practical,
            hands-on training parts of the program. (LabVolt Advanced
            Mechatronics System, Model 5903, meets these requirements)
          </li>
          <li>- English as the instructional language of the program</li>
          <li>- Must have a written partnership agreement with Siemens</li>
        </ul>{" "}
      </div>
    ),
  },
  {
    question:
      "How does the Siemens Technik Akademie (STA) Berlin support the implementation of the SMSCP? ",
    answer:
      "The Siemens Technik Akademie Berlin provides support to Partner Schools and potential Partner Schools at every stage of the implementation process. In the earlier stages, we engage in intense conversations with you over your goals for the program and share STA knowledge and experiences. During the Instructor Certification Courses, we include implementation discussions to encourage your instructors to discuss the best approaches to incorporate the SMSCP curriculum into your current programs. We offer an Administrators’ program that provides substantive background on SMSCP’s educational philosophy, and addresses the practical issues of implementation (challenges, best practices, and strategies for working with businesses and industries) from an administrative/strategic planning perspective. As your program matures, we provide guidance and help troubleshoot new challenges with you. In some cases, we have been even asked to provide on-site consulting services to Partners in need of more specific assistance. The SMSCP is designed to complement and fit into existing programs of study, not replace them. As a partner school, Siemens Technik Akademie Berlin wants you and your programs to be successful. Thus, we offer a broad level of support to make that happen. ",
  },
  {
    question: "How is the quality of SMSCP outcomes managed by Siemens? ",
    answer:
      "Siemens ensures quality outcomes for SMSCP participating schools and students by keeping control over two major aspects of the certification process. First, we have an intensive and challenging Instructor Certification process that is generally performed together with us in Berlin, Germany. During this certification process, teachers learn about the ‘System Approach’ educational theory, instructional techniques, and how to integrate this knowledge into technical curriculums. Second, we control the development and administration of the level exams - in fact, it's the only part of the program we keep secret from our partner schools. This allows for an objective assessment and validation of the technical competence and the systematic thinking of the students. Through these mechanisms we are able to ensure that instructors are well-versed in the necessary instructional techniques to teach mechatronic systems in an applied, integrated fashion and that students have mastered both the technical skills and the applied thinking necessary to be successful in a Mechatronicsrelated job.",
  },
  {
    question:
      "What kind of equipment is needed to teach SMSCP courses? Does it have to be Siemens equipment?",
    answer:
      "Teaching with System Approach means that a real mechatronic training system must always be in focus. Partner schools are required to have and use a mechatronic training system on site at their teaching facility. We can provide you with a list of hardware requirements that shows all the necessary equipment. Other than Siemens PLC components which are required, the program is vendor neutral. However, we do have corporate partners who specialize in mechatronic training system equipment and are well versed in our hardware requirements. They can help you assess your needs and help you develop an ‘off the shelf’ training system that best fits your budget. Please check our partner page for more information on these vendors.",
  },
  {
    question:
      "What is a Siemens-certified SMSCP Instructor? How does an Instructor become certified?",
    answer:
      "A Siemens-certified SMSCP instructorisan instructorthat has completed all the Siemens certification requirements to teach SMSCP curriculum at one or more of the 3 levels. In order for an instructor to become certified, he/she must complete the Siemens System Approach Paradigm Week training and the course content/curriculum training that corresponds to his/her desired Certification Level. During the Instructor certification process, participants are expected to actively participate in all training activities, demonstrate an openness to System Approach, as well as design and teach a sample lesson for that Level’s curriculum. ",
  },
  {
    question:
      "What type of professional background should an Instructor possess in order to participate in SMSCP Instructor Certification process? ",
    answer:
      "SMSCP Instructors come from a variety of technical backgrounds. Typically, instructors have an educational and teaching background in one or more of the related subject areas of Mechatronics. These include electrical engineering, mechanical engineering, or software and computer engineering. We have also had successful candidates with backgrounds in areas such as industrial maintenance, engineering technology, and electronics, as well as technical trades such as Heating, Ventilation, and Air Conditioning (HVAC).  ",
  },
  {
    question:
      "Does the Instructor Certification always have to take place in Berlin?  ",
    answer:
      "We strongly recommend coming to Berlin for Paradigm Week, so that you can learn about System Approach in the place where it was developed, and get an in-depth look at how we have incorporated it in our own Bachelor of Engineering program, which is the foundation of SMSCP. However, the Paradigm Week and Certification Week are also available at different locations.",
  },
];

const FAQs = () => {
  const targetTimestamp = new Date("2024-12-31").getTime(); // Example date
  return (
    <div className="bg-gray-100">
      <Header targetDate={targetTimestamp} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-3xl font-extrabold text-siemens-green sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <GeneralFAQs />
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
            Siemens Mechatronic Systems Certification Program FAQs
          </h2>
          <FAQSection faqs={faqData} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
