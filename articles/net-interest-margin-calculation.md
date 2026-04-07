---
title: 'How to Calculate Net Interest Margin: Formula, Examples & Benchmarks'
description: 'Step-by-step net interest margin calculation with real credit union numbers. Includes the NIM formula, worked examples, annualization methods, and benchmarks.'
author: 'Michael Kelly'
date: '2026-04-07'
cluster: 'cluster-01-nim'
pillar: 'Daily Bottom Line'
target_keyword: 'net interest margin calculation'
secondary_keywords: ['net interest margin formula', 'how to calculate net interest margin']
schema_article: true
schema_faq: true
---

# How to Calculate Net Interest Margin: Formula, Examples & Benchmarks

Every month, a CFO somewhere presents a NIM number to the board and someone asks: "How exactly did we get that?" The room goes quiet. Someone pulls up a spreadsheet. The formula is there, but the inputs are murky -- what counted as earning assets, how the averages were computed, whether borrowing costs hit the right line. I have watched this scene play out dozens of times across 25 years of working inside credit unions. The calculation itself is straightforward. Getting the inputs right is where most institutions trip up.

This is the net interest margin calculation guide I wish every credit union analyst had on day one. Not a textbook formula with a $100 example. A step-by-step walkthrough using real credit union numbers, covering the decisions that affect your result before you ever plug anything into the formula.

## The Net Interest Margin Formula

Here it is, plain and simple:

> **NIM = (Interest Income - Interest Expense) / Average Earning Assets**

Three inputs. One output. The number tells you how many cents of spread you are keeping for every dollar of earning assets on your balance sheet.

Break it down:

- **Interest Income** -- every dollar you earn from lending money out and investing it. Loan interest, investment income, fed funds sold.
- **Interest Expense** -- every dollar you pay for the money you brought in. Share dividends, certificate rates, borrowing costs.
- **Average Earning Assets** -- the denominator that makes the percentage meaningful. Not total assets. Earning assets -- the portion of your balance sheet that is actually generating interest income.

The formula is the easy part. The next four steps are where precision matters.

## Step 1: Gather Your Interest Income

Interest income is the money your balance sheet earns. For a credit union, this includes:

**What counts:**

- Interest on all loan categories -- consumer, mortgage, commercial, share-secured, participation loans
- Investment income -- bonds, agency securities, mortgage-backed securities
- Interest on deposits at other institutions
- Fed funds sold and overnight investments
- Interest on NCUA share insurance (when applicable)

**What does not count:**

- Fee income -- NSF fees, interchange, loan origination fees
- Non-interest revenue -- insurance commissions, CUSO dividends, gain on sale of loans
- Unrealized gains or losses on investments

The distinction matters. I have seen credit unions accidentally include fee income in their interest income line because it sat in the same general ledger section. That inflates NIM and creates a number that is not comparable to any benchmark.

**Credit union nuance:** Participation loan income deserves attention. If your credit union buys loan participations from another institution, the interest income on those balances belongs in your interest income line. But the servicing fee you pay the originator comes out on the expense side or as a reduction to income, depending on how your accounting system handles it. Check which treatment your core system applies -- it changes the number.

For our working example, take a $350M credit union:

- Loan interest income: $12.8M
- Investment income: $1.6M
- Other interest income: $0.3M
- **Total interest income: $14.7M**

## Step 2: Calculate Your Interest Expense

Interest expense is the cost of the money you bought. This is where the [cost of funds](/resources/cost-of-funds-credit-unions) conversation starts -- what you are paying members and lenders for the privilege of using their money.

For a credit union, interest expense breaks into these buckets:

**Share dividends and deposit interest:**

- Regular share accounts -- typically your cheapest source, maybe 0.10% to 0.50%
- Money market accounts -- rate-sensitive, often 2.50% to 4.25% in the current environment
- Share certificates (CDs) -- locked rates, repricing on maturity. A $350M credit union might carry $80M in certificates at a blended rate of 4.15%
- IRA and HSA accounts

**Borrowed funds:**

