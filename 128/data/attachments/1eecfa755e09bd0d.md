# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/products.spec.ts >> Add to cart from product details page
- Location: tests/ui/products.spec.ts:33:5

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
          - link [ref=e17]:
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
            - generic [ref=e94]: Automation skills training
            - img [ref=e96]
          - link [ref=e98] [cursor=pointer]:
            - generic [ref=e99]: Automation tools guide
            - img [ref=e101]
          - link [ref=e103] [cursor=pointer]:
            - generic [ref=e104]: Test automation services
            - img [ref=e106]
          - link [ref=e108] [cursor=pointer]:
            - generic [ref=e109]: Automation engineer training
            - img [ref=e111]
          - link [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: Software testing tutorials
            - img [ref=e116]
          - link [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: API testing practice
            - img [ref=e121]
          - link [ref=e123] [cursor=pointer]:
            - generic [ref=e124]: Source Robotics
            - img [ref=e126]
          - link [ref=e128] [cursor=pointer]:
            - generic [ref=e129]: QA engineer resources
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
              - paragraph [ref=e211]:
                - text: Sleeveless
                - link [ref=e212] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e213]
                  - text: Dress
              - generic [ref=e215] [cursor=pointer]:
                - generic [ref=e216]: 
                - text: Add to cart
            - generic [ref=e217]:
              - heading [level=2] [ref=e218]: Rs. 1000
              - paragraph [ref=e219]: Sleeveless Dress
              - generic [ref=e220] [cursor=pointer]:
                - generic [ref=e221]: 
                - text: Add to cart
          - list [ref=e223]:
            - listitem [ref=e224]:
              - link [ref=e225]:
                - /url: /product_details/3
                - generic [ref=e226]: 
                - text: View Product
        - generic [ref=e228]:
          - generic [ref=e229]:
            - generic [ref=e230]:
              - img [ref=e231]
              - heading [level=2] [ref=e232]: Rs. 1500
              - paragraph [ref=e233]: Stylish Dress
              - generic [ref=e234] [cursor=pointer]:
                - generic [ref=e235]: 
                - text: Add to cart
            - generic [ref=e236]:
              - heading [level=2] [ref=e237]: Rs. 1500
              - paragraph [ref=e238]: Stylish Dress
              - generic [ref=e239] [cursor=pointer]:
                - generic [ref=e240]: 
                - text: Add to cart
          - list [ref=e242]:
            - listitem [ref=e243]:
              - link [ref=e244]:
                - /url: /product_details/4
                - generic [ref=e245]: 
                - text: View Product
        - generic [ref=e247]:
          - generic [ref=e248]:
            - generic [ref=e249]:
              - img [ref=e250]
              - heading [level=2] [ref=e251]: Rs. 600
              - paragraph [ref=e252]: Winter Top
              - generic [ref=e253] [cursor=pointer]:
                - generic [ref=e254]: 
                - text: Add to cart
            - generic [ref=e255]:
              - heading [level=2] [ref=e256]: Rs. 600
              - paragraph [ref=e257]: Winter Top
              - generic [ref=e258] [cursor=pointer]:
                - generic [ref=e259]: 
                - text: Add to cart
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link [ref=e263]:
                - /url: /product_details/5
                - generic [ref=e264]: 
                - text: View Product
        - generic [ref=e266]:
          - generic [ref=e267]:
            - generic [ref=e268]:
              - img [ref=e269]
              - heading [level=2] [ref=e270]: Rs. 400
              - paragraph [ref=e271]: Summer White Top
              - generic [ref=e272] [cursor=pointer]:
                - generic [ref=e273]: 
                - text: Add to cart
            - generic [ref=e274]:
              - heading [level=2] [ref=e275]: Rs. 400
              - paragraph [ref=e276]: Summer White Top
              - generic [ref=e277] [cursor=pointer]:
                - generic [ref=e278]: 
                - text: Add to cart
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link [ref=e282]:
                - /url: /product_details/6
                - generic [ref=e283]: 
                - text: View Product
        - generic [ref=e285]:
          - generic [ref=e286]:
            - generic [ref=e287]:
              - img [ref=e288]
              - heading [level=2] [ref=e289]: Rs. 1000
              - paragraph [ref=e290]: Madame Top For Women
              - generic [ref=e291] [cursor=pointer]:
                - generic [ref=e292]: 
                - text: Add to cart
            - generic [ref=e293]:
              - heading [level=2] [ref=e294]: Rs. 1000
              - paragraph [ref=e295]: Madame Top For Women
              - generic [ref=e296] [cursor=pointer]:
                - generic [ref=e297]: 
                - text: Add to cart
          - list [ref=e299]:
            - listitem [ref=e300]:
              - link [ref=e301]:
                - /url: /product_details/7
                - generic [ref=e302]: 
                - text: View Product
        - generic [ref=e304]:
          - generic [ref=e305]:
            - generic [ref=e306]:
              - img [ref=e307]
              - heading [level=2] [ref=e308]: Rs. 700
              - paragraph [ref=e309]: Fancy Green Top
              - generic [ref=e310] [cursor=pointer]:
                - generic [ref=e311]: 
                - text: Add to cart
            - generic [ref=e312]:
              - heading [level=2] [ref=e313]: Rs. 700
              - paragraph [ref=e314]: Fancy Green Top
              - generic [ref=e315] [cursor=pointer]:
                - generic [ref=e316]: 
                - text: Add to cart
          - list [ref=e318]:
            - listitem [ref=e319]:
              - link [ref=e320]:
                - /url: /product_details/8
                - generic [ref=e321]: 
                - text: View Product
        - generic [ref=e323]:
          - generic [ref=e324]:
            - generic [ref=e325]:
              - img [ref=e326]
              - heading [level=2] [ref=e327]: Rs. 499
              - paragraph [ref=e328]: Sleeves Printed Top - White
              - generic [ref=e329] [cursor=pointer]:
                - generic [ref=e330]: 
                - text: Add to cart
            - generic [ref=e331]:
              - heading [level=2] [ref=e332]: Rs. 499
              - paragraph [ref=e333]: Sleeves Printed Top - White
              - generic [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: 
                - text: Add to cart
          - list [ref=e337]:
            - listitem [ref=e338]:
              - link [ref=e339]:
                - /url: /product_details/11
                - generic [ref=e340]: 
                - text: View Product
        - generic [ref=e342]:
          - generic [ref=e343]:
            - generic [ref=e344]:
              - img [ref=e345]
              - heading [level=2] [ref=e346]: Rs. 359
              - paragraph [ref=e347]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e348] [cursor=pointer]:
                - generic [ref=e349]: 
                - text: Add to cart
            - generic [ref=e350]:
              - heading [level=2] [ref=e351]: Rs. 359
              - paragraph [ref=e352]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e353] [cursor=pointer]:
                - generic [ref=e354]: 
                - text: Add to cart
          - list [ref=e356]:
            - listitem [ref=e357]:
              - link [ref=e358]:
                - /url: /product_details/12
                - generic [ref=e359]: 
                - text: View Product
        - generic [ref=e361]:
          - generic [ref=e362]:
            - generic [ref=e363]:
              - img [ref=e364]
              - heading [level=2] [ref=e365]: Rs. 278
              - paragraph [ref=e366]: Frozen Tops For Kids
              - generic [ref=e367] [cursor=pointer]:
                - generic [ref=e368]: 
                - text: Add to cart
            - generic [ref=e369]:
              - heading [level=2] [ref=e370]: Rs. 278
              - paragraph [ref=e371]: Frozen Tops For Kids
              - generic [ref=e372] [cursor=pointer]:
                - generic [ref=e373]: 
                - text: Add to cart
          - list [ref=e375]:
            - listitem [ref=e376]:
              - link [ref=e377]:
                - /url: /product_details/13
                - generic [ref=e378]: 
                - text: View Product
        - generic [ref=e380]:
          - generic [ref=e381]:
            - generic [ref=e382]:
              - img [ref=e383]
              - heading [level=2] [ref=e384]: Rs. 679
              - paragraph [ref=e385]: Full Sleeves Top Cherry - Pink
              - generic [ref=e386] [cursor=pointer]:
                - generic [ref=e387]: 
                - text: Add to cart
            - generic [ref=e388]:
              - heading [level=2] [ref=e389]: Rs. 679
              - paragraph [ref=e390]: Full Sleeves Top Cherry - Pink
              - generic [ref=e391] [cursor=pointer]:
                - generic [ref=e392]: 
                - text: Add to cart
          - list [ref=e394]:
            - listitem [ref=e395]:
              - link [ref=e396]:
                - /url: /product_details/14
                - generic [ref=e397]: 
                - text: View Product
        - generic [ref=e399]:
          - generic [ref=e400]:
            - generic [ref=e401]:
              - img [ref=e402]
              - heading [level=2] [ref=e403]: Rs. 315
              - paragraph [ref=e404]: Printed Off Shoulder Top - White
              - generic [ref=e405] [cursor=pointer]:
                - generic [ref=e406]: 
                - text: Add to cart
            - generic [ref=e407]:
              - heading [level=2] [ref=e408]: Rs. 315
              - paragraph [ref=e409]: Printed Off Shoulder Top - White
              - generic [ref=e410] [cursor=pointer]:
                - generic [ref=e411]: 
                - text: Add to cart
          - list [ref=e413]:
            - listitem [ref=e414]:
              - link [ref=e415]:
                - /url: /product_details/15
                - generic [ref=e416]: 
                - text: View Product
        - generic [ref=e418]:
          - generic [ref=e419]:
            - generic [ref=e420]:
              - img [ref=e421]
              - heading [level=2] [ref=e422]: Rs. 478
              - paragraph [ref=e423]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e424] [cursor=pointer]:
                - generic [ref=e425]: 
                - text: Add to cart
            - generic [ref=e426]:
              - heading [level=2] [ref=e427]: Rs. 478
              - paragraph [ref=e428]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e429] [cursor=pointer]:
                - generic [ref=e430]: 
                - text: Add to cart
          - list [ref=e432]:
            - listitem [ref=e433]:
              - link [ref=e434]:
                - /url: /product_details/16
                - generic [ref=e435]: 
                - text: View Product
        - generic [ref=e437]:
          - generic [ref=e438]:
            - generic [ref=e439]:
              - img [ref=e440]
              - heading [level=2] [ref=e441]: Rs. 1200
              - paragraph [ref=e442]: Little Girls Mr. Panda Shirt
              - generic [ref=e443] [cursor=pointer]:
                - generic [ref=e444]: 
                - text: Add to cart
            - generic [ref=e445]:
              - heading [level=2] [ref=e446]: Rs. 1200
              - paragraph [ref=e447]: Little Girls Mr. Panda Shirt
              - generic [ref=e448] [cursor=pointer]:
                - generic [ref=e449]: 
                - text: Add to cart
          - list [ref=e451]:
            - listitem [ref=e452]:
              - link [ref=e453]:
                - /url: /product_details/18
                - generic [ref=e454]: 
                - text: View Product
        - generic [ref=e456]:
          - generic [ref=e457]:
            - generic [ref=e458]:
              - img [ref=e459]
              - heading [level=2] [ref=e460]: Rs. 1050
              - paragraph [ref=e461]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e462] [cursor=pointer]:
                - generic [ref=e463]: 
                - text: Add to cart
            - generic [ref=e464]:
              - heading [level=2] [ref=e465]: Rs. 1050
              - paragraph [ref=e466]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e467] [cursor=pointer]:
                - generic [ref=e468]: 
                - text: Add to cart
          - list [ref=e470]:
            - listitem [ref=e471]:
              - link [ref=e472]:
                - /url: /product_details/19
                - generic [ref=e473]: 
                - text: View Product
        - generic [ref=e475]:
          - generic [ref=e476]:
            - generic [ref=e477]:
              - img [ref=e478]
              - heading [level=2] [ref=e479]: Rs. 1190
              - paragraph [ref=e480]: Cotton Mull Embroidered Dress
              - generic [ref=e481] [cursor=pointer]:
                - generic [ref=e482]: 
                - text: Add to cart
            - generic [ref=e483]:
              - heading [level=2] [ref=e484]: Rs. 1190
              - paragraph [ref=e485]: Cotton Mull Embroidered Dress
              - generic [ref=e486] [cursor=pointer]:
                - generic [ref=e487]: 
                - text: Add to cart
          - list [ref=e489]:
            - listitem [ref=e490]:
              - link [ref=e491]:
                - /url: /product_details/20
                - generic [ref=e492]: 
                - text: View Product
        - generic [ref=e494]:
          - generic [ref=e495]:
            - generic [ref=e496]:
              - img [ref=e497]
              - heading [level=2] [ref=e498]: Rs. 1530
              - paragraph [ref=e499]: Blue Cotton Indie Mickey Dress
              - generic [ref=e500] [cursor=pointer]:
                - generic [ref=e501]: 
                - text: Add to cart
            - generic [ref=e502]:
              - heading [level=2] [ref=e503]: Rs. 1530
              - paragraph [ref=e504]: Blue Cotton Indie Mickey Dress
              - generic [ref=e505] [cursor=pointer]:
                - generic [ref=e506]: 
                - text: Add to cart
          - list [ref=e508]:
            - listitem [ref=e509]:
              - link [ref=e510]:
                - /url: /product_details/21
                - generic [ref=e511]: 
                - text: View Product
        - generic [ref=e513]:
          - generic [ref=e514]:
            - generic [ref=e515]:
              - img [ref=e516]
              - heading [level=2] [ref=e517]: Rs. 1600
              - paragraph [ref=e518]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e519] [cursor=pointer]:
                - generic [ref=e520]: 
                - text: Add to cart
            - generic [ref=e521]:
              - heading [level=2] [ref=e522]: Rs. 1600
              - paragraph [ref=e523]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e524] [cursor=pointer]:
                - generic [ref=e525]: 
                - text: Add to cart
          - list [ref=e527]:
            - listitem [ref=e528]:
              - link [ref=e529]:
                - /url: /product_details/22
                - generic [ref=e530]: 
                - text: View Product
        - generic [ref=e532]:
          - generic [ref=e533]:
            - generic [ref=e534]:
              - img [ref=e535]
              - heading [level=2] [ref=e536]: Rs. 1100
              - paragraph [ref=e537]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e538] [cursor=pointer]:
                - generic [ref=e539]: 
                - text: Add to cart
            - generic [ref=e540]:
              - heading [level=2] [ref=e541]: Rs. 1100
              - paragraph [ref=e542]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e543] [cursor=pointer]:
                - generic [ref=e544]: 
                - text: Add to cart
          - list [ref=e546]:
            - listitem [ref=e547]:
              - link [ref=e548]:
                - /url: /product_details/23
                - generic [ref=e549]: 
                - text: View Product
        - generic [ref=e551]:
          - generic [ref=e552]:
            - generic [ref=e553]:
              - img [ref=e554]
              - heading [level=2] [ref=e555]: Rs. 849
              - paragraph [ref=e556]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e557] [cursor=pointer]:
                - generic [ref=e558]: 
                - text: Add to cart
            - generic [ref=e559]:
              - heading [level=2] [ref=e560]: Rs. 849
              - paragraph [ref=e561]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e562] [cursor=pointer]:
                - generic [ref=e563]: 
                - text: Add to cart
          - list [ref=e565]:
            - listitem [ref=e566]:
              - link [ref=e567]:
                - /url: /product_details/24
                - generic [ref=e568]: 
                - text: View Product
        - generic [ref=e570]:
          - generic [ref=e571]:
            - generic [ref=e572]:
              - img [ref=e573]
              - heading [level=2] [ref=e574]: Rs. 1299
              - paragraph [ref=e575]:
                - text: Pure Cotton V-Neck
                - link [ref=e576] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e577]
                  - text: T-Shirt
                - link [ref=e579] [cursor=pointer]:
                  - img [ref=e581]
                  - text: T-Shirts
              - generic [ref=e583] [cursor=pointer]:
                - generic [ref=e584]: 
                - text: Add to cart
            - generic [ref=e585]:
              - heading [level=2] [ref=e586]: Rs. 1299
              - paragraph [ref=e587]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e588] [cursor=pointer]:
                - generic [ref=e589]: 
                - text: Add to cart
          - list [ref=e591]:
            - listitem [ref=e592]:
              - link [ref=e593]:
                - /url: /product_details/28
                - generic [ref=e594]: 
                - text: View Product
        - generic [ref=e596]:
          - generic [ref=e597]:
            - generic [ref=e598]:
              - img [ref=e599]
              - heading [level=2] [ref=e600]: Rs. 1000
              - paragraph [ref=e601]: Green Side Placket Detail T-Shirt
              - generic [ref=e602] [cursor=pointer]:
                - generic [ref=e603]: 
                - text: Add to cart
            - generic [ref=e604]:
              - heading [level=2] [ref=e605]: Rs. 1000
              - paragraph [ref=e606]: Green Side Placket Detail T-Shirt
              - generic [ref=e607] [cursor=pointer]:
                - generic [ref=e608]: 
                - text: Add to cart
          - list [ref=e610]:
            - listitem [ref=e611]:
              - link [ref=e612]:
                - /url: /product_details/29
                - generic [ref=e613]: 
                - text: View Product
        - generic [ref=e615]:
          - generic [ref=e616]:
            - generic [ref=e617]:
              - img [ref=e618]
              - heading [level=2] [ref=e619]: Rs. 1500
              - paragraph [ref=e620]: Premium Polo T-Shirts
              - generic [ref=e621] [cursor=pointer]:
                - generic [ref=e622]: 
                - text: Add to cart
            - generic [ref=e623]:
              - heading [level=2] [ref=e624]: Rs. 1500
              - paragraph [ref=e625]: Premium Polo T-Shirts
              - generic [ref=e626] [cursor=pointer]:
                - generic [ref=e627]: 
                - text: Add to cart
          - list [ref=e629]:
            - listitem [ref=e630]:
              - link [ref=e631]:
                - /url: /product_details/30
                - generic [ref=e632]: 
                - text: View Product
        - generic [ref=e634]:
          - generic [ref=e635]:
            - generic [ref=e636]:
              - img [ref=e637]
              - heading [level=2] [ref=e638]: Rs. 850
              - paragraph [ref=e639]: Pure Cotton Neon Green Tshirt
              - generic [ref=e640] [cursor=pointer]:
                - generic [ref=e641]: 
                - text: Add to cart
            - generic [ref=e642]:
              - heading [level=2] [ref=e643]: Rs. 850
              - paragraph [ref=e644]: Pure Cotton Neon Green Tshirt
              - generic [ref=e645] [cursor=pointer]:
                - generic [ref=e646]: 
                - text: Add to cart
          - list [ref=e648]:
            - listitem [ref=e649]:
              - link [ref=e650]:
                - /url: /product_details/31
                - generic [ref=e651]: 
                - text: View Product
        - generic [ref=e653]:
          - generic [ref=e654]:
            - generic [ref=e655]:
              - img [ref=e656]
              - heading [level=2] [ref=e657]: Rs. 799
              - paragraph [ref=e658]: Soft Stretch Jeans
              - generic [ref=e659] [cursor=pointer]:
                - generic [ref=e660]: 
                - text: Add to cart
            - generic [ref=e661]:
              - heading [level=2] [ref=e662]: Rs. 799
              - paragraph [ref=e663]: Soft Stretch Jeans
              - generic [ref=e664] [cursor=pointer]:
                - generic [ref=e665]: 
                - text: Add to cart
          - list [ref=e667]:
            - listitem [ref=e668]:
              - link [ref=e669]:
                - /url: /product_details/33
                - generic [ref=e670]: 
                - text: View Product
        - generic [ref=e672]:
          - generic [ref=e673]:
            - generic [ref=e674]:
              - img [ref=e675]
              - heading [level=2] [ref=e676]: Rs. 1200
              - paragraph [ref=e677]: Regular Fit Straight Jeans
              - generic [ref=e678] [cursor=pointer]:
                - generic [ref=e679]: 
                - text: Add to cart
            - generic [ref=e680]:
              - heading [level=2] [ref=e681]: Rs. 1200
              - paragraph [ref=e682]: Regular Fit Straight Jeans
              - generic [ref=e683] [cursor=pointer]:
                - generic [ref=e684]: 
                - text: Add to cart
          - list [ref=e686]:
            - listitem [ref=e687]:
              - link [ref=e688]:
                - /url: /product_details/35
                - generic [ref=e689]: 
                - text: View Product
        - generic [ref=e691]:
          - generic [ref=e692]:
            - generic [ref=e693]:
              - img [ref=e694]
              - heading [level=2] [ref=e695]: Rs. 1400
              - paragraph [ref=e696]: Grunt Blue Slim Fit Jeans
              - generic [ref=e697] [cursor=pointer]:
                - generic [ref=e698]: 
                - text: Add to cart
            - generic [ref=e699]:
              - heading [level=2] [ref=e700]: Rs. 1400
              - paragraph [ref=e701]: Grunt Blue Slim Fit Jeans
              - generic [ref=e702] [cursor=pointer]:
                - generic [ref=e703]: 
                - text: Add to cart
          - list [ref=e705]:
            - listitem [ref=e706]:
              - link [ref=e707]:
                - /url: /product_details/37
                - generic [ref=e708]: 
                - text: View Product
        - generic [ref=e710]:
          - generic [ref=e711]:
            - generic [ref=e712]:
              - img [ref=e713]
              - heading [level=2] [ref=e714]: Rs. 2300
              - paragraph [ref=e715]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e716] [cursor=pointer]:
                - generic [ref=e717]: 
                - text: Add to cart
            - generic [ref=e718]:
              - heading [level=2] [ref=e719]: Rs. 2300
              - paragraph [ref=e720]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e721] [cursor=pointer]:
                - generic [ref=e722]: 
                - text: Add to cart
          - list [ref=e724]:
            - listitem [ref=e725]:
              - link [ref=e726]:
                - /url: /product_details/38
                - generic [ref=e727]: 
                - text: View Product
        - generic [ref=e729]:
          - generic [ref=e730]:
            - generic [ref=e731]:
              - img [ref=e732]
              - heading [level=2] [ref=e733]: Rs. 3000
              - paragraph [ref=e734]: Cotton Silk Hand Block Print Saree
              - generic [ref=e735] [cursor=pointer]:
                - generic [ref=e736]: 
                - text: Add to cart
            - generic [ref=e737]:
              - heading [level=2] [ref=e738]: Rs. 3000
              - paragraph [ref=e739]: Cotton Silk Hand Block Print Saree
              - generic [ref=e740] [cursor=pointer]:
                - generic [ref=e741]: 
                - text: Add to cart
          - list [ref=e743]:
            - listitem [ref=e744]:
              - link [ref=e745]:
                - /url: /product_details/39
                - generic [ref=e746]: 
                - text: View Product
        - generic [ref=e748]:
          - generic [ref=e749]:
            - generic [ref=e750]:
              - img [ref=e751]
              - heading [level=2] [ref=e752]: Rs. 3500
              - paragraph [ref=e753]: Rust Red Linen Saree
              - generic [ref=e754] [cursor=pointer]:
                - generic [ref=e755]: 
                - text: Add to cart
            - generic [ref=e756]:
              - heading [level=2] [ref=e757]: Rs. 3500
              - paragraph [ref=e758]: Rust Red Linen Saree
              - generic [ref=e759] [cursor=pointer]:
                - generic [ref=e760]: 
                - text: Add to cart
          - list [ref=e762]:
            - listitem [ref=e763]:
              - link [ref=e764]:
                - /url: /product_details/40
                - generic [ref=e765]: 
                - text: View Product
        - generic [ref=e767]:
          - generic [ref=e768]:
            - generic [ref=e769]:
              - img [ref=e770]
              - heading [level=2] [ref=e771]: Rs. 5000
              - paragraph [ref=e772]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e773] [cursor=pointer]:
                - generic [ref=e774]: 
                - text: Add to cart
            - generic [ref=e775]:
              - heading [level=2] [ref=e776]: Rs. 5000
              - paragraph [ref=e777]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e778] [cursor=pointer]:
                - generic [ref=e779]: 
                - text: Add to cart
          - list [ref=e781]:
            - listitem [ref=e782]:
              - link [ref=e783]:
                - /url: /product_details/41
                - generic [ref=e784]: 
                - text: View Product
        - generic [ref=e786]:
          - generic [ref=e787]:
            - generic [ref=e788]:
              - img [ref=e789]
              - heading [level=2] [ref=e790]: Rs. 1400
              - paragraph [ref=e791]: Lace Top For Women
              - generic [ref=e792] [cursor=pointer]:
                - generic [ref=e793]: 
                - text: Add to cart
            - generic [ref=e794]:
              - heading [level=2] [ref=e795]: Rs. 1400
              - paragraph [ref=e796]: Lace Top For Women
              - generic [ref=e797] [cursor=pointer]:
                - generic [ref=e798]: 
                - text: Add to cart
          - list [ref=e800]:
            - listitem [ref=e801]:
              - link [ref=e802]:
                - /url: /product_details/42
                - generic [ref=e803]: 
                - text: View Product
        - generic [ref=e805]:
          - generic [ref=e806]:
            - generic [ref=e807]:
              - img [ref=e808]
              - heading [level=2] [ref=e809]: Rs. 1389
              - paragraph [ref=e810]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e811] [cursor=pointer]:
                - generic [ref=e812]: 
                - text: Add to cart
            - generic [ref=e813]:
              - heading [level=2] [ref=e814]: Rs. 1389
              - paragraph [ref=e815]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e816] [cursor=pointer]:
                - generic [ref=e817]: 
                - text: Add to cart
          - list [ref=e819]:
            - listitem [ref=e820]:
              - link [ref=e821]:
                - /url: /product_details/43
                - generic [ref=e822]: 
                - text: View Product
      - generic [ref=e823]:
        - heading [level=2] [ref=e824]: recommended items
        - generic [ref=e825]:
          - generic [ref=e826]:
            - generic [ref=e830]:
              - img [ref=e831]
              - heading [level=2] [ref=e832]: Rs. 500
              - paragraph [ref=e833]: Blue Top
              - generic [ref=e834] [cursor=pointer]:
                - generic [ref=e835]: 
                - text: Add to cart
            - generic [ref=e839]:
              - img [ref=e840]
              - heading [level=2] [ref=e841]: Rs. 400
              - paragraph [ref=e842]: Men Tshirt
              - generic [ref=e843] [cursor=pointer]:
                - generic [ref=e844]: 
                - text: Add to cart
            - generic [ref=e848]:
              - img [ref=e849]
              - heading [level=2] [ref=e850]: Rs. 1000
              - paragraph [ref=e851]: Rs. 1000
              - generic [ref=e852] [cursor=pointer]:
                - generic [ref=e853]: 
                - text: Add to cart
            - text:   
          - link [ref=e854]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e855]: 
          - link [ref=e856]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e857]: 
  - insertion [ref=e859]
  - contentinfo [ref=e861]:
    - generic [ref=e866]:
      - heading [level=2] [ref=e867]: Subscription
      - generic [ref=e868]:
        - textbox [ref=e869]:
          - /placeholder: Your email address
        - button [ref=e870] [cursor=pointer]:
          - generic [ref=e871]: 
        - paragraph [ref=e872]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e876]: Copyright © 2021 All rights reserved
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
> 39 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
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