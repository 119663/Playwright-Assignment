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
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 326
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3ZrcdMA9YxaoRR06dyX3Eg2yEP0Ho5OAwzzh8fS%2BKFTSMSVMDnOGh7WVQGU0%2FfiR1i25jlrs58rjyjRXR3kOSQLwJMdY7C6PGYAS%2FFijA35i8b5knbzOZXrWWjShg5z5JfbB%2FVjeaKkX"}]}
    - cf-ray: a1d7b2e3fe012eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=i8gZzLO5K6q2sJQOFL3znWvtF6bQS5nAA7TJqCNT7HJqA0tEFsA7vPgH4PXVha3Aa7%2BUK%2Fle1ZWtUOkNyMGNW9Kgdy5vO45kG6Bf1CivI8dPsLV8Z2Tex4RDuA4lLth0G9FzAhxt8I49"}]}
    - cf-ray: a1d7b2e798db7f1b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:10 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3aFdIABMmvCdqhN%2BrdIYTQ%2Fgd6sQAHBHl36L3hU0L94JT5MkdumkK8I4bZ3QCdtW6r2R17GRqcBlL%2B6g68UHzEUhA7tYvQkAQMZD%2B3Bvt9mCDfMBhkfe92q8c2DNS3z%2FmZkb1I8lrJDr"}]}
    - cf-ray: a1d7b2e9f9e2f01a-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9NBeE77xfd%2B77EwD%2Bsq1gLZD6y8JVdZR1DYj78hH7yD4h2%2FOqUfTLbu1qNEyJJ01qmJRJeAtnWi5z%2BotoxFjahEhIBvGCoww%2FQU3bCxf%2FJMV8A5PaVX1sJOL2z%2BW4l2n%2BcduffkBqCjw"}]}
    - cf-ray: a1d7b2ec6f258be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:11 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=DKanzkQEZ0hjcx2uHfL6ZLZQaJ8iyATcc0CfOB3aaU4ALZsaRbeKwPro3d7tiNec0eoadbP7s0ecmF7lIU7xeBAXimVxiphXWAgXuXM45mb2Ce6p2JQW8IXcVkD6Z17XiFggLKMCq%2F6J"}]}
    - cf-ray: a1d7b2efeb209b2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=koYuQpzr7MqAQdUTr%2BJkpg9JeM2vGRlTluH29Bel0xS11xig9E7orDNBimHGSL4frKOgxbmU1ub1%2F%2FIGKxAx9pxwQYnsWWqfqcwxUH87pCV4iEttXEvEEw2wpDsCqPTT5BFIa%2BWaDxAx"}]}
    - cf-ray: a1d7b2f24db5f2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:12 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cDyM2UEkEy5x0wu1voUClweiwPHl8iVitdAKRrsBtq4MkUpyxTIo4ea5pYA7pU5MqMgDN%2BPIi57AnFJgH5MaNX%2Bs6%2Bu1c94HBlb4DLetA2prIsVmrMpPx4MQJxCSKzZFgnHOASSf%2BtoP"}]}
    - cf-ray: a1d7b2f4ae802896-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XZnjGDhyd%2FHYPWyVfVBmJ4lIT2iCnsO5G6PT6NB9Z2EkVH47X%2Bnz3%2FA4aENHqbaWDvZpUb9ssTo8fcJc6OXVokKazzF89OyQRVZRaZgI0R6jnoprLPHvfRClgvIu%2Fnkwy9EwXIzZ4%2BaR"}]}
    - cf-ray: a1d7b2f8384d05f5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:13 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jXODleVHKjvY21dTQWil4mx9ruY5NhneQ7Olb9DOWydGJnBtbkiswfBqAIPlmbhcRkMaxCMF48kiEW5ba8kiFcoisklqSXENy0R4JpQNvCT3Jgy%2BvW00K61xY2risuzkU3FvNNhNpHXH"}]}
    - cf-ray: a1d7b2fbb85fc967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=fBay%2BzZwCis0VI5hdc5I3TVaxLZP%2BHPbnHKcaSkE%2Fo2xOEU6BPwucM559uWgsTa%2BQnNdsDrjmVzNqVDX6GR5qQE%2BLqINwA6gdfih4MegrfyNXCy3JkOwmzZi6jUCIFqumqabEr9AOhUF"}]}
    - cf-ray: a1d7b2fe1dadc5b5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:14 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2Fpvg76lydUeblJ2oqsdg1%2BLUpQs676XWwtfWS78ANdqkK2HUIzCP8SMqqhnTtZ7Q7bcSHvGaO4ZEQhR%2BAbsKZHuR1Xn7xNqYfaossfNgQsyKa6tsr%2BjfKdfJ89k3DDjvUxicYnIkpKCN"}]}
    - cf-ray: a1d7b301df6bd143-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7vN%2BUyVgG8L%2B3%2F5IrNyj%2BGcKUXXRx%2FO6i7z0pMBSEM96Cqx1Jgmrhn2TGDXYGIv6ttg5iJACCurQzNO9qyUvL0BHFqw%2BSYdG4Smm499CrHS2k28PIBlgN2Gcdf2ybBMzUVCSDyR70IWM"}]}
    - cf-ray: a1d7b3055802a159-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:15 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HoqGlkg%2B4RKc91%2FVf4bZqydfXwcuJG32eTMVbLiLGy7MDhpuJKkLOqj2xJnGczpSDXew4pEbxHRjor817i%2Fq1NTB6y1KCiPKV503lTj7FkiE3UJo%2FPXNNxAHNd7%2B0holkcEExdOyAGT8"}]}
    - cf-ray: a1d7b307b94a87af-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=SPHFeJKeYXkedB0YfuxHbOYCsXjQkh1yHXJaeKIREotjQ9juOgh8EAnScIMpDRhO8dq9sXdpeOG8BnYybHXQtdM1xiyqP57WU55D%2FOHCxjWZqP%2Fx7CnhuAAdCZ%2BexyfFum6pc%2FSEMMWI"}]}
    - cf-ray: a1d7b30b3faa7af0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:16 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=b8GnGvwf83vAErWikjtqqIxhZynwZYBYoe%2BfUYHP2exklzkz4fTwMa3X%2B9k%2B4jU5KzLY7woeIY8ZJzUaFlf0B2IeKLNLSrs0j4CV%2FUBy6JL%2FCpk%2BFDoLFbOQBzFwGYEgDP6oDuwaZhdy"}]}
    - cf-ray: a1d7b30ebbc32eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=I4cSl8nrDnJhBwrNi%2BMjCiWNcNJl5YHxOCgfRDAMYb%2FfeL0F53uc%2B1ovsQ14oyrxHA%2FTF7J0B7%2FMX6Iu1v1eMd5O4eIaeSIhnh6fBsVjOlmUPI3VxDNpVxvDuWXek3h4IGIcgsQBd9Q7"}]}
    - cf-ray: a1d7b3123b568be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=aQY%2BGWNhl5ybEx9UsLLhIGGuBtVSJRUyLgGKSA6tHcYhYClYpG9eGFIXu9lLlPZjiV6Ly86JkpijgxhPpAmHAEW9bbjIS5T54uLSHPHJm2oyDTBozgrpeSwZTE6SHREBTQzpjt6WTTXE"}]}
    - cf-ray: a1d7b315be3df2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1URCct8MG%2FnWtlD3xYXjPac6ROz2%2FESp1yQIgcsWAf32CqRN2ubIV8vMN58zSpielea%2F2aPN%2Bi23CsIgPrzjMvztxRE99Zeko8Dlt1ouK6W83wH8RwzAmagvXIhdu8xd7g6btNUltF7a"}]}
    - cf-ray: a1d7b3192e879b2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZcQJN7SMOozPMdCSHqdshEmAiISMHP6Ddmjx4nhS8366FtFBF6p7Wy5RK5qz6wpj570wHRuo5FmpMVTeFzsr3dRslUgRciS%2FLdr7Q68GISxLdpV7D%2FKhWqwFl1jk2OFJNkz1HI8CGqHz"}]}
    - cf-ray: a1d7b31b9a087f1b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JV0wA6pZ1%2FUHRX9JKF8B7uFowplEExziKioILOQjZXuRFYFJLSjkh9vD8Yq6n4xo%2F9hZrcchX5uSnvCAYk3ue8D2xGHculs1vo1%2FkSDfibHoT67g78MA0l%2B2yJOmHEU8rCMRvQ0NlAQG"}]}
    - cf-ray: a1d7b31dff6df4b8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:34:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=NKCN6D4k2wIyC%2FcqI4zxsjL1K9z82c6oKhM2VzT2kVE0plzvoXdzfhNJ55vUACEr9sn0BGqCUiEdGk1TJChiQ4tYe5UgTKXpf2%2FG2Uyv4SKW5mf4dAiXoqPEQ%2F%2BQZFbE61Skpts3Yqk7"}]}
    - cf-ray: a1d7b3218b07c967-IAD
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