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
    - date: Mon, 20 Jul 2026 06:58:44 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Htaqw5p3SbYxZQXZpqP8PboGvEF861T9KCXI0CFyemznOLUtG8cEebq9loUrcYP7Z%2FrsBWgdg2%2BYkdz8dLiPNL0PJEBRic2zK%2FWaBO4rDyNTbIvdB%2FS5vlG4VLrTKyHccoaFdt%2BEPCPI"}]}
    - cf-ray: a1e014421961d6d4-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dRN0thFaUSYYl8u56YzEFd%2BglrcMPgWVL3LWQFDRNnIH%2Bczb80%2BRrP8lCVVEfUb4OamZEssjqEIIj4CBhFxXO7gOPR33RuaFcbyOe295XBpBk%2FFxEF76g4pzVG4u3Te3%2F3%2FmBS7hvJ0P"}]}
    - cf-ray: a1e01445bad72429-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=08G71Yq9z%2BPYuOmQj7K65XLWaNZBfuNml9GvmLSi0dfB0XOJnXG5kSZHa1EmDGxeocqH%2B3anrfOBX72sh0IYoaq3BJFIQFf60M9qSiD04xg0vMVykEYeKFQNWP2HMMJqgl2J6svIhI5B"}]}
    - cf-ray: a1e014495c07c07b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:45 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3V0%2F3fykRz2KujqLYSnFNG8yOKOjpCimMethpi8yEbs5WqzFsfZrJqoAg2Px3fyGoYUi8fl77RLBtC%2FSUh6gip7SPpMzd32WI1D0nc331Led38IohjNHPMlGRCvbFtSaUJlvkovRkqj%2B"}]}
    - cf-ray: a1e0144cf8d1b87e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:46 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bKTXjz3eSqbfJSwqleJC1FML2jHZnNXnMXypUQo9DXk87GVA8l0snSEnr3f1C8OcjNlVIq2pG7e%2Bmg5FNMFtTemeP2kc6B7waWCeK76Fm3Y17svNVc4GCXO8zxo89oRjxOYyH5PjMJfZ"}]}
    - cf-ray: a1e0144f7f2d056b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=J1yJQIu3Cnd120WVk5727ts%2BTwh5cRcNKP3C29ZW8MuGAcqGSc9GqWulxcVl7V3ef09%2FBogzv8Il%2BnvMKs1olAM5ZDuS5zqUGGxwXgWuXZCbt0MsksAlLit%2FZMx1HBMG6QPBBu9appYG"}]}
    - cf-ray: a1e0145318f8c8a1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JxUjuMNuZdnP3Dz2fdB62KDqsa1yoHF3x0QdEUWobxCI6PlBbw9QdALhGGLe%2FSWTyPVXODSTOKgtlam2K2QG5PC8lk8lV2zd%2BoeZIc36cgtaRSOOCDHaaD0mZNHOevotMsv9FwGzE4TU"}]}
    - cf-ray: a1e01456b89b8583-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:47 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=sROVwsNHmsQjkaAYtUiIgng%2Bb4uaMYT8H6h6vegFperVdQynvrD9Rf1tpQsIaRrwhzCr%2BnDkvncQPiUlm1OXfK3lq5rLVGmsdbhQCj8OiaUZ%2Fzs7kh9JKg4eOugPwGj7RtGJy2M0qShB"}]}
    - cf-ray: a1e014593ed105e0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=YynVn%2FoJjCcBjj8l%2Bko2zsFotA6%2BrENn4RGQJXfOV7kmYL9VKVprZ7WY7qGX8PWJNL3Dxilai3s77LEea7kdH%2FhJ11%2BMxDchvaLGTrkVQS3Algd0EqWbGdppQUbp%2BqurSEabJ9B9U0pt"}]}
    - cf-ray: a1e0145bbacfd6ef-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:48 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XR4PhUY3cs9E7TaL6%2FxU46BU1zBxGNYNojDh%2F10qm1rPa%2BspfHhHTWiJOoPB1P%2Bxizmh%2F%2FhrXif7QxqJrnNlPKPht12y48wjIPXuyUJ91%2FGsFtrCP8hL6rS8daE7YIARxduTDF%2Bji9Ko"}]}
    - cf-ray: a1e0145e3c7a1980-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cR86CMTeaGRFwYdJ9z6MFXKJ3cGoAXlEO20M7EMjIgt2IG0gMYO6%2F4FqPlapsr95dlZMHmHCrIGL%2BqZQenq34O19gojTKkwXsekWDqjBZSqTrbPQzvEQ6iNdrTME0NTTmVKjfEWtRdl6"}]}
    - cf-ray: a1e01461c8c60604-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Cj1alewLSDl3PQchypRdPiR7Pqh9WgJGoQF1pmWI210Jfn0iO%2B1G05oG8NYifuCe6pjAZkBitv85yptWT%2Fuzr0ZhWzqQbmF83DsenAbXv6fa%2FuadHMzhgZrstlP9SL3YMPE4IN%2Bxbzk6"}]}
    - cf-ray: a1e014644f95a9d2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kBVsDHKYaLDtEqONtwLhGhFylSo3QHqk6FAV48azfJCEG6o8lwvSxap%2FNpwxiOjj7LU6T1zWWJdXvhf%2FZXRg36lfvY0QI52OUrqUtCe0WdKMkRBdQ2u94GO%2FkzRT0bDNlI3t9fKr%2BAH7"}]}
    - cf-ray: a1e01467eaeb0143-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=cfIkfG8XEb8%2FxWAWFEAHk9TsU0xeT6o5PTlyhnUWgox1NzE5pJHzYamfOYlB%2BBXgiWIYqWYScKZk99rtfzPvMeHFH7CaGqm4KpnefRAK5gJz3BkBS8NCiNRLqIPE%2FSvtB3QxBKlFKLc0"}]}
    - cf-ray: a1e0146b8b86d6d4-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=iD1pFJTO%2BQs2NbG8yb8CojhzfZXCDL%2F6IEhNeXj1yEUVa%2BR8R9RQIqgoRYdscXSBBScCxPALDLrn87kuXRwqM5kvkYRnb5%2BW1J3Dds8fSbDqNRBE2Vh%2Fs7jns0nMWNh%2B%2F%2FNMUHUp1AJ%2F"}]}
    - cf-ray: a1e0146dfeab2429-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bS6l%2FSNFGVqGFCqB3Dp9pI1VsTuV7LrD1CHsYhfx2r3atiBGhnGou40Lcj90TGlDnurqYLb4qBsBE4qiZOy3rCmEqeuZIUj93HU8aisj%2BTdKHb86yV1o4PO5%2FzocyqhodhBv8Ccu5QIY"}]}
    - cf-ray: a1e014719d57e5fc-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kh2cuzGyYQCoKrMMeWzacB4U9yXV%2BOG%2BCdytfMRsT1ApcKO8qocWsLEk5TjsWpRM4ZnCsQU3U2XfP8CAtUt%2Fap1rcMZ2SM%2B6o3GgqWtsPIu%2BporxcqGhZmgpqCBXtnrCfX9VuL7coNeM"}]}
    - cf-ray: a1e014753e1dc07b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ypZYGa7oru7J7VaSJQBGHYSH4ct6D%2FcF%2BUjesttL250qZoeUymNjcepDrkCGMOdyb9qfOfg0yP%2Fb9FM%2BeJq%2Bw3P565DMIE6HyQwVQFCdILrZeKTc0LqvAh3N%2F5xKd2Dybso0C4Bq69IL"}]}
    - cf-ray: a1e01477b84b056b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=2VV72PH%2F%2FeDJGy7nDvlEqoSqaI1V71mGVab5Y2pDreDIvARzabTLDlyUroRkuSRZ5%2F1T4oOdgj5of%2F5D97iDHKN5z2gbeXokm0px5uNBghyT6C5k%2FwcBVIs1q4HBKKY7ZiPBUx7TZEgE"}]}
    - cf-ray: a1e0147a3b4ac8a1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=UYiyrd0uls4NHMGzc%2FmADwhZJwWgHegiBNIsHWBk39bm%2BMoK702HPjLYF%2FvsRqjdwqVfbitvZtBQc758uD%2F1TzIt4qBixdr7Cdrqw8LkGmXq7OdkE8Ne6q1b5lF5uUJj%2BDmaK%2Fv5cgZo"}]}
    - cf-ray: a1e0147dcf5db87e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Mon, 20 Jul 2026 06:58:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dhNOWrjVk32dDrxu6J6LMseSQo4FMR%2F0r1WmBMMvltmHRj9Zqm5ymLPVUHc4u%2FIZOffxIP3Hm%2BYMaFTe0x3gxkqT6wPHzc6DqXn9ayk5BcOwVIGj3Gp2YMcI4plsYUYgjxpuYLoCIFVZ"}]}
    - cf-ray: a1e014804d6d8583-IAD
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