# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/products.spec.ts >> Product tests
- Location: tests/api/products.spec.ts:3:5

# Error details

```
Error: apiRequestContext.get: Max redirect count exceeded
Call log:
  - → GET https://automationexercise.com/api/productsList
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=RCypzA4bFZzTf%2Bj3AmC8f6AkNb%2FEgWylfLv0URZj6pdKo5TjzgULVZsxoJyJ9oIVRMrZaKM29Na4RiAvrQoylWxgrxerv%2BXeX8MN4KH6WblMVYzZUr9sslSG3SLKY8wQZs83dg9EAXZa"}]}
    - cf-ray: a1d7bd54399ac967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:17 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5dfE4WEWFV9Ohe7HeTMZ%2B%2BnubtzjXheqTdR9VElu%2B%2BCEguPVCEbJP9ynVcjJhVTIetEP%2Fk2%2BdACXiUIJs%2BAgm6azP7C%2BI2EQdDYI1XMQle9hUMYG1h3GpTdXidXl4Xkbpt4ccadKcpko"}]}
    - cf-ray: a1d7bd56a92587af-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:18 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=EQHQnx%2BduV4RRacjMylX3Ra%2FeKunjEnSMybXxPAc8xVObl72LV4IlR%2BPhBuHfRlWRMHTQ9NBNBnFgL6JUMOvviYTh28CASBuah%2BlaX4iU%2Bw8IBFOTHG8tZ%2BeOLorS1hZUIzm0TwpR845"}]}
    - cf-ray: a1d7bd590d807f1b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ZKCyfEdq9d5fJVX4%2FyvZpyBqPKUCr2pZyZjYBdPcHiPMK1LGzTXGKnyyWHRGa9wNCSFenbE2%2BLlwDj%2BtCbii2iZmZaargJDPtuwBTJuWEGg2CVlK17dJFlT0jDoTcEq4T40FZJyl4bKm"}]}
    - cf-ray: a1d7bd5c8b5bf01a-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:19 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=kaJ8OPXa5%2BRbl40TQAz%2B6q49MSpoDHl2FuVk0dID6K%2FPpw4poXFzowitwQOxhKdK7whcn4xihnVCZ1eaVa2ZE2O7eHsXd6MqIZs09EQ27xZDWHv9UAceJ8RKYKHysZwuqdelCyR0Cj8h"}]}
    - cf-ray: a1d7bd600cfed143-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=qFDVtjmwOmUI8OGYeKHamgOysIUDNZZynmwGPZhCe5zGEYT6hlpGD3KaNbTtQciz1tNkHc6RbJfldzjMd81TaLJOlxEiQ0ycYnToIa8HilQW2p4%2FUEEI9ih9WyJ3p6v5Tj%2B%2Bt4hiMpbT"}]}
    - cf-ray: a1d7bd63a867f2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:20 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jhhJ8CWn2wKin8gXL3h2p5ITbJCMQrNUsVZ8DdZ1GOfb%2BunFAKqwqYm7A1VyxjKM73WiPd7nM2ocJEQVJfBNPVr0AVhipX517SLq8cSV9i8HNGLlf0RUwLa78wxd6O%2Ft52NzYzMvG%2FjJ"}]}
    - cf-ray: a1d7bd66090c8be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:21 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HqIij45TuGerTFEEpifPsxtCF1jnv0yqMrXhsnBkOI3rXcJgl%2F98UkePuWOAW8ItcTa6%2BPtd3wxbdYCi6gSdNIJlfD0s0lkxzW6NxSP%2B%2FJG3e8Y5c1Lz1gIVAQ8HyPaIsxXdqqK01n%2F1"}]}
    - cf-ray: a1d7bd698dac7af0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:21 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=24lDEYqc1J%2FY0o0KyV5NJEGhNCLCnoKAIfvLxhfeh0ZR96eK%2BF%2BTBmmY8cdhSRprD1EGAbyddaNlSFk0BkUqY8Lm%2BZxx%2FuGf0ZtmEfz6zY1pqthFmlmjvMyXa7Qt5iAoupO68vTfEQ%2FT"}]}
    - cf-ray: a1d7bd6d0a842eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:22 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=EUt%2FwclsFdArSZP%2B%2FyyS%2F56bH8fuq4py%2F8ppCy4RaLX6oSarmqQXYoE%2BwA2A8Tooa8%2B9gYRLxNfUyB5R26QkGTJTLfiMeuN%2BEL4GggvK11KimnNjefwI7XW8434n4rUOSPO6NDmr%2FiXD"}]}
    - cf-ray: a1d7bd708e3ba159-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:22 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=4ll1pCl9HFbMe0TuQ1tN6HIclXZhWdSDRrb5Ymzndnq5OSdM3MRap9SO5oPMOkpbh15AmGSTu186V2Y4%2BAPwkdXfU9Zrn%2B%2B3%2BqCwyl4bcvIo2tp2RjnX29AaiHlP82SrDfIALCOb0UNX"}]}
    - cf-ray: a1d7bd72fd33c5b5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:23 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9lxo%2FPvweQVIDz1ILG20A5PiTZuY06plJzlXSILUAZ4EkrHm1EHTnyv60qVS8apfIc5uMKyU6TmNOX%2FKAB3Bc0GvBb07oBmLFbYGCyZk%2F97ofvXn%2BFyBUEkx2tXdjCU9XAplxnPVGRmw"}]}
    - cf-ray: a1d7bd7688d4f4b8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:23 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=yC7Kqz77h%2F%2Fqr5kq2C3HRQEJGnikgAVYPAr4v55NdQxU9OwwwoLk5KQakpu9EjMggE69kc%2FTh5U%2FqerQJWLAQCM13WRMMpLhAbrOjQYPqU54E4f%2FYcLb0A5G4RlFciX6Jq4FfpHDmFnN"}]}
    - cf-ray: a1d7bd7a0bf1c967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=y8qSPqerF8gjy6jAK%2FBLbi2EJgkfvNshAb0X%2FQei8ltXZHE%2F6tiYHwIAHt25ZteW2jAHod0tXHgQZ1Ep9jMo2lnvGY%2BKYOEJusAcrYBZflHHUwNDii5cdFRseMvlbdx2dl31KP%2FDHYiL"}]}
    - cf-ray: a1d7bd7d79540bb1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:24 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=5aESlMHfd9xuGTx6veIgWWNb5OMC6Gezbtb3CIii7lOvt%2Bg5zMvm5ZszKoolmy9hULwwrdL3pnO1sAoJtkJzl8CKdjBoAs%2BNaaU4RgPHqqFkld3tUQv4kb5SdaOs8REmJV9KkLiUcEGv"}]}
    - cf-ray: a1d7bd80fec07f1b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=XwtPI4KnSCQ8ZdHdDVb6Vwp4ahqwnDVRJffXkm2J0Fb2t%2FH3KWePxWiOeIALu7ZhWSjCp2q9WK1dPYnVmA1GzCA1Al2o997H4g6XIoO%2FQrtW7GqJbLaOibxFucsRJXjf1LRNHAAbsL2i"}]}
    - cf-ray: a1d7bd835ef287a3-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:25 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=rxaNnzzRKxqVjdT3zL591EDETrn8xy81ZA83iYmuIDm9%2FhgncQRFkiZNYFY4RpebUi%2BqwQ09I9Iwqgp6PzTvZfEJISM6f5s4Um4PoqFQjAmbuGHgvqNZG4a%2FjbdE3dL1T4mJnBu22wLk"}]}
    - cf-ray: a1d7bd86d87487af-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=A6VeJgTvmnz6uU1MVMt2c%2BqDVbzJCLP0oOepl8fHGgwkegN%2F9QqQ4EKbx%2BVg0ga%2Bf2rWBWV5G4SSSiH0%2F%2FxcFh3itiNEtDvQBtJSxhvc0FFXePFdEQ3zsIWp7LDfP9ZlcJyAw7wqnvBP"}]}
    - cf-ray: a1d7bd894c3cf2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=zA7g%2B%2BoX1%2F2AcFvD%2Biz7cbzzcfmBLg5NgUB3HW6MZEHnUMecRDTpZhky2B1jTB7PoV9RsKPBMPyDix2TRjDmV7GMzyZxR49jZbmY5zZYazINMe3cMjsQVy4%2FVGvx3aZBnE3f0OuR%2B%2FBS"}]}
    - cf-ray: a1d7bd8b9a2dc9a5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:26 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=czPyabqPkiXVVGriQlUnnVLsssXdm1cCRBGvYhZo8eZqhA82sDUY3O%2FyQpqD1utGnocsmmh9CKI0scoe6nMTKFLk0clAys%2Ft08hsCvIYlyvg3SjSM0q3qBjTy6u%2Bq%2B1BnU%2BANg%2B9lFAS"}]}
    - cf-ray: a1d7bd8e0d69f01a-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:27 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=BFlL98yQe1cls46JDPwDnaZ8eV1Gs3%2Fw1INx%2FpEEXv%2B1mNYykhWKJ%2FJsdzlZGp0MJqRi38zzHItdlDUsxUJp9PhiF5yZUw2FWy1BQ1S4ebPjPTQVjXP%2Bzv5yUl8i2cZ3itFT5%2FMS0nAY"}]}
    - cf-ray: a1d7bd906ed7d143-IAD
    - alt-svc: h3=":443"; ma=86400

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test("Product tests", async ({ request }) => {
  4  |     //get products
> 5  |     const getresponse = await request.get('https://automationexercise.com/api/productsList', {
     |                                       ^ Error: apiRequestContext.get: Max redirect count exceeded
  6  |         headers: {
  7  |             'Content-Type': 'application/json',
  8  |         }
  9  |     })
  10 |     const data = await getresponse.json();
  11 |     console.log(data);
  12 | 
  13 |     expect(data.responseCode).toBe(200);
  14 |     expect(getresponse.status()).toBe(200);
  15 |     expect(Array.isArray(data.products)).toBe(true);
  16 |     expect(data.products[0].id).toBe(1);
  17 | 
  18 |     for (const product of data.products) {
  19 |         expect(product.id).toBeDefined();
  20 |         expect(product.id).not.toBeNull();
  21 |         expect(typeof product.id).toBe('number');
  22 |         expect(product.id).toBeGreaterThan(0);
  23 |         expect(product.name).toBeDefined();
  24 |         expect(product.name).not.toBeNull();
  25 |         expect(typeof product.name).toBe('string');
  26 |         expect(product.price).toBeDefined();
  27 |         expect(product.brand).toBeDefined();
  28 |     }
  29 | 
  30 |     //search product
  31 |     const searchresponse = await request.post('https://automationexercise.com/api/searchProduct', {
  32 |         form: {
  33 |             search_product: 'Top',
  34 |         }
  35 |     })
  36 |     const responsebody = await searchresponse.json();
  37 |     console.log(responsebody);
  38 |     expect(responsebody.responseCode).toBe(200);
  39 |     expect(Array.isArray(responsebody.products)).toBe(true);
  40 |     expect(searchresponse.status()).toBe(200);
  41 | 
  42 |     //post product
  43 |     const postresponse = await request.post('https://automationexercise.com/api/productsList', {
  44 |         form: {
  45 |             name: "Sundress for Women",
  46 |             price: "Rs. 2000",
  47 |             brand: "Madame"
  48 |         }
  49 |     })
  50 |     const postresponsebody = await postresponse.json();
  51 |     console.log(postresponsebody);
  52 | 
  53 |     expect(postresponse.status()).toBe(200);
  54 |     expect(postresponsebody.message).toBe("This request method is not supported.");
  55 |     expect(postresponsebody.responseCode).toBe(405);
  56 | })
```