# Knock marketing skills

Agent skills for marketing, GTM, lifecycle, product, and engineering teams. Each skill teaches an AI agent one recurring job, like flagging churn risk, finding SEO gaps, or drafting a launch email, and lists the tools it connects to and the guardrails it follows. Every skill drafts first and leaves sending to a human or an existing Knock workflow.

Skills follow the [Agent Skills](https://agentskills.io/) format. This repo is the source of truth for the skills directory at [knock.app](https://knock.app). For skills that help coding agents build with Knock, see [knocklabs/skills](https://github.com/knocklabs/skills).

## Available skills

| Skill | Name | Teams | Description |
| --- | --- | --- | --- |
| [Churn watch](skills/knock-churn-watch/SKILL.md) | `knock-churn-watch` | Lifecycle | Flags accounts going quiet and drafts a save play. |
| [Onboarding workflow audit](skills/knock-onboarding-workflow-audit/SKILL.md) | `knock-onboarding-workflow-audit` | Lifecycle, Product | Reviews your product codebase for onboarding moments you can message about. |
| [Changelog announcer](skills/knock-changelog-announcer/SKILL.md) | `knock-changelog-announcer` | Marketing, Product | Turns merged PRs into a customer-ready announcement. |
| [Competitor intel brief](skills/knock-competitor-intel-brief/SKILL.md) | `knock-competitor-intel-brief` | Marketing, GTM, Product | A weekly, sourced summary of what competitors shipped. |
| [SEO opportunity finder](skills/knock-seo-opportunity-finder/SKILL.md) | `knock-seo-opportunity-finder` | Marketing | Finds keywords you almost rank for and what to change. |
| [AI visibility report](skills/knock-ai-visibility-report/SKILL.md) | `knock-ai-visibility-report` | Marketing | Tracks how often AI answers mention you, and why. |
| [Notification QA](skills/knock-notification-qa/SKILL.md) | `knock-notification-qa` | Engineering, Lifecycle | Lints messaging workflows and templates before you commit. |
| [Support reply drafter](skills/knock-support-reply-drafter/SKILL.md) | `knock-support-reply-drafter` | Product | Drafts grounded replies to new Intercom conversations. |
| [Page SEO audit](skills/knock-page-seo-audit/SKILL.md) | `knock-page-seo-audit` | Marketing, Engineering | Audits one page for technical SEO issues you can fix. |
| [Keyword priority setter](skills/knock-keyword-priority-setter/SKILL.md) | `knock-keyword-priority-setter` | Marketing | Ranks the keywords worth writing for this month. |
| [Homepage headline test](skills/knock-homepage-headline-test/SKILL.md) | `knock-homepage-headline-test` | Marketing | Drafts headline options from your positioning docs. |
| [Signup friction review](skills/knock-signup-friction-review/SKILL.md) | `knock-signup-friction-review` | Product, Engineering | Finds steps in signup that stall new users. |
| [Landing page critique](skills/knock-landing-page-critique/SKILL.md) | `knock-landing-page-critique` | Marketing | Reviews a landing page before you ship the variant. |
| [Launch announcement draft](skills/knock-launch-announcement-draft/SKILL.md) | `knock-launch-announcement-draft` | Marketing, Product | Turns a product brief into a launch announcement. |
| [Launch email builder](skills/knock-launch-email-builder/SKILL.md) | `knock-launch-email-builder` | Marketing, Lifecycle | Drafts a launch email and the in-app message beside it. |
| [Monthly newsletter](skills/knock-monthly-newsletter/SKILL.md) | `knock-monthly-newsletter` | Marketing, Lifecycle | Drafts the monthly newsletter from what shipped. |
| [Deliverability watch](skills/knock-deliverability-watch/SKILL.md) | `knock-deliverability-watch` | Lifecycle, Engineering | Flags deliverability drops and broken links each week. |
| [Inactive trial scan](skills/knock-inactive-trial-scan/SKILL.md) | `knock-inactive-trial-scan` | Lifecycle, GTM | Lists trial accounts with no activity for 30 days. |
| [Messaging performance review](skills/knock-messaging-performance-review/SKILL.md) | `knock-messaging-performance-review` | Lifecycle, Marketing | Summarizes which messages worked last week. |
| [Account data lookup](skills/knock-account-data-lookup/SKILL.md) | `knock-account-data-lookup` | GTM | Answers a question about one account from your data tools. |
| [Multi-voice post draft](skills/knock-multi-voice-post-draft/SKILL.md) | `knock-multi-voice-post-draft` | Marketing | Drafts the same idea in four social voices. |
| [Comment opportunity finder](skills/knock-comment-opportunity-finder/SKILL.md) | `knock-comment-opportunity-finder` | Marketing | Finds posts worth a comment and drafts one. |
| [Launch social pack](skills/knock-launch-social-pack/SKILL.md) | `knock-launch-social-pack` | Marketing | Drafts the social posts that go with a launch. |
| [Weekly ads report](skills/knock-weekly-ads-report/SKILL.md) | `knock-weekly-ads-report` | Marketing | Reports spend, results, and where return slipped. |
| [Ad refresh brief](skills/knock-ad-refresh-brief/SKILL.md) | `knock-ad-refresh-brief` | Marketing | Briefs new copy and creative for ads that slipped. |
| [Account-based ad plan](skills/knock-account-based-ad-plan/SKILL.md) | `knock-account-based-ad-plan` | GTM | Plans ads around the accounts you are already working. |
| [Outreach sequence writer](skills/knock-outreach-sequence-writer/SKILL.md) | `knock-outreach-sequence-writer` | GTM | Writes a short outbound sequence for one segment. |
| [Speaker outreach draft](skills/knock-speaker-outreach-draft/SKILL.md) | `knock-speaker-outreach-draft` | Marketing | Drafts outreach to speakers, vendors, and hosts. |
| [Sales signal alert](skills/knock-sales-signal-alert/SKILL.md) | `knock-sales-signal-alert` | GTM | Turns a buying signal into a Slack message you can send. |
| [Account list keeper](skills/knock-account-list-keeper/SKILL.md) | `knock-account-list-keeper` | GTM | Keeps the target account list current. |
| [Account signal check](skills/knock-account-signal-check/SKILL.md) | `knock-account-signal-check` | GTM | Logs the day's account signals for the target list. |
| [Contact list enrichment](skills/knock-contact-list-enrichment/SKILL.md) | `knock-contact-list-enrichment` | GTM | Fills gaps on the contacts you plan to reach. |
| [Positioning page draft](skills/knock-positioning-page-draft/SKILL.md) | `knock-positioning-page-draft` | Marketing | Drafts a page from the positioning and brand docs. |
| [Comparison page brief](skills/knock-comparison-page-brief/SKILL.md) | `knock-comparison-page-brief` | Marketing, GTM, Product | Briefs a comparison page from sourced competitor facts. |
| [Internal link finder](skills/knock-internal-link-finder/SKILL.md) | `knock-internal-link-finder` | Marketing, Engineering | Finds pages that should link to a URL you care about. |
| [Decaying page refresh](skills/knock-decaying-page-refresh/SKILL.md) | `knock-decaying-page-refresh` | Marketing | Turns a slipping page into a refresh brief. |
| [Snippet rewriter](skills/knock-snippet-rewriter/SKILL.md) | `knock-snippet-rewriter` | Marketing | Rewrites titles and descriptions for the query you want. |
| [Subject line options](skills/knock-subject-line-options/SKILL.md) | `knock-subject-line-options` | Lifecycle, Marketing | Drafts subject lines for an email you already send. |
| [Win-back email](skills/knock-win-back-email/SKILL.md) | `knock-win-back-email` | Lifecycle | Drafts a win-back email for people who went quiet. |
| [Broadcast audience check](skills/knock-broadcast-audience-check/SKILL.md) | `knock-broadcast-audience-check` | Lifecycle, Marketing | Checks who a broadcast would skip before you send it. |
| [Activation gap finder](skills/knock-activation-gap-finder/SKILL.md) | `knock-activation-gap-finder` | Lifecycle, Product | Finds first-week moments with no message behind them. |
| [Win-back play](skills/knock-win-back-play/SKILL.md) | `knock-win-back-play` | Lifecycle | Picks who to win back and the one step to offer them. |
| [Feature adoption nudge](skills/knock-feature-adoption-nudge/SKILL.md) | `knock-feature-adoption-nudge` | Lifecycle, Product | Drafts a nudge for a feature people have not tried. |
| [Search term cleanup](skills/knock-search-term-cleanup/SKILL.md) | `knock-search-term-cleanup` | Marketing | Finds search terms that should become negatives. |
| [Ad to page match](skills/knock-ad-to-page-match/SKILL.md) | `knock-ad-to-page-match` | Marketing | Checks that the landing page keeps the ad's promise. |
| [Creative fatigue watch](skills/knock-creative-fatigue-watch/SKILL.md) | `knock-creative-fatigue-watch` | Marketing | Flags ads whose click-through rate is falling. |
| [Password reset draft](skills/knock-password-reset-draft/SKILL.md) | `knock-password-reset-draft` | Engineering | Drafts the password reset email from the reset event. |
| [Sign-in code draft](skills/knock-sign-in-code-draft/SKILL.md) | `knock-sign-in-code-draft` | Engineering | Drafts the one-time code for email and SMS. |
| [Email verification draft](skills/knock-email-verification-draft/SKILL.md) | `knock-email-verification-draft` | Engineering | Drafts the email that confirms a new address. |
| [Teammate invite draft](skills/knock-teammate-invite-draft/SKILL.md) | `knock-teammate-invite-draft` | Engineering | Drafts the invite a teammate receives. |
| [Failed payment notice](skills/knock-failed-payment-notice/SKILL.md) | `knock-failed-payment-notice` | Engineering | Drafts the notice when a payment fails. |
| [Payment receipt draft](skills/knock-payment-receipt-draft/SKILL.md) | `knock-payment-receipt-draft` | Engineering | Drafts the receipt for a successful charge. |
| [New device alert](skills/knock-new-device-alert/SKILL.md) | `knock-new-device-alert` | Engineering | Drafts the alert for a sign-in from a new device. |
| [Export ready notice](skills/knock-export-ready-notice/SKILL.md) | `knock-export-ready-notice` | Engineering | Drafts the notice when a data export is ready. |
| [Mention notification draft](skills/knock-mention-notification-draft/SKILL.md) | `knock-mention-notification-draft` | Engineering | Drafts the message for an @mention. |
| [Approval request draft](skills/knock-approval-request-draft/SKILL.md) | `knock-approval-request-draft` | Engineering | Drafts the request sent to an approver. |
| [API key notice](skills/knock-api-key-notice/SKILL.md) | `knock-api-key-notice` | Engineering | Drafts the notice when an API key is created or revoked. |
| [Usage limit notice](skills/knock-usage-limit-notice/SKILL.md) | `knock-usage-limit-notice` | Engineering | Drafts the notice when usage crosses a limit. |

## Installation

Before running a skill, connect the tools listed in its `## Tools` section (for example the Knock MCP server, PostHog, or Slack).

### Claude

Download the skill folder (for example `skills/knock-churn-watch/`) as a ZIP and upload it in Claude under **Settings > Capabilities > Skills**.

### Claude Code

Install one skill, or all of them:

```bash
npx skills add knocklabs/marketing-skills --skill knock-churn-watch
npx skills add knocklabs/marketing-skills
```

Or copy a skill folder to `.claude/skills/<name>/` in your project, or clone the repository and load it as a plugin:

```bash
git clone https://github.com/knocklabs/marketing-skills
claude --plugin-dir ./marketing-skills
```

### Cursor

```bash
npx skills add knocklabs/marketing-skills
```

Or copy a skill folder to `.cursor/skills/<name>/`, then ask the agent to run the skill by its title (for example, "run churn watch").

### ChatGPT, Codex, Grok Bot, and other tools

Every `SKILL.md` body is self-contained. Copy everything below the frontmatter and paste it into a ChatGPT chat, a custom GPT, Codex, or Grok Bot. For Grok Bot, create a bot with the trigger listed under `## When to use`, connect the tools listed under `## Tools`, and paste the body as the bot instructions.

## Updating the skills on knock.app

Every skill on [knock.app/skills](https://knock.app/skills) comes from this repo. The website reads from it, so content changes happen here, not in the website's code.

### What you can change here

- Add a new skill, or edit or remove one.
- A skill's instructions, tools, guardrails, use cases, FAQ, and example output.
- The chat card at the top of a skill's page. It's the `card` section at the top of the skill's `example-output.md`.
- The order skills appear in on knock.app, in `directory.json`.
- The names shown for teams, jobs, triggers, and tools, in `schema.json`.

### How a change goes live

1. Open a pull request here with your change. A check runs on it and tells you if anything is missing or wrong, like a team name that doesn't exist.
2. Merge it once the check passes.
3. Update the website to the latest version of this repo. Ask an engineer, or ask your AI coding agent: "In knocklabs/marketing-site, update the marketing-skills submodule to the latest main and open a pull request."
4. When that website pull request merges, knock.app updates.

Merging here doesn't change the website on its own. Step 3 is what brings your changes over.

### What still needs a website change

A few things live in the website's code. Ask an engineer, or include them in the step 3 pull request:

- A new kind of tool, like a new CRM. It needs a logo.
- A new team or job. It needs an icon for the filters.
- A new icon for a skill's avatar.
- A new AI tool tab beside Claude, ChatGPT, Grok Bot, and Cursor.
- Text on the main knock.app/skills page, like the intro and the FAQ.

Most of these stop the website build until the website change is in, so nothing broken goes live. The exception is a new skill icon: the page shows a magnifying glass instead, so check the page once it's live.

## Skill structure

```
skills/
└── knock-<skill>/
    ├── SKILL.md                  # Frontmatter plus core instructions, tools, and guardrails
    └── references/
        ├── use-cases.md          # How each team uses the skill
        ├── example-output.md     # A sample of what the skill produces
        └── faq.md                # Common questions
```

`SKILL.md` frontmatter carries the spec fields (`name`, `description`, `license`) and a `metadata` map of string values that the knock.app skills directory reads. See [`AGENTS.md`](AGENTS.md) for the full list of metadata keys and how to add a skill.

## Validation

```bash
npm run validate
```

The validator checks every skill against the Agent Skills spec and against what knock.app needs, like known teams and tools, a guardrails section, and a complete chat card. It runs on every pull request. The knock.app build uses the same checks, so a skill that passes here works on the site.

## License

[MIT](LICENSE)
