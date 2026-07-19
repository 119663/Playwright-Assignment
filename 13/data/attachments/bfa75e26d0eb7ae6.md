# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/login.spec.ts >> Verify Login API
- Location: tests/api/login.spec.ts:4:5

# Error details

```
Error: apiRequestContext.post: Max redirect count exceeded
Call log:
  - → POST https://automationexercise.com/api/verifyLogin
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 53
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vy6BFM9sEDVDnQF2HAN6P%2FE%2FSRKBaT%2FBf%2F9%2FVCZah9H6ii9LLRTawy9AyMO5RsWfChrEbieRaBsbkuEHSFL7Rb71OYiWSdbNRVU%2BexVkuGNi9R7XiRoXJoXB1Dp%2BxEC19SuqX6VPA8M7"}]}
    - cf-ray: a1d7bcc728a5a159-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BolO%2BjqK01TRQUJA%2FM9XTciDFUXQtt9zCWL1cLoisg%2B1dAyoJ1H9Ae2RWJuZFOcQk1IVpl8r%2BMOPqzbtVVdal0Dm0RjKKBNXc0XSrylqzSUZMiddjpNBuqOKVR8wlUYkRzA%2BQbmXOw38"}]}
    - cf-ray: a1d7bccaaa7d8be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ovgkckdJq7CyQ%2FJeWViB4DsVmCuITdjq12HhA5JiQM9j1uZRLBPx1xNpUvD7jdabcTP8vWzADF9S47x55t8Pj7aITCVjvhyeG3%2BTVpBNEWnR7ZAe%2F9Wt6jqESuN70mi0Xb3JmYV5AN%2FO"}]}
    - cf-ray: a1d7bcce3e75f4b8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YR7T0V2gDc4xa%2FQ71OYY9pmpxqc1tPytKr6zKXVH7Ge8fESlsIJZqaBSeYnWNVea4NX9zP6GePOv6xmDtmfIk3VQ1orc%2F0EXkKiK9sx0dHJB3ZpbLN36rN%2BuyzMWp%2FiZeToKT75481hB"}]}
    - cf-ray: a1d7bcd1bda12eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4cCQM5v%2FpMgEE7BBFYDB8SaS9a2MjuA%2FHvH2Sf2CMYqynNbzertCyei2ziMbPuy13yUydBR7W82rnCG8JfSEzcZelsMitzgQ7IIYTSYqnfUbzo%2BWC3a5%2Fa6HO9p5CPJs8lo43Cfqk%2Bli"}]}
    - cf-ray: a1d7bcd54a05f2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Hi7TmhDkSYEgrBU8ZZuf5qUVGYYEvhG4wISM1PKSAwUOWe448R4ISBiDYK2xtWU2b%2F7OeRPoNuq9lfb%2BvCvsUPuy63ghbG%2FhMlcq1t9QTXwtwULyVbZ7erm4iXKwaHAk8ujz%2BMBior0y"}]}
    - cf-ray: a1d7bcd7b824c967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KNegBybU%2FO9SpPddRHuyEAWXcem7bhVLhsMDtebHHxF8fm78cxCnzemu2ytsx6cJK1jSF9pIJdN4TpQvSETfTt6cE5BMa0x%2Bj%2FY1h3vmBXxjheWjtxNS8lGFTj%2FG%2FhOFx6KOfghO1hUB"}]}
    - cf-ray: a1d7bcdb3ab0c5b5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OW5qaUoqI1QFtiRL9BkaD4buCLF7q1smUW3ZVL%2BCLKhA6yzcKEE5gGRUJpbd%2BnAolAfIUDgEpwDtvGqq3BMUH0jjiExvksxH835ZB9xj6poVrJphP3MoGVpFH2iE0EFYTWb30QEyfJq9"}]}
    - cf-ray: a1d7bcdebbfa87af-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:40:59 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=LwfXk%2Fa49Ah9p4lOAMHKGuas6NOl2uOwjLfsXTk9E%2FC9fRBT%2BSBCIx6PVrrPZfXBAqav7bq5XToWa5BhkiriXAMMC%2FrYWSaxSR4fvjONJ2%2F3TX%2FQ8de9PEVFP1hl2HohDPM%2BHa9M5wzY"}]}
    - cf-ray: a1d7bce23fda7af0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:00 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=RuHbzaiGinOlB6ksxjI2bpGU9Zc0Tz6wgyigKrTXG%2B2Gb%2BnFUhRRbdaz%2BVDcZejzbgqHT14PfeHgbdfse6GoqR2gW1oEdfLzq6I%2FbMtToE0VjLN5zmmxxOFgE9Y4G%2Bj2UypVsdfoh4Zi"}]}
    - cf-ray: a1d7bce5bbec2896-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:00 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=k8SivHBwCFOu2Q%2F2cafevhlI6sV15cug%2FAlcCMQle528gM7TGwP5iiZmv1UWeRWcYfUg5I7dYwKtYHIlzTUghjCoOgutVA68m3e4zxqRA1HJR0v7%2B3vFKEXIMAv3Fks1BzSEg%2BCVRahH"}]}
    - cf-ray: a1d7bce94d6e7f1b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KK%2FUYKDB5vGaIZcldFwybA2e2d69bDe1RtJX7mCmEeeHNOoMUtGzxAR9H560jJw2xYlC4SvQorCVTLrpF1MIEj4E7kVoL8mJJAXs%2FgVb0lwzCTdfW3bmRzuO6UINWzFBQ%2B3KkwsB21xH"}]}
    - cf-ray: a1d7bcebc9c6a159-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:01 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kNkwSLWMskJlgzwrjJ0BlzQw0sqXET2vxtwA8EoSOZUMOe33fE7cQf6tCY7NGjdhlZbbC4gHIJVeplr7dy4XL3yATE664vOLzbjUDetwVm4fVETWDy%2FkZPLzIbfuXPALNyRd%2BmOQgUt%2F"}]}
    - cf-ray: a1d7bcef593a8be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Ro%2FmnzfwpdrOVam8a6MCtIWbLtf0QSOak6%2BtyrRSGlQFAuAZswfCV6MiBLUoF6ge5U75fzbda1X5o%2Bs4gDAxEtsYzLXMbW1qH267RgKkEdFkfbMrTKyUzbBqenuQK%2BTrznecHkoGJDjJ"}]}
    - cf-ray: a1d7bcf2dc47f4b8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:02 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SPF0hE0PXqG2E5YWQf%2BskAbciW8hQ0c1a4O1aCQF7GKoN6vel2wgZte2imb%2F9U4iUCkgC7EzU94evNE2a%2B5FcwULujKjOD8W23N0aV67ccTDSPKPa8rIoIPXq1CmXZZQ75boexcMPPR8"}]}
    - cf-ray: a1d7bcf67b7b2eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8yBEtyjNBVkC1xhQD8bld1EYtsQdt0AGypKaQO0K7%2Bm%2BeCRN0oEjY8NZqhE%2Bsqg5ORbHEc%2F2rHXfRGSWJ3%2FuDf314%2B1kX%2FFAIp%2BgD2veAZrHAJq83on0WR7ymIhUK%2BpYysS%2FyrPL3NOq"}]}
    - cf-ray: a1d7bcf9e84c87a3-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:03 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=FFBMCxzpi6ZltnHn1RqnO42iJlZpBKcEClne%2BuxzJooT3ZgAOI6QauH7dMxIisrIMZ0DH%2FpZh6%2ByGRr3ljaYM1ESFtG1Axipc2FiYPYLRwSg4gMklIzWeEm4CIKtVAd%2Fi%2BUcxL6LjL8V"}]}
    - cf-ray: a1d7bcfc5883c967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=CusJG3Jstx4vPjnU8x0rLPHIEdWsbVESxnUbOqlLohqgUUvGpfyNekaZJGfTB60yl6ykO2hMmkRNwhdMKTuGlzyly0caCA2V6yEc3fX0WbK%2BNfRVMNmRTi0CeGRMA1myyiluWo1JuJv3"}]}
    - cf-ray: a1d7bcffc9c5f2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ETt%2BqzxGz%2FdvkEoSOctiKg13ZiiYSu52ie%2FoHwCDVF7DU1%2FSxIv0yRzaZW%2Fn8BWhb9IwQ%2BShqLSK6o9iG5fG5YT3JQ6nhebhHViPlc6e4ox7xNs4tErsJFgWU1zyKnoG7R8XyYp4vKhI"}]}
    - cf-ray: a1d7bd024cbac9a5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:04 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QJxvNrVOgyZQsaUoIBrD0PLW0cjhPXgN8foA7TrXiiUPyhgidvc20XLDOzd77fqCT6LtMAd9asbSuZAylycziIXgQx0OaTnG09qz7HVEOkXq2Sy5cvxsXYqWSRXDDdP95b36UgwOwMCP"}]}
    - cf-ray: a1d7bd049dcf87af-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:05 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=8r4hhWpkOGeYs5LHaIBNijrCLTNIvyTdjkR%2Fj4MrSzMxKrL%2FV37a8ZuitrwTla%2Bk4dR42DyuZbwBTCPMBd0zr10qmDnKbPTsKACA%2BG4TGNcwhgRiKZtyo04GD0cxvIDek9q4UXDzxzaa"}]}
    - cf-ray: a1d7bd070b5cf01a-IAD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import users from '../../testdata/users.json';
  3  | 
  4  | test("Verify Login API", async ({ request }) => {
  5  |     //POST To Verify Login with valid details
> 6  |     const postresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
     |                                        ^ Error: apiRequestContext.post: Max redirect count exceeded
  7  |         form: {
  8  |             email: users[0].email,
  9  |             password: users[0].password
  10 |         }
  11 |     })
  12 |     const postresponsebody = await postresponse.json();
  13 |     console.log(postresponsebody);
  14 | 
  15 |     expect(postresponse.status()).toBe(200);
  16 |     expect(postresponsebody.message).toBe("User exists!");
  17 |     expect(postresponsebody.responseCode).toBe(200);
  18 | 
  19 | 
  20 |     //POST To Verify Login with invalid details
  21 |     const invalidpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  22 |         form: {
  23 |             email: users[1].email,
  24 |             password: users[1].password
  25 |         }
  26 |     })
  27 |     const invalidpostresponsebody = await invalidpostresponse.json();
  28 |     console.log(invalidpostresponsebody);
  29 | 
  30 |     expect(invalidpostresponse.status()).toBe(200);
  31 |     expect(invalidpostresponsebody.message).toBe("User not found!");
  32 |     expect(invalidpostresponsebody.responseCode).toBe(404);
  33 | 
  34 | 
  35 |     //POST To Verify Login without email parameter
  36 |     const emptyemailpostresponse = await request.post('https://automationexercise.com/api/verifyLogin', {
  37 |         form: {
  38 |             password: users[0].password
  39 |         }
  40 |     })
  41 |     const emptyemailpostresponsebody = await emptyemailpostresponse.json();
  42 |     console.log(emptyemailpostresponsebody);
  43 | 
  44 |     expect(emptyemailpostresponse.status()).toBe(200);
  45 |     expect(emptyemailpostresponsebody.message).toBe("Bad request, email or password parameter is missing in POST request.");
  46 |     expect(emptyemailpostresponsebody.responseCode).toBe(400);
  47 | 
  48 |     
  49 |     //GET user account detail by email
  50 |     const getuserbyemail = await request.get('https://automationexercise.com/api/getUserDetailByEmail', {
  51 |         params: {
  52 |             email: users[0].email
  53 |         }
  54 |     })
  55 |     const getuserbyemailbody = await getuserbyemail.json();
  56 |     console.log(getuserbyemailbody);
  57 |     expect(getuserbyemail.status()).toBe(200);
  58 |     expect(getuserbyemailbody.responseCode).toBe(200);
  59 | })
  60 | 
  61 | 
```