# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Navigate to signup page and register a new user
- Location: tests/ui/register.spec.ts:7:5

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
        - generic: fWRCrUE6ReiQtauaWTL04SjtNkRaL94nushR8p6Ck0QErXLZEyIU27bjzfruyh7x
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - generic: fWRCrUE6ReiQtauaWTL04SjtNkRaL94nushR8p6Ck0QErXLZEyIU27bjzfruyh7x
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
  - insertion [ref=e72]:
    - iframe [ref=e75]:
      - iframe [ref=f36e1]:
        - generic [ref=f39e3] [cursor=pointer]:
          - link [ref=f39e5]:
            - /url: javascript:void(0);
            - img [ref=f39e6]
          - generic [ref=f39e7]:
            - link [ref=f39e8]:
              - /url: https://adclick.g.doubleclick.net/aclk?sa=L&ai=CrNdiFZ9OatroEJnX1fAPl_XjiQzKt8nIZtKTxbXVDcCNtwEQASD9tJ6VAWCVi-YEyAEJqAMByAMCqgTgAU_QiFV9-2TgLV6QNiLxSvUvqaMrOkbCy3u0F46duZJNK308q2ck36BWh0MDYUfhWY_Whc-fwKDhyhlxLkerPPCBipLA6Z08HLsHdV0BW4MeKNhHGVHbejFZIpqLM_aRgLRJ433t3BWDB0TXA2E8F6IK7quL7djo9oIq-dU-2T0ddT8ckXnFCz2YFeeho9sJ8exj4BuvgF8APIOvQsl-nqDolwWDBTubYVHMT6qiI-UVLPxQshyGziiknoUFpjC5Fiu-CsLJXM3ZJlGd_k8EweSR3LQT696TNLrn462gJsFdgAb55enj-oav_s0BoAYhqAeT2LECqAeU2LECqAeV2LECqAemvhuoB5bYG6gHqpuxAqgH_56xAqgH35-xAqgH_uixAqgHrb6xAqgHv9OxAtgHANIIMAiAYRABMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYmeio1-LDlQNgAPoLAggBgAwBqg0CS0XqDRMIyc6p1-LDlQMVmWsVCB2X-jjBiA4J0BUBgBcBshcEGAxQAQ&num=1&sig=AOD64_0x0yX8TU7Ptnq_fP9fXkHYwoMKbw&client=ca-pub-1677597403311019&adurl=https://bidder.mediapal.net/redirect?exchange=google&ad_id=ncba-golf-series-2026&device_id=&google_user_id=&creative_id=banner:8007120&price=ak6fFQAENFoIFWuZADj6l1PDDbOGZZrqa387mA&bid_id=mXjXhL8KBUUpvOxcafqDnQ&url=https://ncbagroup.com/golf/?utm_source=mediapal&utm_medium=display_cpm&utm_campaign=NCBA_golfseries
            - iframe [ref=f39e11]:
              - generic [ref=f40e2]:
                - link:
                  - /url: javascript:void(window.open(clickTag))
                  - generic [ref=f40e5]:
                    - img [ref=f40e7]
                    - img [ref=f40e9]
                    - img [ref=f40e11]
                    - img [ref=f40e13]
                    - img [ref=f40e15]
  - generic [ref=e76]:
    - generic [ref=e77] [cursor=pointer]:
      - img [ref=e79]
      - link "Go to shopping options for Test case management" [ref=e81]: Test case management
    - button "Close shopping anchor" [ref=e82]
```