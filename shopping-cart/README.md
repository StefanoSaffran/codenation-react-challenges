<p align="center">
  <img src="https://res.cloudinary.com/stefanosaffran/image/upload/v1588264428/Codenation/ogzrl5pnspprlfc4zglr.png" />
</p>

<h1 align="center">Shopping Cart - Node.js</h1>

<p align="center">
<img alt="Made by Stefano" src="https://img.shields.io/badge/made%20by-StefanoSaffran-%20?">
</p>

<p align="center">
  <a href="#computer-project">💻 Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">📬 Get in touch</a>
</p>

## :computer: Project 

The file `src/data/products.json` has a list of **25** diferent products,
divided into **4 categories**:

-  **`T-SHIRTS`**
-  **`PANTS`**
-  **`SHOES`**
-  **`BAGS`**

the `objetc` of each product has a **standard price** that can be identified in the property `regularPrice`, as well as a list **promotional prices** identified in the property `promotions`.

The **final price** of the cart will be calculated according to the **combination of categories** of the added products.

Cart promotions will be calculated according to the following combinations of looks:
* **`SINGLE LOOK`** - If all products in the cart belong to a single category.
* **`DOUBLE LOOK`** - If at least 2 added products belong to different categories.
* **`TRIPLE LOOK`** - If at least 3 products belong to different categories.
* **`FULL LOOK`** - If at least 4 products belong to different categories.

> If the combination of products added to the cart corresponds to any of the conditions above, the value of the products that will be calculated will be the corresponding one in the property **`looks`**.

Given the entry of an **Array** with the product ids, an `object` containing the following properties must be returned:

- The names of the products and their respective categories.
- Promotion applied to calculate the price of the products, example: `TRIPLE LOOK`.
- The total price (already with discounts applied, if any).
- The total discount.
- The discount percentage.

#### Example:

> Given the following array of products (IDs): `[120, 230, 310, 490]`
>
> The following is expected:
```javascript
{
  products: [
    {
      name: 'DISNEY CRUELLA© T-SHIRT',
      category: 'T-SHIRTS'
    },
    {
      name: 'KNIT JOGGING PANTS',
      category: 'PANTS'
    },
    {
      name: 'ASYMMETRICAL LEATHER SLIDE HEELS',
      category: 'SHOES'
    },
    {
      name: 'SOFT FLAP BACKPACK',
      category: 'BAGS'
    }
  ],
  promotion: 'FULL LOOK',
  totalPrice: 404.96,
  discountValue: 75.00,
  discountPercentage: '15.63%'
}
```

## :mailbox_with_mail: Get in touch!

<a href="https://stefanosaffran.com" target="_blank" >
  <img alt="Website - Stefano Saffran" src="https://img.shields.io/badge/Website--%23F8952D?style=social">
</a>&nbsp;&nbsp;&nbsp;
<a href="https://www.linkedin.com/in/stefanosaffran/" target="_blank" >
  <img alt="Linkedin - Stefano Saffran" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;
<a href="mailto:stefanoas@gmail.com" target="_blank" >
  <img alt="Email - Stefano Saffran" src="https://img.shields.io/badge/Email--%23F8952D?style=social&logo=gmail">
</a> 

---

Made with :coffee: and ❤️ by Stefano Saffran.
