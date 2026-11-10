# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/products.spec.ts >> Increase product quantity in view products page
- Location: tests/ui/products.spec.ts:84:5

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
    - generic [ref=e46]:
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
              - generic [ref=e76]: Women's Dresses
              - img [ref=e78]
            - link [ref=e80] [cursor=pointer]:
              - generic [ref=e81]: Men's Jeans
              - img [ref=e83]
            - link [ref=e85] [cursor=pointer]:
              - generic [ref=e86]: Kid's Clothing
              - img [ref=e88]
            - link [ref=e90] [cursor=pointer]:
              - generic [ref=e91]: Fashion Brands
              - img [ref=e93]
            - link [ref=e95] [cursor=pointer]:
              - generic [ref=e96]: Sleeveless Dresses
              - img [ref=e98]
            - link [ref=e100] [cursor=pointer]:
              - generic [ref=e101]: Product Automation Tools
              - img [ref=e103]
            - link [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: Shop T-Shirts
              - img [ref=e108]
            - link [ref=e110] [cursor=pointer]:
              - generic [ref=e111]: T-Shirt
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
      - iframe [ref=e144]:
        
    - generic [ref=e146]:
      - heading [level=2] [ref=e147]: All Products
      - generic [ref=e149]:
        - generic [ref=e150]:
          - generic [ref=e151]:
            - img [ref=e152]
            - heading [level=2] [ref=e153]: Rs. 500
            - paragraph [ref=e154]: Blue Top
            - generic [ref=e155] [cursor=pointer]:
              - generic [ref=e156]: 
              - text: Add to cart
          - generic [ref=e157]:
            - heading [level=2] [ref=e158]: Rs. 500
            - paragraph [ref=e159]: Blue Top
            - generic [ref=e160] [cursor=pointer]:
              - generic [ref=e161]: 
              - text: Add to cart
        - list [ref=e163]:
          - listitem [ref=e164]:
            - link [ref=e165] [cursor=pointer]:
              - /url: /product_details/1
              - generic [ref=e166]: 
              - text: View Product
      - generic [ref=e168]:
        - generic [ref=e169]:
          - generic [ref=e170]:
            - img [ref=e171]
            - heading [level=2] [ref=e172]: Rs. 400
            - paragraph [ref=e173]:
              - link [ref=e174] [cursor=pointer]:
                - /url: "#"
                - img [ref=e175]
                - text: Men
              - link [ref=e177] [cursor=pointer]:
                - /url: "#"
                - img [ref=e178]
                - text: Tshirt
            - generic [ref=e180] [cursor=pointer]:
              - generic [ref=e181]: 
              - text: Add to cart
          - generic [ref=e182]:
            - heading [level=2] [ref=e183]: Rs. 400
            - paragraph [ref=e184]: Men Tshirt
            - generic [ref=e185] [cursor=pointer]:
              - generic [ref=e186]: 
              - text: Add to cart
        - list [ref=e188]:
          - listitem [ref=e189]:
            - link [ref=e190] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e191]: 
              - text: View Product
      - generic [ref=e193]:
        - generic [ref=e194]:
          - generic [ref=e195]:
            - img [ref=e196]
            - heading [level=2] [ref=e197]: Rs. 1000
            - paragraph [ref=e198]:
              - text: Sleeveless
              - link [ref=e199] [cursor=pointer]:
                - /url: "#"
                - img [ref=e200]
                - text: Dress
            - generic [ref=e202] [cursor=pointer]:
              - generic [ref=e203]: 
              - text: Add to cart
          - generic [ref=e204]:
            - heading [level=2] [ref=e205]: Rs. 1000
            - paragraph [ref=e206]: Sleeveless Dress
            - generic [ref=e207] [cursor=pointer]:
              - generic [ref=e208]: 
              - text: Add to cart
        - list [ref=e210]:
          - listitem [ref=e211]:
            - link [ref=e212] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e213]: 
              - text: View Product
      - generic [ref=e215]:
        - generic [ref=e216]:
          - generic [ref=e217]:
            - img [ref=e218]
            - heading [level=2] [ref=e219]: Rs. 1500
            - paragraph [ref=e220]:
              - text: Stylish Dress
              - link [ref=e221] [cursor=pointer]:
                - img [ref=e223]
                - text: Women's Dresses
            - generic [ref=e225] [cursor=pointer]:
              - generic [ref=e226]: 
              - text: Add to cart
          - generic [ref=e227]:
            - heading [level=2] [ref=e228]: Rs. 1500
            - paragraph [ref=e229]: Stylish Dress
            - generic [ref=e230] [cursor=pointer]:
              - generic [ref=e231]: 
              - text: Add to cart
        - list [ref=e233]:
          - listitem [ref=e234]:
            - link [ref=e235] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e236]: 
              - text: View Product
      - generic [ref=e238]:
        - generic [ref=e239]:
          - generic [ref=e240]:
            - img [ref=e241]
            - heading [level=2] [ref=e242]: Rs. 600
            - paragraph [ref=e243]: Winter Top
            - generic [ref=e244] [cursor=pointer]:
              - generic [ref=e245]: 
              - text: Add to cart
          - generic [ref=e246]:
            - heading [level=2] [ref=e247]: Rs. 600
            - paragraph [ref=e248]: Winter Top
            - generic [ref=e249] [cursor=pointer]:
              - generic [ref=e250]: 
              - text: Add to cart
        - list [ref=e252]:
          - listitem [ref=e253]:
            - link [ref=e254] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e255]: 
              - text: View Product
      - generic [ref=e257]:
        - generic [ref=e258]:
          - generic [ref=e259]:
            - img [ref=e260]
            - heading [level=2] [ref=e261]: Rs. 400
            - paragraph [ref=e262]: Summer White Top
            - generic [ref=e263] [cursor=pointer]:
              - generic [ref=e264]: 
              - text: Add to cart
          - generic [ref=e265]:
            - heading [level=2] [ref=e266]: Rs. 400
            - paragraph [ref=e267]: Summer White Top
            - generic [ref=e268] [cursor=pointer]:
              - generic [ref=e269]: 
              - text: Add to cart
        - list [ref=e271]:
          - listitem [ref=e272]:
            - link [ref=e273] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e274]: 
              - text: View Product
      - generic [ref=e276]:
        - generic [ref=e277]:
          - generic [ref=e278]:
            - img [ref=e279]
            - heading [level=2] [ref=e280]: Rs. 1000
            - paragraph [ref=e281]: Madame Top For Women
            - generic [ref=e282] [cursor=pointer]:
              - generic [ref=e283]: 
              - text: Add to cart
          - generic [ref=e284]:
            - heading [level=2] [ref=e285]: Rs. 1000
            - paragraph [ref=e286]: Madame Top For Women
            - generic [ref=e287] [cursor=pointer]:
              - generic [ref=e288]: 
              - text: Add to cart
        - list [ref=e290]:
          - listitem [ref=e291]:
            - link [ref=e292] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e293]: 
              - text: View Product
      - generic [ref=e295]:
        - generic [ref=e296]:
          - generic [ref=e297]:
            - img [ref=e298]
            - heading [level=2] [ref=e299]: Rs. 700
            - paragraph [ref=e300]: Fancy Green Top
            - generic [ref=e301] [cursor=pointer]:
              - generic [ref=e302]: 
              - text: Add to cart
          - generic [ref=e303]:
            - heading [level=2] [ref=e304]: Rs. 700
            - paragraph [ref=e305]: Fancy Green Top
            - generic [ref=e306] [cursor=pointer]:
              - generic [ref=e307]: 
              - text: Add to cart
        - list [ref=e309]:
          - listitem [ref=e310]:
            - link [ref=e311] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e312]: 
              - text: View Product
      - generic [ref=e314]:
        - generic [ref=e315]:
          - generic [ref=e316]:
            - img [ref=e317]
            - heading [level=2] [ref=e318]: Rs. 499
            - paragraph [ref=e319]: Sleeves Printed Top - White
            - generic [ref=e320] [cursor=pointer]:
              - generic [ref=e321]: 
              - text: Add to cart
          - generic [ref=e322]:
            - heading [level=2] [ref=e323]: Rs. 499
            - paragraph [ref=e324]: Sleeves Printed Top - White
            - generic [ref=e325] [cursor=pointer]:
              - generic [ref=e326]: 
              - text: Add to cart
        - list [ref=e328]:
          - listitem [ref=e329]:
            - link [ref=e330] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e331]: 
              - text: View Product
      - generic [ref=e333]:
        - generic [ref=e334]:
          - generic [ref=e335]:
            - img [ref=e336]
            - heading [level=2] [ref=e337]: Rs. 359
            - paragraph [ref=e338]:
              - text: Half Sleeves Top Schiffli Detailing - Pink
              - link [ref=e339] [cursor=pointer]:
                - img [ref=e341]
                - text: Browse Clothing
            - generic [ref=e343] [cursor=pointer]:
              - generic [ref=e344]: 
              - text: Add to cart
          - generic [ref=e345]:
            - heading [level=2] [ref=e346]: Rs. 359
            - paragraph [ref=e347]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e348] [cursor=pointer]:
              - generic [ref=e349]: 
              - text: Add to cart
        - list [ref=e351]:
          - listitem [ref=e352]:
            - link [ref=e353] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e354]: 
              - text: View Product
      - generic [ref=e356]:
        - generic [ref=e357]:
          - generic [ref=e358]:
            - img [ref=e359]
            - heading [level=2] [ref=e360]: Rs. 278
            - paragraph [ref=e361]: Frozen Tops For Kids
            - generic [ref=e362] [cursor=pointer]:
              - generic [ref=e363]: 
              - text: Add to cart
          - generic [ref=e364]:
            - heading [level=2] [ref=e365]: Rs. 278
            - paragraph [ref=e366]: Frozen Tops For Kids
            - generic [ref=e367] [cursor=pointer]:
              - generic [ref=e368]: 
              - text: Add to cart
        - list [ref=e370]:
          - listitem [ref=e371]:
            - link [ref=e372] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e373]: 
              - text: View Product
      - generic [ref=e375]:
        - generic [ref=e376]:
          - generic [ref=e377]:
            - img [ref=e378]
            - heading [level=2] [ref=e379]: Rs. 679
            - paragraph [ref=e380]: Full Sleeves Top Cherry - Pink
            - generic [ref=e381] [cursor=pointer]:
              - generic [ref=e382]: 
              - text: Add to cart
          - generic [ref=e383]:
            - heading [level=2] [ref=e384]: Rs. 679
            - paragraph [ref=e385]: Full Sleeves Top Cherry - Pink
            - generic [ref=e386] [cursor=pointer]:
              - generic [ref=e387]: 
              - text: Add to cart
        - list [ref=e389]:
          - listitem [ref=e390]:
            - link [ref=e391] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e392]: 
              - text: View Product
      - generic [ref=e394]:
        - generic [ref=e395]:
          - generic [ref=e396]:
            - img [ref=e397]
            - heading [level=2] [ref=e398]: Rs. 315
            - paragraph [ref=e399]: Printed Off Shoulder Top - White
            - generic [ref=e400] [cursor=pointer]:
              - generic [ref=e401]: 
              - text: Add to cart
          - generic [ref=e402]:
            - heading [level=2] [ref=e403]: Rs. 315
            - paragraph [ref=e404]: Printed Off Shoulder Top - White
            - generic [ref=e405] [cursor=pointer]:
              - generic [ref=e406]: 
              - text: Add to cart
        - list [ref=e408]:
          - listitem [ref=e409]:
            - link [ref=e410] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e411]: 
              - text: View Product
      - generic [ref=e413]:
        - generic [ref=e414]:
          - generic [ref=e415]:
            - img [ref=e416]
            - heading [level=2] [ref=e417]: Rs. 478
            - paragraph [ref=e418]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e419] [cursor=pointer]:
              - generic [ref=e420]: 
              - text: Add to cart
          - generic [ref=e421]:
            - heading [level=2] [ref=e422]: Rs. 478
            - paragraph [ref=e423]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e424] [cursor=pointer]:
              - generic [ref=e425]: 
              - text: Add to cart
        - list [ref=e427]:
          - listitem [ref=e428]:
            - link [ref=e429] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e430]: 
              - text: View Product
      - generic [ref=e432]:
        - generic [ref=e433]:
          - generic [ref=e434]:
            - img [ref=e435]
            - heading [level=2] [ref=e436]: Rs. 1200
            - paragraph [ref=e437]: Little Girls Mr. Panda Shirt
            - generic [ref=e438] [cursor=pointer]:
              - generic [ref=e439]: 
              - text: Add to cart
          - generic [ref=e440]:
            - heading [level=2] [ref=e441]: Rs. 1200
            - paragraph [ref=e442]: Little Girls Mr. Panda Shirt
            - generic [ref=e443] [cursor=pointer]:
              - generic [ref=e444]: 
              - text: Add to cart
        - list [ref=e446]:
          - listitem [ref=e447]:
            - link [ref=e448] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e449]: 
              - text: View Product
      - generic [ref=e451]:
        - generic [ref=e452]:
          - generic [ref=e453]:
            - img [ref=e454]
            - heading [level=2] [ref=e455]: Rs. 1050
            - paragraph [ref=e456]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e457] [cursor=pointer]:
              - generic [ref=e458]: 
              - text: Add to cart
          - generic [ref=e459]:
            - heading [level=2] [ref=e460]: Rs. 1050
            - paragraph [ref=e461]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e462] [cursor=pointer]:
              - generic [ref=e463]: 
              - text: Add to cart
        - list [ref=e465]:
          - listitem [ref=e466]:
            - link [ref=e467] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e468]: 
              - text: View Product
      - generic [ref=e470]:
        - generic [ref=e471]:
          - generic [ref=e472]:
            - img [ref=e473]
            - heading [level=2] [ref=e474]: Rs. 1190
            - paragraph [ref=e475]: Cotton Mull Embroidered Dress
            - generic [ref=e476] [cursor=pointer]:
              - generic [ref=e477]: 
              - text: Add to cart
          - generic [ref=e478]:
            - heading [level=2] [ref=e479]: Rs. 1190
            - paragraph [ref=e480]: Cotton Mull Embroidered Dress
            - generic [ref=e481] [cursor=pointer]:
              - generic [ref=e482]: 
              - text: Add to cart
        - list [ref=e484]:
          - listitem [ref=e485]:
            - link [ref=e486] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e487]: 
              - text: View Product
      - generic [ref=e489]:
        - generic [ref=e490]:
          - generic [ref=e491]:
            - img [ref=e492]
            - heading [level=2] [ref=e493]: Rs. 1530
            - paragraph [ref=e494]: Blue Cotton Indie Mickey Dress
            - generic [ref=e495] [cursor=pointer]:
              - generic [ref=e496]: 
              - text: Add to cart
          - generic [ref=e497]:
            - heading [level=2] [ref=e498]: Rs. 1530
            - paragraph [ref=e499]: Blue Cotton Indie Mickey Dress
            - generic [ref=e500] [cursor=pointer]:
              - generic [ref=e501]: 
              - text: Add to cart
        - list [ref=e503]:
          - listitem [ref=e504]:
            - link [ref=e505] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e506]: 
              - text: View Product
      - generic [ref=e508]:
        - generic [ref=e509]:
          - generic [ref=e510]:
            - img [ref=e511]
            - heading [level=2] [ref=e512]: Rs. 1600
            - paragraph [ref=e513]:
              - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - link [ref=e514] [cursor=pointer]:
                - img [ref=e516]
                - text: Women's Dresses
            - generic [ref=e518] [cursor=pointer]:
              - generic [ref=e519]: 
              - text: Add to cart
          - generic [ref=e520]:
            - heading [level=2] [ref=e521]: Rs. 1600
            - paragraph [ref=e522]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e523] [cursor=pointer]:
              - generic [ref=e524]: 
              - text: Add to cart
        - list [ref=e526]:
          - listitem [ref=e527]:
            - link [ref=e528] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e529]: 
              - text: View Product
      - generic [ref=e531]:
        - generic [ref=e532]:
          - generic [ref=e533]:
            - img [ref=e534]
            - heading [level=2] [ref=e535]: Rs. 1100
            - paragraph [ref=e536]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e537] [cursor=pointer]:
              - generic [ref=e538]: 
              - text: Add to cart
          - generic [ref=e539]:
            - heading [level=2] [ref=e540]: Rs. 1100
            - paragraph [ref=e541]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e542] [cursor=pointer]:
              - generic [ref=e543]: 
              - text: Add to cart
        - list [ref=e545]:
          - listitem [ref=e546]:
            - link [ref=e547] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e548]: 
              - text: View Product
      - generic [ref=e550]:
        - generic [ref=e551]:
          - generic [ref=e552]:
            - img [ref=e553]
            - heading [level=2] [ref=e554]: Rs. 849
            - paragraph [ref=e555]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e556] [cursor=pointer]:
              - generic [ref=e557]: 
              - text: Add to cart
          - generic [ref=e558]:
            - heading [level=2] [ref=e559]: Rs. 849
            - paragraph [ref=e560]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e561] [cursor=pointer]:
              - generic [ref=e562]: 
              - text: Add to cart
        - list [ref=e564]:
          - listitem [ref=e565]:
            - link [ref=e566] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e567]: 
              - text: View Product
      - generic [ref=e569]:
        - generic [ref=e570]:
          - generic [ref=e571]:
            - img [ref=e572]
            - heading [level=2] [ref=e573]: Rs. 1299
            - paragraph [ref=e574]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e575] [cursor=pointer]:
              - generic [ref=e576]: 
              - text: Add to cart
          - generic [ref=e577]:
            - heading [level=2] [ref=e578]: Rs. 1299
            - paragraph [ref=e579]: Pure Cotton V-Neck T-Shirt
            - generic [ref=e580] [cursor=pointer]:
              - generic [ref=e581]: 
              - text: Add to cart
        - list [ref=e583]:
          - listitem [ref=e584]:
            - link [ref=e585] [cursor=pointer]:
              - /url: /product_details/28
              - generic [ref=e586]: 
              - text: View Product
      - generic [ref=e588]:
        - generic [ref=e589]:
          - generic [ref=e590]:
            - img [ref=e591]
            - heading [level=2] [ref=e592]: Rs. 1000
            - paragraph [ref=e593]: Green Side Placket Detail T-Shirt
            - generic [ref=e594] [cursor=pointer]:
              - generic [ref=e595]: 
              - text: Add to cart
          - generic [ref=e596]:
            - heading [level=2] [ref=e597]: Rs. 1000
            - paragraph [ref=e598]: Green Side Placket Detail T-Shirt
            - generic [ref=e599] [cursor=pointer]:
              - generic [ref=e600]: 
              - text: Add to cart
        - list [ref=e602]:
          - listitem [ref=e603]:
            - link [ref=e604] [cursor=pointer]:
              - /url: /product_details/29
              - generic [ref=e605]: 
              - text: View Product
      - generic [ref=e607]:
        - generic [ref=e608]:
          - generic [ref=e609]:
            - img [ref=e610]
            - heading [level=2] [ref=e611]: Rs. 1500
            - paragraph [ref=e612]: Premium Polo T-Shirts
            - generic [ref=e613] [cursor=pointer]:
              - generic [ref=e614]: 
              - text: Add to cart
          - generic [ref=e615]:
            - heading [level=2] [ref=e616]: Rs. 1500
            - paragraph [ref=e617]: Premium Polo T-Shirts
            - generic [ref=e618] [cursor=pointer]:
              - generic [ref=e619]: 
              - text: Add to cart
        - list [ref=e621]:
          - listitem [ref=e622]:
            - link [ref=e623] [cursor=pointer]:
              - /url: /product_details/30
              - generic [ref=e624]: 
              - text: View Product
      - generic [ref=e626]:
        - generic [ref=e627]:
          - generic [ref=e628]:
            - img [ref=e629]
            - heading [level=2] [ref=e630]: Rs. 850
            - paragraph [ref=e631]: Pure Cotton Neon Green Tshirt
            - generic [ref=e632] [cursor=pointer]:
              - generic [ref=e633]: 
              - text: Add to cart
          - generic [ref=e634]:
            - heading [level=2] [ref=e635]: Rs. 850
            - paragraph [ref=e636]: Pure Cotton Neon Green Tshirt
            - generic [ref=e637] [cursor=pointer]:
              - generic [ref=e638]: 
              - text: Add to cart
        - list [ref=e640]:
          - listitem [ref=e641]:
            - link [ref=e642] [cursor=pointer]:
              - /url: /product_details/31
              - generic [ref=e643]: 
              - text: View Product
      - generic [ref=e645]:
        - generic [ref=e646]:
          - generic [ref=e647]:
            - img [ref=e648]
            - heading [level=2] [ref=e649]: Rs. 799
            - paragraph [ref=e650]: Soft Stretch Jeans
            - generic [ref=e651] [cursor=pointer]:
              - generic [ref=e652]: 
              - text: Add to cart
          - generic [ref=e653]:
            - heading [level=2] [ref=e654]: Rs. 799
            - paragraph [ref=e655]: Soft Stretch Jeans
            - generic [ref=e656] [cursor=pointer]:
              - generic [ref=e657]: 
              - text: Add to cart
        - list [ref=e659]:
          - listitem [ref=e660]:
            - link [ref=e661] [cursor=pointer]:
              - /url: /product_details/33
              - generic [ref=e662]: 
              - text: View Product
      - generic [ref=e664]:
        - generic [ref=e665]:
          - generic [ref=e666]:
            - img [ref=e667]
            - heading [level=2] [ref=e668]: Rs. 1200
            - paragraph [ref=e669]: Regular Fit Straight Jeans
            - generic [ref=e670] [cursor=pointer]:
              - generic [ref=e671]: 
              - text: Add to cart
          - generic [ref=e672]:
            - heading [level=2] [ref=e673]: Rs. 1200
            - paragraph [ref=e674]: Regular Fit Straight Jeans
            - generic [ref=e675] [cursor=pointer]:
              - generic [ref=e676]: 
              - text: Add to cart
        - list [ref=e678]:
          - listitem [ref=e679]:
            - link [ref=e680] [cursor=pointer]:
              - /url: /product_details/35
              - generic [ref=e681]: 
              - text: View Product
      - generic [ref=e683]:
        - generic [ref=e684]:
          - generic [ref=e685]:
            - img [ref=e686]
            - heading [level=2] [ref=e687]: Rs. 1400
            - paragraph [ref=e688]: Grunt Blue Slim Fit Jeans
            - generic [ref=e689] [cursor=pointer]:
              - generic [ref=e690]: 
              - text: Add to cart
          - generic [ref=e691]:
            - heading [level=2] [ref=e692]: Rs. 1400
            - paragraph [ref=e693]: Grunt Blue Slim Fit Jeans
            - generic [ref=e694] [cursor=pointer]:
              - generic [ref=e695]: 
              - text: Add to cart
        - list [ref=e697]:
          - listitem [ref=e698]:
            - link [ref=e699] [cursor=pointer]:
              - /url: /product_details/37
              - generic [ref=e700]: 
              - text: View Product
      - generic [ref=e702]:
        - generic [ref=e703]:
          - generic [ref=e704]:
            - img [ref=e705]
            - heading [level=2] [ref=e706]: Rs. 2300
            - paragraph [ref=e707]:
              - text: Rose Pink Embroidered Maxi Dress
              - link [ref=e708] [cursor=pointer]:
                - img [ref=e710]
                - text: Women's Dresses
            - generic [ref=e712] [cursor=pointer]:
              - generic [ref=e713]: 
              - text: Add to cart
          - generic [ref=e714]:
            - heading [level=2] [ref=e715]: Rs. 2300
            - paragraph [ref=e716]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e717] [cursor=pointer]:
              - generic [ref=e718]: 
              - text: Add to cart
        - list [ref=e720]:
          - listitem [ref=e721]:
            - link [ref=e722] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e723]: 
              - text: View Product
      - generic [ref=e725]:
        - generic [ref=e726]:
          - generic [ref=e727]:
            - img [ref=e728]
            - heading [level=2] [ref=e729]: Rs. 3000
            - paragraph [ref=e730]: Cotton Silk Hand Block Print Saree
            - generic [ref=e731] [cursor=pointer]:
              - generic [ref=e732]: 
              - text: Add to cart
          - generic [ref=e733]:
            - heading [level=2] [ref=e734]: Rs. 3000
            - paragraph [ref=e735]: Cotton Silk Hand Block Print Saree
            - generic [ref=e736] [cursor=pointer]:
              - generic [ref=e737]: 
              - text: Add to cart
        - list [ref=e739]:
          - listitem [ref=e740]:
            - link [ref=e741] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e742]: 
              - text: View Product
      - generic [ref=e744]:
        - generic [ref=e745]:
          - generic [ref=e746]:
            - img [ref=e747]
            - heading [level=2] [ref=e748]: Rs. 3500
            - paragraph [ref=e749]: Rust Red Linen Saree
            - generic [ref=e750] [cursor=pointer]:
              - generic [ref=e751]: 
              - text: Add to cart
          - generic [ref=e752]:
            - heading [level=2] [ref=e753]: Rs. 3500
            - paragraph [ref=e754]: Rust Red Linen Saree
            - generic [ref=e755] [cursor=pointer]:
              - generic [ref=e756]: 
              - text: Add to cart
        - list [ref=e758]:
          - listitem [ref=e759]:
            - link [ref=e760] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e761]: 
              - text: View Product
      - generic [ref=e763]:
        - generic [ref=e764]:
          - generic [ref=e765]:
            - img [ref=e766]
            - heading [level=2] [ref=e767]: Rs. 5000
            - paragraph [ref=e768]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e769] [cursor=pointer]:
              - generic [ref=e770]: 
              - text: Add to cart
          - generic [ref=e771]:
            - heading [level=2] [ref=e772]: Rs. 5000
            - paragraph [ref=e773]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e774] [cursor=pointer]:
              - generic [ref=e775]: 
              - text: Add to cart
        - list [ref=e777]:
          - listitem [ref=e778]:
            - link [ref=e779] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e780]: 
              - text: View Product
      - generic [ref=e782]:
        - generic [ref=e783]:
          - generic [ref=e784]:
            - img [ref=e785]
            - heading [level=2] [ref=e786]: Rs. 1400
            - paragraph [ref=e787]: Lace Top For Women
            - generic [ref=e788] [cursor=pointer]:
              - generic [ref=e789]: 
              - text: Add to cart
          - generic [ref=e790]:
            - heading [level=2] [ref=e791]: Rs. 1400
            - paragraph [ref=e792]: Lace Top For Women
            - generic [ref=e793] [cursor=pointer]:
              - generic [ref=e794]: 
              - text: Add to cart
        - list [ref=e796]:
          - listitem [ref=e797]:
            - link [ref=e798] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e799]: 
              - text: View Product
      - generic [ref=e801]:
        - generic [ref=e802]:
          - generic [ref=e803]:
            - img [ref=e804]
            - heading [level=2] [ref=e805]: Rs. 1389
            - paragraph [ref=e806]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e807] [cursor=pointer]:
              - generic [ref=e808]: 
              - text: Add to cart
          - generic [ref=e809]:
            - heading [level=2] [ref=e810]: Rs. 1389
            - paragraph [ref=e811]: GRAPHIC DESIGN MEN T SHIRT - BLUE
            - generic [ref=e812] [cursor=pointer]:
              - generic [ref=e813]: 
              - text: Add to cart
        - list [ref=e815]:
          - listitem [ref=e816]:
            - link [ref=e817] [cursor=pointer]:
              - /url: /product_details/43
              - generic [ref=e818]: 
              - text: View Product
  - contentinfo [ref=e819]:
    - insertion [ref=e821]
    - generic [ref=e827]:
      - heading [level=2] [ref=e828]: Subscription
      - generic [ref=e829]:
        - textbox [ref=e830]:
          - /placeholder: Your email address
        - button [ref=e831] [cursor=pointer]:
          - generic [ref=e832]: 
        - paragraph [ref=e833]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e837]: Copyright © 2021 All rights reserved
  - link [ref=e838] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e839]: 
  - insertion [ref=e841]
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
> 92 |     await expect(page).toHaveTitle('Automation Exercise - Product Details');
     |                        ^ Error: expect(page).toHaveTitle(expected) failed
  93 |     await products.addquantityInput.fill('2');
  94 |     await products.viewProductAddToCart.click();
  95 | 
  96 | })
```