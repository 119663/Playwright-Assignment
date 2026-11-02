# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/products.spec.ts >> Navigate to products page
- Location: tests/ui/products.spec.ts:4:5

# Error details

```
Error: expect(page).toHaveTitle(expected) failed

Expected: "Automation Exercise - All Products"
Received: "Automation Exercise"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × unexpected value "Automation Exercise"

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading [level=1] [ref=e48]: AutomationExercise
        - heading [level=2] [ref=e49]: Full-Fledged practice website for Automation Engineers
        - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
        - link [ref=e51] [cursor=pointer]:
          - /url: /test_cases
          - button [ref=e52]: Test Cases
        - link [ref=e53] [cursor=pointer]:
          - /url: /api_list
          - button [ref=e54]: APIs list for practice
      - img [ref=e56]
    - link [ref=e57] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link [ref=e59] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading [level=2] [ref=e66]: Category
      - generic [ref=e67]:
        - heading [level=4] [ref=e70]:
          - link [ref=e71] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading [level=4] [ref=e76]:
          - link [ref=e77] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading [level=4] [ref=e82]:
          - link [ref=e83] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - generic [ref=e86]:
        - heading [level=2] [ref=e87]: Brands
        - list [ref=e89]:
          - listitem [ref=e90]:
            - link [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e92]: (6)
              - text: Polo
          - listitem [ref=e93]:
            - link [ref=e94] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e95]: (5)
              - text: H&M
          - listitem [ref=e96]:
            - link [ref=e97] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e98]: (5)
              - text: Madame
          - listitem [ref=e99]:
            - link [ref=e100] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e101]: (3)
              - text: Mast & Harbour
          - listitem [ref=e102]:
            - link [ref=e103] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e104]: (4)
              - text: Babyhug
          - listitem [ref=e105]:
            - link [ref=e106] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e107]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e108]:
            - link [ref=e109] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e110]: (3)
              - text: Kookie Kids
          - listitem [ref=e111]:
            - link [ref=e112] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e113]: (5)
              - text: Biba
    - generic [ref=e114]:
      - generic [ref=e115]:
        - heading [level=2] [ref=e116]: Features Items
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img [ref=e121]
              - heading [level=2] [ref=e122]: Rs. 500
              - paragraph [ref=e123]: Blue Top
              - generic [ref=e124] [cursor=pointer]:
                - generic [ref=e125]: 
                - text: Add to cart
            - generic [ref=e126]:
              - heading [level=2] [ref=e127]: Rs. 500
              - paragraph [ref=e128]: Blue Top
              - generic [ref=e129] [cursor=pointer]:
                - generic [ref=e130]: 
                - text: Add to cart
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link [ref=e134] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e135]: 
                - text: View Product
        - generic [ref=e137]:
          - generic [ref=e138]:
            - generic [ref=e139]:
              - img [ref=e140]
              - heading [level=2] [ref=e141]: Rs. 400
              - paragraph [ref=e142]:
                - text: Men
                - link [ref=e143] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e144]
                  - text: Tshirt
              - generic [ref=e146] [cursor=pointer]:
                - generic [ref=e147]: 
                - text: Add to cart
            - generic [ref=e148]:
              - heading [level=2] [ref=e149]: Rs. 400
              - paragraph [ref=e150]: Men Tshirt
              - generic [ref=e151] [cursor=pointer]:
                - generic [ref=e152]: 
                - text: Add to cart
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link [ref=e156] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e157]: 
                - text: View Product
        - generic [ref=e159]:
          - generic [ref=e160]:
            - generic [ref=e161]:
              - img [ref=e162]
              - heading [level=2] [ref=e163]: Rs. 1000
              - paragraph [ref=e164]: Sleeveless Dress
              - generic [ref=e165] [cursor=pointer]:
                - generic [ref=e166]: 
                - text: Add to cart
            - generic [ref=e167]:
              - heading [level=2] [ref=e168]: Rs. 1000
              - paragraph [ref=e169]: Sleeveless Dress
              - generic [ref=e170] [cursor=pointer]:
                - generic [ref=e171]: 
                - text: Add to cart
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link [ref=e175] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e176]: 
                - text: View Product
        - generic [ref=e178]:
          - generic [ref=e179]:
            - generic [ref=e180]:
              - img [ref=e181]
              - heading [level=2] [ref=e182]: Rs. 1500
              - paragraph [ref=e183]: Stylish Dress
              - generic [ref=e184] [cursor=pointer]:
                - generic [ref=e185]: 
                - text: Add to cart
            - generic [ref=e186]:
              - heading [level=2] [ref=e187]: Rs. 1500
              - paragraph [ref=e188]: Stylish Dress
              - generic [ref=e189] [cursor=pointer]:
                - generic [ref=e190]: 
                - text: Add to cart
          - list [ref=e192]:
            - listitem [ref=e193]:
              - link [ref=e194] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e195]: 
                - text: View Product
        - generic [ref=e197]:
          - generic [ref=e198]:
            - generic [ref=e199]:
              - img [ref=e200]
              - heading [level=2] [ref=e201]: Rs. 600
              - paragraph [ref=e202]: Winter Top
              - generic [ref=e203] [cursor=pointer]:
                - generic [ref=e204]: 
                - text: Add to cart
            - generic [ref=e205]:
              - heading [level=2] [ref=e206]: Rs. 600
              - paragraph [ref=e207]: Winter Top
              - generic [ref=e208] [cursor=pointer]:
                - generic [ref=e209]: 
                - text: Add to cart
          - list [ref=e211]:
            - listitem [ref=e212]:
              - link [ref=e213] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e214]: 
                - text: View Product
        - generic [ref=e216]:
          - generic [ref=e217]:
            - generic [ref=e218]:
              - img [ref=e219]
              - heading [level=2] [ref=e220]: Rs. 400
              - paragraph [ref=e221]: Summer White Top
              - generic [ref=e222] [cursor=pointer]:
                - generic [ref=e223]: 
                - text: Add to cart
            - generic [ref=e224]:
              - heading [level=2] [ref=e225]: Rs. 400
              - paragraph [ref=e226]: Summer White Top
              - generic [ref=e227] [cursor=pointer]:
                - generic [ref=e228]: 
                - text: Add to cart
          - list [ref=e230]:
            - listitem [ref=e231]:
              - link [ref=e232] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e233]: 
                - text: View Product
        - generic [ref=e235]:
          - generic [ref=e236]:
            - generic [ref=e237]:
              - img [ref=e238]
              - heading [level=2] [ref=e239]: Rs. 1000
              - paragraph [ref=e240]: Madame Top For Women
              - generic [ref=e241] [cursor=pointer]:
                - generic [ref=e242]: 
                - text: Add to cart
            - generic [ref=e243]:
              - heading [level=2] [ref=e244]: Rs. 1000
              - paragraph [ref=e245]: Madame Top For Women
              - generic [ref=e246] [cursor=pointer]:
                - generic [ref=e247]: 
                - text: Add to cart
          - list [ref=e249]:
            - listitem [ref=e250]:
              - link [ref=e251] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e252]: 
                - text: View Product
        - generic [ref=e254]:
          - generic [ref=e255]:
            - generic [ref=e256]:
              - img [ref=e257]
              - heading [level=2] [ref=e258]: Rs. 700
              - paragraph [ref=e259]: Fancy Green Top
              - generic [ref=e260] [cursor=pointer]:
                - generic [ref=e261]: 
                - text: Add to cart
            - generic [ref=e262]:
              - heading [level=2] [ref=e263]: Rs. 700
              - paragraph [ref=e264]: Fancy Green Top
              - generic [ref=e265] [cursor=pointer]:
                - generic [ref=e266]: 
                - text: Add to cart
          - list [ref=e268]:
            - listitem [ref=e269]:
              - link [ref=e270] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e271]: 
                - text: View Product
        - generic [ref=e273]:
          - generic [ref=e274]:
            - generic [ref=e275]:
              - img [ref=e276]
              - heading [level=2] [ref=e277]: Rs. 499
              - paragraph [ref=e278]:
                - text: Sleeves Printed Top - White
                - link [ref=e279] [cursor=pointer]:
                  - img [ref=e281]
                  - text: Compare Broadband
              - generic [ref=e283] [cursor=pointer]:
                - generic [ref=e284]: 
                - text: Add to cart
            - generic [ref=e285]:
              - heading [level=2] [ref=e286]: Rs. 499
              - paragraph [ref=e287]: Sleeves Printed Top - White
              - generic [ref=e288] [cursor=pointer]:
                - generic [ref=e289]: 
                - text: Add to cart
          - list [ref=e291]:
            - listitem [ref=e292]:
              - link [ref=e293] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e294]: 
                - text: View Product
        - generic [ref=e296]:
          - generic [ref=e297]:
            - generic [ref=e298]:
              - img [ref=e299]
              - heading [level=2] [ref=e300]: Rs. 359
              - paragraph [ref=e301]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e302] [cursor=pointer]:
                - generic [ref=e303]: 
                - text: Add to cart
            - generic [ref=e304]:
              - heading [level=2] [ref=e305]: Rs. 359
              - paragraph [ref=e306]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e307] [cursor=pointer]:
                - generic [ref=e308]: 
                - text: Add to cart
          - list [ref=e310]:
            - listitem [ref=e311]:
              - link [ref=e312] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e313]: 
                - text: View Product
        - generic [ref=e315]:
          - generic [ref=e316]:
            - generic [ref=e317]:
              - img [ref=e318]
              - heading [level=2] [ref=e319]: Rs. 278
              - paragraph [ref=e320]: Frozen Tops For Kids
              - generic [ref=e321] [cursor=pointer]:
                - generic [ref=e322]: 
                - text: Add to cart
            - generic [ref=e323]:
              - heading [level=2] [ref=e324]: Rs. 278
              - paragraph [ref=e325]: Frozen Tops For Kids
              - generic [ref=e326] [cursor=pointer]:
                - generic [ref=e327]: 
                - text: Add to cart
          - list [ref=e329]:
            - listitem [ref=e330]:
              - link [ref=e331] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e332]: 
                - text: View Product
        - generic [ref=e334]:
          - generic [ref=e335]:
            - generic [ref=e336]:
              - img [ref=e337]
              - heading [level=2] [ref=e338]: Rs. 679
              - paragraph [ref=e339]: Full Sleeves Top Cherry - Pink
              - generic [ref=e340] [cursor=pointer]:
                - generic [ref=e341]: 
                - text: Add to cart
            - generic [ref=e342]:
              - heading [level=2] [ref=e343]: Rs. 679
              - paragraph [ref=e344]: Full Sleeves Top Cherry - Pink
              - generic [ref=e345] [cursor=pointer]:
                - generic [ref=e346]: 
                - text: Add to cart
          - list [ref=e348]:
            - listitem [ref=e349]:
              - link [ref=e350] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e351]: 
                - text: View Product
        - generic [ref=e353]:
          - generic [ref=e354]:
            - generic [ref=e355]:
              - img [ref=e356]
              - heading [level=2] [ref=e357]: Rs. 315
              - paragraph [ref=e358]:
                - text: Printed Off Shoulder Top - White
                - link [ref=e359] [cursor=pointer]:
                  - img [ref=e361]
                  - text: Audit Quality
              - generic [ref=e363] [cursor=pointer]:
                - generic [ref=e364]: 
                - text: Add to cart
            - generic [ref=e365]:
              - heading [level=2] [ref=e366]: Rs. 315
              - paragraph [ref=e367]: Printed Off Shoulder Top - White
              - generic [ref=e368] [cursor=pointer]:
                - generic [ref=e369]: 
                - text: Add to cart
          - list [ref=e371]:
            - listitem [ref=e372]:
              - link [ref=e373] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e374]: 
                - text: View Product
        - generic [ref=e376]:
          - generic [ref=e377]:
            - generic [ref=e378]:
              - img [ref=e379]
              - heading [level=2] [ref=e380]: Rs. 478
              - paragraph [ref=e381]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e382] [cursor=pointer]:
                - generic [ref=e383]: 
                - text: Add to cart
            - generic [ref=e384]:
              - heading [level=2] [ref=e385]: Rs. 478
              - paragraph [ref=e386]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e387] [cursor=pointer]:
                - generic [ref=e388]: 
                - text: Add to cart
          - list [ref=e390]:
            - listitem [ref=e391]:
              - link [ref=e392] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e393]: 
                - text: View Product
        - generic [ref=e395]:
          - generic [ref=e396]:
            - generic [ref=e397]:
              - img [ref=e398]
              - heading [level=2] [ref=e399]: Rs. 1200
              - paragraph [ref=e400]: Little Girls Mr. Panda Shirt
              - generic [ref=e401] [cursor=pointer]:
                - generic [ref=e402]: 
                - text: Add to cart
            - generic [ref=e403]:
              - heading [level=2] [ref=e404]: Rs. 1200
              - paragraph [ref=e405]: Little Girls Mr. Panda Shirt
              - generic [ref=e406] [cursor=pointer]:
                - generic [ref=e407]: 
                - text: Add to cart
          - list [ref=e409]:
            - listitem [ref=e410]:
              - link [ref=e411] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e412]: 
                - text: View Product
        - generic [ref=e414]:
          - generic [ref=e415]:
            - generic [ref=e416]:
              - img [ref=e417]
              - heading [level=2] [ref=e418]: Rs. 1050
              - paragraph [ref=e419]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e420] [cursor=pointer]:
                - generic [ref=e421]: 
                - text: Add to cart
            - generic [ref=e422]:
              - heading [level=2] [ref=e423]: Rs. 1050
              - paragraph [ref=e424]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e425] [cursor=pointer]:
                - generic [ref=e426]: 
                - text: Add to cart
          - list [ref=e428]:
            - listitem [ref=e429]:
              - link [ref=e430] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e431]: 
                - text: View Product
        - generic [ref=e433]:
          - generic [ref=e434]:
            - generic [ref=e435]:
              - img [ref=e436]
              - heading [level=2] [ref=e437]: Rs. 1190
              - paragraph [ref=e438]: Cotton Mull Embroidered Dress
              - generic [ref=e439] [cursor=pointer]:
                - generic [ref=e440]: 
                - text: Add to cart
            - generic [ref=e441]:
              - heading [level=2] [ref=e442]: Rs. 1190
              - paragraph [ref=e443]: Cotton Mull Embroidered Dress
              - generic [ref=e444] [cursor=pointer]:
                - generic [ref=e445]: 
                - text: Add to cart
          - list [ref=e447]:
            - listitem [ref=e448]:
              - link [ref=e449] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e450]: 
                - text: View Product
        - generic [ref=e452]:
          - generic [ref=e453]:
            - generic [ref=e454]:
              - img [ref=e455]
              - heading [level=2] [ref=e456]: Rs. 1530
              - paragraph [ref=e457]: Blue Cotton Indie Mickey Dress
              - generic [ref=e458] [cursor=pointer]:
                - generic [ref=e459]: 
                - text: Add to cart
            - generic [ref=e460]:
              - heading [level=2] [ref=e461]: Rs. 1530
              - paragraph [ref=e462]: Blue Cotton Indie Mickey Dress
              - generic [ref=e463] [cursor=pointer]:
                - generic [ref=e464]: 
                - text: Add to cart
          - list [ref=e466]:
            - listitem [ref=e467]:
              - link [ref=e468] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e469]: 
                - text: View Product
        - generic [ref=e471]:
          - generic [ref=e472]:
            - generic [ref=e473]:
              - img [ref=e474]
              - heading [level=2] [ref=e475]: Rs. 1600
              - paragraph [ref=e476]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link [ref=e477] [cursor=pointer]:
                  - img [ref=e479]
                  - text: Try Cloud Tools
              - generic [ref=e481] [cursor=pointer]:
                - generic [ref=e482]: 
                - text: Add to cart
            - generic [ref=e483]:
              - heading [level=2] [ref=e484]: Rs. 1600
              - paragraph [ref=e485]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e486] [cursor=pointer]:
                - generic [ref=e487]: 
                - text: Add to cart
          - list [ref=e489]:
            - listitem [ref=e490]:
              - link [ref=e491] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e492]: 
                - text: View Product
        - generic [ref=e494]:
          - generic [ref=e495]:
            - generic [ref=e496]:
              - img [ref=e497]
              - heading [level=2] [ref=e498]: Rs. 1100
              - paragraph [ref=e499]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e500] [cursor=pointer]:
                - generic [ref=e501]: 
                - text: Add to cart
            - generic [ref=e502]:
              - heading [level=2] [ref=e503]: Rs. 1100
              - paragraph [ref=e504]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e505] [cursor=pointer]:
                - generic [ref=e506]: 
                - text: Add to cart
          - list [ref=e508]:
            - listitem [ref=e509]:
              - link [ref=e510] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e511]: 
                - text: View Product
        - generic [ref=e513]:
          - generic [ref=e514]:
            - generic [ref=e515]:
              - img [ref=e516]
              - heading [level=2] [ref=e517]: Rs. 849
              - paragraph [ref=e518]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e519] [cursor=pointer]:
                - generic [ref=e520]: 
                - text: Add to cart
            - generic [ref=e521]:
              - heading [level=2] [ref=e522]: Rs. 849
              - paragraph [ref=e523]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e524] [cursor=pointer]:
                - generic [ref=e525]: 
                - text: Add to cart
          - list [ref=e527]:
            - listitem [ref=e528]:
              - link [ref=e529] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e530]: 
                - text: View Product
        - generic [ref=e532]:
          - generic [ref=e533]:
            - generic [ref=e534]:
              - img [ref=e535]
              - heading [level=2] [ref=e536]: Rs. 1299
              - paragraph [ref=e537]:
                - text: Pure Cotton V-Neck
                - link [ref=e538] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e539]
                  - text: T-Shirt
              - generic [ref=e541] [cursor=pointer]:
                - generic [ref=e542]: 
                - text: Add to cart
            - generic [ref=e543]:
              - heading [level=2] [ref=e544]: Rs. 1299
              - paragraph [ref=e545]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e546] [cursor=pointer]:
                - generic [ref=e547]: 
                - text: Add to cart
          - list [ref=e549]:
            - listitem [ref=e550]:
              - link [ref=e551] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e552]: 
                - text: View Product
        - generic [ref=e554]:
          - generic [ref=e555]:
            - generic [ref=e556]:
              - img [ref=e557]
              - heading [level=2] [ref=e558]: Rs. 1000
              - paragraph [ref=e559]: Green Side Placket Detail T-Shirt
              - generic [ref=e560] [cursor=pointer]:
                - generic [ref=e561]: 
                - text: Add to cart
            - generic [ref=e562]:
              - heading [level=2] [ref=e563]: Rs. 1000
              - paragraph [ref=e564]: Green Side Placket Detail T-Shirt
              - generic [ref=e565] [cursor=pointer]:
                - generic [ref=e566]: 
                - text: Add to cart
          - list [ref=e568]:
            - listitem [ref=e569]:
              - link [ref=e570] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e571]: 
                - text: View Product
        - generic [ref=e573]:
          - generic [ref=e574]:
            - generic [ref=e575]:
              - img [ref=e576]
              - heading [level=2] [ref=e577]: Rs. 1500
              - paragraph [ref=e578]:
                - text: Premium Polo
                - link [ref=e579] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e580]
                  - text: T-Shirts
              - generic [ref=e582] [cursor=pointer]:
                - generic [ref=e583]: 
                - text: Add to cart
            - generic [ref=e584]:
              - heading [level=2] [ref=e585]: Rs. 1500
              - paragraph [ref=e586]: Premium Polo T-Shirts
              - generic [ref=e587] [cursor=pointer]:
                - generic [ref=e588]: 
                - text: Add to cart
          - list [ref=e590]:
            - listitem [ref=e591]:
              - link [ref=e592] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e593]: 
                - text: View Product
        - generic [ref=e595]:
          - generic [ref=e596]:
            - generic [ref=e597]:
              - img [ref=e598]
              - heading [level=2] [ref=e599]: Rs. 850
              - paragraph [ref=e600]: Pure Cotton Neon Green Tshirt
              - generic [ref=e601] [cursor=pointer]:
                - generic [ref=e602]: 
                - text: Add to cart
            - generic [ref=e603]:
              - heading [level=2] [ref=e604]: Rs. 850
              - paragraph [ref=e605]: Pure Cotton Neon Green Tshirt
              - generic [ref=e606] [cursor=pointer]:
                - generic [ref=e607]: 
                - text: Add to cart
          - list [ref=e609]:
            - listitem [ref=e610]:
              - link [ref=e611] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e612]: 
                - text: View Product
        - generic [ref=e614]:
          - generic [ref=e615]:
            - generic [ref=e616]:
              - img [ref=e617]
              - heading [level=2] [ref=e618]: Rs. 799
              - paragraph [ref=e619]: Soft Stretch Jeans
              - generic [ref=e620] [cursor=pointer]:
                - generic [ref=e621]: 
                - text: Add to cart
            - generic [ref=e622]:
              - heading [level=2] [ref=e623]: Rs. 799
              - paragraph [ref=e624]: Soft Stretch Jeans
              - generic [ref=e625] [cursor=pointer]:
                - generic [ref=e626]: 
                - text: Add to cart
          - list [ref=e628]:
            - listitem [ref=e629]:
              - link [ref=e630] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e631]: 
                - text: View Product
        - generic [ref=e633]:
          - generic [ref=e634]:
            - generic [ref=e635]:
              - img [ref=e636]
              - heading [level=2] [ref=e637]: Rs. 1200
              - paragraph [ref=e638]: Regular Fit Straight Jeans
              - generic [ref=e639] [cursor=pointer]:
                - generic [ref=e640]: 
                - text: Add to cart
            - generic [ref=e641]:
              - heading [level=2] [ref=e642]: Rs. 1200
              - paragraph [ref=e643]: Regular Fit Straight Jeans
              - generic [ref=e644] [cursor=pointer]:
                - generic [ref=e645]: 
                - text: Add to cart
          - list [ref=e647]:
            - listitem [ref=e648]:
              - link [ref=e649] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e650]: 
                - text: View Product
        - generic [ref=e652]:
          - generic [ref=e653]:
            - generic [ref=e654]:
              - img [ref=e655]
              - heading [level=2] [ref=e656]: Rs. 1400
              - paragraph [ref=e657]: Grunt Blue Slim Fit Jeans
              - generic [ref=e658] [cursor=pointer]:
                - generic [ref=e659]: 
                - text: Add to cart
            - generic [ref=e660]:
              - heading [level=2] [ref=e661]: Rs. 1400
              - paragraph [ref=e662]: Grunt Blue Slim Fit Jeans
              - generic [ref=e663] [cursor=pointer]:
                - generic [ref=e664]: 
                - text: Add to cart
          - list [ref=e666]:
            - listitem [ref=e667]:
              - link [ref=e668] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e669]: 
                - text: View Product
        - generic [ref=e671]:
          - generic [ref=e672]:
            - generic [ref=e673]:
              - img [ref=e674]
              - heading [level=2] [ref=e675]: Rs. 2300
              - paragraph [ref=e676]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e677] [cursor=pointer]:
                - generic [ref=e678]: 
                - text: Add to cart
            - generic [ref=e679]:
              - heading [level=2] [ref=e680]: Rs. 2300
              - paragraph [ref=e681]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e682] [cursor=pointer]:
                - generic [ref=e683]: 
                - text: Add to cart
          - list [ref=e685]:
            - listitem [ref=e686]:
              - link [ref=e687] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e688]: 
                - text: View Product
        - generic [ref=e690]:
          - generic [ref=e691]:
            - generic [ref=e692]:
              - img [ref=e693]
              - heading [level=2] [ref=e694]: Rs. 3000
              - paragraph [ref=e695]: Cotton Silk Hand Block Print Saree
              - generic [ref=e696] [cursor=pointer]:
                - generic [ref=e697]: 
                - text: Add to cart
            - generic [ref=e698]:
              - heading [level=2] [ref=e699]: Rs. 3000
              - paragraph [ref=e700]: Cotton Silk Hand Block Print Saree
              - generic [ref=e701] [cursor=pointer]:
                - generic [ref=e702]: 
                - text: Add to cart
          - list [ref=e704]:
            - listitem [ref=e705]:
              - link [ref=e706] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e707]: 
                - text: View Product
        - generic [ref=e709]:
          - generic [ref=e710]:
            - generic [ref=e711]:
              - img [ref=e712]
              - heading [level=2] [ref=e713]: Rs. 3500
              - paragraph [ref=e714]: Rust Red Linen Saree
              - generic [ref=e715] [cursor=pointer]:
                - generic [ref=e716]: 
                - text: Add to cart
            - generic [ref=e717]:
              - heading [level=2] [ref=e718]: Rs. 3500
              - paragraph [ref=e719]: Rust Red Linen Saree
              - generic [ref=e720] [cursor=pointer]:
                - generic [ref=e721]: 
                - text: Add to cart
          - list [ref=e723]:
            - listitem [ref=e724]:
              - link [ref=e725] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e726]: 
                - text: View Product
        - generic [ref=e728]:
          - generic [ref=e729]:
            - generic [ref=e730]:
              - img [ref=e731]
              - heading [level=2] [ref=e732]: Rs. 5000
              - paragraph [ref=e733]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e734] [cursor=pointer]:
                - generic [ref=e735]: 
                - text: Add to cart
            - generic [ref=e736]:
              - heading [level=2] [ref=e737]: Rs. 5000
              - paragraph [ref=e738]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e739] [cursor=pointer]:
                - generic [ref=e740]: 
                - text: Add to cart
          - list [ref=e742]:
            - listitem [ref=e743]:
              - link [ref=e744] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e745]: 
                - text: View Product
        - generic [ref=e747]:
          - generic [ref=e748]:
            - generic [ref=e749]:
              - img [ref=e750]
              - heading [level=2] [ref=e751]: Rs. 1400
              - paragraph [ref=e752]: Lace Top For Women
              - generic [ref=e753] [cursor=pointer]:
                - generic [ref=e754]: 
                - text: Add to cart
            - generic [ref=e755]:
              - heading [level=2] [ref=e756]: Rs. 1400
              - paragraph [ref=e757]: Lace Top For Women
              - generic [ref=e758] [cursor=pointer]:
                - generic [ref=e759]: 
                - text: Add to cart
          - list [ref=e761]:
            - listitem [ref=e762]:
              - link [ref=e763] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e764]: 
                - text: View Product
        - generic [ref=e766]:
          - generic [ref=e767]:
            - generic [ref=e768]:
              - img [ref=e769]
              - heading [level=2] [ref=e770]: Rs. 1389
              - paragraph [ref=e771]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link [ref=e772] [cursor=pointer]:
                  - img [ref=e774]
                  - text: Software testing courses
              - generic [ref=e776] [cursor=pointer]:
                - generic [ref=e777]: 
                - text: Add to cart
            - generic [ref=e778]:
              - heading [level=2] [ref=e779]: Rs. 1389
              - paragraph [ref=e780]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e781] [cursor=pointer]:
                - generic [ref=e782]: 
                - text: Add to cart
          - list [ref=e784]:
            - listitem [ref=e785]:
              - link [ref=e786] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e787]: 
                - text: View Product
      - generic [ref=e788]:
        - heading [level=2] [ref=e789]: recommended items
        - generic [ref=e790]:
          - generic [ref=e791]:
            - generic [ref=e795]:
              - img [ref=e796]
              - heading [level=2] [ref=e797]: Rs. 500
              - paragraph [ref=e798]: Blue Top
              - generic [ref=e799] [cursor=pointer]:
                - generic [ref=e800]: 
                - text: Add to cart
            - generic [ref=e804]:
              - img [ref=e805]
              - heading [level=2] [ref=e806]: Rs. 400
              - paragraph [ref=e807]: Men Tshirt
              - generic [ref=e808] [cursor=pointer]:
                - generic [ref=e809]: 
                - text: Add to cart
            - generic [ref=e813]:
              - img [ref=e814]
              - heading [level=2] [ref=e815]: Rs. 1000
              - paragraph [ref=e816]: Rs. 1000
              - generic [ref=e817] [cursor=pointer]:
                - generic [ref=e818]: 
                - text: Add to cart
            - text:   
          - link [ref=e819] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e820]: 
          - link [ref=e821] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e822]: 
  - insertion [ref=e824]
  - contentinfo [ref=e826]:
    - generic [ref=e831]:
      - heading [level=2] [ref=e832]: Subscription
      - generic [ref=e833]:
        - textbox [ref=e834]:
          - /placeholder: Your email address
        - button [ref=e835] [cursor=pointer]:
          - generic [ref=e836]: 
        - paragraph [ref=e837]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e841]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test';
  2  | import ProductsPage from '../../pages/products';
  3  | 
  4  | test ("Navigate to products page", async ({page}) => {
  5  |     const products = new ProductsPage(page);
  6  |     await products.navigate();
  7  |     await expect(page).toHaveTitle('Automation Exercise');
  8  |     await products.productsButton.click();
> 9  |     await expect(page).toHaveTitle('Automation Exercise - All Products');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  10 | })
  11 | 
  12 | test ("Search for a product", async ({page}) => {
  13 |     const search = new ProductsPage(page);
  14 |     await search.navigate();
  15 |     await expect(page).toHaveTitle('Automation Exercise');
  16 |     await search.productsButton.click();
  17 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
  18 |     await search.searchInput.fill('Top');
  19 |     await search.searchButton.click();
  20 |     await expect(page.locator('//h2[@class="title text-center"]')).toHaveText('Searched Products');
  21 | })
  22 | 
  23 | test ("View product details", async ({page}) => {
  24 |     const viewProduct = new ProductsPage(page);
  25 |     await viewProduct.navigate();
  26 |     await expect(page).toHaveTitle('Automation Exercise');
  27 |     await viewProduct.productsButton.click();
  28 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
  29 |     await viewProduct.viewProductButton.click();
  30 |     await expect(page).toHaveTitle('Automation Exercise - Product Details');
  31 | })
  32 | 
  33 | test ("Add to cart from product details page", async ({page}) => {
  34 |     test.setTimeout(80000);
  35 |     const viewProductAddToCart = new ProductsPage(page);
  36 |     await viewProductAddToCart.navigate();
  37 |     await expect(page).toHaveTitle('Automation Exercise');
  38 |     await viewProductAddToCart.productsButton.click();
  39 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
  40 |     await viewProductAddToCart.viewProductButton.click();
  41 |     await expect(page).toHaveTitle('Automation Exercise - Product Details');
  42 |     await viewProductAddToCart.viewProductAddToCart.click();
  43 | })
  44 | 
  45 | 
  46 | test ("Add to cart from products page", async ({page}) => {
  47 |     test.setTimeout(80000);
  48 |     const addToCart = new ProductsPage(page);
  49 |     await addToCart.navigate();
  50 |     await expect(page).toHaveTitle('Automation Exercise');
  51 |     await addToCart.productsButton.click();
  52 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
  53 |     await addToCart.addToCartButton.click();
  54 | })
  55 | 
  56 | test ("Add a product to cart and checkout", async ({page}) => {
  57 |     test.setTimeout(80000);
  58 |     const products = new ProductsPage(page);
  59 |     await products.navigate();
  60 |     await expect(page).toHaveTitle('Automation Exercise');
  61 |     await products.productsButton.click();
  62 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
  63 |     await products.addToCartButton.click();
  64 |     await page.locator("//div[contains(@class,'modal-content')]//a[@href='/view_cart']").click();
  65 |     await expect(page).toHaveTitle('Automation Exercise - Checkout');
  66 |     await products.checkoutButton.click();
  67 |     // await expect(page).toHaveTitle('Automation Exercise - Checkout');
  68 |     // await products.placeOrderButton.click();
  69 | 
  70 | })
  71 | 
  72 | test ("Delete a product from cart", async ({page}) => {
  73 |     const products = new ProductsPage(page);
  74 |     await products.navigate();
  75 |     await expect(page).toHaveTitle('Automation Exercise');
  76 |     await products.productsButton.click();
  77 |     await products.addToCartButton.click();
  78 |     await page.locator("//div[contains(@class,'modal-content')]//a[@href='/view_cart']").click();
  79 |     await expect(page).toHaveTitle('Automation Exercise - Checkout');
  80 |     await products.deleteCartItemButton.click();
  81 |     await expect(page.locator("//b[text()='Cart is empty!']")).toBeVisible();
  82 | })
  83 | 
  84 | test("Increase product quantity in view products page", async ({page}) => {
  85 |     test.setTimeout(80000);
  86 |     const products = new ProductsPage(page);
  87 |     await products.navigate();
  88 |     await expect(page).toHaveTitle('Automation Exercise');
  89 |     await products.productsButton.click();
  90 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
  91 |     await products.viewProductButton.click();
  92 |     await expect(page).toHaveTitle('Automation Exercise - Product Details');
  93 |     await products.addquantityInput.fill('2');
  94 |     await products.viewProductAddToCart.click();
  95 | 
  96 | })
```