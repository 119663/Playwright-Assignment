# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/user.spec.ts >> User tests
- Location: tests/api/user.spec.ts:4:5

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/createAccount
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 332
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:02 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=lOScUvDB9WqzLrnf0qYDT11Rnp4YielYnRUS587u6FMCVJlHnByUjesLwzq8oSkByK%2Bkr9pfYa5JtO7gtLrxkWtS0T3NpBidvT14%2BzCAnDNxwRZPs5UH1lMn14N1BhMnsTiyfz4yAI0%2B"}]}
    - cf-ray: a1d7be6bc8e38be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:03 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DMoFe7B%2BKH2BEbb6a9HuOhqcR5S69wQerJbhiqYsJi8mwaK12mLxJfmVZwqgEkGQ37ZmTSgdJ326ubrKartUTq9sjHDszHKEzFi%2F8rz5C%2FbkGhXkXCQ8ltQSa%2Frs%2BljR%2FEMeJg9jxQ%2Fe"}]}
    - cf-ray: a1d7be6f4c12f4b8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:03 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WBMDmZheb3%2Bf3LAfJ7mh29uskBxoMJFA8pPnYfTWM45qOLieK%2BLUNUfo%2Bc3UgZde9H%2Bbg04oSjVtbImnSvTUMfhCJ5%2BlDn72v2Cq9VsAibA6xfrhFaSrplA1i4ch0NiCGkhhSgYgkWPn"}]}
    - cf-ray: a1d7be72d914d143-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:03 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jrk7K9kDxG9UXf6SeaebK1WbDEocH4OU7b79YaFIJrrLaJQQAw6G8QEJDVsriOd1iGIpeLUDlywE0Pfrj0XxPhpxl9Y2Icz8zWmzKwKkEVBHcG7Ekc2U33Xq2Zu6RebD%2FG%2FiGWy7%2Fz3X"}]}
    - cf-ray: a1d7be765ee9f2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:04 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DIxQAfnAeAwXlU%2BM8HXR311L8OX19zzsRokChDnKK7ZVoHE65KjMqUxEppr5fm9cvVXGsxk0ZzVaL5aXBJK%2FQc%2FIxZSAk6D6Va%2Fb%2Bh%2Fcy0Zz9xWoFgYFca4swKrT8AViGpFGwp%2BIFZw3"}]}
    - cf-ray: a1d7be78c9969b2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:04 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=65IUgJVAnDQfB2byXyNGcBGqC3fZU56JMN6KAC6LSLzDz2ocGWpe6jExbjZTFso0lvTRzyZEkrIHVBXOohNERWjWAJkaQs%2FTwrurnmfpVUaei2zvMDgKTFhVjpxNCl6SLB4jqaN3ChtH"}]}
    - cf-ray: a1d7be7b3d65a159-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:05 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bEeWmStnXRHlY2ktIBp8Yt3VM6WOlmYlCfRxD7s05rbRShcR6CqSSCIsqrv4FQV2Pa1pGkEqj0f4ckaAWuSRtT4%2F68LtuNA6mayAFLYSfMZyWgmw9EYj0f3Gyyo%2BChdXmTbFgXLlr%2Fij"}]}
    - cf-ray: a1d7be7dac0e87a3-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:05 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8MjfB%2Fw4W2%2BugmczxVdhrKRyqjhbK%2FBV%2B01z8Vhi34MgxsvdbU6RYJ%2FNl2sUB0KEHth6UU4Y8EZREh4eO7UWk7W9lSFoeiWjvp414Ds%2F%2Fbw6dvcOd5nsFA5n0PL4lbTVrDV0apL7FaQ6"}]}
    - cf-ray: a1d7be812ed5c5b5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:06 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0PMFtYX5G1aEWwGOgIaLfTG%2B1HTdTOAH5Y4wjfcsW6YWrDKrLHFLax1SfxTP67TkoacOo%2F0sOcgu3rCff6Z3VpAl7M2puLeMYoNfXSlUM2%2Bfdqog9UtPUsZd4K3ANMmLOVfnycSl7bVe"}]}
    - cf-ray: a1d7be84ab352eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:06 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wp4hCIa30hsWSSlVNuhpdqXVliyAmm7ppHJCYWTFsdp5Qk2ENHUVrNP9%2FkJfg1Y7jk4GgqIUyk61tf4psnOrJlJpxbVl0LAwvhYxu7ZV7ilKPGXavV9hDiJVaWMYPXB1LzquivSwZdhE"}]}
    - cf-ray: a1d7be882999c967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:07 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mmb8g4RHqv5b4vUyRC%2BiTHICsQNg3hR0rvBMv1Gf688bWEVdGn%2FMU7eSj0xMIDYFNyQ1yR0QiVEu3N15NhzPAg8uO1guHsjp4QdQ40A88A44%2FXGpoC8Rkm3I3DA9kjioNl38umR8HzAO"}]}
    - cf-ray: a1d7be8badef7af0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:08 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8VtaWHKU70xJrybJvBI6Vuv0o0VLTSjZflF82rWtKNjARuHFtmanR1kBsfo7kinY%2F4nbWPSKBa39j6mOHLG5sx%2F9MtC4wj%2BoCyHzRDZxyRpDnigbOFZehhUKJsR2ZYlEQy6XQ1C0c8dT"}]}
    - cf-ray: a1d7be8f2f3b0bb1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:08 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=L34si7bfsWZ0U0sI5y0uWN7%2FXHSBblY%2F7NiB1VVLz5n8BExW7MTW9CxjAqU%2B17nxFYXDWEqSYh3pCAzN0ozh3QtGJOKOQxctkybZttbXi%2FKh0eXv6CXuwnV2CL9Dzq%2FDE%2FChoDpJxM32"}]}
    - cf-ray: a1d7be92ae677f1b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:09 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iPkHuhKz6jW6Bd%2Fdh0JVUxgvWScv2UKtLOkHy7Vi6SfO5diGe%2BbllJ%2BUPtO89SclflitoErqcasFL1GyY9PtYSAXF6YWx2olgaU0JqpEMdIWw7witXSlRdOEcZvuBgPoD1ceembrt1Ne"}]}
    - cf-ray: a1d7be950fcb8be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:09 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uDZvNRxtA40CtgqNrDRnl1o59uLU9ASligWEtMOJWYu1Q1WhKD6na9F5teackiYSdW6bmUfOKt6LxdH4U7ncGdnzOC8KCvU%2FeGp1YpkRzSt1BIptQ8R3KxZjKLGIrv7fea7cGhlRvu9I"}]}
    - cf-ray: a1d7be988e072896-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:10 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TycjLU1osRxKXpHalPkkSr53HkGEwPr%2BM5sGb%2BzMEunKnCyELmDeXhQt4z12sBJRCxXJ3tYDHvF8Ox4Ubp6zxcRv5a3s5PgjbN6%2B4OLa%2FpGWs7cxdjqhFPlYWdfyi9R0l150CDRwlW9X"}]}
    - cf-ray: a1d7be9c1aedf4b8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:10 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GVx5ifYY8168QANDREKaqS%2Fl4n0simbzR04Yyz1me1R%2FgJcwR0EhQn7gjgfSrGwsfzXWu7CGRprc0dk90bF2zlq1I3FuQLn19CX4YkkcBpwdS2XNkTvlM5cgV9gmD8L%2FuCqsMEwomrhp"}]}
    - cf-ray: a1d7be9f9c51a159-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:11 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZKMuXzSEN%2FsgdfYNBNIDf1Rij%2BG1su6DEsenWj1n%2BaGLSd8a%2F8W%2FMYliQcCJMv4w9ZK4ymHUnoenuGHd7fpEJMW0Humq4d8g4fBGNaoD9seakLqjqP%2FUaeUUR7JjAmagYVhRHOZP1Z%2FH"}]}
    - cf-ray: a1d7bea3180cf2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:11 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=v%2FIaKF8kjzILjlAW0Y%2B4riEyBU5vPl4PTEE524GnX1v3wUxpNE4MNeDgnaQJy4ZdwDScdMY%2FxohPnVDYg5MbQ2ZS7%2BEhYkWHXX9%2FLbiVFo3GxEiwbHmBX%2FvGi1Axjva7OJ1rF8HAMXa3"}]}
    - cf-ray: a1d7bea57a039b2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:12 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9iGhm6e4GGBdWLoTIuQl4RYtK9RC6QRChJlZRG8yepcrgQyH%2FZOvmqMTd7UBH3DvC32q7CEpBCqktTbK3CYhzmZvZ8EjsifBkqXYyS23uWPpJEPC5cT5l1ZDQVKswUL2alwNQREfiB5y"}]}
    - cf-ray: a1d7bea7dc2887a3-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:42:12 GMT
    - content-type: text/html; charset=utf-8
    - transfer-encoding: chunked
    - connection: keep-alive
    - referrer-policy: same-origin
    - x-frame-options: DENY
    - x-content-type-options: nosniff
    - x-powered-by: Phusion Passenger(R) 6.1.2
    - location: /
    - status: 302 Found
    - server: cloudflare
    - cf-cache-status: DYNAMIC
    - nel: {"report_to":"cf-nel","success_fraction":0.0,"max_age":604800}
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=u7aFgSXueo0o7SwvTCycOyr6b3WT7AXfzd75ZUQojUOMevHdjniEptRpZtQdqKJ5%2BLx%2Fq2tCP8SfxwAf86068M6BXRGmg5BFZwdZ4tDi6fry%2BjG5khEZSbd1UBrWKbrby%2BCd8Wac3oJW"}]}
    - cf-ray: a1d7beab6e4ac5b5-IAD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | import { fa, faker } from '@faker-js/faker';
  3   | 
  4   | test("User tests", async ({ request }) => {
  5   |     const name = faker.person.firstName();
  6   |     const email = faker.internet.email();
  7   |     const password = faker.internet.password();
  8   | 
  9   |     //POST To Create/Register User Account
> 10  |     const postresponse = await request.post('https://automationexercise.com/api/createAccount', {
      |                                        ^ Error: apiRequestContext.post: Max redirect count exceeded
  11  |         form: {
  12  |             name: name,
  13  |             email: email,
  14  |             password: password,
  15  |             title: "Mr",
  16  |             birth_date: "10",
  17  |             birth_month: "May",
  18  |             birth_year: "1990",
  19  |             firstname: faker.person.firstName(),
  20  |             lastname: faker.person.lastName(),
  21  |             company: faker.company.name(),
  22  |             address1: faker.location.streetAddress(),
  23  |             address2: faker.location.secondaryAddress(),
  24  |             country: "India",
  25  |             zipcode: faker.location.zipCode(),
  26  |             state: faker.location.state(),
  27  |             city: faker.location.city(),
  28  |             mobile_number: faker.string.numeric('+254 ### ### ###')
  29  |         }
  30  |     })
  31  | 
  32  |     const postresponsebody = await postresponse.json();
  33  |     console.log(postresponsebody);
  34  | 
  35  | 
  36  |     expect(postresponse.status()).toBe(200);
  37  |     expect(postresponsebody.message).toBe("User created!");
  38  |     expect(postresponsebody.responseCode).toBe(201);
  39  | 
  40  | 
  41  |     //PUT METHOD To Update User Account
  42  |     const putresponse = await request.put('https://automationexercise.com/api/updateAccount', {
  43  |         form: {
  44  |             name: faker.person.firstName(),
  45  |             email: email,
  46  |             password: password,
  47  |             title: "Mr",
  48  |             birth_date: "10",
  49  |             birth_month: "May",
  50  |             birth_year: "1990",
  51  |             firstname: faker.person.firstName(),
  52  |             lastname: faker.person.lastName(),
  53  |             company: faker.company.name(),
  54  |             address1: faker.location.streetAddress(),
  55  |             address2: faker.location.secondaryAddress(),
  56  |             country: "India",
  57  |             zipcode: faker.location.zipCode(),
  58  |             state: faker.location.state(),
  59  |             city: faker.location.city(),
  60  |             mobile_number: faker.string.numeric('+254 ### ### ###')
  61  |         }
  62  |     })
  63  |     const putresponsebody = await putresponse.json();
  64  |     console.log(putresponsebody);
  65  | 
  66  |     expect(putresponse.status()).toBe(200);
  67  |     expect(putresponsebody.message).toBe("User updated!");
  68  |     expect(putresponsebody.responseCode).toBe(200);
  69  | 
  70  | 
  71  |     //GET user account detail by email
  72  |     const getuserbyemail = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
  73  |         params: {
  74  |             email: email
  75  |         }
  76  |     })
  77  |     const getuserbyemailbody = await getuserbyemail.json();
  78  |     console.log(getuserbyemailbody);
  79  |     expect(getuserbyemail.status()).toBe(200);
  80  |     expect(getuserbyemailbody.responseCode).toBe(200);
  81  | 
  82  | 
  83  | 
  84  |     //POST To Verify Login with valid details
  85  |     const loginpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  86  |         form: {
  87  |             email: email,
  88  |             password: password
  89  |         }
  90  |     })
  91  |     const loginpostresponsebody = await loginpostresponse.json();
  92  |     console.log(loginpostresponsebody);
  93  | 
  94  |     expect(loginpostresponse.status()).toBe(200);
  95  |     expect(loginpostresponsebody.message).toBe("User exists!");
  96  |     expect(loginpostresponsebody.responseCode).toBe(200);
  97  | 
  98  | 
  99  | 
  100 |     //POST To Verify Login with invalid details
  101 |     const invalidpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  102 |         form: {
  103 |             email: email,
  104 |             password: faker.internet.password()
  105 |         }
  106 |     })
  107 |     const invalidpostresponsebody = await invalidpostresponse.json();
  108 |     console.log(invalidpostresponsebody);
  109 | 
  110 |     expect(invalidpostresponse.status()).toBe(200);
```