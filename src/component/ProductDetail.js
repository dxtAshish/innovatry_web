import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const [productData, setProductData] = useState();

    // const updateState = (event) => {
    //   const variable = event.target.name;
    //   const value = event.target.value;
    //   setState({ ...state, [variable]: value });
    // };
  
    const fetchProduct = async () => {
      const response = await fetch(
        `http://localhost:5000/api/product/product/${product_id}`
      );
      const response_json = await response.json();
      setProductData(response_json.data);
      console.log(response_json, 27);
    };
  
    useEffect(() => {
      fetchProduct();
    }, []);
    const { product_id } = useParams();
    return (
        
        <> {productData&&
        
            <section class="py-5">
                <div class="container">
                    <div class="row gx-5">
                        <aside class="col-lg-6">
                            <div class="border rounded-4 mb-3 d-flex justify-content-center">
                                <a data-fslightbox="mygalley" class="rounded-4" target="_blank" data-type="image" href={productData.image}>
                                    <img style={{"max-width": "100%", "max-height": "100vh"," margin": "auto"}} class="rounded-4 fit" src={productData.image} />
                                </a>
                            </div>
                          
                        </aside>
                        <main class="col-lg-6">
                            <div class="ps-lg-3">
                                <h4 class="title text-dark">
                                    {productData.title}
                                </h4>
                                <div class="d-flex flex-row my-3">
                                    <div class="text-warning mb-1 me-2">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <span class="ms-1">
                                            4.5
                                        </span>
                                    </div>
                                    <span class="text-muted"><i class="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                    <span class="text-success ms-2">In stock</span>
                                </div>

                                <div class="mb-3">
                                    <span class="h5">{productData.price}</span>
                                    <span class="text-muted">/per box</span>
                                </div>

                                <p>
                                   {productData.description}
                                </p>

                               

                                <hr />

                              
                                <a href={`/checkout/${product_id}`} class="btn btn-warning shadow-0"> Buy now </a>
                                <a href="#" class="btn btn-primary shadow-0"> <i class="me-1 fa fa-shopping-basket"></i> Add to cart </a>
                                <a href="#" class="btn btn-light border border-secondary py-2 icon-hover px-3"> <i class="me-1 fa fa-heart fa-lg"></i> Save </a>
                            </div>
                        </main>
                    </div>
                </div>
            </section>}
            
        </>
    )
}

export default ProductDetail