- FHLB advances -- these carry market rates and are often the most expensive line on your funding side
- Fed funds purchased and overnight borrowings
- Subordinated debt (if applicable)

**What to watch:** The difference between the stated rate and the effective cost. A CD special advertised at 4.50% might have an effective cost of 4.58% once you factor in compounding and early withdrawal penalties that were waived. Your core system should give you the actual interest paid, not the stated rate -- use the actual number.

For our $350M credit union:

- Share dividends (regular shares + money markets): $2.1M
- Certificate interest: $2.4M
- Borrowed funds interest: $0.7M
- **Total interest expense: $5.2M**

## Step 3: Determine Average Earning Assets

This is where most net interest margin calculations go wrong. The denominator drives the percentage, and using the wrong one gives you a number that is either flattering or alarming -- neither of which helps you make decisions.

**What qualifies as earning assets:**

- Net loans (total loans minus allowance for loan losses)
- Investment securities (held-to-maturity and available-for-sale, at amortized cost)
- Interest-bearing deposits at other institutions
- Fed funds sold
- NCUA share insurance deposit (the portion that earns interest)

**What does not qualify:**

- Cash in vault and cash on hand
- Non-interest-bearing deposits at correspondent banks
- Fixed assets (buildings, equipment, land)
- NCUSIF deposit (debatable -- some include it, some exclude it; be consistent)
- Other real estate owned (OREO)
- Prepaid expenses and accrued income
- Intangible assets and goodwill

**Common mistake:** Including total assets as the denominator instead of earning assets. At a $350M credit union, the difference between total assets and earning assets might be $40M or more. That gap changes your NIM calculation by 30 to 40 basis points. If you are comparing your NIM to NCUA benchmarks, know that NCUA reports NIM as a percentage of average assets, not earning assets. You need to be clear about which denominator you are using, or the comparison is meaningless.

**Two methods for calculating the average:**

**Simple average:** (Beginning balance + Ending balance) / 2

Take the earning assets at the start of the period and the end of the period, add them, divide by two. This works for annual calculations and is what most credit unions use for board reporting.

**Daily average balance:** Sum of each day's earning asset balance / Number of days in the period

This is more accurate because it captures intra-period fluctuations. If a $15M FHLB advance was drawn on day 45 and repaid on day 75, the simple average might miss the impact entirely depending on when the period starts and ends. The daily average catches it.

For our $350M credit union:

- Earning assets at January 1: $305M
- Earning assets at December 31: $315M
- **Simple average earning assets: $310M**

## Step 4: Run the Calculation

Now plug in the numbers:

> NIM = ($14.7M - $5.2M) / $310M

> NIM = $9.5M / $310M

> **NIM = 3.06%**

That means this $350M credit union is keeping 3.06 cents of spread for every dollar of earning assets. On a $310M earning asset base, every single basis point of NIM is worth $31,000 annually. A 10-basis-point swing -- the kind that happens in a single quarter when deposit costs shift -- represents $310,000. That is real money. That is four full-time employees. That is the difference between funding a new branch initiative and shelving it.

Put another way: the net interest income of $9.5M is what this credit union has to cover all operating expenses, provision for loan losses, and build net worth. If NIM compresses from 3.06% to 2.80%, net interest income drops to $8.68M -- an $820,000 annual hit. That kind of compression happens faster than most leaders realize, especially when they only look at the number once a month.

## How to Annualize NIM for Different Time Periods

You will rarely calculate NIM only once a year. Most credit unions need monthly, quarterly, or year-to-date figures. The trick is annualization -- converting a shorter period's NIM into an annual equivalent so you can compare apples to apples.

**Monthly NIM annualization:**

Take the month's net interest income, divide by that month's average earning assets, then multiply by 12.

Example: In March, our $350M credit union earned $1.28M in interest income and paid $0.44M in interest expense, with average earning assets of $312M.

> Monthly NIM = ($1.28M - $0.44M) / $312M = 0.269%

> Annualized NIM = 0.269% x 12 = **3.23%**

**Quarterly NIM annualization:**

Same logic, multiply by 4.

