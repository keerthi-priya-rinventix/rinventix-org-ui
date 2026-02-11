import { InfoPill } from "../components/case-study/InfoPill";
import { StatusQuoTable } from "../components/case-study/StatusQuoTable";
import copyIcon from "../assets/copy-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import facebookIcon from "../assets/fb-icon.svg";
import { NewsletterCard } from "../components/NewsletterCard";
import { Footer, RinventixInfoHub } from "../components/home";
import casestudyImage from '../assets/case-study-image.jpg';

export function CaseStudies() {
  const sectionHeadingClass = "font-satoshi font-medium text-[24px] text-[#141415]";
  const sectionSubHeadingClass = "font-satoshi font-medium text-[20px] text-[#141415]";
  const sectionContentClass = "font-satoshi font-normal text-[16px] text-[#2C3A4B]";
  return (
    <div className="pt-10 px-[60px] flex flex-col gap-4">
      <div className="self-start">
        <InfoPill type="Product" minsToRead={8} />
      </div>
      <div className="font-satoshi font-medium text-[40px] leading-[120%] tracking-[-0.03em] text-black text-start max-w-[60%]">
        Enabling natural language access to data, documents, and communications through a secure, AI-powered platform.
      </div>
      <div className="text-[#2C3A4B] font-inter font-normal text-[16px] leading-[145%] tracking-[0] text-start max-w-[50%]">
        Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty? Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>

      <img src={casestudyImage} alt="Case Study" className="w-full h-full object-cover py-8" />

      <div className="flex gap-4">
        <div className="flex gap-12">
          <div className="flex flex-col gap-1 items-start">
            <div className="text-[#1A61FF] text-[14px] font-bold">Written by</div>
            <div className="text-[#141415] text-[18px] font-medium">Alec Whitten</div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="text-[#1A61FF] text-[14px] font-bold">Published on</div>
            <div className="text-[#141415] text-[18px] font-medium">17 Jan, 2022</div>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 border border-[#D0D5DD] rounded-[8px] px-2 h-[40px]">
          <img src={copyIcon} alt="Copy" />
          <div>Copy link</div>
        </div>

        <div className="border border-[#D0D5DD] rounded-[8px] flex items-center px-2 h-[40px]">
          <img src={twitterIcon} alt="Twitter" />
        </div>
        <div className="border border-[#D0D5DD] rounded-[8px] flex items-center px-2 h-[40px]">
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
        <div className="border border-[#D0D5DD] rounded-[8px] flex items-center px-2 h-[40px]">
          <img src={facebookIcon} alt="Facebook" />
        </div>
      </div>


      <div className="pt-20 flex gap-10">
        {/* {Case Study Content} */}
        <div className="flex flex-col gap-8 text-start max-w-[75%]">
          <div className="flex flex-col gap-2">
            <div className={sectionHeadingClass}>
              Executive Summary
            </div>
            <div className={sectionContentClass}>
              A major insurance organisation partnered with Rinventix to build a secure AI Insurance assistant that transforms how employees access internal data. The platform provides a single conversational interface for querying claims databases, policy systems, documents, emails, and meeting transcripts—all in plain English.<br /><br />
              By leveraging custom Artificial Intelligence in insurance workflows, business users now retrieve insights instantly without technical expertise. This shift has eliminated dependency on IT teams while achieving 50% cost savings compared to generic alternatives, such as Microsoft Copilot.
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-2">
            <div className={sectionHeadingClass}>
              The Challenge: Data Silos & Technical Bottlenecks
            </div>
            <div className={sectionContentClass}>
              Insurance organisations operate in data-intensive environments where critical information is fragmented. Claims, policies, and reports exist in separate silos, making it difficult for teams handling complex tasks—such as AI underwriting or AI car insurance claims—to find relevant information quickly.
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className={sectionSubHeadingClass}>
              The Challenge: Data Silos & Technical Bottlenecks
            </div>
            <div className={sectionContentClass}>
              <ul>
                <li className="flex gap-2"><span className="w-1 h-1 bg-black rounded-full shrink-0 mt-2.5" aria-hidden /><span><strong>Fragmented Data Access:</strong> Critical information is scattered across databases and documents with no unified search capability.</span></li>
                <li className="flex gap-2"><span className="w-1 h-1 bg-black rounded-full shrink-0 mt-2.5" aria-hidden /><span><strong>Technical Bottlenecks:</strong> Business teams depend on IT specialists for basic data retrieval, causing delays of hours or even days.</span></li>
                <li className="flex gap-2"><span className="w-1 h-1 bg-black rounded-full shrink-0 mt-2.5" aria-hidden /><span><strong>Manual Document Review:</strong> Claims professionals spend excessive time manually reviewing PDFs and Excel files instead of analysing insights.</span></li>
                <li className="flex gap-2"><span className="w-1 h-1 bg-black rounded-full shrink-0 mt-2.5" aria-hidden /><span><strong>High Licensing Costs:</strong> Generic AI copilots are expensive and often underutilized. In a 500-person organisation, these tools cost approximately $£10,000 monthly, despite only 20% of users fully utilizing advanced features.</span></li>
              </ul>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-2">
            <div className={sectionSubHeadingClass}>
              Before Rinventix:
            </div>
            <StatusQuoTable
              rows={[
                {
                  metric: "Average Data Request Time",
                  statusQuo:
                    "24-hour waits (or longer) for technical teams to fulfil basic queries.",
                },
                {
                  metric: "Search vs. Analysis",
                  statusQuo:
                    "Claims professionals spent more time searching for information than analysing it.",
                },
                {
                  metric: "Cost Inefficiency",
                  statusQuo:
                    "Licensing fees reached $£120,000 annually for features the majority of staff didn't use.",
                },
              ]}
            />
          </div>

          <hr />

          <div className="flex flex-col gap-2">
            <div className={sectionSubHeadingClass}>
              The Solution: A Custom AI Insurance Platform
            </div>
            <div className={sectionContentClass}>
              Rinventix designed a custom AI Insurance assistant that serves as a single entry point to enterprise knowledge. Accessible via web, email, and internal collaboration tools, it eliminates technical barriers while maintaining strict security controls.
            </div>
            <div className={sectionSubHeadingClass}>
              Core Capabilities
            </div>
            <div className="flex flex-col gap-4">
              <div className={sectionContentClass}>
                <strong>1. Natural Language to Data</strong><br />
                Business users ask questions in plain English. The system interprets the intent, generates safe SQL queries, and returns structured results instantly. This is vital for processing high-volume queries in sectors like AI auto insurance.
              </div>
              <div className={sectionContentClass}>
                <strong>2. Intelligent Document Understanding</strong><br />
                Users can upload PDFs, Word files, or Excel sheets. The platform extracts text, understands tables, and enables conversational Q&A over complex documents.              </div>
              <div className={sectionContentClass}>
                <strong>3. Communication Intelligence</strong><br />
                The system integrates with enterprise email and meeting tools to search, summarise, and draft responses. Critical information from communications is never lost.
              </div>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-2">
            <div className={sectionHeadingClass}>
              How It Works: Natural Language Access
            </div>
            <div className={sectionContentClass}>
              <strong>Simple Questions, Instant Answers</strong><br />

              Claims professionals can ask: <strong>"Show me all open claims with reserves above $£50,000."</strong><br />

              The system automatically interprets intent, generates secure read-only SQL queries, executes them against enterprise data warehouses, and returns clean results—all in seconds.<br />

              <strong>Example Query: "Which policies are up for renewal in the next 30 days with a total insured value over $£1 million?"</strong><br />

              What previously required technical team involvement and hours of waiting now happens instantly, empowering business users to analyse data independently.<br />
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-2">
            <div className={sectionSubHeadingClass}>
              Security & Governance Architecture
            </div>
            <div className={sectionContentClass}>
              Given the sensitivity of insurance data, security was embedded as a core design principle from day one. The platform maintains enterprise-grade protection whilst enabling seamless user access.<br />

              <strong>Read-Only Access</strong><br />
              Database connections restricted to read-only operations with multi-layer SQL injection prevention.<br />

              <strong>Data Protection</strong><br />
              Sensitive personal information automatically masked. No exposure of confidential customer data.<br />

              <strong>Identity Management</strong><br />
              Enterprise SSO integration via identity provider with strict session isolation per user.<br />
            </div>
          </div>



        </div>

        {/* {Newsletter email} */}
        <div>
          <NewsletterCard />

        </div>
      </div>

        <RinventixInfoHub />

        <div className="-mx-[60px] w-[calc(100%+120px)]">
          <Footer />
        </div>
    </div>
  );
}
