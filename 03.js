var Cart = [];

  function displayCart(){
      var orderedProductsTblBody=document.getElementById("orderedProductsTblBody");
      while(orderedProductsTblBody.rows.length>0) {
          orderedProductsTblBody.deleteRow(0);
      }

       var cart_total_price=0;
       for(var product in Cart){
           var row=orderedProductsTblBody.insertRow();
           var cellindex_produk = row insertCell(0);
           var cellkode_produk = row.insertCell(1);
           var cellnama_produk = row.insertCell(2);
           var cellharga = row.insertCell(3);
           var cellquantity = row.insertCell(4);
           cellPrice.align="right";
           cellName.innerHTML = Cart[product].Name;
           cellDescription.innerHTML = Cart[product].Description;
           cellPrice.innerHTML = Cart[product].Price;
           cart_total_price+=Cart[product].Price;
       }
       document.getElementById("cart_total").innerHTML=cart_total_price;
   }

function AddtoCart(Index_produk,kode_produk,nama_produk,harga,quantity){
  var listProduct = {};
  listProduct.Index_produk= Math.floor(Math.random() * 100);
  listProduct.Kode_produk= prompt('masukkan kode produk');
  listProduct.Kode_produk2= (Kode_produk) => confirm(Kode_produk);
  listProduct.Nama_produk=nama_produk;
  listProduct.Harga=harga;
  listProduct.Quantity=quantity;
  Cart.push(listProduct);
  displayCart();

}

<table cellpadding="6" cellspacing="6" border="1">
    <tr>
        <td valign="top">
            <table cellpadding="6" cellspacing="6" border="0">
                <thead>
                    <tr>
                        <td colspan="2">
                            Produk dijual
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            Input Produk
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart(listProduct.Index_produk,listProduct.Kode_produk,'Gunting',10000,1)"/>
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart(listProduct.Index_produk,listProduct.Kode_produk,'Pensil',5000,1)"/>
                        </td>
                        <td>
                            <input type="button" value="Add to cart" onclick="AddtoCart(listProduct.Index_produk,listProduct.Kode_produk,'Penghapus',2000,1)"/>
                        </td>
                    </tr>
                    <tr>
                </tbody>

            </table>
        </td>
        <td valign="top">
            <table cellpadding="6" cellspacing="6" border="1" id="orderedProductsTbl">
                <thead>
                    <tr>
                        <td>
                            IndexProduk
                        </td>
                        <td>
                            Kode produk
                        </td>
                        <td>
                            Nama produk
                        </td>
                        <td>
                            Harga
                        </td>
                        <td>
                            Kuantitas
                        </td>
                    </tr>
                </thead>
                <tbody id="orderedProductsTblBody">

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3" align="right" id="cart_total">

                        </td>
                    </tr>
                </tfoot>
            </table>
        </td>
    </tr>
</table>