> Quarterly NIM = (Quarter's net interest income / Quarter's average earning assets) x 4

**Year-to-date NIM annualization:**

Divide by the number of months elapsed, then multiply by 12. Or divide by the number of days elapsed, then multiply by the number of days in the year.

> YTD NIM (through September) = (9-month net interest income / 9-month average earning assets) x (12/9)

**Common annualization error:** Using 365 days in a leap year when the calculation should use 366. It sounds trivial. On a $1B balance sheet, the difference is real. Another error: annualizing a partial month. If your data covers January 1 through January 23, annualizing by multiplying by 12 assumes that 23-day period is representative of a full month. It usually is not, especially if a large CD matured on January 25.

The cleanest approach: use actual days elapsed divided by actual days in the year. It removes the guesswork.

## NIM on Total Assets vs. Earning Assets: Which Should You Use?

This is not an academic question. It changes your number and it changes your story.

**Earning assets as the denominator** is the standard for internal management. It tells you how efficiently your productive balance sheet is working. When you calculate NIM on earning assets, you are isolating the performance of the money that is actually out there generating income. Non-earning assets -- cash in the vault, the building you sit in, the ATMs -- do not contribute to interest income, so including them dilutes the picture.

**Total assets as the denominator** is what NCUA uses in its aggregate reporting. The NCUA's 3.39% industry average for 2025 is calculated on average assets, not average earning assets. This means if you are calculating your own NIM on earning assets (which will produce a higher percentage) and comparing it to the NCUA benchmark, you are comparing two different metrics.

**The practical impact:** At our $350M credit union, earning assets are $310M and total assets are $350M.

- NIM on earning assets: $9.5M / $310M = **3.06%**
- NIM on total assets: $9.5M / $350M = **2.71%**

That is a 35-basis-point difference from the same underlying economics. Neither number is wrong. But if you report 3.06% to the board and the examiner's benchmark says the industry is at 3.39%, you are comparing against a different denominator. Reconcile the methods before the conversation starts.

My recommendation: calculate both. Use earning assets for internal management and trend analysis. Use total assets when benchmarking against NCUA data or preparing for exams. Label them clearly so nobody confuses the two.

## Interpreting Your NIM: What the Number Tells You

Once you have the calculation, the question becomes: is this number good, bad, or just a number?

**Current credit union benchmarks (2025 NCUA data):**

- Industry average NIM: 3.39% of average assets
- Industry net interest income: $80.4 billion
- Year-over-year improvement: 39 basis points (up from 3.00% in 2024)

That 39-basis-point improvement came from two forces: easing deposit cost pressure as rate competition moderated, and reduced reliance on expensive borrowed funds (industry borrowings declined from 6.0% to 5.2% of assets). If your credit union did not see a similar improvement, the question is why -- and the answer is in the components of the calculation you just ran.

**What upward movement signals:** Your asset yields are rising faster than your funding costs, or your funding costs are dropping while asset yields hold steady. Either way, you are keeping more spread. Good news, but dig into whether it is sustainable. A NIM bump driven by one-time investment gains or a temporary drop in deposit costs will reverse.

**What downward movement signals:** Your cost of funds is climbing faster than your loan and investment yields. Or your earning asset mix is shifting toward lower-yielding securities. Or both. This is the compression scenario, and at a $500M credit union, every basis point of compression costs $50,000 annually.

**The "healthy NIM" distinction:** A high NIM is not automatically healthy. If your NIM is 3.80% because you are paying members below-market rates on deposits, you might be generating short-term margin at the expense of member relationships and long-term deposit retention. Conversely, a NIM of 2.90% might be perfectly sound if it reflects a deliberate strategy of competitive pricing in a market where you are growing membership and core deposits. The number without the context is just a number. For a deeper exploration of what drives NIM and how to manage it strategically, read [the complete guide to net interest margin for credit unions](/resources/net-interest-margin-credit-unions-guide).

## Why the Timing of Your Calculation Matters

You now know how to calculate NIM by hand. Here is the question that matters more than the math: how often are you doing it?

