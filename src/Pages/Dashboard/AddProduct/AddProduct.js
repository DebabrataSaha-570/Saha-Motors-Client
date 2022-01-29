import React, { useRef } from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const productTitleRef = useRef()
    const productImageRef = useRef()
    const productPriceRef = useRef()
    const productConditionRef = useRef()
    const productYearRef = useRef()
    const productFuelRef = useRef()
    const productDoorsRef = useRef()
    const productColorRef = useRef()
    const productMileageRef = useRef()
    const productEngineRef = useRef()
    const productTransmissionRef = useRef()
    const productDescriptionRef = useRef()

    const handleProductSubmit = (e) => {
        e.preventDefault()

        const productTitleValue = productTitleRef.current.value;
        const productImageValue = productImageRef.current.value;
        const productPriceValue = productPriceRef.current.value;
        const productConditionValue = productConditionRef.current.value;
        const productYearValue = productYearRef.current.value;
        const productFuelValue = productFuelRef.current.value;
        const productDoorsValue = productDoorsRef.current.value;
        const productColorValue = productColorRef.current.value;
        const productMileageValue = productMileageRef.current.value;
        const productEngineValue = productEngineRef.current.value;
        const productTransmissionValue = productTransmissionRef.current.value;
        const productDescriptionValue = productDescriptionRef.current.value;

        const productData = { name: productTitleValue, image: productImageValue, price: productPriceValue, condition: productConditionValue, year: productYearValue, fuel: productFuelValue, doors: productDoorsValue, color: productColorValue, mileage: productMileageValue, engine: productEngineValue, transmission: productTransmissionValue, description: productDescriptionValue }

        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            body: JSON.stringify(productData),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.insertedId) {
                    alert('Product Added Successfully')
                    productTitleRef.current.value = ''
                    productImageRef.current.value = ''
                    productPriceRef.current.value = ''
                    productConditionRef.current.value = ''
                    productYearRef.current.value = ''
                    productFuelRef.current.value = ''
                    productDoorsRef.current.value = ''
                    productColorRef.current.value = ''
                    productMileageRef.current.value = ''
                    productEngineRef.current.value = ''
                    productTransmissionRef.current.value = ''
                    productDescriptionRef.current.value = ''
                }
            });

    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 fw-bold fs-3">
                    <h2>Add Product</h2>
                </div>
            </div>
            <div className="row m-2 ">
                <div className="col-md-10 py-3 px-4 shadow">
                    <form onSubmit={handleProductSubmit}>
                        <div className="row">
                            <div className="col-md-5">
                                <div className="mb-2">
                                    <label for="exampleFormControlInput1" className="form-label">Product Title</label>
                                    <input ref={productTitleRef} type="text" className="form-control" placeholder='Enter title' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput2" className="form-label">Product Image</label>
                                    <input ref={productImageRef} type="text" className="form-control" placeholder='Enter Image URL' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput3" className="form-label">Price</label>
                                    <input ref={productPriceRef} type="number" className="form-control" placeholder='Enter Price' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput4" className="form-label">Condition</label>
                                    <input ref={productConditionRef} type="text" className="form-control" placeholder='Enter Condition' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput5" className="form-label">Year</label>
                                    <input ref={productYearRef} type="number" className="form-control" placeholder='Enter Year' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput5" className="form-label">Fuel</label>
                                    <input ref={productFuelRef} type="text" className="form-control" placeholder='Enter Fuel' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput6" className="form-label">Doors</label>
                                    <input ref={productDoorsRef} type="number" className="form-control" placeholder='Enter Doors' />
                                </div>

                            </div>
                            <div className="col-md-6 ">
                                <div className="mb-2">
                                    <label for="exampleFormControlInput7" className="form-label">Color</label>
                                    <input ref={productColorRef} type="text" className="form-control" placeholder='Enter Color' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput8" className="form-label">Mileage</label>
                                    <input ref={productMileageRef} type="text" className="form-control" placeholder='Enter Mileage' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput9" className="form-label">Engine</label>
                                    <input ref={productEngineRef} type="text" className="form-control" placeholder='Enter Engine' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlInput10" className="form-label">Transmission</label>
                                    <input ref={productTransmissionRef} type="text" className="form-control" placeholder='Enter Transmission' />
                                </div>
                                <div className="mb-2">
                                    <label for="exampleFormControlTextarea1" className="form-label">Description</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" ref={productDescriptionRef} placeholder='Enter Description'></textarea>
                                </div>
                            </div>
                        </div>
                        <button className='btn  addProduct-button' type="submit">Submit</button>
                    </form>
                </div>



            </div>
        </div>
    );
};

export default AddProduct;