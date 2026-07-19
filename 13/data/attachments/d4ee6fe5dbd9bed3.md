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
    - content-length: 319
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BD2SwgfT0YmGsiJTjxICpqICSd%2FzAXYYLahFO4AUWmG3qo9zyRgxetO8ulqI5%2BBGgrJv5ZAAPAIFSkstFlintQLdd416EnLt7a%2FzEH5%2F5rrOECH9VXVqPNdNqqwuzY8A%2BushR4NAcnA6"}]}
    - cf-ray: a1d7b2617ef1d143-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:49 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=F%2Ft44c54d0S%2BUywc6L%2FJkYSFy%2BOpCB2Qy9Fd8Id%2FPdhCOdNA3s%2BKy1WB5VFBauoAfKcpK6ubs58P5dp6exE4tOXRrK7kS%2BjUFOhU6PwYWOQs%2BGbwsi4JzmA8lrP7j9zn71S8Sll61QvF"}]}
    - cf-ray: a1d7b264ee858be2-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=JHcBFzx3WxVRd4C6Z6D4HSO6IIigcuF94bkC%2FMW3sTvnSN5%2BfM5yNr7NuDAhfjh6GnaF%2BsNp6%2FVIQdLqokVskIOb01P0ixy9oS%2FrJjHxTBuEnP2m%2FbiurwPhWFZUknOm0IO21NkR%2B2rI"}]}
    - cf-ray: a1d7b26869aff2fd-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:50 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=ImckSrCmQQdo1UwPzLX%2FFjIm%2FFvSC%2BBfPx0X%2FTBqeMp40lT6Bmzs95zGJ4I3AM4lilLZPmTaDQwOrn%2FbEM7R3CAguOvBvLXCehMGkPJGkDwMWT%2FWLgY9mQMfa5q%2FpQ9xMVQ7onzpDbV3"}]}
    - cf-ray: a1d7b26b1d9a2eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=Sfu2BbBiJq8BT6gsnrKIWBhiqBQx1KT8jEh8P9Kdpd993tDxuIpmIkwnsyOKUyM1BU5gSQOIMNMopyGv2gI%2FqOQZrNM8VSqXS9ruaZvbhes6cLYo%2BC%2FDOKGbz%2FrnKKGS5DrL5%2BchT1yc"}]}
    - cf-ray: a1d7b26e9ba59b2e-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=H0JHAwwNrFZ8Fe0Mg7tRnV0ImkX9Z3zuuGVhUyVvxTA4pgBLUnRX0Tr5%2BLObYODJQUDC5I%2BiS6LJ5Aj2mXkNZIYk6verCCdJCa59FsBXiAf221kwo20mbjJu7xXMunrDi8eBuqbQqwXk"}]}
    - cf-ray: a1d7b2710d39c967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:51 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=OnG%2B5mYnq3BWrFDhxb7ADvqtq%2FnRWQzJAwtHDWP3E0aXS6Qu6lYS9gaO8rvqzQalpvpQdOAjdBUufQAaGGTKNSoZ45sCtt39SRaUBJP5RV6VckjdqdmcpzMRw2CoSxE06yp6RgnQ8TxP"}]}
    - cf-ray: a1d7b2736fb57f1b-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=9I7acJwszL0fjs4FAZXz%2F8%2BwxEvbBauxHgSGQhH5RTgG%2BifJIPU5OK4ijeoDXq70UcVp5ciXVLgDXEi%2Bryo8b1g1D9Jj2xgfMPwgDDyCr2%2Ba5Go3AZVAIPDTGc5Y004NEgOa7VmCPDPC"}]}
    - cf-ray: a1d7b275cefef01a-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:52 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=vcJ56oKSC0Gkki9z7czY5Upez32jzf5eb9TdjVwQCHwd5rbLcjiK8hxKAZkx74BKx1Yikuz9C2d9E9TK73Q1OnpWMVI%2BOZznsr3me5JJPdnea9AhqpEm4uF3bwe9c9YTICLcUL7g5PzR"}]}
    - cf-ray: a1d7b2782a7ba159-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=3GZ47sc9Zc%2Bxa3eEL62ef8zuUb84OmN4pvKsbmqFsxfNqC6RHZ8a%2BYM0Nuy9%2FLimpDx762Rov8tr%2FovHck6W5waOUR91FOGoQvl2wHbCBSTzp1SQ86x03%2F2H05z%2BJGM5U6bSjk3kOGox"}]}
    - cf-ray: a1d7b27a988ac5b5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:53 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=xLSlEMM6ogXwBPtHApCD5UpaTpMxbetdlMSdNONYZo7W2F37l%2FAXARMI7%2FlW9ncoaxrjhfF7FI46WIFZ7KNQeKioz3XIc%2F3QO5bKyaIyVn8iKUHRVy1oJI%2B0wLAQ9oCQY9scq5HJeCjm"}]}
    - cf-ray: a1d7b27cff95f4b8-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=83jk4SotC3g6UUmJmensJXQ%2FdGXFIlvmgCIhzFGu2CsMY7sC1jw36cw6FHSBwqS1wXhx%2FmMqdJm%2FgyBZwLGvU3PmqiT1FYOhSxLuAH2Qe3LZzcFsyMMYwNvO7%2BngUaTajFAnGGdDMiWj"}]}
    - cf-ray: a1d7b27f6c0487a3-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=dC0ggkEEZt2HW2ZDqrceyWvcj1JoT6r8%2Bfct2N3ChF4rmfeSvVqrvsveZn2IDwZd8e1JzSMnxm6GaA9Ub7lwz1%2Bl%2F%2BZihn0i1UZQkUQguDy1NtaJjN5DqbysWFOGJ7Rz2mkbRWDF9J0v"}]}
    - cf-ray: a1d7b282eb6a87af-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:54 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=TBFjASYNGvIJeDFMY28LYV16TJF4zwc7%2B9w%2F%2FZ%2FHW6ubcSOHKfOFBxTR7vnw5%2FH%2FMsujE%2BvMqTOlu5NEauVZQDmEVHBRCvlCGl6On6Tvn4IAY75AYfh8M%2BTe%2B2by2QgFdD7tYrUeJRvr"}]}
    - cf-ray: a1d7b2854b56c9a5-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=f4M%2FefWdtUTT5UXCl5bXEmz91KD5hRfnUXmlWkSN9AEzIZWlqnDTg4qvRSoWC6Ee%2B%2Fa75zZMzRR9LsmNSy25q9r%2FimsP%2FujEPqpmkmyNimEIj0LzGMK3BSLZTQjfrkfoStFr4PMn1lzC"}]}
    - cf-ray: a1d7b287afe86973-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:55 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=%2BiwyvuTUK9HKmALgttK2yZ9i3iZj5n6vE5ZDkp8MjNP25WkkhULAV24B4GQyLOvibxiRasf32CeIGz7eOtmH4%2BFtpQDanOJISz8gZ0nOxeEMIB2zASWDOMbasAlgryTIGpRlbViGU4aU"}]}
    - cf-ray: a1d7b28a183cb1eb-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=jCt6aOtCn94pfXnYfQfVhyFuLCTnVvqEjfS2vk70om%2FFiHf89JZMakMP1057npvdvN3Tx1hPdqOo%2BwnjeyvMRW%2BEd3Rt%2F3lZtfji8b%2F2RHRzkEs3EdfNKsfeFHfhCWdJ1TtyjSCBKe5V"}]}
    - cf-ray: a1d7b28dac90d143-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:56 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=P343XaiLK2hjwpASD2Q914Ga8k9RISsyF6GMnuThhm8wLd1DBdfXsrJ%2BtTC3FtvQEmLuEkanxBVdgsFaNUujp84l%2FiiPLarJjQkcD6lEbB9wUwM2QcFS%2BK20nPr%2FWzpj9TNDzhjwmeIL"}]}
    - cf-ray: a1d7b2913cde2eee-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=wG1xsWjtNmEe4Eaawe0l8AALGY3I3%2FYM%2FxWN%2BqF2sUGYS4C4ewXSMAwRRGMc1lVC7lALk3L4Lq9ChPls7T2GhNPQIFeT79bdlNko2Q3S42WrGWBIS4XiLMTqBIVPR%2Bj2WWcUSTR3%2FUe7"}]}
    - cf-ray: a1d7b293aa62c9fe-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:57 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=bHGVQN7j%2FOEII%2Br13Xs2DApxrfZQBiMKYu3LDr%2FImQ8et7VPzmxDjrVFohGLcvVOgq7%2FCZYOddXzGA7kXoFgLacOsVzlsukxFyWB7jpSNbgk1vwCDKCa473idKLbaKUatlk1v6K6Krl8"}]}
    - cf-ray: a1d7b2960b5ac967-IAD
    - alt-svc: h3=":443"; ma=86400
  - → GET https://automationexercise.com/
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/149.0.7827.55 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
  - ← 302 Found
    - date: Sun, 19 Jul 2026 06:33:58 GMT
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
    - report-to: {"group":"cf-nel","max_age":604800,"endpoints":[{"url":"https://a.nel.cloudflare.com/report/v4?s=g%2BnVDnSn8bhfPsO4Bs1pO0SHRVQO%2FrWvMYN3TdexHKlv7J8b4aph2TxfxcstK4bD2GQx%2BzoZuG86qPcW2OrxU7OaC%2FHESaViqJUP%2FK5D4yxeYpEQUeGIHnSO8luYoqkEO0V3bLcDHc91"}]}
    - cf-ray: a1d7b298688d7f1b-IAD
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