Most credit unions calculate NIM once a month, after the books close, as part of the financial reporting package. That means the number a CEO sees in mid-February reflects January's performance. By the time the board discusses it in late February, the data is 45 days old at the near end.

Consider what can move NIM in 45 days:

- A competitor launches a 4.75% money market special and you lose $8M in deposits to rate-chasers, replacing it with a more expensive FHLB advance
- A $12M CD portfolio matures and reprices 65 basis points higher because you were locked into a promotional rate from 18 months ago
- Auto loan payoffs spike because a national lender starts offering 4.99% and your 6.25% borrowers refinance out
- Your commercial portfolio generates a $2M early payoff, pulling high-yielding assets off the books

Each of those events changes the NIM calculation. But if you only run the numbers once a month, you do not know which ones happened, when they happened, or how much they moved the needle until weeks later. The decisions those events demand -- repricing the money market, adjusting the CD special, tightening your auto rate, replacing the commercial payoff with new originations -- cannot wait for month-end close.

[See what daily NIM visibility looks like inside Mission BOSS](/how-it-works.html). The Daily Bottom Line calculates the spread between money bought and money sold every 24 hours, so you know the moment your margin moves -- not six weeks after the fact.

## Key Takeaways

- **The NIM formula:** (Interest Income - Interest Expense) / Average Earning Assets. Three inputs, one output, and the precision of each input determines whether the result is useful.
- **Interest income** includes loan interest, investment income, and fed funds sold. It does not include fee income or non-interest revenue.
- **Interest expense** covers share dividends, certificate interest, and borrowing costs. Use actual interest paid, not stated rates.
- **Average earning assets** is the correct denominator for internal analysis. Use total assets when benchmarking against NCUA data. Know which one you are using and label it.
- **Annualize correctly** by using actual days elapsed divided by actual days in the year. Avoid annualizing partial months.
- **Benchmark:** The credit union industry average NIM was 3.39% of average assets in 2025. Every basis point is worth $31,000 annually on a $310M earning asset base.
- **Timing matters.** The math is the same whether you run it daily or monthly. The decisions you make with the result are not.

## See Your NIM Calculated Every Morning

You just learned how to calculate NIM by hand. Now consider what it looks like when it is calculated for you every morning, with the Drivers and Roadblocks that explain exactly what moved and why.

I built Mission BOSS because I spent 25 years running these calculations manually and watching credit union leaders make decisions on numbers that were already stale. The Daily Bottom Line shows you the spread between money bought and money sold every 24 hours. When deposit costs spike or loan yields shift, you see it the next day -- not the next month.

[See what your daily bottom line looks like inside Mission BOSS](/start-here.html).

## Frequently Asked Questions

### How do you calculate net interest margin for a credit union?

Use the formula: NIM = (Interest Income - Interest Expense) / Average Earning Assets. For a $350M credit union earning $14.7M in interest income and paying $5.2M in interest expense with $310M in average earning assets, the NIM is ($14.7M - $5.2M) / $310M = 3.06%. Interest income includes loan interest, investment income, and fed funds sold. Interest expense includes share dividends, certificate interest, and borrowing costs. Use average earning assets -- not total assets -- as the denominator for internal management, and total assets when comparing to NCUA benchmarks.

### What is a good net interest margin percentage for a credit union?

The credit union industry average NIM was 3.39% of average assets in 2025, up from 3.00% in 2024, per NCUA data. By asset size, credit unions in the $100M to $500M range typically run 3.40% to 3.65%, while those above $1B often fall between 3.00% and 3.35%. But a "good" NIM depends on your pricing strategy, market, and membership base. A lower NIM driven by deliberate competitive pricing can be healthier than a high NIM achieved by underpaying on deposits and losing member relationships.

### What is the difference between NIM and spread?

In practice, credit union operators often use "spread" and "NIM" interchangeably -- both describe the gap between what you earn on assets and what you pay for funds. Technically, NIM is the formalized version: it divides net interest income by average earning assets to produce a percentage. "Spread" is used more loosely and can refer to the dollar amount (net interest income) or the rate differential between asset yields and funding costs without normalizing for balance sheet size. When someone says "our spread is tightening," they usually mean NIM is compressing.

