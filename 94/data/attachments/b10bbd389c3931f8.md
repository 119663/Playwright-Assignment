# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Fill in the signup form and submit
- Location: tests/ui/register.spec.ts:24:5

# Error details

```
Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - generic: zTKC0vQcGPKRf2nsjiTt3oHqUB1HdpbFHYIzhFqhT4k62DUB7pgOZiho5SxBrqjP
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: zTKC0vQcGPKRf2nsjiTt3oHqUB1HdpbFHYIzhFqhT4k62DUB7pgOZiho5SxBrqjP
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
        - generic: signup
        - button "Signup" [ref=e55] [cursor=pointer]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Subscription" [level=2] [ref=e62]
      - generic [ref=e63]:
        - textbox "Your email address" [ref=e64]
        - button "" [ref=e65] [cursor=pointer]:
          - generic [ref=e66]: 
        - paragraph [ref=e67]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e71]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e73]:
    - generic [ref=e76]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e78]: Discover more
      - link "Website hosting" [ref=e79] [cursor=pointer]:
        - generic "Website hosting" [ref=e80]
        - img [ref=e82]
      - link "API testing tutorials" [ref=e84] [cursor=pointer]:
        - generic "API testing tutorials" [ref=e85]
        - img [ref=e87]
      - link "Automation software solutions" [ref=e89] [cursor=pointer]:
        - generic "Automation software solutions" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f8e1]:
        - generic [active]:
          - generic [ref=f9e1]:
            - generic [ref=f9e2]:
              - generic:
                - img [ref=f9e6] [cursor=pointer]
                - button [ref=f9e8] [cursor=pointer]:
                  - img [ref=f9e9]
            - insertion [ref=f9e17]:
              - generic [ref=f9e18]:
                - link "Click Here" [ref=f9e19]:
                  - /url: https://googleads.g.doubleclick.net/dbm/clk?sa=L&ai=CRVP-Hp5OaoKbCdOF-cAPtOuywQipgLzogQHegdjXzBTD3Y61m0YQASD9tJ6VAWCVi-YEoAGex5rPPsgBCagDAcgDmwSqBIwCT9ANtJiEjVuh262rCaTjsYGgUwhMBxrNHqMua5mAXLg7tNw0yStmvGz2dWDjiMdoW-0-fYZFEQArrzkPSzsXyxcHK1uL1ejzusLf4buf9IEw2T8wGT7b3IkHrGXoUCbY-VXBGnjPbcWHBEvFwm_uYLzcype5XTeZ--QGgvefk997tbJbwy0OZ0thXIOvTSMidtSowU4qhatryPyzyUsUjQdzBqp6-_QYQ8U1zWSqlnT797yjFx-_O1MgKNdsWCR1A22FCVyRo2Y4rs9YkP9gwnNWPPGIM9olv2o4TixqBC2zY5l9RBwhnbY28hfF-TEuYNVRL7HKzmRWnFY44i1GL3ipzrgJTyQkIRG8ksAEyo6ylb0F4AQDiAX80_rXVZAGAaAGTYAHnv_qrhmoB6fMsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQKoB-fXsQLYBwDSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WNmBveHhw5UDYAGACgGYCwHICwGADAGiDAwqCgoIjt-xApXisQKqDQJLReoNEwj8qb7h4cOVAxXTQh4CHbS1LIjwDQGIDgmwE4mSmiPQEwDYEwrYFAHQFQHKFgIKAPgWAYAXAbIXBBgCUAboFwSyGAkSAp1jGE0iAQDQGQHYGQE&ae=1&num=1&cid=CAQShwIAEQoqgbz7iKb7wVmp8anMEjhQyO2IuabnWg_MHcxhtSwaZTCdVoOhC_r7iGd2U_mnZ8eG0PASIdsoq9h2FYgtarJLxlYLkNmP1tRBxODw-qxCe1FdyjqBYa4NOq6-fAMbGXwVdOiHvVDYilaJYo4y84xCDeXsyg08g8pghkCxvEvxyZfy_vBHJZHsssYguo9k9R7GSKIcL84uGDcFAyFmtBL1uNrVkN1nNuPoKLrV2naVhJypRwjIo5PwJ1S7vC_dYtfS7d9dJdpJjpA4DlblsxhTjF6FR5N_q_fvwj4_HY68ZcRNDELbuouVPsi6q9EL5_gRUL7D9B7AFhjr2aX1eR0m5vG5CxgB&sig=AOD64_1wIum4GyPoovmHRM8A3t0WVq_5OQ&client=ca-pub-1677597403311019&dbm_c=AKAmf-Cs2Om0rwHxSl_lkwA12XJXcVFhR2wRhJmRmvb7BSXnTON3YBtuxQxeBMcWrdCNHLYlMyzD5Ski7h2BshCrDU5JdsRwF9Q2-3oq3wAL79B7Wy_kRpzhzSEJ1_g_uD71-li5Oh9VyW9KL6IOk02ZHFEBtfPTYIrCgP5SIU-kT6xG7179j2UWe86eaWla2Iu-o26VnvS3KtbcYWn_fJZRQpFFa5QwpnY2u4MnoLA8PTDEQ2iyhVO_ewnJ5OL06f_uP-1dkbFnyV5uipy8-RPMcnUH5JWeELV25Vf7pqSNk-K4w0sxdwlRjFxUGGCO_x8LhyVHrUQh&cry=1&dbm_d=AKAmf-CQR_rN68cOCtrPLrm6Ox9NiHIUU7FTk__UknLr4oanPKoPHRT9534sjmrlyYMeiJY3lSg-iJ0XnWJcewWaA2poGiD-Qja6qxIb6LFfB1LYaON8CmoswpFevatD2cCY07tzylle59r_BYKcCu0WIymSWTG5qQpVRePbgUieHWX5DFvGbboDS5szy6JDJIyoDkUNtLxVLMJ5Ka-Ug0sKu0KW-VMMrU2LJPUIRgjGOnumDw_SLW6zzsshItcuURNl788NE4Ckkt16YaOtZAym3Vg-nyE0ZjLo8xj9-27fpnNL5c9AEfTBEPhYnNvxn-d7_45sYHc5MDGSpTz65-thVlOFnY0St2p68wZZauU1CTY5j5SH4Q_wplMLo69GN0-qCrSTkww6Qb5nnA03LonYMeL7IkRpYloLVF9l_-8slPWfo3c5FOjKWB9RefLM_37q0PwiT62yhGUYy7iAvxAIURwIPex_w1c9OUhV7XVnVbu_vakcGbW86hHcISVIpMutGpIgAQeYzpqKC1eg2VWm7yZppcDMgoUMuWkMMD-fgiZEZIhG8PFJcgPxGpyAzmLAYLLyBa7wsOpwXe9hGyu9z_7WunIuxMlVstiA8_G9b-0Ql8HlbLnokI9AD-8hE8Pwa4vQifTRugE_qiQUwLxNJciAHE-UqWMeoWJQwpFeRf7Z5au3BGGwrLfyKzAn2iNyHfZU82mtzyKO71WFJ047U95_cWnaym4Vtjz5srur1QfQiCpgnt0&adurl=https://servedby.flashtalking.com/click/1/275018;9918630;5012191;210;0/?us_privacy=!!US_PRIVACY!&ft_partnerimpid=ABAjH0iKEwPPsqmb9hN7oOt2dpJu&ft_impID=B1848E83-E75E-CBB2-3C96-33281076DC4C&g=6763603CF34551&random=975721.5426713679&ft_width=728&ft_height=90&url=https://www.adobe.com/africa/acrobat/free-trial-download.html?sdid=B8NR3JZH&mv=display&mv2=display
                  - img "Click Here" [ref=f9e20]
                - link "AdChoices arrow" [ref=f9e22]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img "AdChoices arrow" [ref=f9e23]
                - link "Privacy Notification" [ref=f9e25]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f9e26]
                - link "Privacy Notification" [ref=f9e28]:
                  - /url: https://www.flashtalking.com/consumer-privacy
                  - img [ref=f9e29]
          - iframe
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for Manual testing guide" [ref=e103]: Manual testing guide
    - button "Close shopping anchor" [ref=e104]
```