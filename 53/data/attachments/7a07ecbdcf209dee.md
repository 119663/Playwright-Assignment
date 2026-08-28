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
            - generic [ref=e94]: Browse Designer Clothes
            - img [ref=e96]
          - link [ref=e98] [cursor=pointer]:
            - generic [ref=e99]: QA engineer training
            - img [ref=e101]
          - link [ref=e103] [cursor=pointer]:
            - generic [ref=e104]: Test case practice
            - img [ref=e106]
          - link [ref=e108] [cursor=pointer]:
            - generic [ref=e109]: API testing services
            - img [ref=e111]
          - link [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: API testing resources
            - img [ref=e116]
          - link [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: T SHIRT
            - img [ref=e121]
          - link [ref=e123] [cursor=pointer]:
            - generic [ref=e124]: Automation practice website
            - img [ref=e126]
          - link [ref=e128] [cursor=pointer]:
            - generic [ref=e129]: Engineers
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
        - generic [ref=e205]:
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
          - insertion [ref=e225]:
            - iframe [ref=e227]:
              - iframe [ref=f8e1]:
                - generic [ref=f15e2]:
                  - iframe [ref=f15e5]:
                    
                  - generic [ref=f15e6]:
                    - generic:
                      - img [ref=f15e10] [cursor=pointer]
                      - button [ref=f15e14] [cursor=pointer]:
                        - img [ref=f15e15]
        - generic [ref=e229]:
          - generic [ref=e230]:
            - generic [ref=e231]:
              - img [ref=e232]
              - heading [level=2] [ref=e233]: Rs. 1500
              - paragraph [ref=e234]: Stylish Dress
              - generic [ref=e235] [cursor=pointer]:
                - generic [ref=e236]: 
                - text: Add to cart
            - generic [ref=e237]:
              - heading [level=2] [ref=e238]: Rs. 1500
              - paragraph [ref=e239]: Stylish Dress
              - generic [ref=e240] [cursor=pointer]:
                - generic [ref=e241]: 
                - text: Add to cart
          - list [ref=e243]:
            - listitem [ref=e244]:
              - link [ref=e245]:
                - /url: /product_details/4
                - generic [ref=e246]: 
                - text: View Product
        - generic [ref=e248]:
          - generic [ref=e249]:
            - generic [ref=e250]:
              - img [ref=e251]
              - heading [level=2] [ref=e252]: Rs. 600
              - paragraph [ref=e253]: Winter Top
              - generic [ref=e254] [cursor=pointer]:
                - generic [ref=e255]: 
                - text: Add to cart
            - generic [ref=e256]:
              - heading [level=2] [ref=e257]: Rs. 600
              - paragraph [ref=e258]: Winter Top
              - generic [ref=e259] [cursor=pointer]:
                - generic [ref=e260]: 
                - text: Add to cart
          - list [ref=e262]:
            - listitem [ref=e263]:
              - link [ref=e264]:
                - /url: /product_details/5
                - generic [ref=e265]: 
                - text: View Product
        - generic [ref=e267]:
          - generic [ref=e268]:
            - generic [ref=e269]:
              - img [ref=e270]
              - heading [level=2] [ref=e271]: Rs. 400
              - paragraph [ref=e272]: Summer White Top
              - generic [ref=e273] [cursor=pointer]:
                - generic [ref=e274]: 
                - text: Add to cart
            - generic [ref=e275]:
              - heading [level=2] [ref=e276]: Rs. 400
              - paragraph [ref=e277]: Summer White Top
              - generic [ref=e278] [cursor=pointer]:
                - generic [ref=e279]: 
                - text: Add to cart
          - list [ref=e281]:
            - listitem [ref=e282]:
              - link [ref=e283]:
                - /url: /product_details/6
                - generic [ref=e284]: 
                - text: View Product
        - generic [ref=e286]:
          - generic [ref=e287]:
            - generic [ref=e288]:
              - img [ref=e289]
              - heading [level=2] [ref=e290]: Rs. 1000
              - paragraph [ref=e291]: Madame Top For Women
              - generic [ref=e292] [cursor=pointer]:
                - generic [ref=e293]: 
                - text: Add to cart
            - generic [ref=e294]:
              - heading [level=2] [ref=e295]: Rs. 1000
              - paragraph [ref=e296]: Madame Top For Women
              - generic [ref=e297] [cursor=pointer]:
                - generic [ref=e298]: 
                - text: Add to cart
          - list [ref=e300]:
            - listitem [ref=e301]:
              - link [ref=e302]:
                - /url: /product_details/7
                - generic [ref=e303]: 
                - text: View Product
        - generic [ref=e305]:
          - generic [ref=e306]:
            - generic [ref=e307]:
              - img [ref=e308]
              - heading [level=2] [ref=e309]: Rs. 700
              - paragraph [ref=e310]: Fancy Green Top
              - generic [ref=e311] [cursor=pointer]:
                - generic [ref=e312]: 
                - text: Add to cart
            - generic [ref=e313]:
              - heading [level=2] [ref=e314]: Rs. 700
              - paragraph [ref=e315]: Fancy Green Top
              - generic [ref=e316] [cursor=pointer]:
                - generic [ref=e317]: 
                - text: Add to cart
          - list [ref=e319]:
            - listitem [ref=e320]:
              - link [ref=e321]:
                - /url: /product_details/8
                - generic [ref=e322]: 
                - text: View Product
        - generic [ref=e324]:
          - generic [ref=e325]:
            - generic [ref=e326]:
              - img [ref=e327]
              - heading [level=2] [ref=e328]: Rs. 499
              - paragraph [ref=e329]:
                - text: Sleeves Printed Top - White
                - link [ref=e330] [cursor=pointer]:
                  - img [ref=e332]
                  - text: Switch Broadband Providers
              - generic [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: 
                - text: Add to cart
            - generic [ref=e336]:
              - heading [level=2] [ref=e337]: Rs. 499
              - paragraph [ref=e338]: Sleeves Printed Top - White
              - generic [ref=e339] [cursor=pointer]:
                - generic [ref=e340]: 
                - text: Add to cart
          - list [ref=e342]:
            - listitem [ref=e343]:
              - link [ref=e344]:
                - /url: /product_details/11
                - generic [ref=e345]: 
                - text: View Product
        - generic [ref=e347]:
          - generic [ref=e348]:
            - generic [ref=e349]:
              - img [ref=e350]
              - heading [level=2] [ref=e351]: Rs. 359
              - paragraph [ref=e352]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link [ref=e353] [cursor=pointer]:
                  - img [ref=e355]
                  - text: Get Quality Software
              - generic [ref=e357] [cursor=pointer]:
                - generic [ref=e358]: 
                - text: Add to cart
            - generic [ref=e359]:
              - heading [level=2] [ref=e360]: Rs. 359
              - paragraph [ref=e361]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e362] [cursor=pointer]:
                - generic [ref=e363]: 
                - text: Add to cart
          - list [ref=e365]:
            - listitem [ref=e366]:
              - link [ref=e367]:
                - /url: /product_details/12
                - generic [ref=e368]: 
                - text: View Product
        - generic [ref=e370]:
          - generic [ref=e371]:
            - generic [ref=e372]:
              - img [ref=e373]
              - heading [level=2] [ref=e374]: Rs. 278
              - paragraph [ref=e375]: Frozen Tops For Kids
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e377]: 
                - text: Add to cart
            - generic [ref=e378]:
              - heading [level=2] [ref=e379]: Rs. 278
              - paragraph [ref=e380]: Frozen Tops For Kids
              - generic [ref=e381] [cursor=pointer]:
                - generic [ref=e382]: 
                - text: Add to cart
          - list [ref=e384]:
            - listitem [ref=e385]:
              - link [ref=e386]:
                - /url: /product_details/13
                - generic [ref=e387]: 
                - text: View Product
        - generic [ref=e389]:
          - generic [ref=e390]:
            - generic [ref=e391]:
              - img [ref=e392]
              - heading [level=2] [ref=e393]: Rs. 679
              - paragraph [ref=e394]:
                - text: Full Sleeves Top Cherry - Pink
                - link [ref=e395] [cursor=pointer]:
                  - img [ref=e397]
                  - text: Learn Coding Online
              - generic [ref=e399] [cursor=pointer]:
                - generic [ref=e400]: 
                - text: Add to cart
            - generic [ref=e401]:
              - heading [level=2] [ref=e402]: Rs. 679
              - paragraph [ref=e403]: Full Sleeves Top Cherry - Pink
              - generic [ref=e404] [cursor=pointer]:
                - generic [ref=e405]: 
                - text: Add to cart
          - list [ref=e407]:
            - listitem [ref=e408]:
              - link [ref=e409]:
                - /url: /product_details/14
                - generic [ref=e410]: 
                - text: View Product
        - generic [ref=e412]:
          - generic [ref=e413]:
            - generic [ref=e414]:
              - img [ref=e415]
              - heading [level=2] [ref=e416]: Rs. 315
              - paragraph [ref=e417]: Printed Off Shoulder Top - White
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
              - paragraph [ref=e474]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link [ref=e475] [cursor=pointer]:
                  - img [ref=e477]
                  - text: Download Productivity Apps
              - generic [ref=e479] [cursor=pointer]:
                - generic [ref=e480]: 
                - text: Add to cart
            - generic [ref=e481]:
              - heading [level=2] [ref=e482]: Rs. 1050
              - paragraph [ref=e483]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e484] [cursor=pointer]:
                - generic [ref=e485]: 
                - text: Add to cart
          - list [ref=e487]:
            - listitem [ref=e488]:
              - link [ref=e489]:
                - /url: /product_details/19
                - generic [ref=e490]: 
                - text: View Product
        - generic [ref=e492]:
          - generic [ref=e493]:
            - generic [ref=e494]:
              - img [ref=e495]
              - heading [level=2] [ref=e496]: Rs. 1190
              - paragraph [ref=e497]: Cotton Mull Embroidered Dress
              - generic [ref=e498] [cursor=pointer]:
                - generic [ref=e499]: 
                - text: Add to cart
            - generic [ref=e500]:
              - heading [level=2] [ref=e501]: Rs. 1190
              - paragraph [ref=e502]: Cotton Mull Embroidered Dress
              - generic [ref=e503] [cursor=pointer]:
                - generic [ref=e504]: 
                - text: Add to cart
          - list [ref=e506]:
            - listitem [ref=e507]:
              - link [ref=e508]:
                - /url: /product_details/20
                - generic [ref=e509]: 
                - text: View Product
        - generic [ref=e511]:
          - generic [ref=e512]:
            - generic [ref=e513]:
              - img [ref=e514]
              - heading [level=2] [ref=e515]: Rs. 1530
              - paragraph [ref=e516]: Blue Cotton Indie Mickey Dress
              - generic [ref=e517] [cursor=pointer]:
                - generic [ref=e518]: 
                - text: Add to cart
            - generic [ref=e519]:
              - heading [level=2] [ref=e520]: Rs. 1530
              - paragraph [ref=e521]: Blue Cotton Indie Mickey Dress
              - generic [ref=e522] [cursor=pointer]:
                - generic [ref=e523]: 
                - text: Add to cart
          - list [ref=e525]:
            - listitem [ref=e526]:
              - link [ref=e527]:
                - /url: /product_details/21
                - generic [ref=e528]: 
                - text: View Product
        - generic [ref=e530]:
          - generic [ref=e531]:
            - generic [ref=e532]:
              - img [ref=e533]
              - heading [level=2] [ref=e534]: Rs. 1600
              - paragraph [ref=e535]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link [ref=e536] [cursor=pointer]:
                  - img [ref=e538]
                  - text: Design Custom Shirts
              - generic [ref=e540] [cursor=pointer]:
                - generic [ref=e541]: 
                - text: Add to cart
            - generic [ref=e542]:
              - heading [level=2] [ref=e543]: Rs. 1600
              - paragraph [ref=e544]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e545] [cursor=pointer]:
                - generic [ref=e546]: 
                - text: Add to cart
          - list [ref=e548]:
            - listitem [ref=e549]:
              - link [ref=e550]:
                - /url: /product_details/22
                - generic [ref=e551]: 
                - text: View Product
        - generic [ref=e553]:
          - generic [ref=e554]:
            - generic [ref=e555]:
              - img [ref=e556]
              - heading [level=2] [ref=e557]: Rs. 1100
              - paragraph [ref=e558]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e559] [cursor=pointer]:
                - generic [ref=e560]: 
                - text: Add to cart
            - generic [ref=e561]:
              - heading [level=2] [ref=e562]: Rs. 1100
              - paragraph [ref=e563]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e564] [cursor=pointer]:
                - generic [ref=e565]: 
                - text: Add to cart
          - list [ref=e567]:
            - listitem [ref=e568]:
              - link [ref=e569]:
                - /url: /product_details/23
                - generic [ref=e570]: 
                - text: View Product
        - generic [ref=e572]:
          - generic [ref=e573]:
            - generic [ref=e574]:
              - img [ref=e575]
              - heading [level=2] [ref=e576]: Rs. 849
              - paragraph [ref=e577]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e578] [cursor=pointer]:
                - generic [ref=e579]: 
                - text: Add to cart
            - generic [ref=e580]:
              - heading [level=2] [ref=e581]: Rs. 849
              - paragraph [ref=e582]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e583] [cursor=pointer]:
                - generic [ref=e584]: 
                - text: Add to cart
          - list [ref=e586]:
            - listitem [ref=e587]:
              - link [ref=e588]:
                - /url: /product_details/24
                - generic [ref=e589]: 
                - text: View Product
        - generic [ref=e591]:
          - generic [ref=e592]:
            - generic [ref=e593]:
              - img [ref=e594]
              - heading [level=2] [ref=e595]: Rs. 1299
              - paragraph [ref=e596]:
                - text: Pure Cotton V-Neck
                - link [ref=e597] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e598]
                  - text: T-Shirt
              - generic [ref=e600] [cursor=pointer]:
                - generic [ref=e601]: 
                - text: Add to cart
            - generic [ref=e602]:
              - heading [level=2] [ref=e603]: Rs. 1299
              - paragraph [ref=e604]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e605] [cursor=pointer]:
                - generic [ref=e606]: 
                - text: Add to cart
          - list [ref=e608]:
            - listitem [ref=e609]:
              - link [ref=e610]:
                - /url: /product_details/28
                - generic [ref=e611]: 
                - text: View Product
        - generic [ref=e613]:
          - generic [ref=e614]:
            - generic [ref=e615]:
              - img [ref=e616]
              - heading [level=2] [ref=e617]: Rs. 1000
              - paragraph [ref=e618]: Green Side Placket Detail T-Shirt
              - generic [ref=e619] [cursor=pointer]:
                - generic [ref=e620]: 
                - text: Add to cart
            - generic [ref=e621]:
              - heading [level=2] [ref=e622]: Rs. 1000
              - paragraph [ref=e623]: Green Side Placket Detail T-Shirt
              - generic [ref=e624] [cursor=pointer]:
                - generic [ref=e625]: 
                - text: Add to cart
          - list [ref=e627]:
            - listitem [ref=e628]:
              - link [ref=e629]:
                - /url: /product_details/29
                - generic [ref=e630]: 
                - text: View Product
        - generic [ref=e632]:
          - generic [ref=e633]:
            - generic [ref=e634]:
              - img [ref=e635]
              - heading [level=2] [ref=e636]: Rs. 1500
              - paragraph [ref=e637]:
                - text: Premium Polo
                - link [ref=e638] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e639]
                  - text: T-Shirts
              - generic [ref=e641] [cursor=pointer]:
                - generic [ref=e642]: 
                - text: Add to cart
            - generic [ref=e643]:
              - heading [level=2] [ref=e644]: Rs. 1500
              - paragraph [ref=e645]: Premium Polo T-Shirts
              - generic [ref=e646] [cursor=pointer]:
                - generic [ref=e647]: 
                - text: Add to cart
          - list [ref=e649]:
            - listitem [ref=e650]:
              - link [ref=e651]:
                - /url: /product_details/30
                - generic [ref=e652]: 
                - text: View Product
        - generic [ref=e654]:
          - generic [ref=e655]:
            - generic [ref=e656]:
              - img [ref=e657]
              - heading [level=2] [ref=e658]: Rs. 850
              - paragraph [ref=e659]: Pure Cotton Neon Green Tshirt
              - generic [ref=e660] [cursor=pointer]:
                - generic [ref=e661]: 
                - text: Add to cart
            - generic [ref=e662]:
              - heading [level=2] [ref=e663]: Rs. 850
              - paragraph [ref=e664]: Pure Cotton Neon Green Tshirt
              - generic [ref=e665] [cursor=pointer]:
                - generic [ref=e666]: 
                - text: Add to cart
          - list [ref=e668]:
            - listitem [ref=e669]:
              - link [ref=e670]:
                - /url: /product_details/31
                - generic [ref=e671]: 
                - text: View Product
        - generic [ref=e673]:
          - generic [ref=e674]:
            - generic [ref=e675]:
              - img [ref=e676]
              - heading [level=2] [ref=e677]: Rs. 799
              - paragraph [ref=e678]: Soft Stretch Jeans
              - generic [ref=e679] [cursor=pointer]:
                - generic [ref=e680]: 
                - text: Add to cart
            - generic [ref=e681]:
              - heading [level=2] [ref=e682]: Rs. 799
              - paragraph [ref=e683]: Soft Stretch Jeans
              - generic [ref=e684] [cursor=pointer]:
                - generic [ref=e685]: 
                - text: Add to cart
          - list [ref=e687]:
            - listitem [ref=e688]:
              - link [ref=e689]:
                - /url: /product_details/33
                - generic [ref=e690]: 
                - text: View Product
        - generic [ref=e692]:
          - generic [ref=e693]:
            - generic [ref=e694]:
              - img [ref=e695]
              - heading [level=2] [ref=e696]: Rs. 1200
              - paragraph [ref=e697]: Regular Fit Straight Jeans
              - generic [ref=e698] [cursor=pointer]:
                - generic [ref=e699]: 
                - text: Add to cart
            - generic [ref=e700]:
              - heading [level=2] [ref=e701]: Rs. 1200
              - paragraph [ref=e702]: Regular Fit Straight Jeans
              - generic [ref=e703] [cursor=pointer]:
                - generic [ref=e704]: 
                - text: Add to cart
          - list [ref=e706]:
            - listitem [ref=e707]:
              - link [ref=e708]:
                - /url: /product_details/35
                - generic [ref=e709]: 
                - text: View Product
        - generic [ref=e711]:
          - generic [ref=e712]:
            - generic [ref=e713]:
              - img [ref=e714]
              - heading [level=2] [ref=e715]: Rs. 1400
              - paragraph [ref=e716]: Grunt Blue Slim Fit Jeans
              - generic [ref=e717] [cursor=pointer]:
                - generic [ref=e718]: 
                - text: Add to cart
            - generic [ref=e719]:
              - heading [level=2] [ref=e720]: Rs. 1400
              - paragraph [ref=e721]: Grunt Blue Slim Fit Jeans
              - generic [ref=e722] [cursor=pointer]:
                - generic [ref=e723]: 
                - text: Add to cart
          - list [ref=e725]:
            - listitem [ref=e726]:
              - link [ref=e727]:
                - /url: /product_details/37
                - generic [ref=e728]: 
                - text: View Product
        - generic [ref=e730]:
          - generic [ref=e731]:
            - generic [ref=e732]:
              - img [ref=e733]
              - heading [level=2] [ref=e734]: Rs. 2300
              - paragraph [ref=e735]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e736] [cursor=pointer]:
                - generic [ref=e737]: 
                - text: Add to cart
            - generic [ref=e738]:
              - heading [level=2] [ref=e739]: Rs. 2300
              - paragraph [ref=e740]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e741] [cursor=pointer]:
                - generic [ref=e742]: 
                - text: Add to cart
          - list [ref=e744]:
            - listitem [ref=e745]:
              - link [ref=e746]:
                - /url: /product_details/38
                - generic [ref=e747]: 
                - text: View Product
        - generic [ref=e749]:
          - generic [ref=e750]:
            - generic [ref=e751]:
              - img [ref=e752]
              - heading [level=2] [ref=e753]: Rs. 3000
              - paragraph [ref=e754]: Cotton Silk Hand Block Print Saree
              - generic [ref=e755] [cursor=pointer]:
                - generic [ref=e756]: 
                - text: Add to cart
            - generic [ref=e757]:
              - heading [level=2] [ref=e758]: Rs. 3000
              - paragraph [ref=e759]: Cotton Silk Hand Block Print Saree
              - generic [ref=e760] [cursor=pointer]:
                - generic [ref=e761]: 
                - text: Add to cart
          - list [ref=e763]:
            - listitem [ref=e764]:
              - link [ref=e765]:
                - /url: /product_details/39
                - generic [ref=e766]: 
                - text: View Product
        - generic [ref=e768]:
          - generic [ref=e769]:
            - generic [ref=e770]:
              - img [ref=e771]
              - heading [level=2] [ref=e772]: Rs. 3500
              - paragraph [ref=e773]: Rust Red Linen Saree
              - generic [ref=e774] [cursor=pointer]:
                - generic [ref=e775]: 
                - text: Add to cart
            - generic [ref=e776]:
              - heading [level=2] [ref=e777]: Rs. 3500
              - paragraph [ref=e778]: Rust Red Linen Saree
              - generic [ref=e779] [cursor=pointer]:
                - generic [ref=e780]: 
                - text: Add to cart
          - list [ref=e782]:
            - listitem [ref=e783]:
              - link [ref=e784]:
                - /url: /product_details/40
                - generic [ref=e785]: 
                - text: View Product
        - generic [ref=e787]:
          - generic [ref=e788]:
            - generic [ref=e789]:
              - img [ref=e790]
              - heading [level=2] [ref=e791]: Rs. 5000
              - paragraph [ref=e792]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e793] [cursor=pointer]:
                - generic [ref=e794]: 
                - text: Add to cart
            - generic [ref=e795]:
              - heading [level=2] [ref=e796]: Rs. 5000
              - paragraph [ref=e797]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e798] [cursor=pointer]:
                - generic [ref=e799]: 
                - text: Add to cart
          - list [ref=e801]:
            - listitem [ref=e802]:
              - link [ref=e803]:
                - /url: /product_details/41
                - generic [ref=e804]: 
                - text: View Product
        - generic [ref=e806]:
          - generic [ref=e807]:
            - generic [ref=e808]:
              - img [ref=e809]
              - heading [level=2] [ref=e810]: Rs. 1400
              - paragraph [ref=e811]: Lace Top For Women
              - generic [ref=e812] [cursor=pointer]:
                - generic [ref=e813]: 
                - text: Add to cart
            - generic [ref=e814]:
              - heading [level=2] [ref=e815]: Rs. 1400
              - paragraph [ref=e816]: Lace Top For Women
              - generic [ref=e817] [cursor=pointer]:
                - generic [ref=e818]: 
                - text: Add to cart
          - list [ref=e820]:
            - listitem [ref=e821]:
              - link [ref=e822]:
                - /url: /product_details/42
                - generic [ref=e823]: 
                - text: View Product
        - generic [ref=e825]:
          - generic [ref=e826]:
            - generic [ref=e827]:
              - img [ref=e828]
              - heading [level=2] [ref=e829]: Rs. 1389
              - paragraph [ref=e830]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link [ref=e831] [cursor=pointer]:
                  - img [ref=e833]
                  - text: Rent Evening Dresses
              - generic [ref=e835] [cursor=pointer]:
                - generic [ref=e836]: 
                - text: Add to cart
            - generic [ref=e837]:
              - heading [level=2] [ref=e838]: Rs. 1389
              - paragraph [ref=e839]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e840] [cursor=pointer]:
                - generic [ref=e841]: 
                - text: Add to cart
          - list [ref=e843]:
            - listitem [ref=e844]:
              - link [ref=e845]:
                - /url: /product_details/43
                - generic [ref=e846]: 
                - text: View Product
      - generic [ref=e847]:
        - heading [level=2] [ref=e848]: recommended items
        - generic [ref=e849]:
          - generic [ref=e850]:
            - generic [ref=e854]:
              - img [ref=e855]
              - heading [level=2] [ref=e856]: Rs. 500
              - paragraph [ref=e857]: Blue Top
              - generic [ref=e858] [cursor=pointer]:
                - generic [ref=e859]: 
                - text: Add to cart
            - generic [ref=e863]:
              - img [ref=e864]
              - heading [level=2] [ref=e865]: Rs. 400
              - paragraph [ref=e866]: Men Tshirt
              - generic [ref=e867] [cursor=pointer]:
                - generic [ref=e868]: 
                - text: Add to cart
            - generic [ref=e872]:
              - img [ref=e873]
              - heading [level=2] [ref=e874]: Rs. 1000
              - paragraph [ref=e875]: Rs. 1000
              - generic [ref=e876] [cursor=pointer]:
                - generic [ref=e877]: 
                - text: Add to cart
            - text:   
          - link [ref=e878]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e879]: 
          - link [ref=e880]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e881]: 
  - insertion [ref=e883]
  - contentinfo [ref=e885]:
    - generic [ref=e890]:
      - heading [level=2] [ref=e891]: Subscription
      - generic [ref=e892]:
        - textbox [ref=e893]:
          - /placeholder: Your email address
        - button [ref=e894] [cursor=pointer]:
          - generic [ref=e895]: 
        - paragraph [ref=e896]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e900]: Copyright © 2021 All rights reserved
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