import { CaseStudySection, CaseStudySectionWithSubtitle } from './CaseStudySection';
import { CaseStudyTable } from './CaseStudyTable';

export function CaseStudyArticle() {
  return (
    <article className="min-w-0">
      <CaseStudySection title="Executive Summary">
        <p className="mb-4">
          <strong>AI Insurance assistant</strong> and the use of{' '}
          <strong>Artificial Intelligence in insurance workflows</strong> have
          enabled significant gains, including an estimated{' '}
          <strong>50% cost savings</strong> in key processes. With solutions
          like <strong>Microsoft Copilot</strong> and custom platforms, insurers
          are reimagining how data, documents, and communications are accessed.
          <strong>Rinventix</strong> has been a partner in designing and
          deploying these capabilities.
        </p>
        <p>
          This case study outlines the challenge of data silos and technical
          bottlenecks, the solution built on a secure AI-powered platform, and
          the outcomes achieved through natural language access to data,
          documents, and communications.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Challenge: Data Silos & Technical Bottlenecks">
        <p>
          Information was spread across multiple systems, making it difficult to
          get a single view of the truth. Claims and underwriting teams spent
          considerable time searching for data instead of analysing it, and
          licensing costs for legacy tools were high while adoption remained
          low.
        </p>
      </CaseStudySection>

      <CaseStudySection title="The Challenge: Data Silos & Technical Bottlenecks">
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Fragmented Data Access:</strong> Data lived in separate
            databases and applications, with no unified way to query or report.
          </li>
          <li>
            <strong>Technical Bottlenecks:</strong> Simple data requests
            required technical teams, leading to long wait times and
            inefficiency.
          </li>
          <li>
            <strong>Manual Document Review:</strong> Key information in
            documents and emails was not easily searchable or summarised.
          </li>
          <li>
            <strong>High Licensing Costs:</strong> Existing enterprise tools
            cost around £10,000 monthly for a 500-person organisation, with
            limited usage.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection title="Before Rinventix:">
        <CaseStudyTable
          headers={['Metric ↓', 'Status Quo']}
          rows={[
            {
              metric: 'Average Data Request Time',
              value:
                '24-hour waits (or longer) for technical teams to fulfil basic queries.',
            },
            {
              metric: 'Search vs. Analysis',
              value:
                'Claims professionals spent more time searching for information than analysing it.',
            },
            {
              metric: 'Cost Inefficiency',
              value:
                'Licensing fees reached £120,000 annually for features the majority of staff didn\'t use.',
            },
          ]}
        />
      </CaseStudySection>

      <CaseStudySection title="The Solution: A Custom AI Insurance Platform">
        <p>
          Rinventix designed and delivered a custom AI Insurance assistant that
          provides natural language access to data, documents, and communications
          through a single, secure platform. The system integrates with
          existing data sources and collaboration tools while enforcing
          read-only access and governance.
        </p>
      </CaseStudySection>

      <CaseStudySection title="Core Capabilities">
        <ol className="list-decimal pl-6 space-y-4">
          <li>
            <strong>Natural Language to Data:</strong> Users ask questions in
            plain English; the system translates them into secure queries and
            returns results in seconds. Example: “Show me all open claims with
            reserves above £50,000” without writing SQL or waiting on IT.
          </li>
          <li>
            <strong>Intelligent Document Understanding:</strong> PDFs, Word
            files, and Excel sheets are indexed and searchable. Users can ask
            questions in natural language and get answers with source
            references, enabling faster document review and compliance checks.
          </li>
          <li>
            <strong>Communication Intelligence:</strong> Integration with
            enterprise email and meeting tools preserves critical information
            and makes it discoverable, so context from communications is never
            lost.
          </li>
        </ol>
      </CaseStudySection>

      <CaseStudySectionWithSubtitle
        title="How It Works: Natural Language Access"
        subtitle="Simple Questions, Instant Answers"
      >
        <p className="mb-4">
          Users type or speak questions such as: “Show me all open claims with
          reserves above £50,000.” The system interprets the intent, runs
          authorised queries against the right data sources, and returns
          results in a clear format—often in seconds instead of days.
        </p>
        <p className="mb-4">
          Another example: <strong>“Which policies are up for renewal in the
          next 30 days with a total insured value over £1 million?”</strong> The
          platform connects to policy and renewal data, applies filters, and
          presents the list with options to export or drill down. This shift
          from “request and wait” to “ask and get” has reduced dependency on
          technical teams and accelerated decision-making.
        </p>
      </CaseStudySectionWithSubtitle>

      <CaseStudySection title="Security & Governance Architecture">
        <p className="mb-4">
          Security was a core design principle from the start. The platform is
          built to meet enterprise requirements for data protection, access
          control, and auditability.
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Read-Only Access:</strong> The AI assistant cannot modify
            source data; it only reads and presents information, reducing risk
            of accidental or malicious changes.
          </li>
          <li>
            <strong>Data Protection:</strong> Data is encrypted in transit and
            at rest, and access is logged for compliance and auditing.
          </li>
          <li>
            <strong>Identity Management:</strong> Integration with Enterprise
            SSO ensures that only authorised users can access the platform and
            that permissions align with existing roles.
          </li>
        </ul>
      </CaseStudySection>
    </article>
  );
}
