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
        - iframe [ref=e69]:
          
        - generic [ref=e70]:
          - heading [level=2] [ref=e71]: Brands
          - list [ref=e73]:
            - listitem [ref=e74]:
              - link [ref=e75] [cursor=pointer]:
                - /url: /brand_products/Polo
                - generic [ref=e76]: (6)
                - text: Polo
            - listitem [ref=e77]:
              - link [ref=e78] [cursor=pointer]:
                - /url: /brand_products/H&M
                - generic [ref=e79]: (5)
                - text: H&M
            - listitem [ref=e80]:
              - link [ref=e81] [cursor=pointer]:
                - /url: /brand_products/Madame
                - generic [ref=e82]: (5)
                - text: Madame
            - listitem [ref=e83]:
              - link [ref=e84] [cursor=pointer]:
                - /url: /brand_products/Mast & Harbour
                - generic [ref=e85]: (3)
                - text: Mast & Harbour
            - listitem [ref=e86]:
              - link [ref=e87] [cursor=pointer]:
                - /url: /brand_products/Babyhug
                - generic [ref=e88]: (4)
                - text: Babyhug
            - listitem [ref=e89]:
              - link [ref=e90] [cursor=pointer]:
                - /url: /brand_products/Allen Solly Junior
                - generic [ref=e91]: (3)
                - text: Allen Solly Junior
            - listitem [ref=e92]:
              - link [ref=e93] [cursor=pointer]:
                - /url: /brand_products/Kookie Kids
                - generic [ref=e94]: (3)
                - text: Kookie Kids
            - listitem [ref=e95]:
              - link [ref=e96] [cursor=pointer]:
                - /url: /brand_products/Biba
                - generic [ref=e97]: (5)
                - text: Biba
      - insertion [ref=e99]:
        - generic [ref=e102]:
          - heading [level=2] [ref=e104]: Discover more
          - link [ref=e105] [cursor=pointer]:
            - generic [ref=e106]: Men's Clothing
            - img [ref=e108]
          - link [ref=e110] [cursor=pointer]:
            - generic [ref=e111]: Manufacturing
            - img [ref=e113]
          - link [ref=e115] [cursor=pointer]:
            - generic [ref=e116]: GRAPHIC DESIGN
            - img [ref=e118]
          - link [ref=e120] [cursor=pointer]:
            - generic [ref=e121]: Saree
            - img [ref=e123]
          - link [ref=e125] [cursor=pointer]:
            - generic [ref=e126]: Fashion Designers & Collections
            - img [ref=e128]
          - link [ref=e130] [cursor=pointer]:
            - generic [ref=e131]: Autos & Vehicles
            - img [ref=e133]
          - link [ref=e135] [cursor=pointer]:
            - generic [ref=e136]: T SHIRT
            - img [ref=e138]
          - link [ref=e140] [cursor=pointer]:
            - generic [ref=e141]: Flora & Fauna
            - img [ref=e143]
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
              - text: Men
              - link [ref=e174] [cursor=pointer]:
                - /url: "#"
                - img [ref=e175]
                - text: Tshirt
            - generic [ref=e177] [cursor=pointer]:
              - generic [ref=e178]: 
              - text: Add to cart
          - generic [ref=e179]:
            - heading [level=2] [ref=e180]: Rs. 400
            - paragraph [ref=e181]: Men Tshirt
            - generic [ref=e182] [cursor=pointer]:
              - generic [ref=e183]: 
              - text: Add to cart
        - list [ref=e185]:
          - listitem [ref=e186]:
            - link [ref=e187] [cursor=pointer]:
              - /url: /product_details/2
              - generic [ref=e188]: 
              - text: View Product
      - generic [ref=e190]:
        - generic [ref=e191]:
          - generic [ref=e192]:
            - img [ref=e193]
            - heading [level=2] [ref=e194]: Rs. 1000
            - paragraph [ref=e195]:
              - text: Sleeveless
              - link [ref=e196] [cursor=pointer]:
                - /url: "#"
                - img [ref=e197]
                - text: Dress
            - generic [ref=e199] [cursor=pointer]:
              - generic [ref=e200]: 
              - text: Add to cart
          - generic [ref=e201]:
            - heading [level=2] [ref=e202]: Rs. 1000
            - paragraph [ref=e203]: Sleeveless Dress
            - generic [ref=e204] [cursor=pointer]:
              - generic [ref=e205]: 
              - text: Add to cart
        - list [ref=e207]:
          - listitem [ref=e208]:
            - link [ref=e209] [cursor=pointer]:
              - /url: /product_details/3
              - generic [ref=e210]: 
              - text: View Product
      - generic [ref=e212]:
        - generic [ref=e213]:
          - generic [ref=e214]:
            - img [ref=e215]
            - heading [level=2] [ref=e216]: Rs. 1500
            - paragraph [ref=e217]: Stylish Dress
            - generic [ref=e218] [cursor=pointer]:
              - generic [ref=e219]: 
              - text: Add to cart
          - generic [ref=e220]:
            - heading [level=2] [ref=e221]: Rs. 1500
            - paragraph [ref=e222]: Stylish Dress
            - generic [ref=e223] [cursor=pointer]:
              - generic [ref=e224]: 
              - text: Add to cart
        - list [ref=e226]:
          - listitem [ref=e227]:
            - link [ref=e228] [cursor=pointer]:
              - /url: /product_details/4
              - generic [ref=e229]: 
              - text: View Product
      - generic [ref=e231]:
        - generic [ref=e232]:
          - generic [ref=e233]:
            - img [ref=e234]
            - heading [level=2] [ref=e235]: Rs. 600
            - paragraph [ref=e236]: Winter Top
            - generic [ref=e237] [cursor=pointer]:
              - generic [ref=e238]: 
              - text: Add to cart
          - generic [ref=e239]:
            - heading [level=2] [ref=e240]: Rs. 600
            - paragraph [ref=e241]: Winter Top
            - generic [ref=e242] [cursor=pointer]:
              - generic [ref=e243]: 
              - text: Add to cart
        - list [ref=e245]:
          - listitem [ref=e246]:
            - link [ref=e247] [cursor=pointer]:
              - /url: /product_details/5
              - generic [ref=e248]: 
              - text: View Product
      - generic [ref=e250]:
        - generic [ref=e251]:
          - generic [ref=e252]:
            - img [ref=e253]
            - heading [level=2] [ref=e254]: Rs. 400
            - paragraph [ref=e255]: Summer White Top
            - generic [ref=e256] [cursor=pointer]:
              - generic [ref=e257]: 
              - text: Add to cart
          - generic [ref=e258]:
            - heading [level=2] [ref=e259]: Rs. 400
            - paragraph [ref=e260]: Summer White Top
            - generic [ref=e261] [cursor=pointer]:
              - generic [ref=e262]: 
              - text: Add to cart
        - list [ref=e264]:
          - listitem [ref=e265]:
            - link [ref=e266] [cursor=pointer]:
              - /url: /product_details/6
              - generic [ref=e267]: 
              - text: View Product
      - generic [ref=e269]:
        - generic [ref=e270]:
          - generic [ref=e271]:
            - img [ref=e272]
            - heading [level=2] [ref=e273]: Rs. 1000
            - paragraph [ref=e274]: Madame Top For Women
            - generic [ref=e275] [cursor=pointer]:
              - generic [ref=e276]: 
              - text: Add to cart
          - generic [ref=e277]:
            - heading [level=2] [ref=e278]: Rs. 1000
            - paragraph [ref=e279]: Madame Top For Women
            - generic [ref=e280] [cursor=pointer]:
              - generic [ref=e281]: 
              - text: Add to cart
        - list [ref=e283]:
          - listitem [ref=e284]:
            - link [ref=e285] [cursor=pointer]:
              - /url: /product_details/7
              - generic [ref=e286]: 
              - text: View Product
      - generic [ref=e288]:
        - generic [ref=e289]:
          - generic [ref=e290]:
            - img [ref=e291]
            - heading [level=2] [ref=e292]: Rs. 700
            - paragraph [ref=e293]: Fancy Green Top
            - generic [ref=e294] [cursor=pointer]:
              - generic [ref=e295]: 
              - text: Add to cart
          - generic [ref=e296]:
            - heading [level=2] [ref=e297]: Rs. 700
            - paragraph [ref=e298]: Fancy Green Top
            - generic [ref=e299] [cursor=pointer]:
              - generic [ref=e300]: 
              - text: Add to cart
        - list [ref=e302]:
          - listitem [ref=e303]:
            - link [ref=e304] [cursor=pointer]:
              - /url: /product_details/8
              - generic [ref=e305]: 
              - text: View Product
      - generic [ref=e307]:
        - generic [ref=e308]:
          - generic [ref=e309]:
            - img [ref=e310]
            - heading [level=2] [ref=e311]: Rs. 499
            - paragraph [ref=e312]:
              - text: Sleeves Printed Top - White
              - link [ref=e313] [cursor=pointer]:
                - img [ref=e315]
                - text: Economics
            - generic [ref=e317] [cursor=pointer]:
              - generic [ref=e318]: 
              - text: Add to cart
          - generic [ref=e319]:
            - heading [level=2] [ref=e320]: Rs. 499
            - paragraph [ref=e321]: Sleeves Printed Top - White
            - generic [ref=e322] [cursor=pointer]:
              - generic [ref=e323]: 
              - text: Add to cart
        - list [ref=e325]:
          - listitem [ref=e326]:
            - link [ref=e327] [cursor=pointer]:
              - /url: /product_details/11
              - generic [ref=e328]: 
              - text: View Product
      - generic [ref=e330]:
        - generic [ref=e331]:
          - generic [ref=e332]:
            - img [ref=e333]
            - heading [level=2] [ref=e334]: Rs. 359
            - paragraph [ref=e335]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e336] [cursor=pointer]:
              - generic [ref=e337]: 
              - text: Add to cart
          - generic [ref=e338]:
            - heading [level=2] [ref=e339]: Rs. 359
            - paragraph [ref=e340]: Half Sleeves Top Schiffli Detailing - Pink
            - generic [ref=e341] [cursor=pointer]:
              - generic [ref=e342]: 
              - text: Add to cart
        - list [ref=e344]:
          - listitem [ref=e345]:
            - link [ref=e346] [cursor=pointer]:
              - /url: /product_details/12
              - generic [ref=e347]: 
              - text: View Product
      - generic [ref=e349]:
        - generic [ref=e350]:
          - generic [ref=e351]:
            - img [ref=e352]
            - heading [level=2] [ref=e353]: Rs. 278
            - paragraph [ref=e354]: Frozen Tops For Kids
            - generic [ref=e355] [cursor=pointer]:
              - generic [ref=e356]: 
              - text: Add to cart
          - generic [ref=e357]:
            - heading [level=2] [ref=e358]: Rs. 278
            - paragraph [ref=e359]: Frozen Tops For Kids
            - generic [ref=e360] [cursor=pointer]:
              - generic [ref=e361]: 
              - text: Add to cart
        - list [ref=e363]:
          - listitem [ref=e364]:
            - link [ref=e365] [cursor=pointer]:
              - /url: /product_details/13
              - generic [ref=e366]: 
              - text: View Product
      - generic [ref=e368]:
        - generic [ref=e369]:
          - generic [ref=e370]:
            - img [ref=e371]
            - heading [level=2] [ref=e372]: Rs. 679
            - paragraph [ref=e373]: Full Sleeves Top Cherry - Pink
            - generic [ref=e374] [cursor=pointer]:
              - generic [ref=e375]: 
              - text: Add to cart
          - generic [ref=e376]:
            - heading [level=2] [ref=e377]: Rs. 679
            - paragraph [ref=e378]: Full Sleeves Top Cherry - Pink
            - generic [ref=e379] [cursor=pointer]:
              - generic [ref=e380]: 
              - text: Add to cart
        - list [ref=e382]:
          - listitem [ref=e383]:
            - link [ref=e384] [cursor=pointer]:
              - /url: /product_details/14
              - generic [ref=e385]: 
              - text: View Product
      - generic [ref=e387]:
        - generic [ref=e388]:
          - generic [ref=e389]:
            - img [ref=e390]
            - heading [level=2] [ref=e391]: Rs. 315
            - paragraph [ref=e392]:
              - text: Printed Off Shoulder Top - White
              - link [ref=e393] [cursor=pointer]:
                - img [ref=e395]
                - text: T-Shirts
            - generic [ref=e397] [cursor=pointer]:
              - generic [ref=e398]: 
              - text: Add to cart
          - generic [ref=e399]:
            - heading [level=2] [ref=e400]: Rs. 315
            - paragraph [ref=e401]: Printed Off Shoulder Top - White
            - generic [ref=e402] [cursor=pointer]:
              - generic [ref=e403]: 
              - text: Add to cart
        - list [ref=e405]:
          - listitem [ref=e406]:
            - link [ref=e407] [cursor=pointer]:
              - /url: /product_details/15
              - generic [ref=e408]: 
              - text: View Product
      - generic [ref=e410]:
        - generic [ref=e411]:
          - generic [ref=e412]:
            - img [ref=e413]
            - heading [level=2] [ref=e414]: Rs. 478
            - paragraph [ref=e415]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e416] [cursor=pointer]:
              - generic [ref=e417]: 
              - text: Add to cart
          - generic [ref=e418]:
            - heading [level=2] [ref=e419]: Rs. 478
            - paragraph [ref=e420]: Sleeves Top and Short - Blue & Pink
            - generic [ref=e421] [cursor=pointer]:
              - generic [ref=e422]: 
              - text: Add to cart
        - list [ref=e424]:
          - listitem [ref=e425]:
            - link [ref=e426] [cursor=pointer]:
              - /url: /product_details/16
              - generic [ref=e427]: 
              - text: View Product
      - generic [ref=e429]:
        - generic [ref=e430]:
          - generic [ref=e431]:
            - img [ref=e432]
            - heading [level=2] [ref=e433]: Rs. 1200
            - paragraph [ref=e434]: Little Girls Mr. Panda Shirt
            - generic [ref=e435] [cursor=pointer]:
              - generic [ref=e436]: 
              - text: Add to cart
          - generic [ref=e437]:
            - heading [level=2] [ref=e438]: Rs. 1200
            - paragraph [ref=e439]: Little Girls Mr. Panda Shirt
            - generic [ref=e440] [cursor=pointer]:
              - generic [ref=e441]: 
              - text: Add to cart
        - list [ref=e443]:
          - listitem [ref=e444]:
            - link [ref=e445] [cursor=pointer]:
              - /url: /product_details/18
              - generic [ref=e446]: 
              - text: View Product
      - generic [ref=e448]:
        - generic [ref=e449]:
          - generic [ref=e450]:
            - img [ref=e451]
            - heading [level=2] [ref=e452]: Rs. 1050
            - paragraph [ref=e453]:
              - text: Sleeveless Unicorn Patch Gown - Pink
              - link [ref=e454] [cursor=pointer]:
                - img [ref=e456]
                - text: Apparel
            - generic [ref=e458] [cursor=pointer]:
              - generic [ref=e459]: 
              - text: Add to cart
          - generic [ref=e460]:
            - heading [level=2] [ref=e461]: Rs. 1050
            - paragraph [ref=e462]: Sleeveless Unicorn Patch Gown - Pink
            - generic [ref=e463] [cursor=pointer]:
              - generic [ref=e464]: 
              - text: Add to cart
        - list [ref=e466]:
          - listitem [ref=e467]:
            - link [ref=e468] [cursor=pointer]:
              - /url: /product_details/19
              - generic [ref=e469]: 
              - text: View Product
      - generic [ref=e471]:
        - generic [ref=e472]:
          - generic [ref=e473]:
            - img [ref=e474]
            - heading [level=2] [ref=e475]: Rs. 1190
            - paragraph [ref=e476]: Cotton Mull Embroidered Dress
            - generic [ref=e477] [cursor=pointer]:
              - generic [ref=e478]: 
              - text: Add to cart
          - generic [ref=e479]:
            - heading [level=2] [ref=e480]: Rs. 1190
            - paragraph [ref=e481]: Cotton Mull Embroidered Dress
            - generic [ref=e482] [cursor=pointer]:
              - generic [ref=e483]: 
              - text: Add to cart
        - list [ref=e485]:
          - listitem [ref=e486]:
            - link [ref=e487] [cursor=pointer]:
              - /url: /product_details/20
              - generic [ref=e488]: 
              - text: View Product
      - generic [ref=e490]:
        - generic [ref=e491]:
          - generic [ref=e492]:
            - img [ref=e493]
            - heading [level=2] [ref=e494]: Rs. 1530
            - paragraph [ref=e495]: Blue Cotton Indie Mickey Dress
            - generic [ref=e496] [cursor=pointer]:
              - generic [ref=e497]: 
              - text: Add to cart
          - generic [ref=e498]:
            - heading [level=2] [ref=e499]: Rs. 1530
            - paragraph [ref=e500]: Blue Cotton Indie Mickey Dress
            - generic [ref=e501] [cursor=pointer]:
              - generic [ref=e502]: 
              - text: Add to cart
        - list [ref=e504]:
          - listitem [ref=e505]:
            - link [ref=e506] [cursor=pointer]:
              - /url: /product_details/21
              - generic [ref=e507]: 
              - text: View Product
      - generic [ref=e509]:
        - generic [ref=e510]:
          - generic [ref=e511]:
            - img [ref=e512]
            - heading [level=2] [ref=e513]: Rs. 1600
            - paragraph [ref=e514]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e515] [cursor=pointer]:
              - generic [ref=e516]: 
              - text: Add to cart
          - generic [ref=e517]:
            - heading [level=2] [ref=e518]: Rs. 1600
            - paragraph [ref=e519]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
            - generic [ref=e520] [cursor=pointer]:
              - generic [ref=e521]: 
              - text: Add to cart
        - list [ref=e523]:
          - listitem [ref=e524]:
            - link [ref=e525] [cursor=pointer]:
              - /url: /product_details/22
              - generic [ref=e526]: 
              - text: View Product
      - generic [ref=e528]:
        - generic [ref=e529]:
          - generic [ref=e530]:
            - img [ref=e531]
            - heading [level=2] [ref=e532]: Rs. 1100
            - paragraph [ref=e533]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e534] [cursor=pointer]:
              - generic [ref=e535]: 
              - text: Add to cart
          - generic [ref=e536]:
            - heading [level=2] [ref=e537]: Rs. 1100
            - paragraph [ref=e538]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
            - generic [ref=e539] [cursor=pointer]:
              - generic [ref=e540]: 
              - text: Add to cart
        - list [ref=e542]:
          - listitem [ref=e543]:
            - link [ref=e544] [cursor=pointer]:
              - /url: /product_details/23
              - generic [ref=e545]: 
              - text: View Product
      - generic [ref=e547]:
        - generic [ref=e548]:
          - generic [ref=e549]:
            - img [ref=e550]
            - heading [level=2] [ref=e551]: Rs. 849
            - paragraph [ref=e552]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e553] [cursor=pointer]:
              - generic [ref=e554]: 
              - text: Add to cart
          - generic [ref=e555]:
            - heading [level=2] [ref=e556]: Rs. 849
            - paragraph [ref=e557]: Colour Blocked Shirt – Sky Blue
            - generic [ref=e558] [cursor=pointer]:
              - generic [ref=e559]: 
              - text: Add to cart
        - list [ref=e561]:
          - listitem [ref=e562]:
            - link [ref=e563] [cursor=pointer]:
              - /url: /product_details/24
              - generic [ref=e564]: 
              - text: View Product
      - generic [ref=e566]:
        - generic [ref=e567]:
          - generic [ref=e568]:
            - img [ref=e569]
            - heading [level=2] [ref=e570]: Rs. 1299
            - paragraph [ref=e571]:
              - text: Pure Cotton V-Neck
              - link [ref=e572] [cursor=pointer]:
                - /url: "#"
                - img [ref=e573]
                - text: T-Shirt
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
            - paragraph [ref=e707]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e708] [cursor=pointer]:
              - generic [ref=e709]: 
              - text: Add to cart
          - generic [ref=e710]:
            - heading [level=2] [ref=e711]: Rs. 2300
            - paragraph [ref=e712]: Rose Pink Embroidered Maxi Dress
            - generic [ref=e713] [cursor=pointer]:
              - generic [ref=e714]: 
              - text: Add to cart
        - list [ref=e716]:
          - listitem [ref=e717]:
            - link [ref=e718] [cursor=pointer]:
              - /url: /product_details/38
              - generic [ref=e719]: 
              - text: View Product
      - generic [ref=e721]:
        - generic [ref=e722]:
          - generic [ref=e723]:
            - img [ref=e724]
            - heading [level=2] [ref=e725]: Rs. 3000
            - paragraph [ref=e726]: Cotton Silk Hand Block Print Saree
            - generic [ref=e727] [cursor=pointer]:
              - generic [ref=e728]: 
              - text: Add to cart
          - generic [ref=e729]:
            - heading [level=2] [ref=e730]: Rs. 3000
            - paragraph [ref=e731]: Cotton Silk Hand Block Print Saree
            - generic [ref=e732] [cursor=pointer]:
              - generic [ref=e733]: 
              - text: Add to cart
        - list [ref=e735]:
          - listitem [ref=e736]:
            - link [ref=e737] [cursor=pointer]:
              - /url: /product_details/39
              - generic [ref=e738]: 
              - text: View Product
      - generic [ref=e740]:
        - generic [ref=e741]:
          - generic [ref=e742]:
            - img [ref=e743]
            - heading [level=2] [ref=e744]: Rs. 3500
            - paragraph [ref=e745]: Rust Red Linen Saree
            - generic [ref=e746] [cursor=pointer]:
              - generic [ref=e747]: 
              - text: Add to cart
          - generic [ref=e748]:
            - heading [level=2] [ref=e749]: Rs. 3500
            - paragraph [ref=e750]: Rust Red Linen Saree
            - generic [ref=e751] [cursor=pointer]:
              - generic [ref=e752]: 
              - text: Add to cart
        - list [ref=e754]:
          - listitem [ref=e755]:
            - link [ref=e756] [cursor=pointer]:
              - /url: /product_details/40
              - generic [ref=e757]: 
              - text: View Product
      - generic [ref=e759]:
        - generic [ref=e760]:
          - generic [ref=e761]:
            - img [ref=e762]
            - heading [level=2] [ref=e763]: Rs. 5000
            - paragraph [ref=e764]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e765] [cursor=pointer]:
              - generic [ref=e766]: 
              - text: Add to cart
          - generic [ref=e767]:
            - heading [level=2] [ref=e768]: Rs. 5000
            - paragraph [ref=e769]: Beautiful Peacock Blue Cotton Linen Saree
            - generic [ref=e770] [cursor=pointer]:
              - generic [ref=e771]: 
              - text: Add to cart
        - list [ref=e773]:
          - listitem [ref=e774]:
            - link [ref=e775] [cursor=pointer]:
              - /url: /product_details/41
              - generic [ref=e776]: 
              - text: View Product
      - generic [ref=e778]:
        - generic [ref=e779]:
          - generic [ref=e780]:
            - img [ref=e781]
            - heading [level=2] [ref=e782]: Rs. 1400
            - paragraph [ref=e783]: Lace Top For Women
            - generic [ref=e784] [cursor=pointer]:
              - generic [ref=e785]: 
              - text: Add to cart
          - generic [ref=e786]:
            - heading [level=2] [ref=e787]: Rs. 1400
            - paragraph [ref=e788]: Lace Top For Women
            - generic [ref=e789] [cursor=pointer]:
              - generic [ref=e790]: 
              - text: Add to cart
        - list [ref=e792]:
          - listitem [ref=e793]:
            - link [ref=e794] [cursor=pointer]:
              - /url: /product_details/42
              - generic [ref=e795]: 
              - text: View Product
      - generic [ref=e797]:
        - generic [ref=e798]:
          - generic [ref=e799]:
            - img [ref=e800]
            - heading [level=2] [ref=e801]: Rs. 1389
            - paragraph [ref=e802]:
              - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - link [ref=e803] [cursor=pointer]:
                - img [ref=e805]
                - text: Textiles & Nonwovens
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
  - insertion [ref=e820]
  - contentinfo [ref=e822]:
    - generic [ref=e827]:
      - heading [level=2] [ref=e828]: Subscription
      - generic [ref=e829]:
        - textbox [ref=e830]:
          - /placeholder: Your email address
        - button [ref=e831] [cursor=pointer]:
          - generic [ref=e832]: 
        - paragraph [ref=e833]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e837]: Copyright © 2021 All rights reserved
    - insertion [ref=e839]
  - link [ref=e841] [cursor=pointer]:
    - /url: "#top"
    - generic [ref=e842]: 
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