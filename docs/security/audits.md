# <i class="fa-solid fa-clipboard-check m8-heading-icon" aria-hidden="true"></i> Audits & framework coverage

M8Shift has been audited threat-by-threat against the major agentic-security frameworks
and against external research. The honest headline is unusual: **most model-attack
surfaces simply do not exist here**, because M8Shift has **no model of its own** — it is a
passive, local, single-file coordination relay. Those "no surface here" verdicts are a
*feature of the design*, not a gap.

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
  <div>
    <strong>How to read this page</strong>
    <p>Each framework below is mapped to M8Shift with a plain verdict: <strong>applies</strong>, <strong>partial</strong>, or <strong>N/A by design</strong>, with a one-line reason. The full, citation-checked audits live in the repository.</p>
  </div>
</div>

## <i class="fa-solid fa-table-list m8-heading-icon" aria-hidden="true"></i> Coverage by framework

| Framework | What it targets | M8Shift verdict |
|-----------|-----------------|-----------------|
| [OWASP Agentic Top 10 (ASI01–10)](https://genai.owasp.org/) | threats specific to agentic applications | **Audited threat-by-threat.** Strong on inter-agent integrity, anti-cascade, supply chain, human traceability; identity & network controls are **out of scope by design** (local, declarative). |
| [MITRE ATLAS](https://atlas.mitre.org/) | adversarial machine learning (model attacks) | **~90 % N/A.** ATLAS is overwhelmingly a model-attack taxonomy (evasion, inversion, poisoning); there is no model, training, or inference API to attack. |
| [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework) (AI 100-1 + GenAI Profile 600-1) | AI risk management functions | **Partial.** GOVERN / MAP / MANAGE apply (charter-as-governance, ledger-as-traceability); **MEASURE** (model metrics, bias measurement, robustness eval) is **N/A** — no model to measure. |
| [CISA — Secure AI System Development](https://www.cisa.gov/ai) | secure-by-design AI lifecycle | **Applies.** Supply-chain hygiene, configuration hardening, continuous monitoring — these intersect M8Shift's two named gaps (SEC-4, SEC-7). |
| [ANSSI-PA-102](https://cyber.gouv.fr/) | securing a generative-AI system | **Partial.** Phase isolation / cloisonnement and access-control axes apply; the model- and training-poisoning recommendations are **N/A** — no training pipeline. |
| [IBM AI Risk Atlas](https://www.ibm.com/think/topics/ai-risk-management) | AI risks incl. bias & fairness | **N/A by design.** Training-data, inference, and output risks — **including every classic bias/fairness risk** — are structurally inapplicable: no data to skew, no inference to attack, no output to bias. |
| [arXiv agentic-security research](https://arxiv.org/) | agentic defenses | **Mixed.** Activation/model-drift defenses are correctly N/A; *verify-before-commit* style ideas map cleanly onto the relay's independent review and read-only validation. |

## <i class="fa-solid fa-list-check m8-heading-icon" aria-hidden="true"></i> OWASP Agentic Top 10 — coverage matrix

| # | Threat | M8Shift verdict |
|---|--------|-----------------|
| **ASI01** | Goal Hijack | 🟡 Partial — boundary documented & structurally neutralized, not semantically filtered |
| **ASI02** | Tool Misuse | 🟢 Good — narrow scope, no network, no billable loop |
| **ASI03** | Identity & Privilege Abuse | 🟠 Out of scope by design — declarative cooperative identity |
| **ASI04** | Supply Chain | 🟢 Excellent — stdlib-only, no `requirements.txt` |
| **ASI05** | Remote Code Execution | 🟢 Good — no `eval`/shell; `git` argv-only; SEC-4 fixed & tested |
| **ASI06** | Memory & Context Poisoning | 🟢 Strong integrity (append-only) / 🟡 content |
| **ASI07** | Insecure Inter-Agent Comm. | 🟢 Local integrity / 🟠 no crypto — network surface is **N/A** |
| **ASI08** | Cascading Failures | 🟢 Anti-cascade by design — one writer at a time |
| **ASI09** | Human-Agent Trust | 🟢 Strong traceability — immutable, auditable turns |
| **ASI10** | Rogue Agents | 🟠 Strong detection / prevention out of scope by design |

## <i class="fa-solid fa-ban m8-heading-icon" aria-hidden="true"></i> Controls we deliberately do *not* add

A passive local relay stays trustworthy partly by **refusing** controls that would be
security theater in its model:

| Control | Why it is rejected |
|---------|--------------------|
| mTLS / PKI / end-to-end channel encryption | No network → no MITM surface. Adding transport crypto to a local file is theater. |
| Semantic prompt-injection filtering inside the relay | A transport must not rewrite the payload; reliable NL injection filtering is unsolved and adds false positives. The documented boundary + structural neutralization fit the role. |
| Cryptographic agent identity (signed intent, per-agent tokens) | Identity is **declarative and cooperative** by design; crypto-identity belongs to a different (networked) model. |

> The condition is stated explicitly: **if M8Shift ever became networked, mTLS + message
> signing + roster attestation would become required.** It is local, so they are not.

## <i class="fa-solid fa-scale-unbalanced m8-heading-icon" aria-hidden="true"></i> A note on AI cognitive bias

The frameworks above that target **cognitive / statistical bias** — IBM's bias & fairness
risks, NIST's MEASURE bias metrics — assume a **model**: training data that can skew,
inference that can be probed, output that can be biased. M8Shift has **none of these**, so
those risks are **not applicable by construction**. (For background on what model bias
*is*, IBM keeps a solid primer: [What is AI bias?](https://www.ibm.com/think/topics/ai-bias).)

The honest analogue that *does* apply to a model-less coordinator is **process fairness
between agents**: does the coordinator favor its own answers, or stay neutral toward a
peer's findings? M8Shift's answer is **structural and procedural, never cognitive**:

<div class="m8-callout m8-callout--purple">
  <i class="fa-solid fa-scale-balanced" aria-hidden="true"></i>
  <div>
    <strong>Neutrality is enforced by structure, not by debiasing a mind</strong>
    <p>The reviewer is a <em>different agent on a different turn</em> from the author; the turn journal is <strong>append-only</strong>, so a finding and the response to it are both permanently on record and cannot be quietly softened. The author never green-lights their own work. The reviewer guidance requires reviewing adversarially by default and not favoring one's own prior output.</p>
  </div>
</div>

This is the only "bias" surface that maps onto M8Shift, and it is addressed as a *recorded
separation of duties* rather than a claim about any agent's internal objectivity. See the
[reviewer-neutrality guidance](https://github.com/M8Shift/M8Shift/blob/main/docs/en/agents-guide.md) for the exact rules agents follow.

## <i class="fa-solid fa-book-open m8-heading-icon" aria-hidden="true"></i> Sources

The full, citation-checked audits — every ASI threat, the 16 MITRE ATLAS tactics, the
arXiv paper table, and the NIST / CISA / ANSSI / IBM mapping — are maintained in the
repository:

- [OWASP Agentic Top 10 audit](https://github.com/M8Shift/M8Shift/blob/main/docs/en/owasp-agentic-top10-audit.md)
- [Security research & external frameworks](https://github.com/M8Shift/M8Shift/blob/main/docs/en/security-research-and-frameworks.md)
- [Security audit (code, coordination, prompt surfaces)](https://github.com/M8Shift/M8Shift/blob/main/docs/en/security-audit.md)

Framework references: [OWASP GenAI Security Project](https://genai.owasp.org/) ·
[MITRE ATLAS](https://atlas.mitre.org/) ·
[NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) ·
[CISA AI](https://www.cisa.gov/ai) ·
[ANSSI](https://cyber.gouv.fr/) ·
[IBM AI risk management](https://www.ibm.com/think/topics/ai-risk-management).
