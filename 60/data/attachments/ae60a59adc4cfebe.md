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

Expected: "Automation Exercise - Product Details"
Received: "Automation Exercise - All Products"
Timeout:  5000ms

Call log:
  - Expect "toHaveTitle" with timeout 5000ms
    14 × unexpected value "Automation Exercise - All Products"

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
  - generic [ref=e38]:
    - img [ref=e39]
    - textbox [ref=e40]:
      - /placeholder: Search Product
    - button [ref=e41] [cursor=pointer]:
      - generic [ref=e42]: 
  - generic [ref=e45]:
    - generic [ref=e47]:
      - heading [level=2] [ref=e48]: Category
      - generic [ref=e49]:
        - heading [level=4] [ref=e52]:
          - link [ref=e53] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e55]: 
            - text: Women
        - heading [level=4] [ref=e58]:
          - link [ref=e59] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e61]: 
            - text: Men
        - heading [level=4] [ref=e64]:
          - link [ref=e65] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e67]: 
            - text: Kids
      - insertion [ref=e69]:
        - generic [ref=e72]:
          - heading [level=2] [ref=e74]: Discover more
          - link [ref=e75] [cursor=pointer]:
            - generic [ref=e76]: Download Nature Guides
            - img [ref=e78]
          - link [ref=e80] [cursor=pointer]:
            - generic [ref=e81]: H&M Fashion
            - img [ref=e83]
          - link [ref=e85] [cursor=pointer]:
            - generic [ref=e86]: Browse Designer Clothes
            - img [ref=e88]
          - link [ref=e90] [cursor=pointer]:
            - generic [ref=e91]: Shopping Cart Feature
            - img [ref=e93]
          - link [ref=e95] [cursor=pointer]:
            - generic [ref=e96]: Take Economics Courses
            - img [ref=e98]
          - link [ref=e100] [cursor=pointer]:
            - generic [ref=e101]: Sarees
            - img [ref=e103]
          - link [ref=e105] [cursor=pointer]:
            - generic [ref=e106]: View Product Details
            - img [ref=e108]
          - link [ref=e110] [cursor=pointer]:
            - generic [ref=e111]: Men's Jeans
            - img [ref=e113]
      - generic [ref=e115]:
        - heading [level=2] [ref=e116]: Brands
        - list [ref=e118]:
          - listitem [ref=e119]:
            - link [ref=e120] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e121]: (6)
              - text: Polo
          - listitem [ref=e122]:
            - link [ref=e123] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e124]: (5)
              - text: H&M
          - listitem [ref=e125]:
            - link [ref=e126] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e127]: (5)
              - text: Madame
          - listitem [ref=e128]:
            - link [ref=e129] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e130]: (3)
              - text: Mast & Harbour
          - listitem [ref=e131]:
            - link [ref=e132] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e133]: (4)
              - text: Babyhug
          - listitem [ref=e134]:
            - link [ref=e135] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e136]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e137]:
            - link [ref=e138] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e139]: (3)
              - text: Kookie Kids
          - listitem [ref=e140]:
            - link [ref=e141] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e142]: (5)
              - text: Biba
    - generic [ref=e144]:
      - heading [level=2] [ref=e145]: All Products
      - generic [ref=e147]:
        - generic [ref=e148]:
          - generic [ref=e149]:
            - img [ref=e150]
            - heading [level=2] [ref=e151]: Rs. 500
            - paragraph [ref=e152]: Blue Top
            - generic [ref=e153] [cursor=pointer]:
              - generic [ref=e154]: 
              - text: Add to cart
          - generic [ref=e155]:
            - heading [level=2] [ref=e156]: Rs. 500
            - paragraph [ref=e157]: Blue Top
            - generic [ref=e158] [cursor=pointer]:
              - generic [ref=e159]: 
              - text: Add to cart
        - list [ref=e161]:
          - listitem [ref=e162]:
            - link [ref=e163] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e164]: 
              - text: View Product
      - generic [ref=e166]:
        - generic [ref=e167]:
          - generic [ref=e168]:
            - img [ref=e169]
            - heading [level=2] [ref=e170]: Rs. 400
            - paragraph [ref=e171]:
              - text: Men
              - link [ref=e172] [cursor=pointer]:
                - /url: "#"
                - img [ref=e173]
                - text: Tshirt
            - generic [ref=e175] [cursor=pointer]:
              - generic [ref=e176]: 
              - text: Add to cart
          - generic [ref=e177]:
            - heading [level=2] [ref=e178]: Rs. 400
            - paragraph [ref=e179]: Men Tshirt
            - generic [ref=e180] [cursor=pointer]:
              - generic [ref=e181]: 
              - text: Add to cart
        - list [ref=e183]:
          - listitem [ref=e184]:
            - link [ref=e185] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e186]: 
              - text: View Product
      - generic [ref=e188]:
        - generic [ref=e189]:
          - generic [ref=e190]:
            - img [ref=e191]
            - heading [level=2] [ref=e192]: Rs. 1000
            - paragraph [ref=e193]:
              - text: Sleeveless
              - link [ref=e194] [cursor=pointer]:
                - /url: "#"
                - img [ref=e195]
                - text: Dress
            - generic [ref=e197] [cursor=pointer]:
              - generic [ref=e198]: 
              - text: Add to cart
          - generic [ref=e199]:
            - heading [level=2] [ref=e200]: Rs. 1000
            - paragraph [ref=e201]: Sleeveless Dress
            - generic [ref=e202] [cursor=pointer]:
              - generic [ref=e203]: 
              - text: Add to cart
        - list [ref=e205]:
          - listitem [ref=e206]:
            - link [ref=e207] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e208]: 
              - text: View Product
      - generic [ref=e210]:
        - generic [ref=e211]:
          - generic [ref=e212]:
            - img [ref=e213]
            - heading [level=2] [ref=e214]: Rs. 1500
            - paragraph [ref=e215]: Stylish Dress
            - generic [ref=e216] [cursor=pointer]:
              - generic [ref=e217]: 
              - text: Add to cart
          - generic [ref=e218]:
            - heading [level=2] [ref=e219]: Rs. 1500
            - paragraph [ref=e220]: Stylish Dress
            - generic [ref=e221] [cursor=pointer]:
              - generic [ref=e222]: 
              - text: Add to cart
        - list [ref=e224]:
          - listitem [ref=e225]:
            - link [ref=e226] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e227]: 
              - text: View Product
      - generic [ref=e229]:
        - generic [ref=e230]:
          - generic [ref=e231]:
            - img [ref=e232]
            - heading [level=2] [ref=e233]: Rs. 600
            - paragraph [ref=e234]: Winter Top
            - generic [ref=e235] [cursor=pointer]:
              - generic [ref=e236]: 
              - text: Add to cart
          - generic [ref=e237]:
            - heading [level=2] [ref=e238]: Rs. 600
            - paragraph [ref=e239]: Winter Top
            - generic [ref=e240] [cursor=pointer]:
              - generic [ref=e241]: 
              - text: Add to cart
        - list [ref=e243]:
          - listitem [ref=e244]:
            - link [ref=e245] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e246]: 
              - text: View Product
      - generic [ref=e248]:
        - generic [ref=e249]:
          - generic [ref=e250]:
            - img [ref=e251]
            - heading [level=2] [ref=e252]: Rs. 400
            - paragraph [ref=e253]: Summer White Top
            - generic [ref=e254] [cursor=pointer]:
              - generic [ref=e255]: 
              - text: Add to cart
          - generic [ref=e256]:
            - heading [level=2] [ref=e257]: Rs. 400
            - paragraph [ref=e258]: Summer White Top
            - generic [ref=e259] [cursor=pointer]:
              - generic [ref=e260]: 
              - text: Add to cart
        - list [ref=e262]:
          - listitem [ref=e263]:
            - link [ref=e264] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e265]: 
              - text: View Product
      - generic [ref=e267]:
        - generic [ref=e268]:
          - generic [ref=e269]:
            - img [ref=e270]
            - heading [level=2] [ref=e271]: Rs. 1000
            - paragraph [ref=e272]: Madame Top For Women
            - generic [ref=e273] [cursor=pointer]:
              - generic [ref=e274]: 
              - text: Add to cart
          - generic [ref=e275]:
            - heading [level=2] [ref=e276]: Rs. 1000
            - paragraph [ref=e277]: Madame Top For Women
            - generic [ref=e278] [cursor=pointer]:
              - generic [ref=e279]: 
              - text: Add to cart
        - list [ref=e281]:
          - listitem [ref=e282]:
            - link [ref=e283] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e284]: 
              - text: View Product
      - generic [ref=e286]:
        - generic [ref=e287]:
          - generic [ref=e288]:
            - img [ref=e289]
            - heading [level=2] [ref=e290]: Rs. 700
            - paragraph [ref=e291]: Fancy Green Top
            - generic [ref=e292] [cursor=pointer]:
              - generic [ref=e293]: 
              - text: Add to cart
          - generic [ref=e294]:
            - heading [level=2] [ref=e295]: Rs. 700
            - paragraph [ref=e296]: Fancy Green Top
            - generic [ref=e297] [cursor=pointer]:
              - generic [ref=e298]: 
              - text: Add to cart
        - list [ref=e300]:
          - listitem [ref=e301]:
            - link [ref=e302] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e303]: 
              - text: View Product
      - generic [ref=e305]:
        - generic [ref=e306]:
          - generic [ref=e307]:
            - img [ref=e308]
            - heading [level=2] [ref=e309]: Rs. 499
            - paragraph [ref=e310]:
              - text: Sleeves Printed Top - White
              - link [ref=e311] [cursor=pointer]:
                - img [ref=e313]
                - text: Product Cart Management
            - generic [ref=e315] [cursor=pointer]:
              - generic [ref=e316]: 
              - text: Add to cart
          - generic [ref=e317]:
            - heading [level=2] [ref=e318]: Rs. 499
            - paragraph [ref=e319]: Sleeves Printed Top - White
            - generic [ref=e320] [cursor=pointer]:
              - generic [ref=e321]: 
              - text: Add to cart
        - list [ref=e323]:
          - listitem [ref=e324]:
            - link [ref=e325] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e326]: 
              - text: View Product
      - generic [ref=e328]:
        - generic [ref=e329]:
          - generic [ref=e330]:
            - img [ref=e331]
            - heading [level=2] [ref=e332]: Rs. 359
            - paragraph [ref=e333]:
              - text: Half Sleeves Top Schiffli Detailing - Pink
              - link [ref=e334] [cursor=pointer]:
                - img [ref=e336]
                - text: Men's Tshirts
            - generic [ref=e338] [cursor=pointer]:
              - generic [ref=e339]: 
              - text: Add to cart
          - generic [ref=e340]:
            - heading [level=2] [ref=e341]: Rs. 359
            - paragraph [ref=e342]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e343] [cursor=pointer]:
              - generic [ref=e344]: 
              - text: Add to cart
        - list [ref=e346]:
          - listitem [ref=e347]:
            - link [ref=e348] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e349]: 
              - text: View Product
      - generic [ref=e351]:
        - generic [ref=e352]:
          - generic [ref=e353]:
            - img [ref=e354]
            - heading [level=2] [ref=e355]: Rs. 278
            - paragraph [ref=e356]: Frozen Tops For Kids
            - generic [ref=e357] [cursor=pointer]:
              - generic [ref=e358]: 
              - text: Add to cart
          - generic [ref=e359]:
            - heading [level=2] [ref=e360]: Rs. 278
            - paragraph [ref=e361]: Frozen Tops For Kids
            - generic [ref=e362] [cursor=pointer]:
              - generic [ref=e363]: 
              - text: Add to cart
        - list [ref=e365]:
          - listitem [ref=e366]:
            - link [ref=e367] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e368]: 
              - text: View Product
      - generic [ref=e370]:
        - generic [ref=e371]:
          - generic [ref=e372]:
            - img [ref=e373]
            - heading [level=2] [ref=e374]: Rs. 679
            - paragraph [ref=e375]:
              - text: Full Sleeves Top Cherry - Pink
              - link [ref=e376] [cursor=pointer]:
                - img [ref=e378]
                - text: Design Custom Shirts
            - generic [ref=e380] [cursor=pointer]:
              - generic [ref=e381]: 
              - text: Add to cart
          - generic [ref=e382]:
            - heading [level=2] [ref=e383]: Rs. 679
            - paragraph [ref=e384]: Full Sleeves Top Cherry - Pink
            - generic [ref=e385] [cursor=pointer]:
              - generic [ref=e386]: 
              - text: Add to cart
        - list [ref=e388]:
          - listitem [ref=e389]:
            - link [ref=e390] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e391]: 
              - text: View Product
      - generic [ref=e393]:
        - generic [ref=e394]:
          - generic [ref=e395]:
            - img [ref=e396]
            - heading [level=2] [ref=e397]: Rs. 315
            - paragraph [ref=e398]: Printed Off Shoulder Top - White
            - generic [ref=e399] [cursor=pointer]:
              - generic [ref=e400]: 
              - text: Add to cart
          - generic [ref=e401]:
            - heading [level=2] [ref=e402]: Rs. 315
            - paragraph [ref=e403]: Printed Off Shoulder Top - White
            - generic [ref=e404] [cursor=pointer]:
              - generic [ref=e405]: 
              - text: Add to cart
        - list [ref=e407]:
          - listitem [ref=e408]:
            - link [ref=e409] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e410]: 
              - text: View Product
      - generic [ref=e412]:
        - generic [ref=e413]:
          - generic [ref=e414]:
            - img [ref=e415]
            - heading [level=2] [ref=e416]: Rs. 478
            - paragraph [ref=e417]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e418] [cursor=pointer]:
              - generic [ref=e419]: 
              - text: Add to cart
          - generic [ref=e420]:
            - heading [level=2] [ref=e421]: Rs. 478
            - paragraph [ref=e422]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e423] [cursor=pointer]:
              - generic [ref=e424]: 
              - text: Add to cart
        - list [ref=e426]:
          - listitem [ref=e427]:
            - link [ref=e428] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e429]: 
              - text: View Product
      - generic [ref=e431]:
        - generic [ref=e432]:
          - generic [ref=e433]:
            - img [ref=e434]
            - heading [level=2] [ref=e435]: Rs. 1200
            - paragraph [ref=e436]: Little Girls Mr. Panda Shirt
            - generic [ref=e437] [cursor=pointer]:
              - generic [ref=e438]: 
              - text: Add to cart
          - generic [ref=e439]:
            - heading [level=2] [ref=e440]: Rs. 1200
            - paragraph [ref=e441]: Little Girls Mr. Panda Shirt
            - generic [ref=e442] [cursor=pointer]:
              - generic [ref=e443]: 
              - text: Add to cart
        - list [ref=e445]:
          - listitem [ref=e446]:
            - link [ref=e447] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e448]: 
              - text: View Product
      - generic [ref=e450]:
        - generic [ref=e451]:
          - generic [ref=e452]:
            - img [ref=e453]
            - heading [level=2] [ref=e454]: Rs. 1050
            - paragraph [ref=e455]:
              - text: Sleeveless Unicorn Patch Gown - Pink
              - link [ref=e456] [cursor=pointer]:
                - img [ref=e458]
                - text: Tops & Shirts
            - generic [ref=e460] [cursor=pointer]:
              - generic [ref=e461]: 
              - text: Add to cart
          - generic [ref=e462]:
            - heading [level=2] [ref=e463]: Rs. 1050
            - paragraph [ref=e464]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e465] [cursor=pointer]:
              - generic [ref=e466]: 
              - text: Add to cart
        - list [ref=e468]:
          - listitem [ref=e469]:
            - link [ref=e470] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e471]: 
              - text: View Product
      - generic [ref=e473]:
        - generic [ref=e474]:
          - generic [ref=e475]:
            - img [ref=e476]
            - heading [level=2] [ref=e477]: Rs. 1190
            - paragraph [ref=e478]: Cotton Mull Embroidered Dress
            - generic [ref=e479] [cursor=pointer]:
              - generic [ref=e480]: 
              - text: Add to cart
          - generic [ref=e481]:
            - heading [level=2] [ref=e482]: Rs. 1190
            - paragraph [ref=e483]: Cotton Mull Embroidered Dress
            - generic [ref=e484] [cursor=pointer]:
              - generic [ref=e485]: 
              - text: Add to cart
        - list [ref=e487]:
          - listitem [ref=e488]:
            - link [ref=e489] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e490]: 
              - text: View Product
      - generic [ref=e492]:
        - generic [ref=e493]:
          - generic [ref=e494]:
            - img [ref=e495]
            - heading [level=2] [ref=e496]: Rs. 1530
            - paragraph [ref=e497]: Blue Cotton Indie Mickey Dress
            - generic [ref=e498] [cursor=pointer]:
              - generic [ref=e499]: 
              - text: Add to cart
          - generic [ref=e500]:
            - heading [level=2] [ref=e501]: Rs. 1530
            - paragraph [ref=e502]: Blue Cotton Indie Mickey Dress
            - generic [ref=e503] [cursor=pointer]:
              - generic [ref=e504]: 
              - text: Add to cart
        - list [ref=e506]:
          - listitem [ref=e507]:
            - link [ref=e508] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e509]: 
              - text: View Product
      - generic [ref=e511]:
        - generic [ref=e512]:
          - generic [ref=e513]:
            - img [ref=e514]
            - heading [level=2] [ref=e515]: Rs. 1600
            - paragraph [ref=e516]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e517] [cursor=pointer]:
              - generic [ref=e518]: 
              - text: Add to cart
          - generic [ref=e519]:
            - heading [level=2] [ref=e520]: Rs. 1600
            - paragraph [ref=e521]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e522] [cursor=pointer]:
              - generic [ref=e523]: 
              - text: Add to cart
        - list [ref=e525]:
          - listitem [ref=e526]:
            - link [ref=e527] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e528]: 
              - text: View Product
      - generic [ref=e530]:
        - generic [ref=e531]:
          - generic [ref=e532]:
            - img [ref=e533]
            - heading [level=2] [ref=e534]: Rs. 1100
            - paragraph [ref=e535]:
              - text: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - link [ref=e536] [cursor=pointer]:
                - img [ref=e538]
                - text: Order Fabric Swatches
            - generic [ref=e540] [cursor=pointer]:
              - generic [ref=e541]: 
              - text: Add to cart
          - generic [ref=e542]:
            - heading [level=2] [ref=e543]: Rs. 1100
            - paragraph [ref=e544]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e545] [cursor=pointer]:
              - generic [ref=e546]: 
              - text: Add to cart
        - list [ref=e548]:
          - listitem [ref=e549]:
            - link [ref=e550] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e551]: 
              - text: View Product
      - generic [ref=e553]:
        - generic [ref=e554]:
          - generic [ref=e555]:
            - img [ref=e556]
            - heading [level=2] [ref=e557]: Rs. 849
            - paragraph [ref=e558]:
              - text: Colour Blocked Shirt – Sky Blue
              - link [ref=e559] [cursor=pointer]:
                - img [ref=e561]
                - text: Design Custom Shirts
            - generic [ref=e563] [cursor=pointer]:
              - generic [ref=e564]: 
              - text: Add to cart
          - generic [ref=e565]:
            - heading [level=2] [ref=e566]: Rs. 849
            - paragraph [ref=e567]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e568] [cursor=pointer]:
              - generic [ref=e569]: 
              - text: Add to cart
        - list [ref=e571]:
          - listitem [ref=e572]:
            - link [ref=e573] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e574]: 
              - text: View Product
      - generic [ref=e576]:
        - generic [ref=e577]:
          - generic [ref=e578]:
            - img [ref=e579]
            - heading [level=2] [ref=e580]: Rs. 1299
            - paragraph [ref=e581]:
              - text: Pure Cotton V-Neck
              - link [ref=e582] [cursor=pointer]:
                - /url: "#"
                - img [ref=e583]
                - text: T-Shirt
            - generic [ref=e585] [cursor=pointer]:
              - generic [ref=e586]: 
              - text: Add to cart
          - generic [ref=e587]:
            - heading [level=2] [ref=e588]: Rs. 1299
            - paragraph [ref=e589]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e590] [cursor=pointer]:
              - generic [ref=e591]: 
              - text: Add to cart
        - list [ref=e593]:
          - listitem [ref=e594]:
            - link [ref=e595] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e596]: 
              - text: View Product
      - generic [ref=e598]:
        - generic [ref=e599]:
          - generic [ref=e600]:
            - img [ref=e601]
            - heading [level=2] [ref=e602]: Rs. 1000
            - paragraph [ref=e603]: Green Side Placket Detail T-Shirt
            - generic [ref=e604] [cursor=pointer]:
              - generic [ref=e605]: 
              - text: Add to cart
          - generic [ref=e606]:
            - heading [level=2] [ref=e607]: Rs. 1000
            - paragraph [ref=e608]: Green Side Placket Detail T-Shirt
            - generic [ref=e609] [cursor=pointer]:
              - generic [ref=e610]: 
              - text: Add to cart
        - list [ref=e612]:
          - listitem [ref=e613]:
            - link [ref=e614] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e615]: 
              - text: View Product
      - generic [ref=e617]:
        - generic [ref=e618]:
          - generic [ref=e619]:
            - img [ref=e620]
            - heading [level=2] [ref=e621]: Rs. 1500
            - paragraph [ref=e622]: Premium Polo T-Shirts
            - generic [ref=e623] [cursor=pointer]:
              - generic [ref=e624]: 
              - text: Add to cart
          - generic [ref=e625]:
            - heading [level=2] [ref=e626]: Rs. 1500
            - paragraph [ref=e627]: Premium Polo T-Shirts
            - generic [ref=e628] [cursor=pointer]:
              - generic [ref=e629]: 
              - text: Add to cart
        - list [ref=e631]:
          - listitem [ref=e632]:
            - link [ref=e633] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e634]: 
              - text: View Product
      - generic [ref=e636]:
        - generic [ref=e637]:
          - generic [ref=e638]:
            - img [ref=e639]
            - heading [level=2] [ref=e640]: Rs. 850
            - paragraph [ref=e641]: Pure Cotton Neon Green Tshirt
            - generic [ref=e642] [cursor=pointer]:
              - generic [ref=e643]: 
              - text: Add to cart
          - generic [ref=e644]:
            - heading [level=2] [ref=e645]: Rs. 850
            - paragraph [ref=e646]: Pure Cotton Neon Green Tshirt
            - generic [ref=e647] [cursor=pointer]:
              - generic [ref=e648]: 
              - text: Add to cart
        - list [ref=e650]:
          - listitem [ref=e651]:
            - link [ref=e652] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e653]: 
              - text: View Product
      - generic [ref=e655]:
        - generic [ref=e656]:
          - generic [ref=e657]:
            - img [ref=e658]
            - heading [level=2] [ref=e659]: Rs. 799
            - paragraph [ref=e660]: Soft Stretch Jeans
            - generic [ref=e661] [cursor=pointer]:
              - generic [ref=e662]: 
              - text: Add to cart
          - generic [ref=e663]:
            - heading [level=2] [ref=e664]: Rs. 799
            - paragraph [ref=e665]: Soft Stretch Jeans
            - generic [ref=e666] [cursor=pointer]:
              - generic [ref=e667]: 
              - text: Add to cart
        - list [ref=e669]:
          - listitem [ref=e670]:
            - link [ref=e671] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=e672]: 
              - text: View Product
      - generic [ref=e674]:
        - generic [ref=e675]:
          - generic [ref=e676]:
            - img [ref=e677]
            - heading [level=2] [ref=e678]: Rs. 1200
            - paragraph [ref=e679]: Regular Fit Straight Jeans
            - generic [ref=e680] [cursor=pointer]:
              - generic [ref=e681]: 
              - text: Add to cart
          - generic [ref=e682]:
            - heading [level=2] [ref=e683]: Rs. 1200
            - paragraph [ref=e684]: Regular Fit Straight Jeans
            - generic [ref=e685] [cursor=pointer]:
              - generic [ref=e686]: 
              - text: Add to cart
        - list [ref=e688]:
          - listitem [ref=e689]:
            - link [ref=e690] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=e691]: 
              - text: View Product
      - generic [ref=e693]:
        - generic [ref=e694]:
          - generic [ref=e695]:
            - img [ref=e696]
            - heading [level=2] [ref=e697]: Rs. 1400
            - paragraph [ref=e698]: Grunt Blue Slim Fit Jeans
            - generic [ref=e699] [cursor=pointer]:
              - generic [ref=e700]: 
              - text: Add to cart
          - generic [ref=e701]:
            - heading [level=2] [ref=e702]: Rs. 1400
            - paragraph [ref=e703]: Grunt Blue Slim Fit Jeans
            - generic [ref=e704] [cursor=pointer]:
              - generic [ref=e705]: 
              - text: Add to cart
        - list [ref=e707]:
          - listitem [ref=e708]:
            - link [ref=e709] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=e710]: 
              - text: View Product
      - generic [ref=e712]:
        - generic [ref=e713]:
          - generic [ref=e714]:
            - img [ref=e715]
            - heading [level=2] [ref=e716]: Rs. 2300
            - paragraph [ref=e717]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e718] [cursor=pointer]:
              - generic [ref=e719]: 
              - text: Add to cart
          - generic [ref=e720]:
            - heading [level=2] [ref=e721]: Rs. 2300
            - paragraph [ref=e722]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e723] [cursor=pointer]:
              - generic [ref=e724]: 
              - text: Add to cart
        - list [ref=e726]:
          - listitem [ref=e727]:
            - link [ref=e728] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e729]: 
              - text: View Product
      - generic [ref=e731]:
        - generic [ref=e732]:
          - generic [ref=e733]:
            - img [ref=e734]
            - heading [level=2] [ref=e735]: Rs. 3000
            - paragraph [ref=e736]: Cotton Silk Hand Block Print Saree
            - generic [ref=e737] [cursor=pointer]:
              - generic [ref=e738]: 
              - text: Add to cart
          - generic [ref=e739]:
            - heading [level=2] [ref=e740]: Rs. 3000
            - paragraph [ref=e741]: Cotton Silk Hand Block Print Saree
            - generic [ref=e742] [cursor=pointer]:
              - generic [ref=e743]: 
              - text: Add to cart
        - list [ref=e745]:
          - listitem [ref=e746]:
            - link [ref=e747] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e748]: 
              - text: View Product
      - generic [ref=e750]:
        - generic [ref=e751]:
          - generic [ref=e752]:
            - img [ref=e753]
            - heading [level=2] [ref=e754]: Rs. 3500
            - paragraph [ref=e755]: Rust Red Linen Saree
            - generic [ref=e756] [cursor=pointer]:
              - generic [ref=e757]: 
              - text: Add to cart
          - generic [ref=e758]:
            - heading [level=2] [ref=e759]: Rs. 3500
            - paragraph [ref=e760]: Rust Red Linen Saree
            - generic [ref=e761] [cursor=pointer]:
              - generic [ref=e762]: 
              - text: Add to cart
        - list [ref=e764]:
          - listitem [ref=e765]:
            - link [ref=e766] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e767]: 
              - text: View Product
      - generic [ref=e769]:
        - generic [ref=e770]:
          - generic [ref=e771]:
            - img [ref=e772]
            - heading [level=2] [ref=e773]: Rs. 5000
            - paragraph [ref=e774]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e775] [cursor=pointer]:
              - generic [ref=e776]: 
              - text: Add to cart
          - generic [ref=e777]:
            - heading [level=2] [ref=e778]: Rs. 5000
            - paragraph [ref=e779]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e780] [cursor=pointer]:
              - generic [ref=e781]: 
              - text: Add to cart
        - list [ref=e783]:
          - listitem [ref=e784]:
            - link [ref=e785] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e786]: 
              - text: View Product
      - generic [ref=e788]:
        - generic [ref=e789]:
          - generic [ref=e790]:
            - img [ref=e791]
            - heading [level=2] [ref=e792]: Rs. 1400
            - paragraph [ref=e793]: Lace Top For Women
            - generic [ref=e794] [cursor=pointer]:
              - generic [ref=e795]: 
              - text: Add to cart
          - generic [ref=e796]:
            - heading [level=2] [ref=e797]: Rs. 1400
            - paragraph [ref=e798]: Lace Top For Women
            - generic [ref=e799] [cursor=pointer]:
              - generic [ref=e800]: 
              - text: Add to cart
        - list [ref=e802]:
          - listitem [ref=e803]:
            - link [ref=e804] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e805]: 
              - text: View Product
      - generic [ref=e807]:
        - generic [ref=e808]:
          - generic [ref=e809]:
            - img [ref=e810]
            - heading [level=2] [ref=e811]: Rs. 1389
            - paragraph [ref=e812]:
              - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - link [ref=e813] [cursor=pointer]:
                - img [ref=e815]
                - text: Tops & Shirts
            - generic [ref=e817] [cursor=pointer]:
              - generic [ref=e818]: 
              - text: Add to cart
          - generic [ref=e819]:
            - heading [level=2] [ref=e820]: Rs. 1389
            - paragraph [ref=e821]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e822] [cursor=pointer]:
              - generic [ref=e823]: 
              - text: Add to cart
        - list [ref=e825]:
          - listitem [ref=e826]:
            - link [ref=e827] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e828]: 
              - text: View Product
  - insertion [ref=e830]
  - contentinfo [ref=e832]:
    - generic [ref=e837]:
      - heading [level=2] [ref=e838]: Subscription
      - generic [ref=e839]:
        - textbox [ref=e840]:
          - /placeholder: Your email address
        - button [ref=e841] [cursor=pointer]:
          - generic [ref=e842]: 
        - paragraph [ref=e843]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e847]: Copyright © 2021 All rights reserved
  - link [ref=e848] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e849]: 
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
  39 |     await expect(page).toHaveTitle('Automation Exercise - All Products');
  40 |     await viewProductAddToCart.viewProductButton.click();
> 41 |     await expect(page).toHaveTitle('Automation Exercise - Product Details');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
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