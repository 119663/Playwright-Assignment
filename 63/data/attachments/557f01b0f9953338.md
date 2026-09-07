# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/register.spec.ts >> Navigate to signup page and register a new user
- Location: tests/ui/register.spec.ts:8:5

# Error details

```
TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
=========================== logs ===========================
waiting for navigation to "https://www.automationexercise.com/delete_account" until "load"
============================================================
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
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e51] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e52]
          - link "APIs list for practice" [ref=e53] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e54]
        - img "demo website for practice" [ref=e56]
    - link "" [ref=e57] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link "" [ref=e59] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading "Category" [level=2] [ref=e66]
      - generic [ref=e67]:
        - heading " Women" [level=4] [ref=e70]:
          - link " Women" [ref=e71] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading " Men" [level=4] [ref=e76]:
          - link " Men" [ref=e77] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e82]:
          - link " Kids" [ref=e83] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - insertion [ref=e87]:
        - generic [ref=e90]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e92]: Discover more
          - link "Casual Apparel" [ref=e93] [cursor=pointer]:
            - generic "Casual Apparel" [ref=e94]
            - img [ref=e96]
          - link "API testing guides" [ref=e98] [cursor=pointer]:
            - generic "API testing guides" [ref=e99]
            - img [ref=e101]
          - link "Software testing tutorials" [ref=e103] [cursor=pointer]:
            - generic "Software testing tutorials" [ref=e104]
            - img [ref=e106]
          - link "Factory Automation" [ref=e108] [cursor=pointer]:
            - generic "Factory Automation" [ref=e109]
            - img [ref=e111]
          - link "Psychology" [ref=e113] [cursor=pointer]:
            - generic "Psychology" [ref=e114]
            - img [ref=e116]
          - link "Educational Resources" [ref=e118] [cursor=pointer]:
            - generic "Educational Resources" [ref=e119]
            - img [ref=e121]
          - link "Automation video tutorials" [ref=e123] [cursor=pointer]:
            - generic "Automation video tutorials" [ref=e124]
            - img [ref=e126]
          - link "QA engineer jobs" [ref=e128] [cursor=pointer]:
            - generic "QA engineer jobs" [ref=e129]
            - img [ref=e131]
      - generic [ref=e133]:
        - heading "Brands" [level=2] [ref=e134]
        - list [ref=e136]:
          - listitem [ref=e137]:
            - link "(6) Polo" [ref=e138] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e139]: (6)
              - text: Polo
          - listitem [ref=e140]:
            - link "(5) H&M" [ref=e141] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e142]: (5)
              - text: H&M
          - listitem [ref=e143]:
            - link "(5) Madame" [ref=e144] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e145]: (5)
              - text: Madame
          - listitem [ref=e146]:
            - link "(3) Mast & Harbour" [ref=e147] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e148]: (3)
              - text: Mast & Harbour
          - listitem [ref=e149]:
            - link "(4) Babyhug" [ref=e150] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e151]: (4)
              - text: Babyhug
          - listitem [ref=e152]:
            - link "(3) Allen Solly Junior" [ref=e153] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e154]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e155]:
            - link "(3) Kookie Kids" [ref=e156] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e157]: (3)
              - text: Kookie Kids
          - listitem [ref=e158]:
            - link "(5) Biba" [ref=e159] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e160]: (5)
              - text: Biba
    - generic [ref=e161]:
      - generic [ref=e162]:
        - heading "Features Items" [level=2] [ref=e163]
        - generic [ref=e165]:
          - generic [ref=e166]:
            - generic [ref=e167]:
              - img "ecommerce website products" [ref=e168]
              - heading "Rs. 500" [level=2] [ref=e169]
              - paragraph [ref=e170]: Blue Top
              - generic [ref=e171] [cursor=pointer]:
                - generic [ref=e172]: 
                - text: Add to cart
            - generic [ref=e173]:
              - heading "Rs. 500" [level=2] [ref=e174]
              - paragraph [ref=e175]: Blue Top
              - generic [ref=e176] [cursor=pointer]:
                - generic [ref=e177]: 
                - text: Add to cart
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link " View Product" [ref=e181] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e182]: 
                - text: View Product
        - generic [ref=e184]:
          - generic [ref=e185]:
            - generic [ref=e186]:
              - img "ecommerce website products" [ref=e187]
              - heading "Rs. 400" [level=2] [ref=e188]
              - paragraph [ref=e189]:
                - text: Men
                - link "Tshirt" [ref=e190] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e191]
                  - text: Tshirt
              - generic [ref=e193] [cursor=pointer]:
                - generic [ref=e194]: 
                - text: Add to cart
            - generic [ref=e195]:
              - heading "Rs. 400" [level=2] [ref=e196]
              - paragraph [ref=e197]: Men Tshirt
              - generic [ref=e198] [cursor=pointer]:
                - generic [ref=e199]: 
                - text: Add to cart
          - list [ref=e201]:
            - listitem [ref=e202]:
              - link " View Product" [ref=e203] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e204]: 
                - text: View Product
        - generic [ref=e206]:
          - generic [ref=e207]:
            - generic [ref=e208]:
              - img "ecommerce website products" [ref=e209]
              - heading "Rs. 1000" [level=2] [ref=e210]
              - paragraph [ref=e211]:
                - text: Sleeveless
                - link "Dress" [ref=e212] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e213]
                  - text: Dress
              - generic [ref=e215] [cursor=pointer]:
                - generic [ref=e216]: 
                - text: Add to cart
            - generic [ref=e217]:
              - heading "Rs. 1000" [level=2] [ref=e218]
              - paragraph [ref=e219]: Sleeveless Dress
              - generic [ref=e220] [cursor=pointer]:
                - generic [ref=e221]: 
                - text: Add to cart
          - list [ref=e223]:
            - listitem [ref=e224]:
              - link " View Product" [ref=e225] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e226]: 
                - text: View Product
        - generic [ref=e228]:
          - generic [ref=e229]:
            - generic [ref=e230]:
              - img "ecommerce website products" [ref=e231]
              - heading "Rs. 1500" [level=2] [ref=e232]
              - paragraph [ref=e233]: Stylish Dress
              - generic [ref=e234] [cursor=pointer]:
                - generic [ref=e235]: 
                - text: Add to cart
            - generic [ref=e236]:
              - heading "Rs. 1500" [level=2] [ref=e237]
              - paragraph [ref=e238]: Stylish Dress
              - generic [ref=e239] [cursor=pointer]:
                - generic [ref=e240]: 
                - text: Add to cart
          - list [ref=e242]:
            - listitem [ref=e243]:
              - link " View Product" [ref=e244] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e245]: 
                - text: View Product
        - generic [ref=e247]:
          - generic [ref=e248]:
            - generic [ref=e249]:
              - img "ecommerce website products" [ref=e250]
              - heading "Rs. 600" [level=2] [ref=e251]
              - paragraph [ref=e252]: Winter Top
              - generic [ref=e253] [cursor=pointer]:
                - generic [ref=e254]: 
                - text: Add to cart
            - generic [ref=e255]:
              - heading "Rs. 600" [level=2] [ref=e256]
              - paragraph [ref=e257]: Winter Top
              - generic [ref=e258] [cursor=pointer]:
                - generic [ref=e259]: 
                - text: Add to cart
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link " View Product" [ref=e263] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e264]: 
                - text: View Product
        - generic [ref=e266]:
          - generic [ref=e267]:
            - generic [ref=e268]:
              - img "ecommerce website products" [ref=e269]
              - heading "Rs. 400" [level=2] [ref=e270]
              - paragraph [ref=e271]: Summer White Top
              - generic [ref=e272] [cursor=pointer]:
                - generic [ref=e273]: 
                - text: Add to cart
            - generic [ref=e274]:
              - heading "Rs. 400" [level=2] [ref=e275]
              - paragraph [ref=e276]: Summer White Top
              - generic [ref=e277] [cursor=pointer]:
                - generic [ref=e278]: 
                - text: Add to cart
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link " View Product" [ref=e282] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e283]: 
                - text: View Product
        - generic [ref=e285]:
          - generic [ref=e286]:
            - generic [ref=e287]:
              - img "ecommerce website products" [ref=e288]
              - heading "Rs. 1000" [level=2] [ref=e289]
              - paragraph [ref=e290]: Madame Top For Women
              - generic [ref=e291] [cursor=pointer]:
                - generic [ref=e292]: 
                - text: Add to cart
            - generic [ref=e293]:
              - heading "Rs. 1000" [level=2] [ref=e294]
              - paragraph [ref=e295]: Madame Top For Women
              - generic [ref=e296] [cursor=pointer]:
                - generic [ref=e297]: 
                - text: Add to cart
          - list [ref=e299]:
            - listitem [ref=e300]:
              - link " View Product" [ref=e301] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e302]: 
                - text: View Product
        - generic [ref=e304]:
          - generic [ref=e305]:
            - generic [ref=e306]:
              - img "ecommerce website products" [ref=e307]
              - heading "Rs. 700" [level=2] [ref=e308]
              - paragraph [ref=e309]: Fancy Green Top
              - generic [ref=e310] [cursor=pointer]:
                - generic [ref=e311]: 
                - text: Add to cart
            - generic [ref=e312]:
              - heading "Rs. 700" [level=2] [ref=e313]
              - paragraph [ref=e314]: Fancy Green Top
              - generic [ref=e315] [cursor=pointer]:
                - generic [ref=e316]: 
                - text: Add to cart
          - list [ref=e318]:
            - listitem [ref=e319]:
              - link " View Product" [ref=e320] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e321]: 
                - text: View Product
        - generic [ref=e323]:
          - generic [ref=e324]:
            - generic [ref=e325]:
              - img "ecommerce website products" [ref=e326]
              - heading "Rs. 499" [level=2] [ref=e327]
              - paragraph [ref=e328]:
                - text: Sleeves Printed Top - White
                - link "Software" [ref=e329] [cursor=pointer]:
                  - img [ref=e331]
                  - text: Software
              - generic [ref=e333] [cursor=pointer]:
                - generic [ref=e334]: 
                - text: Add to cart
            - generic [ref=e335]:
              - heading "Rs. 499" [level=2] [ref=e336]
              - paragraph [ref=e337]: Sleeves Printed Top - White
              - generic [ref=e338] [cursor=pointer]:
                - generic [ref=e339]: 
                - text: Add to cart
          - list [ref=e341]:
            - listitem [ref=e342]:
              - link " View Product" [ref=e343] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e344]: 
                - text: View Product
        - generic [ref=e346]:
          - generic [ref=e347]:
            - generic [ref=e348]:
              - img "ecommerce website products" [ref=e349]
              - heading "Rs. 359" [level=2] [ref=e350]
              - paragraph [ref=e351]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "Dresses" [ref=e352] [cursor=pointer]:
                  - img [ref=e354]
                  - text: Dresses
              - generic [ref=e356] [cursor=pointer]:
                - generic [ref=e357]: 
                - text: Add to cart
            - generic [ref=e358]:
              - heading "Rs. 359" [level=2] [ref=e359]
              - paragraph [ref=e360]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e361] [cursor=pointer]:
                - generic [ref=e362]: 
                - text: Add to cart
          - list [ref=e364]:
            - listitem [ref=e365]:
              - link " View Product" [ref=e366] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e367]: 
                - text: View Product
        - generic [ref=e369]:
          - generic [ref=e370]:
            - generic [ref=e371]:
              - img "ecommerce website products" [ref=e372]
              - heading "Rs. 278" [level=2] [ref=e373]
              - paragraph [ref=e374]: Frozen Tops For Kids
              - generic [ref=e375] [cursor=pointer]:
                - generic [ref=e376]: 
                - text: Add to cart
            - generic [ref=e377]:
              - heading "Rs. 278" [level=2] [ref=e378]
              - paragraph [ref=e379]: Frozen Tops For Kids
              - generic [ref=e380] [cursor=pointer]:
                - generic [ref=e381]: 
                - text: Add to cart
          - list [ref=e383]:
            - listitem [ref=e384]:
              - link " View Product" [ref=e385] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e386]: 
                - text: View Product
        - generic [ref=e388]:
          - generic [ref=e389]:
            - generic [ref=e390]:
              - img "ecommerce website products" [ref=e391]
              - heading "Rs. 679" [level=2] [ref=e392]
              - paragraph [ref=e393]:
                - text: Full Sleeves Top Cherry - Pink
                - link "Apparel" [ref=e394] [cursor=pointer]:
                  - img [ref=e396]
                  - text: Apparel
              - generic [ref=e398] [cursor=pointer]:
                - generic [ref=e399]: 
                - text: Add to cart
            - generic [ref=e400]:
              - heading "Rs. 679" [level=2] [ref=e401]
              - paragraph [ref=e402]: Full Sleeves Top Cherry - Pink
              - generic [ref=e403] [cursor=pointer]:
                - generic [ref=e404]: 
                - text: Add to cart
          - list [ref=e406]:
            - listitem [ref=e407]:
              - link " View Product" [ref=e408] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e409]: 
                - text: View Product
        - generic [ref=e411]:
          - generic [ref=e412]:
            - generic [ref=e413]:
              - img "ecommerce website products" [ref=e414]
              - heading "Rs. 315" [level=2] [ref=e415]
              - paragraph [ref=e416]: Printed Off Shoulder Top - White
              - generic [ref=e417] [cursor=pointer]:
                - generic [ref=e418]: 
                - text: Add to cart
            - generic [ref=e419]:
              - heading "Rs. 315" [level=2] [ref=e420]
              - paragraph [ref=e421]: Printed Off Shoulder Top - White
              - generic [ref=e422] [cursor=pointer]:
                - generic [ref=e423]: 
                - text: Add to cart
          - list [ref=e425]:
            - listitem [ref=e426]:
              - link " View Product" [ref=e427] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e428]: 
                - text: View Product
        - generic [ref=e430]:
          - generic [ref=e431]:
            - generic [ref=e432]:
              - img "ecommerce website products" [ref=e433]
              - heading "Rs. 478" [level=2] [ref=e434]
              - paragraph [ref=e435]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e436] [cursor=pointer]:
                - generic [ref=e437]: 
                - text: Add to cart
            - generic [ref=e438]:
              - heading "Rs. 478" [level=2] [ref=e439]
              - paragraph [ref=e440]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e441] [cursor=pointer]:
                - generic [ref=e442]: 
                - text: Add to cart
          - list [ref=e444]:
            - listitem [ref=e445]:
              - link " View Product" [ref=e446] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e447]: 
                - text: View Product
        - generic [ref=e449]:
          - generic [ref=e450]:
            - generic [ref=e451]:
              - img "ecommerce website products" [ref=e452]
              - heading "Rs. 1200" [level=2] [ref=e453]
              - paragraph [ref=e454]: Little Girls Mr. Panda Shirt
              - generic [ref=e455] [cursor=pointer]:
                - generic [ref=e456]: 
                - text: Add to cart
            - generic [ref=e457]:
              - heading "Rs. 1200" [level=2] [ref=e458]
              - paragraph [ref=e459]: Little Girls Mr. Panda Shirt
              - generic [ref=e460] [cursor=pointer]:
                - generic [ref=e461]: 
                - text: Add to cart
          - list [ref=e463]:
            - listitem [ref=e464]:
              - link " View Product" [ref=e465] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e466]: 
                - text: View Product
        - generic [ref=e468]:
          - generic [ref=e469]:
            - generic [ref=e470]:
              - img "ecommerce website products" [ref=e471]
              - heading "Rs. 1050" [level=2] [ref=e472]
              - paragraph [ref=e473]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e474] [cursor=pointer]:
                - generic [ref=e475]: 
                - text: Add to cart
            - generic [ref=e476]:
              - heading "Rs. 1050" [level=2] [ref=e477]
              - paragraph [ref=e478]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e479] [cursor=pointer]:
                - generic [ref=e480]: 
                - text: Add to cart
          - list [ref=e482]:
            - listitem [ref=e483]:
              - link " View Product" [ref=e484] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e485]: 
                - text: View Product
        - generic [ref=e487]:
          - generic [ref=e488]:
            - generic [ref=e489]:
              - img "ecommerce website products" [ref=e490]
              - heading "Rs. 1190" [level=2] [ref=e491]
              - paragraph [ref=e492]: Cotton Mull Embroidered Dress
              - generic [ref=e493] [cursor=pointer]:
                - generic [ref=e494]: 
                - text: Add to cart
            - generic [ref=e495]:
              - heading "Rs. 1190" [level=2] [ref=e496]
              - paragraph [ref=e497]: Cotton Mull Embroidered Dress
              - generic [ref=e498] [cursor=pointer]:
                - generic [ref=e499]: 
                - text: Add to cart
          - list [ref=e501]:
            - listitem [ref=e502]:
              - link " View Product" [ref=e503] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e504]: 
                - text: View Product
        - generic [ref=e506]:
          - generic [ref=e507]:
            - generic [ref=e508]:
              - img "ecommerce website products" [ref=e509]
              - heading "Rs. 1530" [level=2] [ref=e510]
              - paragraph [ref=e511]: Blue Cotton Indie Mickey Dress
              - generic [ref=e512] [cursor=pointer]:
                - generic [ref=e513]: 
                - text: Add to cart
            - generic [ref=e514]:
              - heading "Rs. 1530" [level=2] [ref=e515]
              - paragraph [ref=e516]: Blue Cotton Indie Mickey Dress
              - generic [ref=e517] [cursor=pointer]:
                - generic [ref=e518]: 
                - text: Add to cart
          - list [ref=e520]:
            - listitem [ref=e521]:
              - link " View Product" [ref=e522] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e523]: 
                - text: View Product
        - generic [ref=e525]:
          - generic [ref=e526]:
            - generic [ref=e527]:
              - img "ecommerce website products" [ref=e528]
              - heading "Rs. 1600" [level=2] [ref=e529]
              - paragraph [ref=e530]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "Dresses" [ref=e531] [cursor=pointer]:
                  - img [ref=e533]
                  - text: Dresses
              - generic [ref=e535] [cursor=pointer]:
                - generic [ref=e536]: 
                - text: Add to cart
            - generic [ref=e537]:
              - heading "Rs. 1600" [level=2] [ref=e538]
              - paragraph [ref=e539]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e540] [cursor=pointer]:
                - generic [ref=e541]: 
                - text: Add to cart
          - list [ref=e543]:
            - listitem [ref=e544]:
              - link " View Product" [ref=e545] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e546]: 
                - text: View Product
        - generic [ref=e548]:
          - generic [ref=e549]:
            - generic [ref=e550]:
              - img "ecommerce website products" [ref=e551]
              - heading "Rs. 1100" [level=2] [ref=e552]
              - paragraph [ref=e553]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e554] [cursor=pointer]:
                - generic [ref=e555]: 
                - text: Add to cart
            - generic [ref=e556]:
              - heading "Rs. 1100" [level=2] [ref=e557]
              - paragraph [ref=e558]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e559] [cursor=pointer]:
                - generic [ref=e560]: 
                - text: Add to cart
          - list [ref=e562]:
            - listitem [ref=e563]:
              - link " View Product" [ref=e564] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e565]: 
                - text: View Product
        - generic [ref=e567]:
          - generic [ref=e568]:
            - generic [ref=e569]:
              - img "ecommerce website products" [ref=e570]
              - heading "Rs. 849" [level=2] [ref=e571]
              - paragraph [ref=e572]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e573] [cursor=pointer]:
                - generic [ref=e574]: 
                - text: Add to cart
            - generic [ref=e575]:
              - heading "Rs. 849" [level=2] [ref=e576]
              - paragraph [ref=e577]:
                - text: Colour Blocked Shirt – Sky Blue
                - link "Apparel" [ref=e578] [cursor=pointer]:
                  - img [ref=e580]
                  - text: Apparel
              - generic [ref=e582] [cursor=pointer]:
                - generic [ref=e583]: 
                - text: Add to cart
          - list [ref=e585]:
            - listitem [ref=e586]:
              - link " View Product" [ref=e587] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e588]: 
                - text: View Product
        - generic [ref=e590]:
          - generic [ref=e591]:
            - generic [ref=e592]:
              - img "ecommerce website products" [ref=e593]
              - heading "Rs. 1299" [level=2] [ref=e594]
              - paragraph [ref=e595]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e596] [cursor=pointer]:
                  - /url: "#"
                  - img [ref=e597]
                  - text: T-Shirt
              - generic [ref=e599] [cursor=pointer]:
                - generic [ref=e600]: 
                - text: Add to cart
            - generic [ref=e601]:
              - heading "Rs. 1299" [level=2] [ref=e602]
              - paragraph [ref=e603]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e604] [cursor=pointer]:
                - generic [ref=e605]: 
                - text: Add to cart
          - list [ref=e607]:
            - listitem [ref=e608]:
              - link " View Product" [ref=e609] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e610]: 
                - text: View Product
        - generic [ref=e612]:
          - generic [ref=e613]:
            - generic [ref=e614]:
              - img "ecommerce website products" [ref=e615]
              - heading "Rs. 1000" [level=2] [ref=e616]
              - paragraph [ref=e617]: Green Side Placket Detail T-Shirt
              - generic [ref=e618] [cursor=pointer]:
                - generic [ref=e619]: 
                - text: Add to cart
            - generic [ref=e620]:
              - heading "Rs. 1000" [level=2] [ref=e621]
              - paragraph [ref=e622]: Green Side Placket Detail T-Shirt
              - generic [ref=e623] [cursor=pointer]:
                - generic [ref=e624]: 
                - text: Add to cart
          - list [ref=e626]:
            - listitem [ref=e627]:
              - link " View Product" [ref=e628] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e629]: 
                - text: View Product
        - generic [ref=e631]:
          - generic [ref=e632]:
            - generic [ref=e633]:
              - img "ecommerce website products" [ref=e634]
              - heading "Rs. 1500" [level=2] [ref=e635]
              - paragraph [ref=e636]: Premium Polo T-Shirts
              - generic [ref=e637] [cursor=pointer]:
                - generic [ref=e638]: 
                - text: Add to cart
            - generic [ref=e639]:
              - heading "Rs. 1500" [level=2] [ref=e640]
              - paragraph [ref=e641]: Premium Polo T-Shirts
              - generic [ref=e642] [cursor=pointer]:
                - generic [ref=e643]: 
                - text: Add to cart
          - list [ref=e645]:
            - listitem [ref=e646]:
              - link " View Product" [ref=e647] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e648]: 
                - text: View Product
        - generic [ref=e650]:
          - generic [ref=e651]:
            - generic [ref=e652]:
              - img "ecommerce website products" [ref=e653]
              - heading "Rs. 850" [level=2] [ref=e654]
              - paragraph [ref=e655]: Pure Cotton Neon Green Tshirt
              - generic [ref=e656] [cursor=pointer]:
                - generic [ref=e657]: 
                - text: Add to cart
            - generic [ref=e658]:
              - heading "Rs. 850" [level=2] [ref=e659]
              - paragraph [ref=e660]: Pure Cotton Neon Green Tshirt
              - generic [ref=e661] [cursor=pointer]:
                - generic [ref=e662]: 
                - text: Add to cart
          - list [ref=e664]:
            - listitem [ref=e665]:
              - link " View Product" [ref=e666] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e667]: 
                - text: View Product
        - generic [ref=e669]:
          - generic [ref=e670]:
            - generic [ref=e671]:
              - img "ecommerce website products" [ref=e672]
              - heading "Rs. 799" [level=2] [ref=e673]
              - paragraph [ref=e674]: Soft Stretch Jeans
              - generic [ref=e675] [cursor=pointer]:
                - generic [ref=e676]: 
                - text: Add to cart
            - generic [ref=e677]:
              - heading "Rs. 799" [level=2] [ref=e678]
              - paragraph [ref=e679]: Soft Stretch Jeans
              - generic [ref=e680] [cursor=pointer]:
                - generic [ref=e681]: 
                - text: Add to cart
          - list [ref=e683]:
            - listitem [ref=e684]:
              - link " View Product" [ref=e685] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e686]: 
                - text: View Product
        - generic [ref=e688]:
          - generic [ref=e689]:
            - generic [ref=e690]:
              - img "ecommerce website products" [ref=e691]
              - heading "Rs. 1200" [level=2] [ref=e692]
              - paragraph [ref=e693]: Regular Fit Straight Jeans
              - generic [ref=e694] [cursor=pointer]:
                - generic [ref=e695]: 
                - text: Add to cart
            - generic [ref=e696]:
              - heading "Rs. 1200" [level=2] [ref=e697]
              - paragraph [ref=e698]: Regular Fit Straight Jeans
              - generic [ref=e699] [cursor=pointer]:
                - generic [ref=e700]: 
                - text: Add to cart
          - list [ref=e702]:
            - listitem [ref=e703]:
              - link " View Product" [ref=e704] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e705]: 
                - text: View Product
        - generic [ref=e707]:
          - generic [ref=e708]:
            - generic [ref=e709]:
              - img "ecommerce website products" [ref=e710]
              - heading "Rs. 1400" [level=2] [ref=e711]
              - paragraph [ref=e712]: Grunt Blue Slim Fit Jeans
              - generic [ref=e713] [cursor=pointer]:
                - generic [ref=e714]: 
                - text: Add to cart
            - generic [ref=e715]:
              - heading "Rs. 1400" [level=2] [ref=e716]
              - paragraph [ref=e717]: Grunt Blue Slim Fit Jeans
              - generic [ref=e718] [cursor=pointer]:
                - generic [ref=e719]: 
                - text: Add to cart
          - list [ref=e721]:
            - listitem [ref=e722]:
              - link " View Product" [ref=e723] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e724]: 
                - text: View Product
        - generic [ref=e726]:
          - generic [ref=e727]:
            - generic [ref=e728]:
              - img "ecommerce website products" [ref=e729]
              - heading "Rs. 2300" [level=2] [ref=e730]
              - paragraph [ref=e731]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e732] [cursor=pointer]:
                - generic [ref=e733]: 
                - text: Add to cart
            - generic [ref=e734]:
              - heading "Rs. 2300" [level=2] [ref=e735]
              - paragraph [ref=e736]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e737] [cursor=pointer]:
                - generic [ref=e738]: 
                - text: Add to cart
          - list [ref=e740]:
            - listitem [ref=e741]:
              - link " View Product" [ref=e742] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e743]: 
                - text: View Product
        - generic [ref=e745]:
          - generic [ref=e746]:
            - generic [ref=e747]:
              - img "ecommerce website products" [ref=e748]
              - heading "Rs. 3000" [level=2] [ref=e749]
              - paragraph [ref=e750]: Cotton Silk Hand Block Print Saree
              - generic [ref=e751] [cursor=pointer]:
                - generic [ref=e752]: 
                - text: Add to cart
            - generic [ref=e753]:
              - heading "Rs. 3000" [level=2] [ref=e754]
              - paragraph [ref=e755]: Cotton Silk Hand Block Print Saree
              - generic [ref=e756] [cursor=pointer]:
                - generic [ref=e757]: 
                - text: Add to cart
          - list [ref=e759]:
            - listitem [ref=e760]:
              - link " View Product" [ref=e761] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e762]: 
                - text: View Product
        - generic [ref=e764]:
          - generic [ref=e765]:
            - generic [ref=e766]:
              - img "ecommerce website products" [ref=e767]
              - heading "Rs. 3500" [level=2] [ref=e768]
              - paragraph [ref=e769]: Rust Red Linen Saree
              - generic [ref=e770] [cursor=pointer]:
                - generic [ref=e771]: 
                - text: Add to cart
            - generic [ref=e772]:
              - heading "Rs. 3500" [level=2] [ref=e773]
              - paragraph [ref=e774]: Rust Red Linen Saree
              - generic [ref=e775] [cursor=pointer]:
                - generic [ref=e776]: 
                - text: Add to cart
          - list [ref=e778]:
            - listitem [ref=e779]:
              - link " View Product" [ref=e780] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e781]: 
                - text: View Product
        - generic [ref=e783]:
          - generic [ref=e784]:
            - generic [ref=e785]:
              - img "ecommerce website products" [ref=e786]
              - heading "Rs. 5000" [level=2] [ref=e787]
              - paragraph [ref=e788]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e789] [cursor=pointer]:
                - generic [ref=e790]: 
                - text: Add to cart
            - generic [ref=e791]:
              - heading "Rs. 5000" [level=2] [ref=e792]
              - paragraph [ref=e793]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e794] [cursor=pointer]:
                - generic [ref=e795]: 
                - text: Add to cart
          - list [ref=e797]:
            - listitem [ref=e798]:
              - link " View Product" [ref=e799] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e800]: 
                - text: View Product
        - generic [ref=e802]:
          - generic [ref=e803]:
            - generic [ref=e804]:
              - img "ecommerce website products" [ref=e805]
              - heading "Rs. 1400" [level=2] [ref=e806]
              - paragraph [ref=e807]: Lace Top For Women
              - generic [ref=e808] [cursor=pointer]:
                - generic [ref=e809]: 
                - text: Add to cart
            - generic [ref=e810]:
              - heading "Rs. 1400" [level=2] [ref=e811]
              - paragraph [ref=e812]: Lace Top For Women
              - generic [ref=e813] [cursor=pointer]:
                - generic [ref=e814]: 
                - text: Add to cart
          - list [ref=e816]:
            - listitem [ref=e817]:
              - link " View Product" [ref=e818] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e819]: 
                - text: View Product
        - generic [ref=e821]:
          - generic [ref=e822]:
            - generic [ref=e823]:
              - img "ecommerce website products" [ref=e824]
              - heading "Rs. 1389" [level=2] [ref=e825]
              - paragraph [ref=e826]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link "Jeans" [ref=e827] [cursor=pointer]:
                  - img [ref=e829]
                  - text: Jeans
              - generic [ref=e831] [cursor=pointer]:
                - generic [ref=e832]: 
                - text: Add to cart
            - generic [ref=e833]:
              - heading "Rs. 1389" [level=2] [ref=e834]
              - paragraph [ref=e835]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e836] [cursor=pointer]:
                - generic [ref=e837]: 
                - text: Add to cart
          - list [ref=e839]:
            - listitem [ref=e840]:
              - link " View Product" [ref=e841] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e842]: 
                - text: View Product
      - generic [ref=e843]:
        - heading "recommended items" [level=2] [ref=e844]
        - generic [ref=e845]:
          - generic [ref=e846]:
            - generic:
              - generic [ref=e850]:
                - img "ecommerce website products" [ref=e851]
                - heading "Rs. 500" [level=2] [ref=e852]
                - paragraph [ref=e853]: Blue Top
                - generic [ref=e854] [cursor=pointer]:
                  - generic [ref=e855]: 
                  - text: Add to cart
              - generic [ref=e859]:
                - img "ecommerce website products" [ref=e860]
                - heading "Rs. 400" [level=2] [ref=e861]
                - paragraph [ref=e862]: Men Tshirt
                - generic [ref=e863] [cursor=pointer]:
                  - generic [ref=e864]: 
                  - text: Add to cart
              - generic [ref=e868]:
                - img "ecommerce website products" [ref=e869]
                - heading "Rs. 1000" [level=2] [ref=e870]
                - paragraph [ref=e871]: Rs. 1000
                - generic [ref=e872] [cursor=pointer]:
                  - generic [ref=e873]: 
                  - text: Add to cart
            - text:   
          - link "" [ref=e874] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e875]: 
          - link "" [ref=e876] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e877]: 
  - insertion [ref=e879]
  - contentinfo [ref=e881]:
    - generic [ref=e886]:
      - heading "Subscription" [level=2] [ref=e887]
      - generic [ref=e888]:
        - textbox "Your email address" [ref=e889]
        - button "" [ref=e890] [cursor=pointer]:
          - generic [ref=e891]: 
        - paragraph [ref=e892]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e896]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=e897]:
    - generic [ref=e898] [cursor=pointer]:
      - img [ref=e900]
      - link "Go to shopping options for E-commerce practice site" [ref=e902]: E-commerce practice site
    - button "Close shopping anchor" [ref=e903]
```

