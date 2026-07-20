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
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/x-www-form-urlencoded
    - content-length: 53
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:41 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Q8zvPv01av1lnXf1D3ZKIjd8ZHJZ7ZegDkD4cT6qJpb8cSYMS0rVJEyubqJBQeCqZRAl5QsNtdc6M9EPI7aTxGYbyLe0d9UtlevW%2BNwr4Pf0374DPzUOEBvxaKpprdH4LfxRWjrWhiCo"}]}
    - cf-ray: a1e0215fb9132de1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=KBaBiJ9zEOVBkS5ZUCSXOv9Sr7gJuMbsJ1gGF4pddbZOTTvRxPNqibMzM8xG1oKiUpXuS%2BxZhhNuIYHh3FYekNhnoRRLbizwqNzCxaHPpJaOi1a5vjZZc1IMz3s5Eo03lE9M6inRd8zL"}]}
    - cf-ray: a1e021625a04d6d4-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:42 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zHhq0LKzry5eezENh6n6kKghjU6QocIREZAuf9LGESFpdgWFad99PvYyANf%2BWJZDhx%2FVlBSHV7MBaN27Oxvbgq5x7gpOPMaRpuhmGqPJkZGukMUF6GM%2B7ZWJVuwpvgPxjQqP43tCGMSS"}]}
    - cf-ray: a1e021662c4f3920-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=mytN8J1TXPhvJX2F3mZzQAk5XA0%2FFlWBZe4A8UuiNCMPl5SS%2FWRcKzxti31wwka1rzvXLegal148iYpBz3Ie19IT5zOD0e4DDXB0jg6FCHEMNW9oZcKLkQRrwNhURgpbNpNIvphbmPH%2B"}]}
    - cf-ray: a1e02169cd2af331-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:43 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=i4x5xV9U%2Bo2WzSN5V8fiORRG0ppv2NcpABFJ3tMjoihNeraCDLXNus%2BLnnPwz%2BBCbt%2FvhbGM6L%2BMPZGRpY%2B%2BPyI0kX46ZRtmjryKtDfG4ZyEWQtFXXJdtFsccvcV55JyHC33JR%2B7JH4K"}]}
    - cf-ray: a1e0216c4e8325cc-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=QVcoQC1A8tXJ6QlxEmdWH1H2LAhg97e%2Bof%2F3uwb8GQG37xOGGBLYyQqIsj2QqVyTjD0T3YxPglyNhJKmSvi6oWxpuXlqU5H1jCooxjj7Jxv%2FZTmslvIG8CWrKQxr8E0UmU%2FtPF9k%2BY%2Fa"}]}
    - cf-ray: a1e0216ed90a28c8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=1Flrti0ks%2BtQ7e3FjH2kMvVIeZSXHnI%2FYAvxmKurSMe4eC9fY9hdSWZrJu09Z0IY21zaboY3e7scnVvjrv4A6RXxT9gZSgu7zZdFy4BJyRwDDcZbkCcVFOVny76yAqnIHrQNf7WUvyTo"}]}
    - cf-ray: a1e021727fa12429-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=MAuPv8ZQPtIHZoI6dCOVWRFgO8vUKcMgyrWH0JoC44UezhnC6DL6GWxY4455ZPjjgKgjQTahPNhn8azEahTPcMAg2W8tCzxUCF8US9joprlP3HfErdNAUqB8KqhP%2FfB81eRfi2TdLEkA"}]}
    - cf-ray: a1e021750a6a73a3-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BY6p5gninllSyZSHwzEMLaVmw6LiOYKENiovn8WiflhlzNwkaESY3BL97SDITTYbwo61zzOI%2BW5xLsYXOeTqF9LHscX3ficXOrSj%2BOnQvxZTRPXSasN55cBmGxPMd31otf5fb7okQNvK"}]}
    - cf-ray: a1e0217958f68583-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZjfAw1Bf3xIJMGpyo5TDA8W9xSUYAvb%2FH6hWyGBxLbS8mA6ysfteQ%2FAVnNnlTu3qc%2Frz78Zz7GGQzugzUUV9oaOt7ukxbbeUcu3HONiF%2BLVKP26ngdtFN8%2B9rG5bBnGb%2BqqN5ylpXq0N"}]}
    - cf-ray: a1e0217d19f82c24-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Fpit6A9N7%2BcO7489jdJN4JCHospQxsc24aFdPk0BN%2Fiks0j2ML6qynMs1voa90yXazrsjFo4e5QQMw2YZM%2FBDaj%2BCWOtYKlFOkg1XqHl6hBdwG2BU%2FYyD9i9tz2npb3xHzykPeFh%2Fqnv"}]}
    - cf-ray: a1e0217f9ce3b87e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=AQiNQC6rEa9tbzLxJHiOepw20KxDbCAk6yBPMWa6kRTwRionAHmzHFXqM07lZhSr6iikAE%2Fj%2F6VizTfCQO2ZQoTmOf5BddeAOFIrltsZPLkNp9dpKUGElbXEOxBnnLFb8qRTnRHbMVhP"}]}
    - cf-ray: a1e021821c3305e0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=hHJKXJcmP1uN7NIWSqDIGG1MSPA2lCw6egz03wgfOOQ6BzdUNvkCk8%2F3Ao6xD5MILJb4p25bjoVs2T8K0h3F3UBJLZ66dv03OkNlZuXe5W5RMfmDxjEsK9Ysmp50wmA0wm8YYSIibIrF"}]}
    - cf-ray: a1e02184bc772de1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=T6p%2B2UJfmSYDFrFcrXJrp4B1UhrkpVIKsbeSb6PLXLkdV8INVJCqPgNRHq13RYibngOTPxytSgucUDBcvhLQcjsaMZCbM9EtHmwp80oetaX0wGflEevML3WYmWVUreONkaNefUAamNYr"}]}
    - cf-ray: a1e02187bb78d6d4-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=01zzMrixz4DQDPprl3%2ByysQZ5MXdfn7xyccUVeQmCZpmEnVZlh9%2FGHMpPGN9V%2FJlyZQCTvkuPI0sBPs5Q3%2Fu49Kc5FjoLSO1pGOefzDV9%2FHQQBf74DY8oSOM3HVq8Fi3pvHva%2FmDRqs%2B"}]}
    - cf-ray: a1e0218a4fdad6ef-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5Sj7%2FMKijbbeuBeNd34T6hNevt6%2Fbxd%2FNNxuHEm%2BvBJR48PlviJp4PB1k3ul7tQw3Ll2XUl4NLnNXNhrjdCPaSYNMsuVGhUU8cMiz7G%2FKpfZaldUGvzJFyUvjZjH6%2Fcob5bpHcKq%2F5df"}]}
    - cf-ray: a1e0218cc94b1980-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PCcAzYEXQFGAtoLZZAtKjx88O3hoLGoIiCgsiNyZMCnpVUvI3wTyEfgLFlRHRyg3FcCZOTEaQEw4NyE90bLheNkfjI2TQ9oXEF6owElBaqqfPbj952i2W44akDz6MsJg58iRD2%2Ff6wPf"}]}
    - cf-ray: a1e021912ad3f331-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Uvi%2FO%2FJmZZFBlTtIjXK%2BWOfP5cazhrqcKTJZN5%2BSlQR10z9XTepKOKjnE6YjdpTmaKIZeybCMPb8E4odlPZROtQqTFCV%2FHX%2BMQn67E9T1v9dLvvjJvvtt9m3Dx5kxfHbRy1bU6tPeyxZ"}]}
    - cf-ray: a1e02193bad8d8b4-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cYC%2Foehr9WtA5ldSklfi%2F11rSUnlB0%2F0gsDB60jcewmzLOB9DYX8Khq2ZaqmNh%2Fi22KZBiwPZQsMgIsqgQ%2BixOcxKu4yoMM8wCWUKtS2iMK0runMSzMiXi6DfL57Q9jUmCqnQwGAwAuZ"}]}
    - cf-ray: a1e02199d93b2429-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=554%2B9x9%2FR242s9caO78kwJn7%2FgTfCAyDiGr1g1V6RXHf9umEf9MELAT3lksK1qqzFPlApXlGRtjsKdMg85ksb3g%2F%2BxtYrOMjFYr59bqdEwThW900oM3U3LmQT7Fdir3%2BEyjou19UaABd"}]}
    - cf-ray: a1e0219e5da773a3-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.5 Safari/605.1.15
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 07:07:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zU16zOodCFwHQnGoRAyi1AXXu9gJroTlHYpeI3GjZimkP6R47q8oAaH%2FLjJ85jdITdEyCniOumJje8HH4xwWVsEmbtoHkX7bZ3DkuQ9v2RuChPDsCImDV0nDmxCYNgdQnn%2BWYBh4xOUl"}]}
    - cf-ray: a1e021a2180c28c8-IAD
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