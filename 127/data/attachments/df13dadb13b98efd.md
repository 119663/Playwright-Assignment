# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/products.spec.ts >> View product details
- Location: tests/ui/products.spec.ts:23:5

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
                - link [ref=e146] [cursor=pointer]:
                  - img [ref=e148]
                  - text: T-Shirts
              - generic [ref=e150] [cursor=pointer]:
                - generic [ref=e151]: 
                - text: Add to cart
            - generic [ref=e152]:
              - heading [level=2] [ref=e153]: Rs. 400
              - paragraph [ref=e154]: Men Tshirt
              - generic [ref=e155] [cursor=pointer]:
                - generic [ref=e156]: 
                - text: Add to cart
          - list [ref=e158]:
            - listitem [ref=e159]:
              - link [ref=e160] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e161]: 
                - text: View Product
        - generic [ref=e163]:
          - generic [ref=e164]:
            - generic [ref=e165]:
              - img [ref=e166]
              - heading [level=2] [ref=e167]: Rs. 1000
              - paragraph [ref=e168]:
                - text: Sleeveless
                - link [ref=e169] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e170]
                  - text: Dress
              - generic [ref=e172] [cursor=pointer]:
                - generic [ref=e173]: 
                - text: Add to cart
            - generic [ref=e174]:
              - heading [level=2] [ref=e175]: Rs. 1000
              - paragraph [ref=e176]: Sleeveless Dress
              - generic [ref=e177] [cursor=pointer]:
                - generic [ref=e178]: 
                - text: Add to cart
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link [ref=e182] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e183]: 
                - text: View Product
        - generic [ref=e185]:
          - generic [ref=e186]:
            - generic [ref=e187]:
              - img [ref=e188]
              - heading [level=2] [ref=e189]: Rs. 1500
              - paragraph [ref=e190]: Stylish Dress
              - generic [ref=e191] [cursor=pointer]:
                - generic [ref=e192]: 
                - text: Add to cart
            - generic [ref=e193]:
              - heading [level=2] [ref=e194]: Rs. 1500
              - paragraph [ref=e195]: Stylish Dress
              - generic [ref=e196] [cursor=pointer]:
                - generic [ref=e197]: 
                - text: Add to cart
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link [ref=e201] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e202]: 
                - text: View Product
        - generic [ref=e204]:
          - generic [ref=e205]:
            - generic [ref=e206]:
              - img [ref=e207]
              - heading [level=2] [ref=e208]: Rs. 600
              - paragraph [ref=e209]: Winter Top
              - generic [ref=e210] [cursor=pointer]:
                - generic [ref=e211]: 
                - text: Add to cart
            - generic [ref=e212]:
              - heading [level=2] [ref=e213]: Rs. 600
              - paragraph [ref=e214]: Winter Top
              - generic [ref=e215] [cursor=pointer]:
                - generic [ref=e216]: 
                - text: Add to cart
          - list [ref=e218]:
            - listitem [ref=e219]:
              - link [ref=e220] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e221]: 
                - text: View Product
        - generic [ref=e223]:
          - generic [ref=e224]:
            - generic [ref=e225]:
              - img [ref=e226]
              - heading [level=2] [ref=e227]: Rs. 400
              - paragraph [ref=e228]: Summer White Top
              - generic [ref=e229] [cursor=pointer]:
                - generic [ref=e230]: 
                - text: Add to cart
            - generic [ref=e231]:
              - heading [level=2] [ref=e232]: Rs. 400
              - paragraph [ref=e233]: Summer White Top
              - generic [ref=e234] [cursor=pointer]:
                - generic [ref=e235]: 
                - text: Add to cart
          - list [ref=e237]:
            - listitem [ref=e238]:
              - link [ref=e239] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e240]: 
                - text: View Product
        - generic [ref=e242]:
          - generic [ref=e243]:
            - generic [ref=e244]:
              - img [ref=e245]
              - heading [level=2] [ref=e246]: Rs. 1000
              - paragraph [ref=e247]: Madame Top For Women
              - generic [ref=e248] [cursor=pointer]:
                - generic [ref=e249]: 
                - text: Add to cart
            - generic [ref=e250]:
              - heading [level=2] [ref=e251]: Rs. 1000
              - paragraph [ref=e252]: Madame Top For Women
              - generic [ref=e253] [cursor=pointer]:
                - generic [ref=e254]: 
                - text: Add to cart
          - list [ref=e256]:
            - listitem [ref=e257]:
              - link [ref=e258] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e259]: 
                - text: View Product
        - generic [ref=e261]:
          - generic [ref=e262]:
            - generic [ref=e263]:
              - img [ref=e264]
              - heading [level=2] [ref=e265]: Rs. 700
              - paragraph [ref=e266]: Fancy Green Top
              - generic [ref=e267] [cursor=pointer]:
                - generic [ref=e268]: 
                - text: Add to cart
            - generic [ref=e269]:
              - heading [level=2] [ref=e270]: Rs. 700
              - paragraph [ref=e271]: Fancy Green Top
              - generic [ref=e272] [cursor=pointer]:
                - generic [ref=e273]: 
                - text: Add to cart
          - list [ref=e275]:
            - listitem [ref=e276]:
              - link [ref=e277] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e278]: 
                - text: View Product
        - generic [ref=e280]:
          - generic [ref=e281]:
            - generic [ref=e282]:
              - img [ref=e283]
              - heading [level=2] [ref=e284]: Rs. 499
              - paragraph [ref=e285]: Sleeves Printed Top - White
              - generic [ref=e286] [cursor=pointer]:
                - generic [ref=e287]: 
                - text: Add to cart
            - generic [ref=e288]:
              - heading [level=2] [ref=e289]: Rs. 499
              - paragraph [ref=e290]: Sleeves Printed Top - White
              - generic [ref=e291] [cursor=pointer]:
                - generic [ref=e292]: 
                - text: Add to cart
          - list [ref=e294]:
            - listitem [ref=e295]:
              - link [ref=e296] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e297]: 
                - text: View Product
        - generic [ref=e299]:
          - generic [ref=e300]:
            - generic [ref=e301]:
              - img [ref=e302]
              - heading [level=2] [ref=e303]: Rs. 359
              - paragraph [ref=e304]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e305] [cursor=pointer]:
                - generic [ref=e306]: 
                - text: Add to cart
            - generic [ref=e307]:
              - heading [level=2] [ref=e308]: Rs. 359
              - paragraph [ref=e309]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e310] [cursor=pointer]:
                - generic [ref=e311]: 
                - text: Add to cart
          - list [ref=e313]:
            - listitem [ref=e314]:
              - link [ref=e315] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e316]: 
                - text: View Product
        - generic [ref=e318]:
          - generic [ref=e319]:
            - generic [ref=e320]:
              - img [ref=e321]
              - heading [level=2] [ref=e322]: Rs. 278
              - paragraph [ref=e323]: Frozen Tops For Kids
              - generic [ref=e324] [cursor=pointer]:
                - generic [ref=e325]: 
                - text: Add to cart
            - generic [ref=e326]:
              - heading [level=2] [ref=e327]: Rs. 278
              - paragraph [ref=e328]: Frozen Tops For Kids
              - generic [ref=e329] [cursor=pointer]:
                - generic [ref=e330]: 
                - text: Add to cart
          - list [ref=e332]:
            - listitem [ref=e333]:
              - link [ref=e334] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e335]: 
                - text: View Product
        - generic [ref=e337]:
          - generic [ref=e338]:
            - generic [ref=e339]:
              - img [ref=e340]
              - heading [level=2] [ref=e341]: Rs. 679
              - paragraph [ref=e342]: Full Sleeves Top Cherry - Pink
              - generic [ref=e343] [cursor=pointer]:
                - generic [ref=e344]: 
                - text: Add to cart
            - generic [ref=e345]:
              - heading [level=2] [ref=e346]: Rs. 679
              - paragraph [ref=e347]: Full Sleeves Top Cherry - Pink
              - generic [ref=e348] [cursor=pointer]:
                - generic [ref=e349]: 
                - text: Add to cart
          - list [ref=e351]:
            - listitem [ref=e352]:
              - link [ref=e353] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e354]: 
                - text: View Product
        - generic [ref=e356]:
          - generic [ref=e357]:
            - generic [ref=e358]:
              - img [ref=e359]
              - heading [level=2] [ref=e360]: Rs. 315
              - paragraph [ref=e361]: Printed Off Shoulder Top - White
              - generic [ref=e362] [cursor=pointer]:
                - generic [ref=e363]: 
                - text: Add to cart
            - generic [ref=e364]:
              - heading [level=2] [ref=e365]: Rs. 315
              - paragraph [ref=e366]: Printed Off Shoulder Top - White
              - generic [ref=e367] [cursor=pointer]:
                - generic [ref=e368]: 
                - text: Add to cart
          - list [ref=e370]:
            - listitem [ref=e371]:
              - link [ref=e372] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e373]: 
                - text: View Product
        - generic [ref=e375]:
          - generic [ref=e376]:
            - generic [ref=e377]:
              - img [ref=e378]
              - heading [level=2] [ref=e379]: Rs. 478
              - paragraph [ref=e380]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e381] [cursor=pointer]:
                - generic [ref=e382]: 
                - text: Add to cart
            - generic [ref=e383]:
              - heading [level=2] [ref=e384]: Rs. 478
              - paragraph [ref=e385]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e386] [cursor=pointer]:
                - generic [ref=e387]: 
                - text: Add to cart
          - list [ref=e389]:
            - listitem [ref=e390]:
              - link [ref=e391] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e392]: 
                - text: View Product
        - generic [ref=e394]:
          - generic [ref=e395]:
            - generic [ref=e396]:
              - img [ref=e397]
              - heading [level=2] [ref=e398]: Rs. 1200
              - paragraph [ref=e399]: Little Girls Mr. Panda Shirt
              - generic [ref=e400] [cursor=pointer]:
                - generic [ref=e401]: 
                - text: Add to cart
            - generic [ref=e402]:
              - heading [level=2] [ref=e403]: Rs. 1200
              - paragraph [ref=e404]: Little Girls Mr. Panda Shirt
              - generic [ref=e405] [cursor=pointer]:
                - generic [ref=e406]: 
                - text: Add to cart
          - list [ref=e408]:
            - listitem [ref=e409]:
              - link [ref=e410] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e411]: 
                - text: View Product
        - generic [ref=e413]:
          - generic [ref=e414]:
            - generic [ref=e415]:
              - img [ref=e416]
              - heading [level=2] [ref=e417]: Rs. 1050
              - paragraph [ref=e418]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e419] [cursor=pointer]:
                - generic [ref=e420]: 
                - text: Add to cart
            - generic [ref=e421]:
              - heading [level=2] [ref=e422]: Rs. 1050
              - paragraph [ref=e423]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e424] [cursor=pointer]:
                - generic [ref=e425]: 
                - text: Add to cart
          - list [ref=e427]:
            - listitem [ref=e428]:
              - link [ref=e429] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e430]: 
                - text: View Product
        - generic [ref=e432]:
          - generic [ref=e433]:
            - generic [ref=e434]:
              - img [ref=e435]
              - heading [level=2] [ref=e436]: Rs. 1190
              - paragraph [ref=e437]: Cotton Mull Embroidered Dress
              - generic [ref=e438] [cursor=pointer]:
                - generic [ref=e439]: 
                - text: Add to cart
            - generic [ref=e440]:
              - heading [level=2] [ref=e441]: Rs. 1190
              - paragraph [ref=e442]: Cotton Mull Embroidered Dress
              - generic [ref=e443] [cursor=pointer]:
                - generic [ref=e444]: 
                - text: Add to cart
          - list [ref=e446]:
            - listitem [ref=e447]:
              - link [ref=e448] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e449]: 
                - text: View Product
        - generic [ref=e451]:
          - generic [ref=e452]:
            - generic [ref=e453]:
              - img [ref=e454]
              - heading [level=2] [ref=e455]: Rs. 1530
              - paragraph [ref=e456]: Blue Cotton Indie Mickey Dress
              - generic [ref=e457] [cursor=pointer]:
                - generic [ref=e458]: 
                - text: Add to cart
            - generic [ref=e459]:
              - heading [level=2] [ref=e460]: Rs. 1530
              - paragraph [ref=e461]: Blue Cotton Indie Mickey Dress
              - generic [ref=e462] [cursor=pointer]:
                - generic [ref=e463]: 
                - text: Add to cart
          - list [ref=e465]:
            - listitem [ref=e466]:
              - link [ref=e467] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e468]: 
                - text: View Product
        - generic [ref=e470]:
          - generic [ref=e471]:
            - generic [ref=e472]:
              - img [ref=e473]
              - heading [level=2] [ref=e474]: Rs. 1600
              - paragraph [ref=e475]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e476] [cursor=pointer]:
                - generic [ref=e477]: 
                - text: Add to cart
            - generic [ref=e478]:
              - heading [level=2] [ref=e479]: Rs. 1600
              - paragraph [ref=e480]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e481] [cursor=pointer]:
                - generic [ref=e482]: 
                - text: Add to cart
          - list [ref=e484]:
            - listitem [ref=e485]:
              - link [ref=e486] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e487]: 
                - text: View Product
        - generic [ref=e489]:
          - generic [ref=e490]:
            - generic [ref=e491]:
              - img [ref=e492]
              - heading [level=2] [ref=e493]: Rs. 1100
              - paragraph [ref=e494]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e495] [cursor=pointer]:
                - generic [ref=e496]: 
                - text: Add to cart
            - generic [ref=e497]:
              - heading [level=2] [ref=e498]: Rs. 1100
              - paragraph [ref=e499]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e500] [cursor=pointer]:
                - generic [ref=e501]: 
                - text: Add to cart
          - list [ref=e503]:
            - listitem [ref=e504]:
              - link [ref=e505] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e506]: 
                - text: View Product
        - generic [ref=e508]:
          - generic [ref=e509]:
            - generic [ref=e510]:
              - img [ref=e511]
              - heading [level=2] [ref=e512]: Rs. 849
              - paragraph [ref=e513]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e514] [cursor=pointer]:
                - generic [ref=e515]: 
                - text: Add to cart
            - generic [ref=e516]:
              - heading [level=2] [ref=e517]: Rs. 849
              - paragraph [ref=e518]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e519] [cursor=pointer]:
                - generic [ref=e520]: 
                - text: Add to cart
          - list [ref=e522]:
            - listitem [ref=e523]:
              - link [ref=e524] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e525]: 
                - text: View Product
        - generic [ref=e527]:
          - generic [ref=e528]:
            - generic [ref=e529]:
              - img [ref=e530]
              - heading [level=2] [ref=e531]: Rs. 1299
              - paragraph [ref=e532]:
                - text: Pure Cotton V-Neck
                - link [ref=e533] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e534]
                  - text: T-Shirt
              - generic [ref=e536] [cursor=pointer]:
                - generic [ref=e537]: 
                - text: Add to cart
            - generic [ref=e538]:
              - heading [level=2] [ref=e539]: Rs. 1299
              - paragraph [ref=e540]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e541] [cursor=pointer]:
                - generic [ref=e542]: 
                - text: Add to cart
          - list [ref=e544]:
            - listitem [ref=e545]:
              - link [ref=e546] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e547]: 
                - text: View Product
        - generic [ref=e549]:
          - generic [ref=e550]:
            - generic [ref=e551]:
              - img [ref=e552]
              - heading [level=2] [ref=e553]: Rs. 1000
              - paragraph [ref=e554]: Green Side Placket Detail T-Shirt
              - generic [ref=e555] [cursor=pointer]:
                - generic [ref=e556]: 
                - text: Add to cart
            - generic [ref=e557]:
              - heading [level=2] [ref=e558]: Rs. 1000
              - paragraph [ref=e559]: Green Side Placket Detail T-Shirt
              - generic [ref=e560] [cursor=pointer]:
                - generic [ref=e561]: 
                - text: Add to cart
          - list [ref=e563]:
            - listitem [ref=e564]:
              - link [ref=e565] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e566]: 
                - text: View Product
        - generic [ref=e568]:
          - generic [ref=e569]:
            - generic [ref=e570]:
              - img [ref=e571]
              - heading [level=2] [ref=e572]: Rs. 1500
              - paragraph [ref=e573]: Premium Polo T-Shirts
              - generic [ref=e574] [cursor=pointer]:
                - generic [ref=e575]: 
                - text: Add to cart
            - generic [ref=e576]:
              - heading [level=2] [ref=e577]: Rs. 1500
              - paragraph [ref=e578]: Premium Polo T-Shirts
              - generic [ref=e579] [cursor=pointer]:
                - generic [ref=e580]: 
                - text: Add to cart
          - list [ref=e582]:
            - listitem [ref=e583]:
              - link [ref=e584] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e585]: 
                - text: View Product
        - generic [ref=e587]:
          - generic [ref=e588]:
            - generic [ref=e589]:
              - img [ref=e590]
              - heading [level=2] [ref=e591]: Rs. 850
              - paragraph [ref=e592]: Pure Cotton Neon Green Tshirt
              - generic [ref=e593] [cursor=pointer]:
                - generic [ref=e594]: 
                - text: Add to cart
            - generic [ref=e595]:
              - heading [level=2] [ref=e596]: Rs. 850
              - paragraph [ref=e597]: Pure Cotton Neon Green Tshirt
              - generic [ref=e598] [cursor=pointer]:
                - generic [ref=e599]: 
                - text: Add to cart
          - list [ref=e601]:
            - listitem [ref=e602]:
              - link [ref=e603] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e604]: 
                - text: View Product
        - generic [ref=e606]:
          - generic [ref=e607]:
            - generic [ref=e608]:
              - img [ref=e609]
              - heading [level=2] [ref=e610]: Rs. 799
              - paragraph [ref=e611]: Soft Stretch Jeans
              - generic [ref=e612] [cursor=pointer]:
                - generic [ref=e613]: 
                - text: Add to cart
            - generic [ref=e614]:
              - heading [level=2] [ref=e615]: Rs. 799
              - paragraph [ref=e616]: Soft Stretch Jeans
              - generic [ref=e617] [cursor=pointer]:
                - generic [ref=e618]: 
                - text: Add to cart
          - list [ref=e620]:
            - listitem [ref=e621]:
              - link [ref=e622] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e623]: 
                - text: View Product
        - generic [ref=e625]:
          - generic [ref=e626]:
            - generic [ref=e627]:
              - img [ref=e628]
              - heading [level=2] [ref=e629]: Rs. 1200
              - paragraph [ref=e630]: Regular Fit Straight Jeans
              - generic [ref=e631] [cursor=pointer]:
                - generic [ref=e632]: 
                - text: Add to cart
            - generic [ref=e633]:
              - heading [level=2] [ref=e634]: Rs. 1200
              - paragraph [ref=e635]: Regular Fit Straight Jeans
              - generic [ref=e636] [cursor=pointer]:
                - generic [ref=e637]: 
                - text: Add to cart
          - list [ref=e639]:
            - listitem [ref=e640]:
              - link [ref=e641] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e642]: 
                - text: View Product
        - generic [ref=e644]:
          - generic [ref=e645]:
            - generic [ref=e646]:
              - img [ref=e647]
              - heading [level=2] [ref=e648]: Rs. 1400
              - paragraph [ref=e649]: Grunt Blue Slim Fit Jeans
              - generic [ref=e650] [cursor=pointer]:
                - generic [ref=e651]: 
                - text: Add to cart
            - generic [ref=e652]:
              - heading [level=2] [ref=e653]: Rs. 1400
              - paragraph [ref=e654]: Grunt Blue Slim Fit Jeans
              - generic [ref=e655] [cursor=pointer]:
                - generic [ref=e656]: 
                - text: Add to cart
          - list [ref=e658]:
            - listitem [ref=e659]:
              - link [ref=e660] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e661]: 
                - text: View Product
        - generic [ref=e663]:
          - generic [ref=e664]:
            - generic [ref=e665]:
              - img [ref=e666]
              - heading [level=2] [ref=e667]: Rs. 2300
              - paragraph [ref=e668]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e669] [cursor=pointer]:
                - generic [ref=e670]: 
                - text: Add to cart
            - generic [ref=e671]:
              - heading [level=2] [ref=e672]: Rs. 2300
              - paragraph [ref=e673]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e674] [cursor=pointer]:
                - generic [ref=e675]: 
                - text: Add to cart
          - list [ref=e677]:
            - listitem [ref=e678]:
              - link [ref=e679] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e680]: 
                - text: View Product
        - generic [ref=e682]:
          - generic [ref=e683]:
            - generic [ref=e684]:
              - img [ref=e685]
              - heading [level=2] [ref=e686]: Rs. 3000
              - paragraph [ref=e687]: Cotton Silk Hand Block Print Saree
              - generic [ref=e688] [cursor=pointer]:
                - generic [ref=e689]: 
                - text: Add to cart
            - generic [ref=e690]:
              - heading [level=2] [ref=e691]: Rs. 3000
              - paragraph [ref=e692]: Cotton Silk Hand Block Print Saree
              - generic [ref=e693] [cursor=pointer]:
                - generic [ref=e694]: 
                - text: Add to cart
          - list [ref=e696]:
            - listitem [ref=e697]:
              - link [ref=e698] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e699]: 
                - text: View Product
        - generic [ref=e701]:
          - generic [ref=e702]:
            - generic [ref=e703]:
              - img [ref=e704]
              - heading [level=2] [ref=e705]: Rs. 3500
              - paragraph [ref=e706]: Rust Red Linen Saree
              - generic [ref=e707] [cursor=pointer]:
                - generic [ref=e708]: 
                - text: Add to cart
            - generic [ref=e709]:
              - heading [level=2] [ref=e710]: Rs. 3500
              - paragraph [ref=e711]: Rust Red Linen Saree
              - generic [ref=e712] [cursor=pointer]:
                - generic [ref=e713]: 
                - text: Add to cart
          - list [ref=e715]:
            - listitem [ref=e716]:
              - link [ref=e717] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e718]: 
                - text: View Product
        - generic [ref=e720]:
          - generic [ref=e721]:
            - generic [ref=e722]:
              - img [ref=e723]
              - heading [level=2] [ref=e724]: Rs. 5000
              - paragraph [ref=e725]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e726] [cursor=pointer]:
                - generic [ref=e727]: 
                - text: Add to cart
            - generic [ref=e728]:
              - heading [level=2] [ref=e729]: Rs. 5000
              - paragraph [ref=e730]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e731] [cursor=pointer]:
                - generic [ref=e732]: 
                - text: Add to cart
          - list [ref=e734]:
            - listitem [ref=e735]:
              - link [ref=e736] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e737]: 
                - text: View Product
        - generic [ref=e739]:
          - generic [ref=e740]:
            - generic [ref=e741]:
              - img [ref=e742]
              - heading [level=2] [ref=e743]: Rs. 1400
              - paragraph [ref=e744]: Lace Top For Women
              - generic [ref=e745] [cursor=pointer]:
                - generic [ref=e746]: 
                - text: Add to cart
            - generic [ref=e747]:
              - heading [level=2] [ref=e748]: Rs. 1400
              - paragraph [ref=e749]: Lace Top For Women
              - generic [ref=e750] [cursor=pointer]:
                - generic [ref=e751]: 
                - text: Add to cart
          - list [ref=e753]:
            - listitem [ref=e754]:
              - link [ref=e755] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e756]: 
                - text: View Product
        - generic [ref=e758]:
          - generic [ref=e759]:
            - generic [ref=e760]:
              - img [ref=e761]
              - heading [level=2] [ref=e762]: Rs. 1389
              - paragraph [ref=e763]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e764] [cursor=pointer]:
                - generic [ref=e765]: 
                - text: Add to cart
            - generic [ref=e766]:
              - heading [level=2] [ref=e767]: Rs. 1389
              - paragraph [ref=e768]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e769] [cursor=pointer]:
                - generic [ref=e770]: 
                - text: Add to cart
          - list [ref=e772]:
            - listitem [ref=e773]:
              - link [ref=e774] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e775]: 
                - text: View Product
      - generic [ref=e776]:
        - heading [level=2] [ref=e777]: recommended items
        - generic [ref=e778]:
          - generic [ref=e779]:
            - generic [ref=e783]:
              - img [ref=e784]
              - heading [level=2] [ref=e785]: Rs. 500
              - paragraph [ref=e786]: Blue Top
              - generic [ref=e787] [cursor=pointer]:
                - generic [ref=e788]: 
                - text: Add to cart
            - generic [ref=e792]:
              - img [ref=e793]
              - heading [level=2] [ref=e794]: Rs. 400
              - paragraph [ref=e795]: Men Tshirt
              - generic [ref=e796] [cursor=pointer]:
                - generic [ref=e797]: 
                - text: Add to cart
            - generic [ref=e801]:
              - img [ref=e802]
              - heading [level=2] [ref=e803]: Rs. 1000
              - paragraph [ref=e804]: Rs. 1000
              - generic [ref=e805] [cursor=pointer]:
                - generic [ref=e806]: 
                - text: Add to cart
            - text:   
          - link [ref=e807] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e808]: 
          - link [ref=e809] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e810]: 
  - contentinfo [ref=e811]:
    - insertion [ref=e813]
    - generic [ref=e819]:
      - heading [level=2] [ref=e820]: Subscription
      - generic [ref=e821]:
        - textbox [ref=e822]:
          - /placeholder: Your email address
        - button [ref=e823] [cursor=pointer]:
          - generic [ref=e824]: 
        - paragraph [ref=e825]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e829]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=e831]
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
  9  |     await expect(page).toHaveTitle('Automation Exercise - All Products');
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
> 28 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
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