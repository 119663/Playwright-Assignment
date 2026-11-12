# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Fill in the signup form and submit
- Location: tests/ui/register.spec.ts:22:5

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
      - link "Automation practice website" [ref=e79] [cursor=pointer]:
        - generic "Automation practice website" [ref=e80]
        - img [ref=e82]
      - link "API testing tutorials" [ref=e84] [cursor=pointer]:
        - generic "API testing tutorials" [ref=e85]
        - img [ref=e87]
      - link "API development services" [ref=e89] [cursor=pointer]:
        - generic "API development services" [ref=e90]
        - img [ref=e92]
  - insertion [ref=e94]:
    - iframe [ref=e97]:
      - generic [ref=f8e3] [cursor=pointer]:
        - link [ref=f8e5]:
          - /url: javascript:void(0);
          - img [ref=f8e6]
        - generic [ref=f8e7]:
          - link [ref=f8e8]:
            - /url: https://adclick.g.doubleclick.net/aclk?sa=L&ai=CDA7rLZFOaqjgJoSH-cAPy_uh4AHKt8nIZtKTxbXVDcCNtwEQASD9tJ6VAWCVi-YEyAEJqAMByAMCqgTgAU_QxPA7tDE0irFh9D1lJSnjlycSdgdLRyH-d19RJYTckBBOvkSPCwGYF5ru_--0zo5BaWLHKASmhXlMNiyTAMFt6akxcXj49TN5VFplJjchcRtIUZtNTijZkVH5h9GHjaSS5Eqv9E41Zdfc7OUAD1IEtQy0hayY407uf60j2OIRX0ey3MD93NJw-OJZZDlhEGHhgn8DRleyRpjLyO2tm_o0ij64Ioapqt-PWpZgbJfrnWO63Bu5NX29uwWWSdQ6yKGvEY0mbVuEJQZiMEoYmKt5ln9F2TfDiDVj4GnKFXpEgAaMl6Siqef-o9gBoAYhqAeT2LECqAeU2LECqAeV2LECqAemvhuoB5bYG6gHqpuxAqgH_56xAqgH35-xAqgHrb6xAqgHv9OxAtgHANIIMAiAYRABMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYh4z5tdXDlQNgAPoLAggBgAwBqg0CS0XqDRMI9rP6tdXDlQMVhEMeAh3LfQgciA4J0BUBgBcBshcEGAxQAQ&num=1&sig=AOD64_0Csy9HgtkRBMXJjCF6alBx98bdlQ&client=ca-pub-1677597403311019&adurl=https://bidder.mediapal.net/redirect?exchange=google&ad_id=cocacola-fwc-july-campaign&device_id=&google_user_id=&creative_id=banner:8007952&price=ak6RLQAJsCgCHkOEAAh9y5VVYiD9f7vNmk__Hg&bid_id=30NK-efdyW8v7p-hbBKd0w&url=https%3A%2F%2Furldefense.com%2Fv3%2F__https%3A%2F%2Fwww.coca-cola.com%2Fke%2Fen%2Fofferings%2Ffifa-world-cup-2026__%3B!!MOA0!dTrTs2MiUek1y4LYKVql-UjMcYw4pXcuqU5RBZ6x7EGnMkXoCj8Z9ERorKydzZP-tG6rZ9CZYaV8fuMuWpCOyQsnFmI%24
          - iframe [ref=f8e11]:
            - img "Feel It All Mosaic" [ref=f9e2]
  - generic [ref=e98]:
    - generic [ref=e99] [cursor=pointer]:
      - img [ref=e101]
      - link "Go to shopping options for Automation software solutions" [ref=e103]: Automation software solutions
    - button "Close shopping anchor" [ref=e104]
```