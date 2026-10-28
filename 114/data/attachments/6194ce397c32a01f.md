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
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Login to your account" [level=2] [ref=e42]
      - generic [ref=e43]:
        - textbox "Email Address" [ref=e44]
        - textbox "Password" [ref=e45]
        - button "Login" [ref=e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=e48]
    - generic [ref=e50]:
      - heading "New User Signup!" [level=2] [ref=e51]
      - generic [ref=e52]:
        - textbox "Name" [ref=e53]
        - textbox "Email Address" [ref=e54]
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
      - link "Networking" [ref=e79] [cursor=pointer]:
        - generic "Networking" [ref=e80]
        - img [ref=e82]
      - link "Language Resources" [ref=e84] [cursor=pointer]:
        - generic "Language Resources" [ref=e85]
        - img [ref=e87]
      - link "Intellectual Property" [ref=e89] [cursor=pointer]:
        - generic "Intellectual Property" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - iframe [ref=f8e1]:
        - generic [ref=f9e2]:
          - link [ref=f9e3] [cursor=pointer]:
            - /url: https://dsp-trk.eskimi.com/click/e:ThzsD8I-Sr0M0BILSNWL5XB4Rwpgsk3PmUXsy1fu_AWO66zEIVh_qJM3GM7Jje3-SUDThjei1h0E2waXSaW-JoZuFmshGfQy3yI4zI-rgP3oJey4UNo5PabozSpn_D2Z8W4324BNKKBB9-xUSqpLqS-K7_nDhEdwgyl7zJYM11earZ12qwM7wiJbVqG9M9Z-RKHOlknjV5R_soQsp6UPs58wuEBGi-2mXgHF-nfQTjvnSPNuEVvWJxVfvRVmySh2vmOZvB7KUSAL-8V4UV2lm3WwbDyurox2tmd0PdSC6v2mOjZBmJogj4rR_lVVXwVvCbycJa79OhLN8my2bK-T6T0zSG6cfwNGTmdFvWeSe-Ndc7pPxfttMbGtSLUBaqD6cNZ-2E-Ycnxqm1DnRZps4-Nr3sKgjlmJot3IIp4QXw7lm_pwFimXKrU6bYiMd9fJx7-gVYXmb_S0Y2JzQpAg1u2pdE25COkk3xQ8nQLGkefPnONp0adBZy8Fv6LoXY63xhiSBVxyIfr863p9dcgreof0qLtFeA3-GfhXI-8_QlG7iTVNGre0UhgsHaeumjb8qnhZpxtBm5vtYm6A4T1zRlp5ersNKGbduKfJwHApAvKHBWP11KqYL-JuuWCCfqK-tvHBaYfVqcsWqEr9IExFdnJlR2hBI28R9Xi5M6gteuYU7gdVGcCeOeU-wmPT5DfENPXrnMkb9_vDfi1tYml0VJuca9paXjPJ4sx7ynIWphO6Sz4zjKKUnfdmKMi-dXsBzLPtvGmpfP9aWe0ix2B9pwphQisJMIA1CSCpErKSxk6sXy4FoPipRNI60uMufl-QkJOHh8gxeQkLc0G0b6u9Co8M53uCGI0mJDLN8Gg-MApvPh5x91Sm78IrVq5VFG4L?dest=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DC-3wk-51Oaoj5HaqUrNcP-_KPuQKOjtfffZyCsoC9EcCNtwEQASD9tJ6VAWCVi-YEyAEJqAMByAMCqgTfAU_QFrVe2NQ6i7hWCSrDP0lQSmHJkn81EWR0RyUKksv19L4zzpxddQbHm2fAVIwPJ-P2mxkRN7vdo9zjIjhCi1ETn3NcrXsZkaBeu_cNfVoCriqq9i59wFgmz-syKbNGgw2IPHaUdwLla3hONMQh544OVDHnnhkfe5CjW1madAMYyhcCHCxBbrRPHQlT8POhcRfTGc1-ewfYjYXVUt7LTr07b6YtLwbysF9aCEaAhXkpvaHWAzaHg6CYPXbU8fTvw9PFOn4b70cWNkqKho80WQaWkM1FNWlIThdmrDyeMvWABqKq08fujZ6CMKAGIagHk9ixAqgHlNixAqgHldixAqgHpr4bqAeW2BuoB6qbsQKoB_-esQKoB9-fsQKoB62-sQKoB7_TsQLYBwDSCDAIgGEQATIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WOnD-tDhw5UDYAD6CwIIAYAMAaoNAktF6g0TCIHn-tDhw5UDFSoK6wQde_kjJ4gOCdAVAYAXAbIXBBgMUAE%26num%3D1%26sig%3DAOD64_2XMeqV0hzlLS1hhxBvPhLZkUATEw%26client%3Dca-pub-1677597403311019%26adurl%3D&c=
            - img [ref=f9e4]
          - generic [ref=f9e7] [cursor=pointer]:
            - img [ref=f9e8]
            - text: ✕
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for Website hosting" [ref=e103]: Website hosting
    - button "Close shopping anchor" [ref=e104]
```