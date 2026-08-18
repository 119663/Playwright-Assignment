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
      - link [ref=e8]:
        - /url: /
        - img [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link [ref=e14]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link [active] [ref=e17]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link [ref=e20]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link [ref=e23]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link [ref=e26]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link [ref=e29]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link [ref=e32]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link [ref=e35]:
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
        - link [ref=e51]:
          - /url: /test_cases
          - button [ref=e52] [cursor=pointer]: Test Cases
        - link [ref=e53]:
          - /url: /api_list
          - button [ref=e54] [cursor=pointer]: APIs list for practice
      - img [ref=e56]
    - link [ref=e57]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link [ref=e59]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading [level=2] [ref=e66]: Category
      - generic [ref=e67]:
        - heading [level=4] [ref=e70]:
          - link [ref=e71]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading [level=4] [ref=e76]:
          - link [ref=e77]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading [level=4] [ref=e82]:
          - link [ref=e83]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - insertion [ref=e87]:
        - generic [ref=e90]:
          - heading [level=2] [ref=e92]: Discover more
          - link [ref=e93] [cursor=pointer]:
            - generic [ref=e94]: API testing tools
            - img [ref=e96]
          - link [ref=e98] [cursor=pointer]:
            - generic [ref=e99]: Automation practice website
            - img [ref=e101]
          - link [ref=e103] [cursor=pointer]:
            - generic [ref=e104]: Software testing tools
            - img [ref=e106]
          - link [ref=e108] [cursor=pointer]:
            - generic [ref=e109]: Factory Automation
            - img [ref=e111]
          - link [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: API testing services
            - img [ref=e116]
          - link [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: Software testing courses
            - img [ref=e121]
          - link [ref=e123] [cursor=pointer]:
            - generic [ref=e124]: Quality Assurance training
            - img [ref=e126]
          - link [ref=e128] [cursor=pointer]:
            - generic [ref=e129]: Website development services
            - img [ref=e131]
      - generic [ref=e133]:
        - heading [level=2] [ref=e134]: Brands
        - list [ref=e136]:
          - listitem [ref=e137]:
            - link [ref=e138]:
              - /url: /brand_products/Polo
              - generic [ref=e139]: (6)
              - text: Polo
          - listitem [ref=e140]:
            - link [ref=e141]:
              - /url: /brand_products/H&M
              - generic [ref=e142]: (5)
              - text: H&M
          - listitem [ref=e143]:
            - link [ref=e144]:
              - /url: /brand_products/Madame
              - generic [ref=e145]: (5)
              - text: Madame
          - listitem [ref=e146]:
            - link [ref=e147]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e148]: (3)
              - text: Mast & Harbour
          - listitem [ref=e149]:
            - link [ref=e150]:
              - /url: /brand_products/Babyhug
              - generic [ref=e151]: (4)
              - text: Babyhug
          - listitem [ref=e152]:
            - link [ref=e153]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e154]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e155]:
            - link [ref=e156]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e157]: (3)
              - text: Kookie Kids
          - listitem [ref=e158]:
            - link [ref=e159]:
              - /url: /brand_products/Biba
              - generic [ref=e160]: (5)
              - text: Biba
    - generic [ref=e161]:
      - generic [ref=e162]:
        - heading [level=2] [ref=e163]: Features Items
        - generic [ref=e165]:
          - generic [ref=e166]:
            - generic [ref=e167]:
              - img [ref=e168]
              - heading [level=2] [ref=e169]: Rs. 500
              - paragraph [ref=e170]: Blue Top
              - generic [ref=e171] [cursor=pointer]:
                - generic [ref=e172]: 
                - text: Add to cart
            - generic [ref=e173]:
              - heading [level=2] [ref=e174]: Rs. 500
              - paragraph [ref=e175]: Blue Top
              - generic [ref=e176] [cursor=pointer]:
                - generic [ref=e177]: 
                - text: Add to cart
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link [ref=e181]:
                - /url: /product_details/1
                - generic [ref=e182]: 
                - text: View Product
        - generic [ref=e184]:
          - generic [ref=e185]:
            - generic [ref=e186]:
              - img [ref=e187]
              - heading [level=2] [ref=e188]: Rs. 400
              - paragraph [ref=e189]:
                - text: Men
                - link [ref=e190] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e191]
                  - text: Tshirt
              - generic [ref=e193] [cursor=pointer]:
                - generic [ref=e194]: 
                - text: Add to cart
            - generic [ref=e195]:
              - heading [level=2] [ref=e196]: Rs. 400
              - paragraph [ref=e197]: Men Tshirt
              - generic [ref=e198] [cursor=pointer]:
                - generic [ref=e199]: 
                - text: Add to cart
          - list [ref=e201]:
            - listitem [ref=e202]:
              - link [ref=e203]:
                - /url: /product_details/2
                - generic [ref=e204]: 
                - text: View Product
        - generic [ref=e206]:
          - generic [ref=e207]:
            - generic [ref=e208]:
              - img [ref=e209]
              - heading [level=2] [ref=e210]: Rs. 1000
              - paragraph [ref=e211]: Sleeveless Dress
              - generic [ref=e212] [cursor=pointer]:
                - generic [ref=e213]: 
                - text: Add to cart
            - generic [ref=e214]:
              - heading [level=2] [ref=e215]: Rs. 1000
              - paragraph [ref=e216]: Sleeveless Dress
              - generic [ref=e217] [cursor=pointer]:
                - generic [ref=e218]: 
                - text: Add to cart
          - list [ref=e220]:
            - listitem [ref=e221]:
              - link [ref=e222]:
                - /url: /product_details/3
                - generic [ref=e223]: 
                - text: View Product
        - generic [ref=e225]:
          - generic [ref=e226]:
            - generic [ref=e227]:
              - img [ref=e228]
              - heading [level=2] [ref=e229]: Rs. 1500
              - paragraph [ref=e230]: Stylish Dress
              - generic [ref=e231] [cursor=pointer]:
                - generic [ref=e232]: 
                - text: Add to cart
            - generic [ref=e233]:
              - heading [level=2] [ref=e234]: Rs. 1500
              - paragraph [ref=e235]: Stylish Dress
              - generic [ref=e236] [cursor=pointer]:
                - generic [ref=e237]: 
                - text: Add to cart
          - list [ref=e239]:
            - listitem [ref=e240]:
              - link [ref=e241]:
                - /url: /product_details/4
                - generic [ref=e242]: 
                - text: View Product
        - generic [ref=e244]:
          - generic [ref=e245]:
            - generic [ref=e246]:
              - img [ref=e247]
              - heading [level=2] [ref=e248]: Rs. 600
              - paragraph [ref=e249]: Winter Top
              - generic [ref=e250] [cursor=pointer]:
                - generic [ref=e251]: 
                - text: Add to cart
            - generic [ref=e252]:
              - heading [level=2] [ref=e253]: Rs. 600
              - paragraph [ref=e254]: Winter Top
              - generic [ref=e255] [cursor=pointer]:
                - generic [ref=e256]: 
                - text: Add to cart
          - list [ref=e258]:
            - listitem [ref=e259]:
              - link [ref=e260]:
                - /url: /product_details/5
                - generic [ref=e261]: 
                - text: View Product
        - generic [ref=e263]:
          - generic [ref=e264]:
            - generic [ref=e265]:
              - img [ref=e266]
              - heading [level=2] [ref=e267]: Rs. 400
              - paragraph [ref=e268]: Summer White Top
              - generic [ref=e269] [cursor=pointer]:
                - generic [ref=e270]: 
                - text: Add to cart
            - generic [ref=e271]:
              - heading [level=2] [ref=e272]: Rs. 400
              - paragraph [ref=e273]: Summer White Top
              - generic [ref=e274] [cursor=pointer]:
                - generic [ref=e275]: 
                - text: Add to cart
          - list [ref=e277]:
            - listitem [ref=e278]:
              - link [ref=e279]:
                - /url: /product_details/6
                - generic [ref=e280]: 
                - text: View Product
        - generic [ref=e282]:
          - generic [ref=e283]:
            - generic [ref=e284]:
              - img [ref=e285]
              - heading [level=2] [ref=e286]: Rs. 1000
              - paragraph [ref=e287]: Madame Top For Women
              - generic [ref=e288] [cursor=pointer]:
                - generic [ref=e289]: 
                - text: Add to cart
            - generic [ref=e290]:
              - heading [level=2] [ref=e291]: Rs. 1000
              - paragraph [ref=e292]: Madame Top For Women
              - generic [ref=e293] [cursor=pointer]:
                - generic [ref=e294]: 
                - text: Add to cart
          - list [ref=e296]:
            - listitem [ref=e297]:
              - link [ref=e298]:
                - /url: /product_details/7
                - generic [ref=e299]: 
                - text: View Product
        - generic [ref=e301]:
          - generic [ref=e302]:
            - generic [ref=e303]:
              - img [ref=e304]
              - heading [level=2] [ref=e305]: Rs. 700
              - paragraph [ref=e306]: Fancy Green Top
              - generic [ref=e307] [cursor=pointer]:
                - generic [ref=e308]: 
                - text: Add to cart
            - generic [ref=e309]:
              - heading [level=2] [ref=e310]: Rs. 700
              - paragraph [ref=e311]: Fancy Green Top
              - generic [ref=e312] [cursor=pointer]:
                - generic [ref=e313]: 
                - text: Add to cart
          - list [ref=e315]:
            - listitem [ref=e316]:
              - link [ref=e317]:
                - /url: /product_details/8
                - generic [ref=e318]: 
                - text: View Product
        - generic [ref=e320]:
          - generic [ref=e321]:
            - generic [ref=e322]:
              - img [ref=e323]
              - heading [level=2] [ref=e324]: Rs. 499
              - paragraph [ref=e325]:
                - text: Sleeves Printed Top - White
                - link [ref=e326] [cursor=pointer]:
                  - img [ref=e328]
                  - text: Internet & Telecom
              - generic [ref=e330] [cursor=pointer]:
                - generic [ref=e331]: 
                - text: Add to cart
            - generic [ref=e332]:
              - heading [level=2] [ref=e333]: Rs. 499
              - paragraph [ref=e334]: Sleeves Printed Top - White
              - generic [ref=e335] [cursor=pointer]:
                - generic [ref=e336]: 
                - text: Add to cart
          - list [ref=e338]:
            - listitem [ref=e339]:
              - link [ref=e340]:
                - /url: /product_details/11
                - generic [ref=e341]: 
                - text: View Product
        - generic [ref=e343]:
          - generic [ref=e344]:
            - generic [ref=e345]:
              - img [ref=e346]
              - heading [level=2] [ref=e347]: Rs. 359
              - paragraph [ref=e348]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link [ref=e349] [cursor=pointer]:
                  - img [ref=e351]
                  - text: Quality Control & Tracking
              - generic [ref=e353] [cursor=pointer]:
                - generic [ref=e354]: 
                - text: Add to cart
            - generic [ref=e355]:
              - heading [level=2] [ref=e356]: Rs. 359
              - paragraph [ref=e357]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e358] [cursor=pointer]:
                - generic [ref=e359]: 
                - text: Add to cart
          - list [ref=e361]:
            - listitem [ref=e362]:
              - link [ref=e363]:
                - /url: /product_details/12
                - generic [ref=e364]: 
                - text: View Product
        - generic [ref=e366]:
          - generic [ref=e367]:
            - generic [ref=e368]:
              - img [ref=e369]
              - heading [level=2] [ref=e370]: Rs. 278
              - paragraph [ref=e371]: Frozen Tops For Kids
              - generic [ref=e372] [cursor=pointer]:
                - generic [ref=e373]: 
                - text: Add to cart
            - generic [ref=e374]:
              - heading [level=2] [ref=e375]: Rs. 278
              - paragraph [ref=e376]: Frozen Tops For Kids
              - generic [ref=e377] [cursor=pointer]:
                - generic [ref=e378]: 
                - text: Add to cart
          - list [ref=e380]:
            - listitem [ref=e381]:
              - link [ref=e382]:
                - /url: /product_details/13
                - generic [ref=e383]: 
                - text: View Product
        - generic [ref=e385]:
          - generic [ref=e386]:
            - generic [ref=e387]:
              - img [ref=e388]
              - heading [level=2] [ref=e389]: Rs. 679
              - paragraph [ref=e390]:
                - text: Full Sleeves Top Cherry - Pink
                - link [ref=e391] [cursor=pointer]:
                  - img [ref=e393]
                  - text: Development Tools
              - generic [ref=e395] [cursor=pointer]:
                - generic [ref=e396]: 
                - text: Add to cart
            - generic [ref=e397]:
              - heading [level=2] [ref=e398]: Rs. 679
              - paragraph [ref=e399]: Full Sleeves Top Cherry - Pink
              - generic [ref=e400] [cursor=pointer]:
                - generic [ref=e401]: 
                - text: Add to cart
          - list [ref=e403]:
            - listitem [ref=e404]:
              - link [ref=e405]:
                - /url: /product_details/14
                - generic [ref=e406]: 
                - text: View Product
        - generic [ref=e408]:
          - generic [ref=e409]:
            - generic [ref=e410]:
              - img [ref=e411]
              - heading [level=2] [ref=e412]: Rs. 315
              - paragraph [ref=e413]:
                - text: Printed Off Shoulder Top - White
                - link [ref=e414] [cursor=pointer]:
                  - img [ref=e416]
                  - text: T-Shirts
              - generic [ref=e418] [cursor=pointer]:
                - generic [ref=e419]: 
                - text: Add to cart
            - generic [ref=e420]:
              - heading [level=2] [ref=e421]: Rs. 315
              - paragraph [ref=e422]: Printed Off Shoulder Top - White
              - generic [ref=e423] [cursor=pointer]:
                - generic [ref=e424]: 
                - text: Add to cart
          - list [ref=e426]:
            - listitem [ref=e427]:
              - link [ref=e428]:
                - /url: /product_details/15
                - generic [ref=e429]: 
                - text: View Product
        - generic [ref=e431]:
          - generic [ref=e432]:
            - generic [ref=e433]:
              - img [ref=e434]
              - heading [level=2] [ref=e435]: Rs. 478
              - paragraph [ref=e436]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e437] [cursor=pointer]:
                - generic [ref=e438]: 
                - text: Add to cart
            - generic [ref=e439]:
              - heading [level=2] [ref=e440]: Rs. 478
              - paragraph [ref=e441]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e442] [cursor=pointer]:
                - generic [ref=e443]: 
                - text: Add to cart
          - list [ref=e445]:
            - listitem [ref=e446]:
              - link [ref=e447]:
                - /url: /product_details/16
                - generic [ref=e448]: 
                - text: View Product
        - generic [ref=e450]:
          - generic [ref=e451]:
            - generic [ref=e452]:
              - img [ref=e453]
              - heading [level=2] [ref=e454]: Rs. 1200
              - paragraph [ref=e455]: Little Girls Mr. Panda Shirt
              - generic [ref=e456] [cursor=pointer]:
                - generic [ref=e457]: 
                - text: Add to cart
            - generic [ref=e458]:
              - heading [level=2] [ref=e459]: Rs. 1200
              - paragraph [ref=e460]: Little Girls Mr. Panda Shirt
              - generic [ref=e461] [cursor=pointer]:
                - generic [ref=e462]: 
                - text: Add to cart
          - list [ref=e464]:
            - listitem [ref=e465]:
              - link [ref=e466]:
                - /url: /product_details/18
                - generic [ref=e467]: 
                - text: View Product
        - generic [ref=e469]:
          - generic [ref=e470]:
            - generic [ref=e471]:
              - img [ref=e472]
              - heading [level=2] [ref=e473]: Rs. 1050
              - paragraph [ref=e474]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e475] [cursor=pointer]:
                - generic [ref=e476]: 
                - text: Add to cart
            - generic [ref=e477]:
              - heading [level=2] [ref=e478]: Rs. 1050
              - paragraph [ref=e479]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e480] [cursor=pointer]:
                - generic [ref=e481]: 
                - text: Add to cart
          - list [ref=e483]:
            - listitem [ref=e484]:
              - link [ref=e485]:
                - /url: /product_details/19
                - generic [ref=e486]: 
                - text: View Product
        - generic [ref=e488]:
          - generic [ref=e489]:
            - generic [ref=e490]:
              - img [ref=e491]
              - heading [level=2] [ref=e492]: Rs. 1190
              - paragraph [ref=e493]: Cotton Mull Embroidered Dress
              - generic [ref=e494] [cursor=pointer]:
                - generic [ref=e495]: 
                - text: Add to cart
            - generic [ref=e496]:
              - heading [level=2] [ref=e497]: Rs. 1190
              - paragraph [ref=e498]: Cotton Mull Embroidered Dress
              - generic [ref=e499] [cursor=pointer]:
                - generic [ref=e500]: 
                - text: Add to cart
          - list [ref=e502]:
            - listitem [ref=e503]:
              - link [ref=e504]:
                - /url: /product_details/20
                - generic [ref=e505]: 
                - text: View Product
        - generic [ref=e507]:
          - generic [ref=e508]:
            - generic [ref=e509]:
              - img [ref=e510]
              - heading [level=2] [ref=e511]: Rs. 1530
              - paragraph [ref=e512]: Blue Cotton Indie Mickey Dress
              - generic [ref=e513] [cursor=pointer]:
                - generic [ref=e514]: 
                - text: Add to cart
            - generic [ref=e515]:
              - heading [level=2] [ref=e516]: Rs. 1530
              - paragraph [ref=e517]: Blue Cotton Indie Mickey Dress
              - generic [ref=e518] [cursor=pointer]:
                - generic [ref=e519]: 
                - text: Add to cart
          - list [ref=e521]:
            - listitem [ref=e522]:
              - link [ref=e523]:
                - /url: /product_details/21
                - generic [ref=e524]: 
                - text: View Product
        - generic [ref=e526]:
          - generic [ref=e527]:
            - generic [ref=e528]:
              - img [ref=e529]
              - heading [level=2] [ref=e530]: Rs. 1600
              - paragraph [ref=e531]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e532] [cursor=pointer]:
                - generic [ref=e533]: 
                - text: Add to cart
            - generic [ref=e534]:
              - heading [level=2] [ref=e535]: Rs. 1600
              - paragraph [ref=e536]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e537] [cursor=pointer]:
                - generic [ref=e538]: 
                - text: Add to cart
          - list [ref=e540]:
            - listitem [ref=e541]:
              - link [ref=e542]:
                - /url: /product_details/22
                - generic [ref=e543]: 
                - text: View Product
        - generic [ref=e545]:
          - generic [ref=e546]:
            - generic [ref=e547]:
              - img [ref=e548]
              - heading [level=2] [ref=e549]: Rs. 1100
              - paragraph [ref=e550]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e551] [cursor=pointer]:
                - generic [ref=e552]: 
                - text: Add to cart
            - generic [ref=e553]:
              - heading [level=2] [ref=e554]: Rs. 1100
              - paragraph [ref=e555]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e556] [cursor=pointer]:
                - generic [ref=e557]: 
                - text: Add to cart
          - list [ref=e559]:
            - listitem [ref=e560]:
              - link [ref=e561]:
                - /url: /product_details/23
                - generic [ref=e562]: 
                - text: View Product
        - generic [ref=e564]:
          - generic [ref=e565]:
            - generic [ref=e566]:
              - img [ref=e567]
              - heading [level=2] [ref=e568]: Rs. 849
              - paragraph [ref=e569]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e570] [cursor=pointer]:
                - generic [ref=e571]: 
                - text: Add to cart
            - generic [ref=e572]:
              - heading [level=2] [ref=e573]: Rs. 849
              - paragraph [ref=e574]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e575] [cursor=pointer]:
                - generic [ref=e576]: 
                - text: Add to cart
          - list [ref=e578]:
            - listitem [ref=e579]:
              - link [ref=e580]:
                - /url: /product_details/24
                - generic [ref=e581]: 
                - text: View Product
        - generic [ref=e583]:
          - generic [ref=e584]:
            - generic [ref=e585]:
              - img [ref=e586]
              - heading [level=2] [ref=e587]: Rs. 1299
              - paragraph [ref=e588]:
                - text: Pure Cotton V-Neck
                - link [ref=e589] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e590]
                  - text: T-Shirt
              - generic [ref=e592] [cursor=pointer]:
                - generic [ref=e593]: 
                - text: Add to cart
            - generic [ref=e594]:
              - heading [level=2] [ref=e595]: Rs. 1299
              - paragraph [ref=e596]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e597] [cursor=pointer]:
                - generic [ref=e598]: 
                - text: Add to cart
          - list [ref=e600]:
            - listitem [ref=e601]:
              - link [ref=e602]:
                - /url: /product_details/28
                - generic [ref=e603]: 
                - text: View Product
        - generic [ref=e605]:
          - generic [ref=e606]:
            - generic [ref=e607]:
              - img [ref=e608]
              - heading [level=2] [ref=e609]: Rs. 1000
              - paragraph [ref=e610]: Green Side Placket Detail T-Shirt
              - generic [ref=e611] [cursor=pointer]:
                - generic [ref=e612]: 
                - text: Add to cart
            - generic [ref=e613]:
              - heading [level=2] [ref=e614]: Rs. 1000
              - paragraph [ref=e615]: Green Side Placket Detail T-Shirt
              - generic [ref=e616] [cursor=pointer]:
                - generic [ref=e617]: 
                - text: Add to cart
          - list [ref=e619]:
            - listitem [ref=e620]:
              - link [ref=e621]:
                - /url: /product_details/29
                - generic [ref=e622]: 
                - text: View Product
        - generic [ref=e624]:
          - generic [ref=e625]:
            - generic [ref=e626]:
              - img [ref=e627]
              - heading [level=2] [ref=e628]: Rs. 1500
              - paragraph [ref=e629]:
                - text: Premium Polo
                - link [ref=e630] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e631]
                  - text: T-Shirts
              - generic [ref=e633] [cursor=pointer]:
                - generic [ref=e634]: 
                - text: Add to cart
            - generic [ref=e635]:
              - heading [level=2] [ref=e636]: Rs. 1500
              - paragraph [ref=e637]: Premium Polo T-Shirts
              - generic [ref=e638] [cursor=pointer]:
                - generic [ref=e639]: 
                - text: Add to cart
          - list [ref=e641]:
            - listitem [ref=e642]:
              - link [ref=e643]:
                - /url: /product_details/30
                - generic [ref=e644]: 
                - text: View Product
        - generic [ref=e646]:
          - generic [ref=e647]:
            - generic [ref=e648]:
              - img [ref=e649]
              - heading [level=2] [ref=e650]: Rs. 850
              - paragraph [ref=e651]: Pure Cotton Neon Green Tshirt
              - generic [ref=e652] [cursor=pointer]:
                - generic [ref=e653]: 
                - text: Add to cart
            - generic [ref=e654]:
              - heading [level=2] [ref=e655]: Rs. 850
              - paragraph [ref=e656]: Pure Cotton Neon Green Tshirt
              - generic [ref=e657] [cursor=pointer]:
                - generic [ref=e658]: 
                - text: Add to cart
          - list [ref=e660]:
            - listitem [ref=e661]:
              - link [ref=e662]:
                - /url: /product_details/31
                - generic [ref=e663]: 
                - text: View Product
        - generic [ref=e665]:
          - generic [ref=e666]:
            - generic [ref=e667]:
              - img [ref=e668]
              - heading [level=2] [ref=e669]: Rs. 799
              - paragraph [ref=e670]: Soft Stretch Jeans
              - generic [ref=e671] [cursor=pointer]:
                - generic [ref=e672]: 
                - text: Add to cart
            - generic [ref=e673]:
              - heading [level=2] [ref=e674]: Rs. 799
              - paragraph [ref=e675]: Soft Stretch Jeans
              - generic [ref=e676] [cursor=pointer]:
                - generic [ref=e677]: 
                - text: Add to cart
          - list [ref=e679]:
            - listitem [ref=e680]:
              - link [ref=e681]:
                - /url: /product_details/33
                - generic [ref=e682]: 
                - text: View Product
        - generic [ref=e684]:
          - generic [ref=e685]:
            - generic [ref=e686]:
              - img [ref=e687]
              - heading [level=2] [ref=e688]: Rs. 1200
              - paragraph [ref=e689]: Regular Fit Straight Jeans
              - generic [ref=e690] [cursor=pointer]:
                - generic [ref=e691]: 
                - text: Add to cart
            - generic [ref=e692]:
              - heading [level=2] [ref=e693]: Rs. 1200
              - paragraph [ref=e694]: Regular Fit Straight Jeans
              - generic [ref=e695] [cursor=pointer]:
                - generic [ref=e696]: 
                - text: Add to cart
          - list [ref=e698]:
            - listitem [ref=e699]:
              - link [ref=e700]:
                - /url: /product_details/35
                - generic [ref=e701]: 
                - text: View Product
        - generic [ref=e703]:
          - generic [ref=e704]:
            - generic [ref=e705]:
              - img [ref=e706]
              - heading [level=2] [ref=e707]: Rs. 1400
              - paragraph [ref=e708]: Grunt Blue Slim Fit Jeans
              - generic [ref=e709] [cursor=pointer]:
                - generic [ref=e710]: 
                - text: Add to cart
            - generic [ref=e711]:
              - heading [level=2] [ref=e712]: Rs. 1400
              - paragraph [ref=e713]: Grunt Blue Slim Fit Jeans
              - generic [ref=e714] [cursor=pointer]:
                - generic [ref=e715]: 
                - text: Add to cart
          - list [ref=e717]:
            - listitem [ref=e718]:
              - link [ref=e719]:
                - /url: /product_details/37
                - generic [ref=e720]: 
                - text: View Product
        - generic [ref=e722]:
          - generic [ref=e723]:
            - generic [ref=e724]:
              - img [ref=e725]
              - heading [level=2] [ref=e726]: Rs. 2300
              - paragraph [ref=e727]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e728] [cursor=pointer]:
                - generic [ref=e729]: 
                - text: Add to cart
            - generic [ref=e730]:
              - heading [level=2] [ref=e731]: Rs. 2300
              - paragraph [ref=e732]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e733] [cursor=pointer]:
                - generic [ref=e734]: 
                - text: Add to cart
          - list [ref=e736]:
            - listitem [ref=e737]:
              - link [ref=e738]:
                - /url: /product_details/38
                - generic [ref=e739]: 
                - text: View Product
        - generic [ref=e741]:
          - generic [ref=e742]:
            - generic [ref=e743]:
              - img [ref=e744]
              - heading [level=2] [ref=e745]: Rs. 3000
              - paragraph [ref=e746]: Cotton Silk Hand Block Print Saree
              - generic [ref=e747] [cursor=pointer]:
                - generic [ref=e748]: 
                - text: Add to cart
            - generic [ref=e749]:
              - heading [level=2] [ref=e750]: Rs. 3000
              - paragraph [ref=e751]: Cotton Silk Hand Block Print Saree
              - generic [ref=e752] [cursor=pointer]:
                - generic [ref=e753]: 
                - text: Add to cart
          - list [ref=e755]:
            - listitem [ref=e756]:
              - link [ref=e757]:
                - /url: /product_details/39
                - generic [ref=e758]: 
                - text: View Product
        - generic [ref=e760]:
          - generic [ref=e761]:
            - generic [ref=e762]:
              - img [ref=e763]
              - heading [level=2] [ref=e764]: Rs. 3500
              - paragraph [ref=e765]: Rust Red Linen Saree
              - generic [ref=e766] [cursor=pointer]:
                - generic [ref=e767]: 
                - text: Add to cart
            - generic [ref=e768]:
              - heading [level=2] [ref=e769]: Rs. 3500
              - paragraph [ref=e770]: Rust Red Linen Saree
              - generic [ref=e771] [cursor=pointer]:
                - generic [ref=e772]: 
                - text: Add to cart
          - list [ref=e774]:
            - listitem [ref=e775]:
              - link [ref=e776]:
                - /url: /product_details/40
                - generic [ref=e777]: 
                - text: View Product
        - generic [ref=e779]:
          - generic [ref=e780]:
            - generic [ref=e781]:
              - img [ref=e782]
              - heading [level=2] [ref=e783]: Rs. 5000
              - paragraph [ref=e784]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e785] [cursor=pointer]:
                - generic [ref=e786]: 
                - text: Add to cart
            - generic [ref=e787]:
              - heading [level=2] [ref=e788]: Rs. 5000
              - paragraph [ref=e789]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e790] [cursor=pointer]:
                - generic [ref=e791]: 
                - text: Add to cart
          - list [ref=e793]:
            - listitem [ref=e794]:
              - link [ref=e795]:
                - /url: /product_details/41
                - generic [ref=e796]: 
                - text: View Product
        - generic [ref=e798]:
          - generic [ref=e799]:
            - generic [ref=e800]:
              - img [ref=e801]
              - heading [level=2] [ref=e802]: Rs. 1400
              - paragraph [ref=e803]: Lace Top For Women
              - generic [ref=e804] [cursor=pointer]:
                - generic [ref=e805]: 
                - text: Add to cart
            - generic [ref=e806]:
              - heading [level=2] [ref=e807]: Rs. 1400
              - paragraph [ref=e808]: Lace Top For Women
              - generic [ref=e809] [cursor=pointer]:
                - generic [ref=e810]: 
                - text: Add to cart
          - list [ref=e812]:
            - listitem [ref=e813]:
              - link [ref=e814]:
                - /url: /product_details/42
                - generic [ref=e815]: 
                - text: View Product
        - generic [ref=e817]:
          - generic [ref=e818]:
            - generic [ref=e819]:
              - img [ref=e820]
              - heading [level=2] [ref=e821]: Rs. 1389
              - paragraph [ref=e822]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link [ref=e823] [cursor=pointer]:
                  - img [ref=e825]
                  - text: T-Shirts
              - generic [ref=e827] [cursor=pointer]:
                - generic [ref=e828]: 
                - text: Add to cart
            - generic [ref=e829]:
              - heading [level=2] [ref=e830]: Rs. 1389
              - paragraph [ref=e831]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e832] [cursor=pointer]:
                - generic [ref=e833]: 
                - text: Add to cart
          - list [ref=e835]:
            - listitem [ref=e836]:
              - link [ref=e837]:
                - /url: /product_details/43
                - generic [ref=e838]: 
                - text: View Product
      - generic [ref=e839]:
        - heading [level=2] [ref=e840]: recommended items
        - generic [ref=e841]:
          - generic [ref=e842]:
            - generic [ref=e846]:
              - img [ref=e847]
              - heading [level=2] [ref=e848]: Rs. 500
              - paragraph [ref=e849]: Blue Top
              - generic [ref=e850] [cursor=pointer]:
                - generic [ref=e851]: 
                - text: Add to cart
            - generic [ref=e855]:
              - img [ref=e856]
              - heading [level=2] [ref=e857]: Rs. 400
              - paragraph [ref=e858]: Men Tshirt
              - generic [ref=e859] [cursor=pointer]:
                - generic [ref=e860]: 
                - text: Add to cart
            - generic [ref=e864]:
              - img [ref=e865]
              - heading [level=2] [ref=e866]: Rs. 1000
              - paragraph [ref=e867]: Rs. 1000
              - generic [ref=e868] [cursor=pointer]:
                - generic [ref=e869]: 
                - text: Add to cart
            - text:   
          - link [ref=e870]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e871]: 
          - link [ref=e872]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e873]: 
  - insertion [ref=e875]
  - contentinfo [ref=e877]:
    - generic [ref=e882]:
      - heading [level=2] [ref=e883]: Subscription
      - generic [ref=e884]:
        - textbox [ref=e885]:
          - /placeholder: Your email address
        - button [ref=e886] [cursor=pointer]:
          - generic [ref=e887]: 
        - paragraph [ref=e888]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e892]: Copyright © 2021 All rights reserved
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