### How do you annualize net interest margin?

Take the net interest income for the period, divide by the average earning assets for that period, then multiply by the appropriate annualization factor. For monthly: multiply by 12. For quarterly: multiply by 4. For year-to-date through month nine: multiply by 12/9. The most precise method uses actual days: (Period NIM) x (Days in year / Days in period). Avoid annualizing partial months or using 365 days in a leap year. On a $500M balance sheet, even small annualization errors can distort the reported NIM by several basis points.

### Why does the denominator matter so much in the NIM calculation?

Because the same net interest income produces very different NIM percentages depending on whether you divide by earning assets or total assets. At a $350M credit union with $310M in earning assets, the difference is 35 basis points -- 3.06% on earning assets vs. 2.71% on total assets. That gap widens as non-earning assets grow (new branches, larger cash positions, more fixed assets). If you calculate on earning assets but benchmark against NCUA data that uses total assets, you will overstate your relative performance. Always label your denominator and stay consistent period to period.

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "How to Calculate Net Interest Margin: Formula, Examples & Benchmarks",
  "description": "Step-by-step net interest margin calculation with real credit union numbers. Includes the NIM formula, worked examples, annualization methods, and benchmarks.",
  "author": {
    "@type": "Person",
    "name": "Michael Kelly",
    "jobTitle": "Founder",
    "affiliation": {
      "@type": "Organization",
      "name": "Mission BOSS"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "Mission BOSS"
  },
  "datePublished": "2026-04-07",
  "dateModified": "2026-04-07",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.missionboss.com/resources/net-interest-margin-calculation"
  }
}
</script>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do you calculate net interest margin for a credit union?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use the formula: NIM = (Interest Income - Interest Expense) / Average Earning Assets. For a $350M credit union earning $14.7M in interest income and paying $5.2M in interest expense with $310M in average earning assets, the NIM is ($14.7M - $5.2M) / $310M = 3.06%. Interest income includes loan interest, investment income, and fed funds sold. Interest expense includes share dividends, certificate interest, and borrowing costs. Use average earning assets -- not total assets -- as the denominator for internal management, and total assets when comparing to NCUA benchmarks."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good net interest margin percentage for a credit union?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The credit union industry average NIM was 3.39% of average assets in 2025, up from 3.00% in 2024, per NCUA data. By asset size, credit unions in the $100M to $500M range typically run 3.40% to 3.65%, while those above $1B often fall between 3.00% and 3.35%. But a good NIM depends on your pricing strategy, market, and membership base. A lower NIM driven by deliberate competitive pricing can be healthier than a high NIM achieved by underpaying on deposits and losing member relationships."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between NIM and spread?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In practice, credit union operators often use spread and NIM interchangeably -- both describe the gap between what you earn on assets and what you pay for funds. Technically, NIM is the formalized version: it divides net interest income by average earning assets to produce a percentage. Spread is used more loosely and can refer to the dollar amount (net interest income) or the rate differential between asset yields and funding costs without normalizing for balance sheet size."
      }
    },
    {
      "@type": "Question",
      "name": "How do you annualize net interest margin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Take the net interest income for the period, divide by the average earning assets for that period, then multiply by the appropriate annualization factor. For monthly: multiply by 12. For quarterly: multiply by 4. For year-to-date through month nine: multiply by 12/9. The most precise method uses actual days: (Period NIM) x (Days in year / Days in period). Avoid annualizing partial months or using 365 days in a leap year."
      }
    },
    {
      "@type": "Question",
      "name": "Why does the denominator matter so much in the NIM calculation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because the same net interest income produces very different NIM percentages depending on whether you divide by earning assets or total assets. At a $350M credit union with $310M in earning assets, the difference is 35 basis points -- 3.06% on earning assets vs. 2.71% on total assets. If you calculate on earning assets but benchmark against NCUA data that uses total assets, you will overstate your relative performance. Always label your denominator and stay consistent period to period."
      }
    }
  ]
}
</script>
