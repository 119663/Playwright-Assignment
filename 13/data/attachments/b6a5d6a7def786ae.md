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
    - date: Sun, 19 Jul 2026 06:41:28 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=7ODkTRYix5xEWbFdv6Do1%2FdUhVkjD%2Fm5VWiDp9YD3CJgo0xlAjJWIVBXCULylmhdMv8AM2yupVsPLRFycHCuhCTJgzGmlvt4CoIsi3LHvb2ADgQzzeClXaVrcBGBN201cYyKkaN3qB%2FY"}]}
    - cf-ray: a1d7bd97bff62eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dmhTCaAz4BNsOIcofBLymnJwMrzcF%2BTH8lYfnHtDFKIodIQDWcSMREyULFYgY%2FR8h%2FJeYyfVrImOMkk%2FM%2B2cBD6aPsXg2oke4sS4TunL6UFuhHsAozG8S4BA0%2FPNtJc1r8%2BLO32KgN74"}]}
    - cf-ray: a1d7bd9b3b338be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:29 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=uGjKFjweBQmWE1D4Ooc%2BABpvReEmynOW28UO2AV3gNuPxskrJEwlMvtHu4r6VjQmHL7Bw7VNkcaXu8%2BJiZHqSlcrDIZxUkmDzHkyO9P5M14YahBElKt9FkI4U4nAvx6ou5UXCIbFSmJC"}]}
    - cf-ray: a1d7bd9ebfab2896-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=UNXnwEXYgGOYc%2BTXHcLPXw5ctsWhdGKkLS8gsDNy%2FFfVMpEc9dztu7FfG06CdqjbVvHaiMjwvY44q24KAYSuzysn7S%2BbU3ildMLBeVoAY2Sp2%2B70r5fwaNP1M5RntLffYI5bH7K5vLi6"}]}
    - cf-ray: a1d7bda2388e0bb1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:30 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9h5xdSJe6YGIoUjNaYS2dt07JnxfjdyJXHMV9E1M2QuFj5MZznUB7ABIfWUrGhVx5iDv0SkWFyr7LzA7xVd8C0d6J5ypz7vFi5fX%2FLWuCiS9PKg7Bj4XP5otfb2V0enDpyZz%2BlgsbROZ"}]}
    - cf-ray: a1d7bda5bd4305f5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bj5UoNEEny1eMYEk6u91JaIFdRJtLHPIq0IBJaZ3zQi8lHEP58w5ZF6c7VFqP36zC8nZVhES1M6tnokP2DKE2vCwrfgo70jb8iYz3BKacEyEVI7bAmQuz1WmIzrMy15P7voBZ4h0Q9E5"}]}
    - cf-ray: a1d7bda94bd2c967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:31 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OS99Ixwosw7Ij%2BBbX7E%2BtnB9%2Bd2eVVZkkn9WH1mSXIvp0Wgcg9%2BufOBh%2FDSNPV0X4G4BWKm2Bp3zR44JfL2%2Bs513wQwXJNTgh9f1vrA8Xi7nad7HH7JMDPphtzR%2FQMXK4dxfIVCIrIZa"}]}
    - cf-ray: a1d7bdabb9eac5b5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=N6XIaWZpIBRrke725SRbzyFDSNui0i9vEqDg3M0zI5dyoddL9hw17wUxGGOy1RL2o7FPmgCFHrMBhk0qwceTM7pIHXLae8dF6RKjJjWLQ%2FJEJPMBhrTKwAi3BdzbCEg8O8QrxMxWEdo5"}]}
    - cf-ray: a1d7bdaf4884f2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:32 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=PHUwVnb9ttHNtmqTH0XZ4%2Flp2SS0icrx4WHzr7QuZpV1LkR0%2BiSggdXjYPfIJ9dbJ9NmgCOKGjAHsqY%2B%2FMa%2FdLFR5x0rUtScQ63FL5Gs1oxBZ4RbFrzDlXAzE6Ad%2F6MQQSSttsHVq%2F06"}]}
    - cf-ray: a1d7bdb2cc297af0-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=GB0ax5L9dQU6xfZVvNAC0WiIVuhIlHQjD5a0q0mPTxT553AhqDMGFuLsD7dMa86nT7tsU%2FzJWD%2FKY%2F8xwlapkmBMlZ2TaW6IrMmM%2FTLbCer5GU93VNBrWDc0ziwCpfeBVvAxSye7KSKa"}]}
    - cf-ray: a1d7bdb64f8e7f1b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:33 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=G3ucl%2F4R0h8RdflPbrGvuM0TSsF3zQbrX2KTt6uI02l1CYWI6vvZyxTE3Seb6JUB86XzRJE09t8JpcAlMvVqVmAnSnK2PxjUBIie%2FsJ0FLSuSFF%2Fw49ouJKXYv6COExlDv07g6ntCV1m"}]}
    - cf-ray: a1d7bdb8bf83a159-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=22YtYHjjVkL6J0FVYQA5cadfmtysZXiwhxb6E1vfbaXpWoGlRm%2BtpqY74u8eYjBTVTaTvVYsCb96kz1YFONNQSdGJBhl%2BFUurMw6twhO8mFu5CQyQg5u8nf9lhdb31JiuS3GiBflQIqo"}]}
    - cf-ray: a1d7bdbc3aacf4b8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:34 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=COtt4V7D6hmDll0WF9oKl%2B8aM3u%2FFWNQL%2FYX3lUSgCFQTXqBEdGvGMkGuIuNeSfa%2BGaXVDdMOHIFuDfwLGdosmhckOFqB8IJHPYA4YgxZRf696jlbnqVmJbm5f%2FT9nvtp1fe3VCgpMj8"}]}
    - cf-ray: a1d7bdbfbad02eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=HeV9gE3CyognIchfpdbdLJZvOw3g5OuLDESZa%2BXhLtwy29%2BGT4L5GMBqO10%2FlRnQVkCSHM48c8J%2FczKpdihQ1MdCb%2F7va6SNYnYku5N21ueXdftF6N2Wj7HUfqPAdDjFN6Ybwopsl1Re"}]}
    - cf-ray: a1d7bdc338ab8be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:35 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=y5vVH5NW6RiktI2kkzHkHF7H0MHLv8POHS2M7FCZG0gLnE08denHGBqXoZb5fOhGZKE6AGN8yMliCqPgmPlXe2wksrHxul4y%2BarteGeCGtxKaWRgml7W%2FVYLLbYRuZUv8gF7zf7119QU"}]}
    - cf-ray: a1d7bdc6baa1c9a5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=McXsmRBZyrigdO%2Fzc0BGN1H%2B41yRYtdyh9XhS0LJ7mpbBkT6ivSjRDSfhYTCje0XUX6188ygquopdJ3GenwN%2BGBXDiukQqVjtNFmJLEyzQV1KIJRw%2BZytDk6Lsp8Swc5flMud3HfPyGy"}]}
    - cf-ray: a1d7bdc93f939b2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:36 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=0mG%2BjbGvj9u%2FE56uJFuyy%2F56e0%2FGzYk4A5ZoTktK%2Fgw34WQKjiW6yAGmXvEdTlezDsgRINd5BtrvsaDVsVeH1iP4J%2B2nAdwICNGqA0hNzeVcIO7usdmf4P9CVZI2zHj8GJ2Z8y6%2FfyQ%2F"}]}
    - cf-ray: a1d7bdcbbd4205f5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=WqC3Fu6OFvMW13ZoH%2F4KQMLir4K%2FSJT%2FxDkQnws2l3uM08TrR4tb0smvYXCXkKFAZHK2PJs47TRcqcx1TgATkUxT%2BZeFBiF%2Fb7zmRTUP2Yy%2BAwe79g0O7htSwPPNYoxKGkWW5kuJLVK3"}]}
    - cf-ray: a1d7bdcf393a0bb1-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:37 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=F712fqhamXPVc4XskjprwP8d9W31jmcuWsVL%2Bi4OnheO3QAB03wgtKp0aRAxscwMnLC5%2Fq7pARibybl35OLEIVA3KdfrqHH48FnvklN%2FHKPliyX8HVooGnOGxoFxyAirYEfkjDQVEhVD"}]}
    - cf-ray: a1d7bdd2bd6fc967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=95E%2FGzN1bxnovdclrz2I663a3D5dZQhhob2bVPQ%2BlRjlSbFUX2tWVwMlcZ1SADROHHIXNtcGnJhw7bm1dO%2BvKvOwIASu1C8n4ewOdcLMGatHi7oPgqHsXHSFISaQBAI%2BbBbY0mUJ5oyD"}]}
    - cf-ray: a1d7bdd51ae887a3-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:151.0) Gecko/20100101 Firefox/151.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - Content-Type: application/json
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:41:38 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=R6JkVtaEUbroWbpCUlu3A8ufrQZeyFEESdM7foZcnIJDgccpD5V%2BhVTdBmX3oCBWf5fs%2FDZW7nT1JA0%2BhSfObZZJykXfdKziE1CQu6OakHcXFS8RTORui77c6M%2BqLoAQwnf%2Bnx8Mcl%2BO"}]}
    - cf-ray: a1d7bdd899d4f2fd-IAD
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