# Test source

```ts
  1   | import {test, expect} from '@playwright/test';
  2   | import SignupPage from '../../pages/signup';
  3   | import SignupForm from '../../pages/signupform';
  4   | import DeleteAccountPage from '../../pages/deleteaccount';
  5   | import { de, faker} from '@faker-js/faker';
  6   | import { time } from 'node:console';
  7   | 
  8   | test("Navigate to signup page and register a new user", async ({page}) => {
  9   |     test.setTimeout(60000);
  10  |     await page.goto('https://www.automationexercise.com/');
  11  |     await page.locator('//a[@href="/login"]').click();
  12  | 
  13  |     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  14  |     await expect(page.getByText('New User Signup!')).toBeVisible();
  15  | 
  16  |     const signupPage = new SignupPage(page);
  17  |     const name = faker.person.firstName();
  18  |     const email = faker.internet.email();
  19  | 
  20  |     await signupPage.signup(name, email);
  21  | 
  22  |     await expect(page).toHaveTitle('Automation Exercise - Signup');
  23  | 
  24  | 
  25  |     const fillSignupForm = new SignupForm(page);
  26  |     const password = faker.internet.password();
  27  |     const firstName = faker.person.firstName();
  28  |     const lastName = faker.person.lastName();
  29  |     const company = faker.company.name();
  30  |     const address1 = faker.location.streetAddress();
  31  |     const address2 = faker.location.secondaryAddress();
  32  |     const country = 'India';
  33  |     const state = faker.location.state();
  34  |     const city = faker.location.city();
  35  |     const zipcode = faker.location.zipCode();
  36  |     const mobileNumber = faker.phone.number({style: 'mobile'});
  37  |     
  38  |     await fillSignupForm.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
  39  | 
  40  |     await expect(page.getByText('Account Created!')).toBeVisible();
  41  |     await fillSignupForm.continueButton.click();
  42  | 
  43  |     await expect(page.getByText('Logged in as ' + name)).toBeVisible();
  44  | 
  45  | 
  46  | 
  47  |     const deleteAccountPage = new DeleteAccountPage(page);
  48  |     await deleteAccountPage.deleteAccount();
  49  | 
> 50  |     await page.waitForURL('https://www.automationexercise.com/delete_account', { timeout: 10000 });
      |                ^ TimeoutError: page.waitForURL: Timeout 10000ms exceeded.
  51  |     await page.waitForSelector('[data-qa="account-deleted"]', {state: 'visible'});
  52  |     await expect(page.locator('[data-qa="account-deleted"]')).toHaveText('Account Deleted!');
  53  | 
  54  |     await expect(deleteAccountPage.deleteContinueButton).toBeVisible();
  55  |     await expect(deleteAccountPage.deleteContinueButton).toBeEnabled();
  56  |     await deleteAccountPage.deleteContinueButton.click();
  57  | 
  58  |     await expect(page).toHaveTitle('Automation Exercise');
  59  | 
  60  | 
  61  | })
  62  | 
  63  | // test("Fill in the signup form and submit", async ({page}) => {
  64  | //     await page.goto('https://www.automationexercise.com/signup');
  65  | //     await page.locator('//a[@href="/signup"]').click();
  66  | //     await expect(page).toHaveTitle('Automation Exercise - Signup / Login');
  67  | 
  68  | //     const fillSignupForm = new SignupForm(page);
  69  | //     const password = faker.internet.password();
  70  | //     const firstName = faker.person.firstName();
  71  | //     const lastName = faker.person.lastName();
  72  | //     const company = faker.company.name();
  73  | //     const address1 = faker.location.streetAddress();
  74  | //     const address2 = faker.location.secondaryAddress();
  75  | //     const country = 'India';
  76  | //     const state = faker.location.state();
  77  | //     const city = faker.location.city();
  78  | //     const zipcode = faker.location.zipCode();
  79  | //     const mobileNumber = faker.phone.number({style: 'mobile'});
  80  | //     // const createAccountButton = signupPage.createAccountButton;
  81  |     
  82  | //     await fillSignupForm.fillSignupForm(password, firstName, lastName, company, address1, address2, country, state, city, zipcode, mobileNumber);
  83  | 
  84  | //     await expect(page.getByText('Account Created!')).toBeVisible();
  85  | //     // await page.locator('//a[@data-qa="continue-button"]').click();
  86  | 
  87  | //     await expect(page.getByText('Logged in as ' + firstName)).toBeVisible();
  88  | // })
  89  | 
  90  | // test('Delete the created user account', async ({page}) => {
  91  | //     await page.goto('https://www.automationexercise.com/');
  92  | 
  93  | //     const deleteAccountPage = new DeleteAccountPage(page);
  94  | //     await deleteAccountPage.deleteAccount();
  95  | 
  96  | //     await expect(page.getByText('ACCOUNT DELETED!')).toBeVisible();
  97  | 
  98  | //     await expect(page).toHaveTitle('Automation Exercise');
  99  | 
  100 | // })
```